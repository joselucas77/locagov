import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { propertyTypes } from "../data/propertyTypes";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { AspectRatio } from "./ui/aspect-ratio";

export default function PropertiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="imoveis" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="text-gold border-gold/30 uppercase tracking-wider px-3 py-1"
          >
            Tipos aceitos
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            Imóveis Aceitáveis
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Conheça os tipos de imóveis que podem participar do programa de
            locação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((t, i) => (
            <Card
              key={t.title}
              className={`glass border-none rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <CardHeader className="p-0 border-none relative">
                {/* AspectRatio garante que todas as fotos tenham a mesma proporção (4/3) */}
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Ícone posicionado sobre a imagem */}
                  <div className="absolute bottom-3 left-3 gradient-navy w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                    <t.icon className="text-primary-foreground" size={20} />
                  </div>
                </AspectRatio>
              </CardHeader>

              <CardContent className="p-5">
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
