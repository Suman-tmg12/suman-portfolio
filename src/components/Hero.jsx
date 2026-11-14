import Button from "./Button.jsx";
import Portrait from "./Portrait.jsx";

const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <header className="overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-5 animate-fade-up text-sm uppercase tracking-[.15em] text-brand" style={delay(100)}>
            Software developer · Available for work
          </p>
          <h1
            className="mb-7 animate-fade-up text-[clamp(3rem,9vw,8rem)] font-bold leading-[.92] tracking-tighter"
            style={delay(250)}
          >
            Builds that<br />feels <span className="text-brand">alive.</span>
          </h1>
          <p className="max-w-md animate-fade-up text-lg leading-relaxed text-neutral-300" style={delay(400)}>
            I’m Suman, a software engineer crafting robust systems and clean code for startups and brands that want to scale
          </p>
          <div className="mb-14 mt-7 flex animate-fade-up flex-wrap gap-3" style={delay(550)}>
            <Button to="/work">View my work</Button>
            <Button to="/contact" variant="outline">Let’s talk</Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md animate-fade-up md:ml-auto" style={delay(500)}>
         <Portrait src="/images/profile-pic.png" className="block w-full animate-float" />
        </div>
      </div>
    </header>
  );
}