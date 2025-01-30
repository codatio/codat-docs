const Card = (props) => {
  const {
    image,
    title,
    children,
    className
  } = props

  return (
    <li className={`card ${className}`}>
      <div className="header">
        <img
          src={image}
          className="mini-icon"
        />

        <h3>{title}</h3>
      </div>

      {children}
    </li>
  )
}

const CardTwo = (props) => {
  const {
    image,
    title,
    link,
    linkText,
    children,
    className
  } = props

  return (
    <li className={`card two ${className}`}>
      <div className="header">
        <img
          src={image}
          className="mini-icon"
        />

        <h3>{title}</h3>
      </div>

      {children}

      <p>
        <a href={link}>{linkText} →</a>
      </p>  
    </li>
  )
}

const MiniCard = (props) => {
  const {
    image,
    title,
    subtitle,
    link,
    children,
    className
  } = props

  return (
    <li className={`card mini ${className}`}>
      <div className="card-row">
        <div className="header">
          <a href={link}>
            <img
              src={image}
              className="icon usecase"
            />
          </a>
        </div>
        
        <div className="content">
          <h4>{title}</h4>
          <p>
            <a href={link}>{subtitle} →</a>
          </p>    
        </div>
      </div>

      {children}
    </li>
  )
} 

const Cards = (props) => {
  const {
    mini,
    children
  } = props
    
  return (
    <ul className={`card-container ${!!mini && 'mini'}`}>
      {children}
    </ul>
  )
}

Cards.Card = Card
Cards.MiniCard = MiniCard
Cards.CardTwo = CardTwo

export default Cards