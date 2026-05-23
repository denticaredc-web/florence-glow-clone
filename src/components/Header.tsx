import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 flex items-center justify-between h-20 lg:h-28">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="Florence Aesthetics by Dr Kinza Nasir"
            width={1024}
            height={1024}
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105 [image-rendering:auto]"
            style={{ imageRendering: "auto" }}
          />
        </Link>


        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors underline-grow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+923098589191"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="size-4" /> 0309 8589191
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex shine items-center justify-center gradient-luxe text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover-glow"
          >
            Book Appointment
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/85 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="gradient-luxe text-primary-foreground px-5 py-3 rounded-full text-center font-semibold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
