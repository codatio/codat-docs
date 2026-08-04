import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

// Callers pass absolute image/link paths (e.g. /img/...), which bypass
// baseUrl and break deploys served from a subpath (e.g. PR previews);
// external URLs pass through withBaseUrl untouched
const Card = (props) => {
  const { image, icon: Icon, title, children, className } = props;
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <li className={`card ${className}`}>
      <div className="header">
        {Icon ? (
          <Icon />
        ) : (
          <img src={withBaseUrl(image)} className="mini-icon" />
        )}

        <h3>{title}</h3>
      </div>

      {children}
    </li>
  );
};

const CardTwo = (props) => {
  const { image, title, link, linkText, children, className } = props;
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <li className={`card two ${className}`}>
      <div className="header">
        <img src={withBaseUrl(image)} className="mini-icon" />

        <h3>{title}</h3>
      </div>

      {children}

      <p>
        <a href={withBaseUrl(link)}>{linkText} →</a>
      </p>
    </li>
  );
};

const MiniCard = (props) => {
  const { image, title, subtitle, link, children, className } = props;
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <li className={`card mini ${className}`}>
      <div className="card-row">
        <div className="header">
          <a href={withBaseUrl(link)}>
            <img src={withBaseUrl(image)} className="icon usecase" />
          </a>
        </div>

        <div className="content">
          <h4>{title}</h4>
          <p>
            <a href={withBaseUrl(link)}>{subtitle} →</a>
          </p>
        </div>
      </div>

      {children}
    </li>
  );
};

const Cards = (props) => {
  const { mini, children } = props;

  return <ul className={`card-container ${!!mini && "mini"}`}>{children}</ul>;
};

Cards.Card = Card;
Cards.MiniCard = MiniCard;
Cards.CardTwo = CardTwo;

export default Cards;
