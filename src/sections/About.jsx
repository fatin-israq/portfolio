import { Brain, Code2, Layers, Layout, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code with clear structure and consistent conventions.",
  },
  {
    icon: Layout,
    title: "Modern Frontend Development",
    description:
      "Building responsive, accessible UIs using HTML, CSS, Tailwind, and React.",
  },
  {
    icon: Layers,
    title: "Component-Based Thinking",
    description:
      "Designing reusable components and managing UI logic with clarity and separation of concerns.",
  },
  {
    icon: Server,
    title: "Backend Foundations",
    description:
      "Working with Node.js, Express, and basic SQL to build APIs and data-driven features.",
  },
  {
    icon: Brain,
    title: "Strong Learning Curve",
    description:
      "Quickly picking up new tools and concepts through hands-on projects and experimentation.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science undergraduate, based in <b>Dhaka</b>,
                with a strong foundation in frontend development and a growing
                interest in building complete,production-ready software systems.
              </p>
              <p>
                My work primarily focuses on modern web technologies such as
                HTML, CSS, Tailwind, JavaScript, and React, where I enjoy
                translating ideas into clean, responsive, and maintainable user
                interfaces.
              </p>
              <p>
                Alongside frontend development, I'm actively expanding into
                backend engineering and AI-driven systems using Node.js, SQL,
                and Python, with the long-term goal of becoming an AI-focused
                software engineer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build reliable, well-structured software with
                clean interfaces—focusing on clarity, maintainability, and
                real-world usefulness."
              </p>
            </div>
          </div>
          {/* Right Column  */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default About;
