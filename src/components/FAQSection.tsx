import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { faqs } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Dúvidas</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Perguntas Frequentes
          </h2>
        </div>

        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
