import '../../assets/css/main.css'
import { facebook, instagram, mail, telegram, whatsapp } from '../../assets/image'

const Footer = ({ locale }) => {
  const whatsappNumber = (locale.footer.phones[0] || '').replace(/\D/g, '')
  const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : 'https://web.whatsapp.com/'

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
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" loading="lazy" decoding="async" /></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" loading="lazy" decoding="async" /></a></li>
          <li><a href="https://t.me/BakhriddinB" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="Telegram" loading="lazy" decoding="async" /></a></li>
          <li><a href={`mailto:${locale.footer.email}`}><img src={mail} alt="Email" loading="lazy" decoding="async" /></a></li>
          <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="WhatsApp" loading="lazy" decoding="async" /></a></li>
        </ul>
      </div>
      <p className="footer__copy">{locale.footer.copyright}</p>
    </footer>
  )
}

export default Footer
