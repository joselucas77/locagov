import { ShieldCheck } from "lucide-react";
import { institutionalLinks, contactInfo } from "@/data/footerLinks";

export default function Footer() {
  return (
    <footer className="gradient-navy py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://www.aracaju.se.gov.br/userfiles/noticia_imagens/200903/37297/489px_brasao_aracaju_svg.png"
                alt="Brasão de Aracaju"
                className="h-12 w-12 object-contain"
              />
              <span className="font-heading font-bold text-primary-foreground text-sm leading-tight">
                Prefeitura de Aracaju<br />
                <span className="text-primary-foreground/60 text-xs font-normal">Programa de Locação de Imóveis</span>
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm">
              Plataforma oficial de pré-lançamento para cadastro de imóveis destinados à locação municipal.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Links Institucionais</h4>
            <div className="space-y-2 text-sm">
              {institutionalLinks.map((l) => (
                <a key={l} href="#" className="block text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">Contato</h4>
            <div className="space-y-2 text-sm text-primary-foreground/50">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.neighborhood}</p>
              <p>{contactInfo.cep}</p>
              <p>{contactInfo.phone}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Prefeitura Municipal de Aracaju. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-primary-foreground/60">
            <ShieldCheck size={14} />
            <span>Portal Oficial de Pré-Lançamento</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
