import Contacts from "../components/contacts";
import styles from "./contactUs.module.css"


export default function ContactUs(){
    return(
        <main className={styles.myMain}>
            <div className={styles.title}>
                <h1 style={{
                    fontWeight: "100"
                }}>ENTRE JÁ EM <span style={{
                    color: " #009502"
                }}>CONTATO</span>!</h1>
            </div>
            <div className={styles.contactsIcons}>
                <Contacts/>
            </div>
        </main>
    )
}