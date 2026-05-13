import '../../assets/css/main.css'

const Cards = ({ elem, buttonText }) => {
  return (
    <div className="card">
      <img src={elem.img} alt={elem.title} />
      <h3>{elem.title}</h3>
      <p>{elem.text}</p>
      <a href={elem.link}>{buttonText}</a>
    </div>
  )
}

export default Cards
