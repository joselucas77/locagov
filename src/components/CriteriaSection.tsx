import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { criteria } from "@/data/criteria";

export default function CriteriaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="criterios" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Avaliação</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Critérios de Avaliação
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Entenda o que a Prefeitura prioriza na seleção dos imóveis para locação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {criteria.map((item, i) => (
            <div
              key={item.title}
              className={`bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <item.icon className="text-primary" size={32} />
                <span className={`${item.badgeColor} text-xs font-bold px-3 py-1 rounded-full`}>
                  {item.badge}
                </span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                <CheckCircle2 size={16} /> Avaliado pela comissão técnica
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
