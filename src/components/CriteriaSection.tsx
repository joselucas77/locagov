import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { criteria } from "../data/criteria";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export default function CriteriaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="criterios" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="text-accent border-accent/30 uppercase tracking-wider px-3 py-1"
          >
            Avaliação
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            Critérios de Avaliação
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Entenda o que a Prefeitura prioriza na seleção dos imóveis para
            locação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {criteria.map((item, i) => (
            <Card
              key={item.title}
              className={`bg-card rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-all duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <item.icon className="text-primary" size={32} />
                {/* Badge do shadcn com cores dinâmicas do seu array de dados */}
                <Badge className={`${item.badgeColor} border-none font-bold`}>
                  {item.badge}
                </Badge>
              </CardHeader>

              <CardContent>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold">
                  <CheckCircle2 size={14} />
                  <span>Avaliado pela comissão técnica</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
