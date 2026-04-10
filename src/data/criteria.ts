import { MapPin, Accessibility, Wrench } from "lucide-react";

export const criteria = [
  {
    icon: MapPin,
    title: "Localização Estratégica",
    desc: "Proximidade com polos de serviços públicos, transporte e áreas centrais.",
    badge: "Maior Pontuação",
    badgeColor: "bg-gold text-secondary-foreground",
  },
  {
    icon: Accessibility,
    title: "Acessibilidade",
    desc: "Imóveis com rampas, elevadores ou adaptações para PcD recebem pontuação extra.",
    badge: "Diferencial",
    badgeColor: "bg-primary text-primary-foreground",
  },
  {
    icon: Wrench,
    title: "Estado de Conservação",
    desc: "Avaliação estrutural e de instalações elétricas e hidráulicas em conformidade.",
    badge: "Obrigatório",
    badgeColor: "bg-accent text-accent-foreground",
  },
];
