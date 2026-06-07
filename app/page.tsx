import HeroSection from "@/components/hero-section";
import HeroSectionOld from "@/components/hero-section-old";

export default function Home() {
  return (
    <main>
      {/* <HeroSectionOld /> */}
      <HeroSection />
      <section className="h-[2000px] bg-red-50 w-screen" />
    </main>
  );
}
