import React from "react";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="/images/myself-2.webp" alt="MySelf" />
      </div>

      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>

          <h1 className="skills--section--heading">About me</h1>
          <p className="hero--section--description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            numquam fugit asperiores dolores voluptas vitae, quae accusantium
            tempora, cupiditate quos, praesentium reprehenderit quam odio! Animi
            maiores hic voluptatem illum quod atque veniam minima, explicabo nam
            nihil quo similique sequi vero dolorem porro labore deserunt tempore
            molestiae tenetur itaque odit. Quod!
          </p>

          <p className="hero--section--description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            numquam fugit asperiores dolores voluptas vitae, quae accusantium
            tempora, cupiditate quos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
