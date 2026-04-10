import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { advantages } from "../data/advantages";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export default function AdvantagesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          {/* Substituído span por Badge */}
          <Badge
            variant="outline"
            className="text-gold border-gold/30 uppercase tracking-wider px-3 py-1"
          >
            Por que participar
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            Vantagens do Programa
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((card, i) => (
            <Card
              key={card.title}
              className={`glass border-none rounded-2xl text-center hover:scale-[1.02] transition-transform duration-300 ${
                isVisible ? `animate-fade-up` : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardHeader className="pt-8">
                <div
                  className={`${card.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg`}
                >
                  <card.icon className="text-primary-foreground" size={28} />
                </div>
                <CardTitle className="font-heading text-xl font-bold text-foreground">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
