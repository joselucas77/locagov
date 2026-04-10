import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { advantages } from "@/data/advantages";

export default function AdvantagesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="vantagens" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Por que participar</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Vantagens do Programa
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((card, i) => (
            <div
              key={card.title}
              className={`glass rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform duration-300 ${
                isVisible ? `animate-fade-up` : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`${card.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <card.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
