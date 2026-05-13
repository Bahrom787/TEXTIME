import { about } from '../../assets/image.js'
import '../../assets/css/main.css'

const Main = ({ locale }) => {
  return (
    <section className="about" id="about">
      <div className="container about__wrapper">
        <div className="about__image-block">
          <div className="about__image-glow"></div>
          <img src={about} alt="Текстильный образ" className='about__img' />
        </div>
        <div className="about__text-block">
          <span className="section-label">{locale.about.sectionLabel}</span>
          <h2 className="about__title">{locale.about.title}</h2>
          <p className="about__description">{locale.about.description}</p>
          <div className="about__list">
            {locale.about.items.map((item, index) => (
              <div className="about__item" key={index}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main