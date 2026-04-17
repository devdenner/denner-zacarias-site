import AboutSection from "@/components/home/AboutSection";
import FeaturedLinks from "@/components/home/FeaturedLinks";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import CurrentHighlight from "@/components/home/CurrentHighlight";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CurrentHighlight />
        <AboutSection />
        <FeaturedLinks />
        <FinalCTA />
      </main>
    </>
  );
}
