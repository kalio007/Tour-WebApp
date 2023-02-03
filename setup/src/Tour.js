import React, { useState} from 'react';
// this component handles the indiviual tour oppurnities
// it gets its contents from the state passed from "Tours"
const Tour = ({id, image, info, price, name, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0,200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "Read More"}
        </button>
      </p>
      <button 
        className="delete-btn"
        onClick={(event) => removeTour(id)}>Not Interested</button>
    </footer> 
  </article>;
};

export default Tour;
