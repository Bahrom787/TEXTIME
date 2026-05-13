import '../../assets/css/main.css'

const Desc = ({ locale }) => {
  return (
    <div className="header__content" id="top">
      <div className="hero__inner">
        <span className="eyebrow">{locale.hero.eyebrow}</span>
        <h1>{locale.hero.title}</h1>
        <p>{locale.hero.description}</p>
        <div className="hero__actions">
          <a href="#works" className="button button--primary">{locale.hero.primaryBtn}</a>
          <a href="#contact" className="button button--ghost">{locale.hero.ghostBtn}</a>
        </div>
      </div>
    </div>
  )
}

export default Desc