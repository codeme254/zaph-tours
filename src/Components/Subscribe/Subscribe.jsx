import React from 'react';
import { Star } from '../Icons/Icons';

const Subscribe = () => {
    return(
        <section className="subscribe">
            <div className="subscribe__stars">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </div>
            <h1 className="subscribe__cta">sign up for the newsletter</h1>
            <p className="subscribe__cta--text">Upto 49% discount on every tour.</p>
            <form className="subscribe__form">
                <input type="email" className="subscribe__input" placeholder='enter your email address' />
                <button type="submit" className="subscibe__form--btn">subscribe</button>
            </form>
        </section>
    )
}

export default Subscribe;