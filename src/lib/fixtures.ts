import type { ClubTeam } from "@/lib/constants";

/**
 * Turning FA Full-Time's injected HTML table into something we can render.
 *
 * The table has no classes or ids to hook onto, so everything here works off
 * its shape. Two row types:
 *   date group — the only row whose cell carries a colspan, e.g.
 *                "Sun 06 Sept 2026 06:00"
 *   fixture    — five cells: [competition] [home] ["v"] [away] [venue]
 *
 * Everything below is deliberately defensive: this is third-party markup that
 * can change without notice, and a parse failure should degrade to "no
 * fixtures found" rather than throw.
 */

export type Fixture = {
  /** Sortable, date only — kick-off is frequently unknown. */
  dateISO: string;
  /** "SUN 06 SEPT" */
  dateLabel: string;
  /** "11:30", or null when the league hasn't set it yet. */
  kickoff: string | null;
  kickoffTbc: boolean;
  home: string;
  away: string;
  /** Raw venue text. Often unusable — see describeVenue(). */
  venueRaw: string;
  competition: string | null;
};

export type TeamFixture = Fixture & {
  isHome: boolean;
  opponent: string;
};

// Full-Time writes both "Sep" and "Sept". Explicit map rather than Date.parse,
// which is implementation-defined for strings like "Sun 06 Sept 2026".
const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12,
};

const MONTH_LABELS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC",
];

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

/**
 * Both leagues use 06:00 to mean "kick-off not set". Times are only published
 * the Sunday before a match, so nearly every future fixture carries it.
 * Rendering it literally would tell parents to turn up at 6am.
 */
const PLACEHOLDER_KICKOFF = "06:00";

function parseDateHeader(
  text: string,
): { dateISO: string; dateLabel: string; kickoff: string | null } | null {
  const cleaned = text.replace(/\s+/g, " ").trim();
  const m = cleaned.match(
    /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})(?:\s+(\d{1,2}:\d{2}))?/,
  );
  if (!m) return null;

  const day = Number(m[1]);
  const month = MONTHS[m[2].toLowerCase()];
  const year = Number(m[3]);
  if (!month || !day || !year) return null;

  const pad = (n: number) => String(n).padStart(2, "0");
  const dateISO = `${year}-${pad(month)}-${pad(day)}`;

  // Build the weekday from the date itself rather than trusting the feed's
  // prefix. Noon UTC avoids any DST edge landing on the previous day.
  const d = new Date(Date.UTC(year, month - 1, day, 12));
  const dateLabel = `${DAY_LABELS[d.getUTCDay()]} ${pad(day)} ${MONTH_LABELS[month - 1]}`;

  const raw = m[4] ?? null;
  const kickoff = !raw || raw === PLACEHOLDER_KICKOFF ? null : raw;

  return { dateISO, dateLabel, kickoff };
}

const cellText = (el: Element) =>
  (el.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();

/** Parses one Full-Time container into fixtures, in feed order. */
export function parseFixtures(root: ParentNode): Fixture[] {
  const out: Fixture[] = [];
  let current: ReturnType<typeof parseDateHeader> = null;

  root.querySelectorAll("tr").forEach((row) => {
    const cells = Array.from(row.querySelectorAll("td"));

    const grouped = cells.find((c) => c.hasAttribute("colspan"));
    if (cells.length === 1 && grouped) {
      const parsed = parseDateHeader(cellText(grouped));
      if (parsed) current = parsed;
      return;
    }

    if (cells.length < 4 || !current) return;

    const home = cellText(cells[1]);
    const away = cellText(cells[3]);
    if (!home || !away) return;

    out.push({
      dateISO: current.dateISO,
      dateLabel: current.dateLabel,
      kickoff: current.kickoff,
      kickoffTbc: current.kickoff === null,
      home,
      away,
      venueRaw: cells[4] ? cellText(cells[4]) : "",
      competition: cellText(cells[0]).replace(/:$/, "") || null,
    });
  });

  return out;
}

/**
 * Does this Full-Time team string refer to the given club team?
 *
 * Matches on age number and colour, not the full string. `\bU(\d+)\b` is what
 * stops "U1" matching "U11" — a plain substring test would.
 */
export function matchesTeam(fullTimeName: string, team: ClubTeam): boolean {
  if (team.age === null) return false;
  const s = fullTimeName.toLowerCase();
  if (!s.includes("feering")) return false;

  const age = s.match(/\bu\s?(\d{1,2})\b/);
  if (!age || Number(age[1]) !== team.age) return false;

  if (!team.variant) return true;
  return new RegExp(`\\b${team.variant}\\b`).test(s);
}

/** Fixtures involving one team, annotated with home/away and the opponent. */
export function fixturesForTeam(
  fixtures: Fixture[],
  team: ClubTeam,
): TeamFixture[] {
  const out: TeamFixture[] = [];
  for (const f of fixtures) {
    const isHome = matchesTeam(f.home, team);
    const isAway = matchesTeam(f.away, team);
    if (!isHome && !isAway) continue;
    out.push({ ...f, isHome, opponent: isHome ? f.away : f.home });
  }
  return out.sort((a, b) => a.dateISO.localeCompare(b.dateISO));
}

/**
 * Fixtures from today onwards.
 *
 * Compared by date only, on purpose. Most kick-offs are unknown, so a fixture
 * stays "upcoming" for the whole of its day — otherwise a match would drop off
 * the page at 6am on the morning of the game, which is exactly when parents
 * are looking at it.
 */
export function upcoming<T extends Fixture>(fixtures: T[], now = new Date()): T[] {
  const pad = (n: number) => String(n).padStart(2, "0");
  const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  return fixtures.filter((f) => f.dateISO >= today);
}

/** "TODAY" / "TOMORROW" / null, for a fixture's date. */
export function relativeDay(dateISO: string, now = new Date()): string | null {
  const pad = (n: number) => String(n).padStart(2, "0");
  const at = (d: Date) =>
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  if (dateISO === at(now)) return "TODAY";
  const t = new Date(now);
  t.setDate(t.getDate() + 1);
  return dateISO === at(t) ? "TOMORROW" : null;
}

export type ClubFixture = TeamFixture & { team: ClubTeam };

/**
 * Every fixture in a feed that involves one of our teams, tagged with which.
 *
 * A club-wide feed is one league's whole programme for the club, so this is
 * mostly a filter, but it also resolves "Feering Falcons Y U13 Raptors" back to
 * the U13 Raptors entry in TEAMS so we can label rows with a short name.
 */
export function clubFixtures(
  fixtures: Fixture[],
  teams: ClubTeam[],
): ClubFixture[] {
  const out: ClubFixture[] = [];
  for (const f of fixtures) {
    for (const team of teams) {
      const isHome = matchesTeam(f.home, team);
      const isAway = matchesTeam(f.away, team);
      if (!isHome && !isAway) continue;
      out.push({
        ...f,
        team,
        isHome,
        opponent: isHome ? f.away : f.home,
      });
      break;
    }
  }
  return out;
}

/** Monday of the week a date falls in, as an ISO date. */
function weekStart(dateISO: string): string {
  const [y, m, d] = dateISO.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d, 12));
  // getUTCDay: 0 = Sunday. Shift so Monday starts the week, which keeps a
  // Saturday and Sunday pair together in one block.
  const offset = (dt.getUTCDay() + 6) % 7;
  dt.setUTCDate(dt.getUTCDate() - offset);
  return dt.toISOString().slice(0, 10);
}

