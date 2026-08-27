import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { CoinTossCaseStudy } from "@/components/sections/CoinTossCaseStudy";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Strengths } from "@/components/sections/Strengths";
import { Contact } from "@/components/sections/Contact";

/**
 * Home Page
 * Intentionally thin Server Component composing all portfolio sections.
 * All sections render typed data directly from @/data.
 * Client Components are isolated inside specific interaction boundaries.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <CoinTossCaseStudy />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Strengths />
      <Contact />
    </>
  );
}
