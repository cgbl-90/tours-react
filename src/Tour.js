import { useState } from "react";
import "./sass/App.css";

export default function Tour(props) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="container">
      {props.props.map((tour) => {
        return (
          <article key={tour.id}>
            <img src={tour.image} />
            <span>
              <h5>${tour.price}</h5>
              <h4>{tour.name}</h4>
              <p>{tour.info}</p>
            </span>
          </article>
        );
      })}
    </div>
  );
}
