import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-mono text-3xl font-bold tracking-wider mb-12">
            BLOG
          </h1>

          <div className="border border-dashed border-white/20 p-8 text-center">
            <p className="font-mono text-white/60">[ No posts yet ]</p>
            <p className="mt-2 text-sm text-white/40">Coming soon...</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
