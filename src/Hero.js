import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments instastrucutre for the internet</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non porro
            pariatur nihil animi tempore rem aut est nesciunt excepturi vero
            cum, fugiat perferendis voluptatem temporibus veritatis iusto sint
            sed dolorem veniam sequi quas, quaerat eveniet quidem.
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phpne" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
