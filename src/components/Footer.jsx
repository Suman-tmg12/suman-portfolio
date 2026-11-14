export default function Footer() {
  return (
    <footer className="border-t border-line py-7 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-6">
        <span>© 2026 Suman Tamang</span>
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/Suman-tmg12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a 
            href="https://www.linkedin.com/in/suman-tamang-dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a 
            href="https://wa.me/9779747808016" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}