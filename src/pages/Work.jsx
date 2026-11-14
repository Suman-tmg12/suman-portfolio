import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { projects } from "../data/content.js";

export default function Work() {
  return (
    <>
      <PageHeader
        label="Selected work"
        title="Projects"
        text="A look at recent web applications and platforms I’ve engineered for startups and growing brands."
      />
      <Section light>
        <div className="grid gap-px border border-neutral-300 bg-neutral-300 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.name} {...p} />)}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
