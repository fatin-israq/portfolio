import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Auction Gallery",
    description:
      "A modern auction gallery web application built with React and Vite, featuring dynamic product listings and wishlist functionality.",
    image: "/projects/auction-gallery.png",
    tags: ["React", "JavaScript", "Tailwind"],
    link: "https://auction-gallery-2120.netlify.app/",
    github: "https://github.com/fatin-israq/auction-gallery",
  },
  {
    title: "Safar",
    description:
      "Your ultimate companion for safe, reliable, and convenient transportation solution.",
    image: "/projects/safar.png",
    tags: ["NodeJS", "JavaScript", "Tailwind", "MySQL"],
    link: "#",
    github: "https://github.com/fatin-israq/safar",
  },
  {
    title: "Rhythmify",
    description:
      "Rhythmify is a modern web application that allows users to stream music seamlessly.",
    image: "/projects/rhythmify.png",
    tags: ["JavaScript", "Vanilla CSS"],
    link: "#",
    github: "https://github.com/fatin-israq/rhythmify",
  },
  {
    title: "Rent N Repeat",
    description:
      "An e-commerce website where people can rent out their clothes or can rent from other people. ",
    image: "/projects/rent-n-repeat.png",
    tags: ["PHP", "HTML", "Vanilla CSS", "MySQL"],
    link: "http://www.rent-n-repeat.infy.uk/",
    github: "https://github.com/fatin-israq/rent-n-repeat",
  },
  {
    title: "Jump N Run",
    description:
      "Jump N Run is a 2D side-scrolling platformer game built using Python and Pygame. Players control a character who must avoid obstacles, jump over gaps, and survive as long as possible to score points.",
    image: "/projects/jump-n-run.gif",
    tags: ["Python", "Pygame"],
    link: "#",
    github: "https://github.com/fatin-israq/Jump_N_Run",
  },
  {
    title: "Bankify",
    description:
      "Bankify is a JavaFX-based banking application designed to provide client and admin functionalities in a streamlined and user-friendly interface.",
    image: "/projects/bankify.png",
    tags: ["Java", "JavaFX", "SQLite"],
    link: "#",
    github: "https://github.com/fatin-israq/Bankify",
  },
];

const Projects = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header  */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
            Projects that
            <span className="text-white font-serif italic font-normal">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid  */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, id) => (
            <div
              key={id}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(id + 1) * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links  */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content  */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-primary-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all cursor-pointer" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagId) => (
                    <span
                      key={tagId}
                      className="px-4 py-1 text-xs font-medium rounded-full bg-surface border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary/80 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA  */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
