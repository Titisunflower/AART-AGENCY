import React from 'react'
import '../../styles/hero.css'
import heroDarkImg from '../../images/hero-img.png'

const Hero = () => {
  return (
    <section className='hero__section'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <div>
                    <h2>All-In-One Hub</h2>
                    <h2>Creative & Innovative</h2>
                    <h2 className='highlight'>Digital Media World!</h2>
                    </div>
                    <p className='description'>
                        We believe in the power of creativity and innovation. We are a team of passionate and creative individuals who are committed to 
                        delivering the best digital media solutions to our clients.
                    </p>
                    <div className='hero__btns'>
                        <button className='primary__btn'>Get Started</button>
                        <button className='secondary__btn'>Learn More</button>
                    </div>
                </div>

                <div className='hero__img'>
                    <img src={heroDarkImg} alt='hero-img' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero