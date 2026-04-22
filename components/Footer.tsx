export default function Footer() {
  return (
    <footer className="border-t border-[#1e2a1e] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-[#86efac] font-semibold text-base tracking-tight">
            WeedWatch<span className="text-[#f0faf0]"> AI</span>
          </span>
          <span className="text-xs text-[#8aab8a]">
            Crop Health for the 21st Century
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@weedwatch.ai"
            className="text-sm text-[#8aab8a] hover:text-[#86efac] transition-colors duration-200"
          >
            hello@weedwatch.ai
          </a>
        </div>

        <p className="text-xs text-[#8aab8a]/50">
          &copy; {new Date().getFullYear()} WeedWatch AI
        </p>
      </div>
    </footer>
  );
}
