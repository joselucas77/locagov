import { Building2, Home, Warehouse, Store } from "lucide-react";
import salaComercial from "@/assets/sala-comercial.jpg";
import casa from "@/assets/casa.jpg";
import galpao from "@/assets/galpao.jpg";
import loja from "@/assets/loja.jpg";

export const propertyTypes = [
  { icon: Building2, title: "Salas Comerciais", desc: "Ideais para atendimento ao público e escritórios administrativos.", image: salaComercial },
  { icon: Home, title: "Casas", desc: "Para instalação de programas sociais, creches e postos de saúde.", image: casa },
  { icon: Warehouse, title: "Galpões", desc: "Armazenamento de insumos, equipamentos e logística municipal.", image: galpao },
  { icon: Store, title: "Lojas / Pontos", desc: "Espaços para centros de referência e atendimento comunitário.", image: loja },
];
