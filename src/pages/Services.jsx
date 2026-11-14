import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { services } from "../data/content.js";

export default function Services() {
  return (
    <>
      <PageHeader
        label="What I do"
        title="Services"
        text="From database schema to production deployment, here’s how I can help build and scale your software products."
      />
      <Section>
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {services.map(([number, title, text]) => (
            <ServiceCard key={number} number={number} title={title} text={text} />
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
