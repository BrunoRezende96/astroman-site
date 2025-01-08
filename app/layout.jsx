import Link from "next/link";
import "../app/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
            <div className="masterContainer">
              <div className="img">
                <Link href={"/"} ><img src="LOGOastroman.png" alt="logo Astroman" /></Link>
              </div>
              <nav>
                <ul className="ulNav">
                  <li><Link href={"/"} >Home</Link></li>
                  <li><Link href={"/servicos"} >Services</Link></li>
                  <li><Link href={"/aboutus"} >About Us</Link></li>
                  <li><Link href={"/contactus"} >Contact Us</Link></li>
                </ul>
                <ul className="socialMidea">
                  <li><Link href={"https://wa.link/a991ch"} ><img src="1.png" alt="logo Astroman" /></Link></li>
                  <li><Link href={"https://www.instagram.com/astroman_marketing/?igsh=MXNzcTc4NnhpN2xuYQ%3D%3D"} ><img src="2.png" alt="logo Astroman" /></Link></li>
                  <li><Link href={"https://www.facebook.com/profile.php?id=61571176704870"} ><img src="3.png" alt="logo Astroman" /></Link></li>
                </ul>
              </nav>
            </div>
        </header>
        {children}
      </body>
    </html>
  );
}
