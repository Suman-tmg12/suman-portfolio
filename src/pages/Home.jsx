import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Marquee from "../components/Marquee.jsx";
import Section from "../components/Section.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Button from "../components/Button.jsx";
import { services, projects, quotes } from "../data/content.js";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />

      <Section>
        <SectionHeading label="What I do" title="Services" />
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {services.slice(0, 3).map(([number, title, text]) => (
            <ServiceCard key={number} number={number} title={title} text={text} />
          ))}
        </div>
        <Button to="/services" variant="outline" className="mt-10">All services →</Button>
      </Section>

      <Section light>
        <SectionHeading label="Selected work" title="Projects" />
        <div className="grid gap-px border border-neutral-300 bg-neutral-300 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>
        <Button to="/work" variant="dark" className="mt-10">All projects →</Button>
      </Section>

      <Section>
        <SectionHeading label="Kind words" title="Testimonials" />
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {quotes.map((q) => <TestimonialCard key={q.name} {...q} />)}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
