import TextAboutUs from "../components/textAboutUs";
import styles from "../page.module.css";
import aboutUsStyles from "./aboutUs.module.css"


export default function AboutUs(){
    return(
    <main className={aboutUsStyles.myMain}>
        <div className="body">
            <section className={aboutUsStyles.textSection}>
                <div className={aboutUsStyles.title}>
                    <h1 className={aboutUsStyles.myh1} >QUEM <span style={{
                        color: "#009502",
                        fontWeight:"100"
                    }}>SOMOS</span>?</h1>
                </div>
                <div className={aboutUsStyles.text}>
                    <TextAboutUs/>
                </div>
                <div className={aboutUsStyles.button}>
                    <a href="/servicos">
                        <button style={{
                        cursor: "pointer"
                        }} className={styles.myButton}>EXPLORAR ASTROMAN-VERSO</button>
                    </a>
                </div>
            </section>
        </div>
    </main>
    )
}