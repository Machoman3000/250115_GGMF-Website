import { Navigation, Footer } from "@/components/layout";

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white pt-24 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Page Title */}
          <h1 className="font-mono text-3xl font-bold tracking-wider mb-12">
            ABOUT
          </h1>

          {/* Bio Section */}
          <section className="mb-12">
            <p className="font-mono text-white/60">
              [ Bio placeholder - Add your story here ]
            </p>
          </section>

          {/* Currently Section */}
          <section className="mb-12 border-l-2 border-accent-cyan pl-6">
            <h2 className="font-mono text-lg font-bold tracking-wider mb-4 text-accent-cyan">
              CURRENTLY
            </h2>
            <p className="font-mono text-white/80">
              [ What you're working on, learning, or building ]
            </p>
          </section>

          {/* Interests Section */}
          <section className="border-l-2 border-white/20 pl-6">
            <h2 className="font-mono text-lg font-bold tracking-wider mb-4">
              INTERESTS
            </h2>
            <ul className="font-mono text-white/80 space-y-2">
              <li>[ Interest placeholder 1 ]</li>
              <li>[ Interest placeholder 2 ]</li>
              <li>[ Interest placeholder 3 ]</li>
              <li>[ Interest placeholder 4 ]</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