export type FixtureWeek = {
  /** Monday of the week, ISO. */
  weekStart: string;
  fixtures: ClubFixture[];
  /** Distinct match dates in the week, ascending. */
  dates: string[];
};

/**
 * The next block of fixtures, grouped by week.
 *
 * Deliberately "the next week that has any", not "this coming weekend". The
 * season has real gaps — Christmas, Easter, cup weekends, pitches frozen off —
 * so a homepage that only ever looks at the imminent weekend would sit empty
 * for weeks at a time. Callers can compare weekStart against the current week
 * to decide whether to say "this weekend" or name the date.
 */
export function nextFixtureWeek(
  fixtures: ClubFixture[],
  now = new Date(),
): FixtureWeek | null {
  const future = upcoming(fixtures, now);
  if (!future.length) return null;

  const earliest = future.reduce(
    (min, f) => (f.dateISO < min ? f.dateISO : min),
    future[0].dateISO,
  );
  const target = weekStart(earliest);

  const inWeek = future
    .filter((f) => weekStart(f.dateISO) === target)
    .sort(
      (a, b) =>
        a.dateISO.localeCompare(b.dateISO) ||
        // Confirmed kick-offs first, in time order; TBC after them.
        (a.kickoff ?? "99:99").localeCompare(b.kickoff ?? "99:99") ||
        // Then youngest first. Sorting on the label would put U8 after U13.
        (a.team.age ?? 0) - (b.team.age ?? 0) ||
        a.team.label.localeCompare(b.team.label),
    );

  return {
    weekStart: target,
    fixtures: inWeek,
    dates: [...new Set(inWeek.map((f) => f.dateISO))],
  };
}

/** Is this week the one the given date sits in? */
export function isCurrentWeek(weekStartISO: string, now = new Date()): boolean {
  const pad = (n: number) => String(n).padStart(2, "0");
  const todayISO = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  return weekStart(todayISO) === weekStartISO;
}

export type VenueInfo =
  | { kind: "home" }
  | { kind: "away"; name: string }
  | { kind: "unknown" };

/**
 * What we can honestly say about where a game is.
 *
 * Home/away comes from which column our team is in — never from the venue
 * field, which is unreliable. The venue is frequently another Falcons team
 * name (presumably a pitch allocation), and reading that as a location would
 * be actively misleading, so it's suppressed rather than guessed at.
 */
export function describeVenue(f: TeamFixture): VenueInfo {
  if (f.isHome) return { kind: "home" };

  const v = f.venueRaw.trim();
  if (!v) return { kind: "unknown" };

  // An age marker is what separates the two things this column holds. Measured
  // across a full 155-fixture feed: 134 values carried a "U<n>" and were team
  // or pitch designations ("Feering Falcons Y U9 Blues", "Broomfield Youth U7
  // Broomfield"); the 21 without one were all real grounds ("NOTLEY GREEN",
  // "BROOMFIELD FOOTBALL CLUB"). Telling a parent to drive to a team name
  // would be worse than admitting we don't know.
  if (/\bU\s?\d{1,2}\b/i.test(v)) return { kind: "unknown" };

  return { kind: "away", name: v };
}
