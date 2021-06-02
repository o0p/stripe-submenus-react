import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments instastrucutre for the internet</h1>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phpne" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
