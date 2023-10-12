import React from 'react';
import './About.css';
import illustration from './img/illustration.png'

export default function About() {
  return (
    <section className='about'>
        <div className="about__container">
            <img src={illustration} alt="" />
            <main className='about__main'>
                <div>Our Target</div>
                <h1>We Earn Your Trust and are <br /> Diligent in Your Case</h1>
                <p>When an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. It has survived not only five centuries, <br /> but also the leap into electronic typesetting,</p>
                <p>It was popularised in the 1960s with the release of Letraset sheets <br /> containing Lorem Ipsum passages, and more recently with desktop <br /> publishing software like Aldus PageMaker </p>
                <button>Order Now</button>
            </main>
        </div>
    </section>
  )
}
