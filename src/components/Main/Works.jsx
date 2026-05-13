import Cards from './Cards';
import { work } from '../../assets/image'
import '../../assets/css/main.css'

const Works = ({ locale }) => {
  const cards = locale.works.cards.map(card => ({
    img: work,
    title: card.title,
    text: card.text,
    link: '#contact'
  }))

  return (
    <section className="works" id="works">
      <div className="container works__wrapper">
        <div className="works__header">
          <span className="section-label">{locale.works.sectionLabel}</span>
          <h2>{locale.works.title}</h2>
        </div>
        <div className="content">
          {cards.map((elem, index) => (
            <Cards key={index} elem={elem} buttonText={locale.works.button} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
