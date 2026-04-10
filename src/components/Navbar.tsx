import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-navbar ${
        scrolled ? "py-2 shadow-md" : "py-3"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="https://www.aracaju.se.gov.br/userfiles/noticia_imagens/200903/37297/489px_brasao_aracaju_svg.png"
            alt="Brasão de Aracaju"
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading font-bold text-primary text-sm md:text-base leading-tight">
            Prefeitura de Aracaju<br />
            <span className="text-xs font-medium text-muted-foreground">Programa de Locação</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cadastro"
            className="gradient-navy text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Pré-Cadastro
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-primary"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-primary py-2 border-b border-border/50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cadastro"
            onClick={() => setOpen(false)}
            className="gradient-navy text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
          >
            Pré-Cadastro
          </a>
        </div>
      )}
    </nav>
  );
}
