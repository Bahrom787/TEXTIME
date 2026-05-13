import '../../assets/css/main.css'
import { facebook, instagram, mail, telegram, whatsapp } from '../../assets/image'

const Footer = ({ locale }) => {
  return (
    <footer id="contact">
      <div className="container footer__wrapper">
        <div className="footer__info">
          <h2>{locale.footer.title}</h2>
          <p>{locale.footer.description}</p>
        </div>
        <div className="footer__contacts">
          <a href={`mailto:${locale.footer.email}`} className="footer__link">{locale.footer.email}</a>
          {locale.footer.phones.map((phone, index) => (
            <a key={index} href={`tel:${phone.replace(/\s/g, '')}`} className="footer__link">{phone}</a>
          ))}
          <p className="footer__address">{locale.footer.address}</p>
        </div>
        <ul className="contact">
          <li><a href="https://www.facebook.com/"><img src={facebook} alt="Facebook"/></a></li>
          <li><a href="https://www.instagram.com/"><img src={instagram} alt="Instagram"/></a></li>
          <li><a href="https://t.me/BakhriddinB"><img src={telegram} alt="Telegram"/></a></li>
          <li><a href={`mailto:${locale.footer.email}`}><img src={mail} alt="Email"/></a></li>
          <li><a href="https://web.whatsapp.com/"><img src={whatsapp} alt="WhatsApp"/></a></li>
        </ul>
      </div>
      <p className="footer__copy">{locale.footer.copyright}</p>
    </footer>
  )
}

export default Footer
