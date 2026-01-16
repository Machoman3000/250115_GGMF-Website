export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* System identifier */}
        <span className="font-mono text-sm text-white/50 tracking-wider">
          {"////// GG.SYSTEM v1.0 //////"}
        </span>

        {/* Copyright */}
        <span className="font-mono text-xs text-white/30">
          &copy; {currentYear} GG. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
