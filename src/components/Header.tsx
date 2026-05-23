import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "glass-header" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="Florence Aesthetics by Dr Kinza Nasir"
            width={1024}
            height={1024}
            className={`w-auto object-contain transition-all duration-500 group-hover:scale-[1.04] ${
              scrolled ? "h-12 sm:h-14 lg:h-16" : "h-14 sm:h-16 lg:h-20"
            }`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[0.84rem] tracking-[0.08em] uppercase font-medium text-foreground/75 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="tel:+923098589191"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            <Phone className="size-4" />
            <span className="tracking-wide">0309 8589191</span>
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex btn-luxe items-center justify-center px-6 py-2.5 text-[0.8rem] font-semibold tracking-[0.08em] uppercase"
          >
            Book Appointment
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-border/70 text-foreground bg-background/60 backdrop-blur-md hover:text-primary hover:border-primary/40 transition-colors ${open ? "text-primary" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`hamburger ${open ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu lg:hidden glass-header border-t border-border/60">
          <div className="px-5 py-6 flex flex-col gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
                className="mobile-link py-3 px-3 rounded-xl text-foreground/85 hover:text-primary hover:bg-secondary/60 text-base font-medium tracking-wide transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+923098589191"
              onClick={() => setOpen(false)}
              className="mobile-link mt-2 flex items-center justify-center gap-2 py-3 text-sm text-foreground/70 hover:text-primary"
              style={{ animationDelay: `${links.length * 50}ms` }}
            >
              <Phone className="size-4" /> 0309 8589191
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mobile-link btn-luxe mt-3 px-6 py-3.5 text-center text-sm font-semibold tracking-[0.08em] uppercase"
              style={{ animationDelay: `${(links.length + 1) * 50}ms` }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
