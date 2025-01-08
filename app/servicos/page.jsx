import Card from "../components/cards";
import styles from "./services.module.css";

const servicesCard1 = [
  { icon: "/4.png", altText: "check imagem", text: "1 postagem a cada 3 dias" },
  { icon: "/4.png", altText: "check imagem", text: "Período de teste de apenas 3 meses" },
  { icon: "/4.png", altText: "check imagem", text: "Material enviado para sua aprovação com 48 horas" },
  { icon: "/4.png", altText: "check imagem", text: "Até 4 ou mais conversas iniciadas por dia" },
  { icon: "/4.png", altText: "check imagem", text: "Relatórios mensais detalhados" },
  { icon: "/4.png", altText: "check imagem", text: "Consultoria gratuita e acompanhamento humanizado" },
  { icon: "/4.png", altText: "check imagem", text: "Imagens e peças publicitárias exclusivas para sua empresa" },
  { icon: "/4.png", altText: "check imagem", text: "Suporte eficiente e personalizado" },
  { icon: "/5.png", altText: "check imagem", text: "Desenvolvimento e postagem de vídeos" },
  { icon: "/5.png", altText: "check imagem", text: "Gestão de CRM (Customer Relationship Management)" },
  { icon: "/5.png", altText: "check imagem", text: "Produção de imagens profissionais (estúdio ou edição avançada)" },
];

const servicesCard2 = [
    { icon: "/4.png", altText: "check imagem", text: "1 postagem a cada 3 dias" },
    { icon: "/4.png", altText: "check imagem", text: "Período de teste de apenas 3 meses" },
    { icon: "/4.png", altText: "check imagem", text: "Material enviado para sua aprovação com 48 horas" },
    { icon: "/4.png", altText: "check imagem", text: "Até 4 ou mais conversas iniciadas por dia" },
    { icon: "/4.png", altText: "check imagem", text: "Relatórios mensais detalhados" },
    { icon: "/4.png", altText: "check imagem", text: "Consultoria gratuita e acompanhamento humanizado" },
    { icon: "/4.png", altText: "check imagem", text: "Imagens e peças publicitárias exclusivas para sua empresa" },
    { icon: "/4.png", altText: "check imagem", text: "Suporte eficiente e personalizado" },
    { icon: "/4.png", altText: "check imagem", text: "Desenvolvimento e postagem de vídeos" },
    { icon: "/4.png", altText: "check imagem", text: "Gestão de CRM (Customer Relationship Management)" },
    { icon: "/5.png", altText: "check imagem", text: "Produção de imagens profissionais (estúdio ou edição avançada)" },
];

const servicesCard3 = [
    { icon: "/4.png", altText: "check imagem", text: "1 postagem a cada 3 dias" },
    { icon: "/4.png", altText: "check imagem", text: "Período de teste de apenas 3 meses" },
    { icon: "/4.png", altText: "check imagem", text: "Material enviado para sua aprovação com 48 horas" },
    { icon: "/4.png", altText: "check imagem", text: "Até 4 ou mais conversas iniciadas por dia" },
    { icon: "/4.png", altText: "check imagem", text: "Relatórios mensais detalhados" },
    { icon: "/4.png", altText: "check imagem", text: "Consultoria gratuita e acompanhamento humanizado" },
    { icon: "/4.png", altText: "check imagem", text: "Imagens e peças publicitárias exclusivas para sua empresa" },
    { icon: "/4.png", altText: "check imagem", text: "Suporte eficiente e personalizado" },
    { icon: "/4.png", altText: "check imagem", text: "Desenvolvimento e postagem de vídeos" },
    { icon: "/4.png", altText: "check imagem", text: "Gestão de CRM (Customer Relationship Management)" },
    { icon: "/4.png", altText: "check imagem", text: "Produção de imagens profissionais (estúdio ou edição avançada)" },
];

export default function Services() {
  return (
    <main className={styles.myMain}>
      <div className={styles.title}>
        <p>
          UNIVERSOS PARA <span style={{ color: "#009502" }}>VOCÊ</span>!
        </p>
      </div>
      <div className={styles.cards}>
        <Card
          color=""
          title="BASIC"
          img="/6.png"
          enumerate="#1"
          rem="7.2rem"
          price="R$599,00"
          services={servicesCard1} // Passando uma lista específica de serviços para esse card
        />
        <Card
          color="#00879e"
          title="STANDARD"
          img="/7.png"
          enumerate="#2"
          price="R$899,00"
          services={servicesCard2} // Passando uma lista diferente para esse card
        />

        <Card
          color="#f4bf00"
          title="PREMIUM"
          img="/8.png"
          enumerate="#3"
          price="R$1.199,00"
          services={servicesCard3} // Passando uma lista diferente para esse card
        />
      </div>
    </main>
  );
}
