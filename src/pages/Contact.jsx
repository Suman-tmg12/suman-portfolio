import PageHeader from "../components/PageHeader.jsx";
import Section from "../components/Section.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Let’s talk."
        text="Tell me about your project or opportunity and I’ll reply within two working days."
      />
      <Section className="bg-panel">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-4 text-neutral-300">
            <p className="text-sm uppercase tracking-[.15em] text-brand">Email</p>
            <p className="text-2xl text-white">tamangrani534@gmail.com</p>
            <p className="pt-6 text-sm uppercase tracking-[.15em] text-brand">Elsewhere</p>
            <div className="flex flex-wrap items-center gap-2 text-white">
              <a 
                href="https://github.com/Suman-tmg12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                GitHub
              </a>
              <span>·</span>
              <a 
                href="https://www.linkedin.com/in/suman-tamang-dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a 
                href="https://wa.me/9779747808016" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}