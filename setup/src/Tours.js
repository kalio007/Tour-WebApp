import React from 'react';
import Tour from './Tour';
// this component gets its content as state which was recieved from an API
// it sends the content down to "Tour" to handle 
//it individual items form the API 
const Tours = ({tours, removeTour}) => {
  return <section>
  <div className="title">
    <h2>Our tours</h2>
    <div className="underline"></div>
  </div>
  <div>
    {tours.map((tour) =>{ 
      return <Tour key={tour.id} {...tour}
      removeTour={removeTour} />})};
  </div>
</section>;
};

export default Tours;
