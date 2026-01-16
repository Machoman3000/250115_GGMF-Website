import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Neural Interface Dashboard",
    description:
      "Real-time monitoring system for biometric data streams. Features adaptive visualizations and predictive analytics for cybernetic implant performance.",
    tags: ["TypeScript", "React", "WebSocket", "D3.js"],
  },
  {
    title: "Decentralized Identity Protocol",
    description:
      "Zero-knowledge proof authentication system for the decentralized web. Enables anonymous verification without exposing personal data.",
    tags: ["Rust", "Solidity", "ZK-SNARKs", "IPFS"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page Title */}
          <h1 className="font-mono text-3xl font-bold tracking-wider mb-12">
            PROJECTS
          </h1>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border border-white/20 p-6 transition-colors hover:border-cyan-400"
              >
                <h2 className="font-bold text-lg mb-3 transition-colors hover:text-cyan-400">
                  {project.title}
                </h2>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-white/30 px-2 py-1 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
