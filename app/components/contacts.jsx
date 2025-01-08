import styles from "./contacts.module.css"

export default function Contacts(){
    return(
        <ul className={styles.contactsList}>
            <li className={styles.myLi}>
                <div className={styles.contactStyle}>
                    <a href="https://api.whatsapp.com/send?phone=5511962743288&text=Ol%C3%A1%2C%20estou%20vindo%20do%20seu%20site%20e%20adoraria%20adquirir%20o%20*PLANO%20ASTROMAN%20%20BASIC*%20para%20social%20media!%20%F0%9F%AA%90%F0%9F%AA%90">
                        <img src="/1.png" alt="" />
                        <h2>WHATSAPP</h2>
                    </a>
                </div>
                <div className={styles.contactStyle}>
                    <a href="https://www.instagram.com/astroman_marketing/?igsh=MXNzcTc4NnhpN2xuYQ%3D%3D">
                        <img src="/2.png" alt="" />
                        <h2>INSTAGRAM</h2>
                    </a>
                </div>
                <div className={styles.contactStyle}>
                    <a href="/servicos">
                        <img src="servicesicon.png" alt="" />
                        <h2>SERVICES</h2>
                    </a>
                </div>
            </li>
        </ul>
    )
}