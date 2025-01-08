import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.maxcontainer}>
      <section className={styles.textsColum}>
          <h2 className={styles.myh2}>
            LEVE SUAS VENDAS PARA ALÉM DA
          </h2>
          <h1 className={styles.myh1}>ÓRBITA<span>!</span></h1>
          <p className={styles.myp}>Descubra como nossas soluções em marketing digital podem transformar sua marca, atrair clientes e gerar resultados reais!</p>
          <p className={styles.myp2}>Vamos decolar juntos?</p>
          <a href="/servicos">
            <button style={{
              cursor: "pointer"
            }} className={styles.myButton}>EXPLORAR ASTROMAN-VERSO</button>
          </a>
      </section>
      </div>
    </div>
  );
}
