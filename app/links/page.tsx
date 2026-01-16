import { Navigation, Footer } from "@/components/layout";

interface Link {
  title: string;
  description: string;
  href: string;
}

interface LinkCategory {
  name: string;
  links: Link[];
}

const linkCategories: LinkCategory[] = [
  {
    name: "RESOURCES",
    links: [
      {
        title: "Documentation",
        description: "Technical guides and API references",
        href: "https://example.com/docs",
      },
      {
        title: "Learning Hub",
        description: "Tutorials and educational content",
        href: "https://example.com/learn",
      },
      {
        title: "Community Forum",
        description: "Connect with other developers",
        href: "https://example.com/forum",
      },
    ],
  },
  {
    name: "TOOLS",
    links: [
      {
        title: "Code Editor",
        description: "Browser-based development environment",
        href: "https://example.com/editor",
      },
      {
        title: "Design System",
        description: "Component library and style guide",
        href: "https://example.com/design",
      },
      {
        title: "CLI Tools",
        description: "Command line utilities and scripts",
        href: "https://example.com/cli",
      },
    ],
  },
  {
    name: "PROJECTS",
    links: [
      {
        title: "Open Source",
        description: "Public repositories and contributions",
        href: "https://github.com",
      },
      {
        title: "Experiments",
        description: "Prototypes and proof of concepts",
        href: "https://example.com/experiments",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          {/* Page Title */}
          <h1 className="font-mono text-3xl font-bold tracking-wider mb-12">
            LINKS
          </h1>

          {/* Link Categories */}
          <div className="space-y-10">
            {linkCategories.map((category) => (
              <section key={category.name}>
                {/* Category Header */}
                <h2 className="font-mono text-sm text-white/50 tracking-wider mb-4">
                  {category.name}
                </h2>

                {/* Links */}
                <div className="space-y-3">
                  {category.links.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border border-white/10 p-4 hover:border-cyan-400 transition-colors group"
                    >
                      <span className="font-mono">
                        <span className="font-bold group-hover:text-cyan-400 transition-colors">
                          {link.title}
                        </span>
                        <span className="text-white/50 mx-2">-&gt;</span>
                        <span className="text-white/70">{link.description}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
