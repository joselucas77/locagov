import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { faqs } from "../data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <Badge
            variant="outline"
            className="text-gold border-gold/30 uppercase tracking-wider px-3 py-1"
          >
            Dúvidas
          </Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 border border-border/20 transition-all hover:bg-white/[0.02]"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5 group data-[state=open]:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Ainda tem dúvidas?
            <a
              href="#contato"
              className="text-primary font-semibold ml-1 hover:underline"
            >
              Fale com nossa equipe técnica.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
