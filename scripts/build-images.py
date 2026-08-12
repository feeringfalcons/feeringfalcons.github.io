"""
Regenerates the derived hero images and the OpenGraph share card.

Run only when assets/player.png or public/logo.png change — the outputs are
committed to the repo, because the site is a static export deployed to GitHub
Pages and there is no image pipeline at build or request time
(next.config.ts sets images.unoptimized).

    pip install pillow
    python scripts/build-images.py

Outputs (all into public/):
    player-{640,1024,1536}.webp   responsive hero sources
    player-fallback.jpg           for the ~3% of browsers without WebP
    og-image.jpg                  1200x630 social share card
"""

import os
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
# Masters live outside public/ so the multi-MB originals are not deployed.
ASSETS = ROOT / "assets"
RED = (196, 30, 58)
CHARCOAL = (26, 26, 26)
WHITE = (255, 255, 255)
BEBAS_URL = "https://fonts.gstatic.com/s/bebasneue/v16/JTUSjIg69CK48gW7PXooxW4.ttf"


def hero_variants() -> None:
    src = Image.open(ASSETS / "player.png").convert("RGB")
    for width in (640, 1024, 1536):
        height = round(src.height * width / src.width)
        out = PUBLIC / f"player-{width}.webp"
        src.resize((width, height), Image.LANCZOS).save(
            out, "WEBP", quality=72, method=6
        )
        print(f"  {out.name}: {width}x{height}, {out.stat().st_size / 1024:.0f} KB")

    out = PUBLIC / "player-fallback.jpg"
    src.resize((1024, round(src.height * 1024 / src.width)), Image.LANCZOS).save(
        out, "JPEG", quality=70, optimize=True, progressive=True
    )
    print(f"  {out.name}: {out.stat().st_size / 1024:.0f} KB")


def _bebas() -> Path:
    cached = Path(__file__).resolve().parent / ".bebas-neue.ttf"
    if not cached.exists():
        urllib.request.urlretrieve(BEBAS_URL, cached)
    return cached


def og_card() -> None:
    font_path = str(_bebas())
    w, h = 1200, 630
    card = Image.new("RGB", (w, h), RED)

    # Kit photo, cover-cropped and blended into the red — same treatment as the hero.
    kit = Image.open(ASSETS / "player.png").convert("RGB")
    scale = max(w / kit.width, h / kit.height)
    kit = kit.resize((round(kit.width * scale), round(kit.height * scale)), Image.LANCZOS)
    left, top = (kit.width - w) // 2, (kit.height - h) // 2
    card = Image.blend(card, kit.crop((left, top, left + w, top + h)), 0.34)

    # Solid red on the left fading right, so the headline sits on a clean field.
    scrim = Image.new("L", (w, 1))
    for x in range(w):
        scrim.putpixel((x, 0), 255 if x < 430 else max(0, int(255 * (1 - (x - 430) / 620))))
    card = Image.composite(Image.new("RGB", (w, h), RED), card, scrim.resize((w, h)))

    draw = ImageDraw.Draw(card)
    draw.polygon([(0, h), (w, h), (w, h - 64), (0, h - 8)], fill=CHARCOAL)  # wing motif

    logo = Image.open(PUBLIC / "logo.png").convert("RGBA")
    logo = logo.resize((round(logo.width * 300 / logo.height), 300), Image.LANCZOS)
    card.paste(logo, (88, 150), logo)

    x = 88 + logo.width + 72
    big = ImageFont.truetype(font_path, 150)
    sub = ImageFont.truetype(font_path, 44)
    small = ImageFont.truetype(font_path, 34)

    shadow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.text((x, 150), "TAKE", font=big, fill=(0, 0, 0, 90))
    sdraw.text((x, 268), "FLIGHT", font=big, fill=(0, 0, 0, 90))
    card = Image.alpha_composite(
        card.convert("RGBA"), shadow.filter(ImageFilter.GaussianBlur(10))
    ).convert("RGB")

    draw = ImageDraw.Draw(card)
    draw.text((x, 150), "TAKE", font=big, fill=WHITE)
    draw.text((x, 268), "FLIGHT", font=big, fill=WHITE)
    draw.text((x, 412), "FEERING FALCONS YOUTH FC", font=sub, fill=WHITE)
    draw.text((x, 462), "EST. 1978  ·  ELM FARM, MARKS TEY", font=small, fill=(255, 214, 221))

    out = PUBLIC / "og-image.jpg"
    card.save(out, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"  {out.name}: {out.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    print("hero variants:")
    hero_variants()
    print("share card:")
    og_card()
    size = os.path.getsize(ASSETS / "player.png") / 1024 / 1024
    print(f"\nmaster assets/player.png is {size:.2f} MB and lives outside public/, "
          "so it is never deployed.")
