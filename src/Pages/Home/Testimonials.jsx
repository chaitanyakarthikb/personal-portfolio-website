import React from "react";
import data from "..//../data/index.json";

const Testimonials = () => {
  const reviews = [];
  let k = 0;
  while (k<4) {
    
    const i = Math.floor(Math.random() * data.testimonials.length);
    if(reviews.includes(data.testimonials[i]) === false){
        reviews.push(data.testimonials[i]);
        k++;
    }
    
}
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
          <h1 className="portfolio--container--title">
            Here's what people have to say about me
          </h1>

          <div className="portfolio--container--reviews">

          {reviews.map((review, index) => (
            <div key={index} className="portfolio--card">
              <div className="portfolio--card--content">
                {review.review}
              </div>
              <div className="portfolio--card--author">
                <h4>{review.author}</h4>
                <p className="text-md">{review.designation}</p>
              </div>
            </div>
          ))}

          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
