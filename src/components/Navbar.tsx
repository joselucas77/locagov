import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { navLinks } from "../data/NavLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            Prefeitura de Aracaju
            <br />
            <span className="text-xs font-medium text-muted-foreground">
              Programa de Locação
            </span>
          </span>
        </a>

        {/* Desktop Links */}
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

          {/* CTA Desktop */}
          <Button
            asChild
            className="gradient-navy text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <a href="#cadastro">Pré-Cadastro</a>
          </Button>
        </div>

        {/* Mobile Menu com Sheet do shadcn */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary hover:bg-primary/10"
              aria-label="Abrir Menu"
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>

          {/* Aplicamos a classe glass aqui para manter a identidade visual */}
          <SheetContent
            side="right"
            className="glass w-[300px] border-l border-border/20 flex flex-col pt-16"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-primary py-3 border-b border-border/50 last:border-0 transition-colors"
                >
                  {l.label}
                </a>
              ))}

              {/* CTA Mobile */}
              <Button
                asChild
                className="gradient-navy mt-6 w-full text-primary-foreground h-12 rounded-lg text-base font-semibold"
              >
                <a href="#cadastro" onClick={() => setOpen(false)}>
                  Pré-Cadastro
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
