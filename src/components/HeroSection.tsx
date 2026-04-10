import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(45_85%_55%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(0_72%_45%/0.1),transparent_50%)]" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Pré-Lançamento Oficial
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-up-delay-1">
            Alugue seu imóvel para a{" "}
            <span className="text-gradient-gold">Prefeitura</span> com{" "}
            <span className="text-gradient-gold">segurança</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl mx-auto animate-fade-up-delay-2">
            Cadastre seu imóvel no programa oficial de locação da Prefeitura de Aracaju.
            Renda garantida, contratos seguros e impacto social para a cidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <a
              href="#cadastro"
              className="gradient-gold text-secondary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              Fazer Pré-Cadastro
            </a>
            <a
              href="#vantagens"
              className="glass text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#vantagens" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
