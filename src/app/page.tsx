import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { Fixtures } from "@/components/home/Fixtures";
import { UpdateCards } from "@/components/home/UpdateCards";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Fixtures />
      <UpdateCards />
    </>
  );
}
