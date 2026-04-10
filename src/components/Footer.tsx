import { ShieldCheck } from "lucide-react";
import { institutionalLinks, contactInfo } from "../data/footerLinks";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="gradient-navy py-12 text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Coluna 1: Logo e Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://www.aracaju.se.gov.br/userfiles/noticia_imagens/200903/37297/489px_brasao_aracaju_svg.png"
                alt="Brasão de Aracaju"
                className="h-14 w-14 object-contain brightness-110"
              />
              <span className="font-heading font-bold text-sm md:text-base leading-tight">
                Prefeitura de Aracaju
                <br />
                <span className="text-primary-foreground/60 text-xs font-normal">
                  Programa de Locação de Imóveis
                </span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
              Plataforma oficial de pré-lançamento para cadastro de imóveis
              destinados à locação municipal, visando agilidade e transparência.
            </p>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/90">
              Links Institucionais
            </h4>
            <nav className="flex flex-col gap-3 text-sm">
              {institutionalLinks.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-primary-foreground/50 hover:text-white transition-colors hover:translate-x-1 duration-200"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/90">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/50 italic">
              <p className="not-italic">{contactInfo.address}</p>
              <p>{contactInfo.neighborhood}</p>
              <p>CEP: {contactInfo.cep}</p>
              <p className="not-italic font-medium text-primary-foreground/70 mt-4">
                {contactInfo.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Linha Divisória com Shadcn */}
        <Separator className="bg-primary-foreground/10" />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] md:text-xs text-primary-foreground/30 uppercase tracking-tighter">
              © 2026 Prefeitura Municipal de Aracaju. Desenvolvido para o
              Programa de Locação.
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-primary-foreground/60">
            <ShieldCheck size={14} className="text-gold" />
            <span className="font-medium">
              Portal Oficial de Pré-Lançamento
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
