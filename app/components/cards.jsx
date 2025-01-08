import ServiceList from "./ServiceList";
import Button from "./buttons";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card({
  color, title, enumerate, 
  img, rem, colorFooter,
  price, services
}) {
  colorFooter = color;

  return (
    <section className={styles.servicesCards}>
      <div className={styles.card}>
        {/* Cabeçalho do Card */}
        <div className={styles.headerCard} style={{ backgroundColor: color }}>
          <h2 className={styles.cardTitle} style={{ paddingLeft: rem }}>{title}</h2>
          <div className={styles.imgHeaderCard}>
            <img src={img} alt="Imagem do card" />
            <div className={styles.textPlanetCard}>
              <h2>{enumerate}</h2>
              <p>Universe</p>
            </div>
          </div>
        </div>

        {/* Corpo do Card */}
        <div className={styles.containerBody}>
          <div className={styles.bodyCard}>
            <div className={styles.planServices}>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <div className={styles.service}>
                      <img src={service.icon} alt={service.altText} />
                      <p>{service.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preço do Plano */}
            <div className={styles.planPrice}>
              <h2>{price}</h2>
            </div>
          </div>
        </div>

        {/* Rodapé do Card */}
        <div className={styles.footerCard}>
          <Link href="https://wa.link/rkxm3r">
            <Button />
          </Link>
        </div>
      </div>
    </section>
  );
}
