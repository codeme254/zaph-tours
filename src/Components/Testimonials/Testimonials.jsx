import React from "react";
import Heading from "./../Heading/Heading";
import Testimony from "./Testimony";
import traveler1 from './../../Assets/images/vac2.jpg'

// userProfileImage, name, date, testimonyTitle, testimony

const Testimonials = () => {
    const testimonies = [
        {
            serProfileImage: traveler1,
            name: 'Elisa Allans',
            date: 'January 2, 2022',
            testimonyTitle: 'best travel experience',
            testimony: 'Zaph tours is the best travelling company in the world, I have tried them myself I think I have found my tour vendors from now henceforth'
        }
    ]
  return (
    <section className="testimonials">
      <Heading
        subHeading="happy customers"
        mainHeading="we make travellers happy"
        bgText="happy customers"
      />

        <div className="testimonies__container">
            <button className="testimonies__button btn--left">left</button>
            <div className="testimonies__carousel">
                {
                    testimonies.map((el, i) => <Testimony userProfileImage={el.serProfileImage} name={el.name} date={el.date} testimonyTitle={el.testimonyTitle} testimony={el.testimony} key={i} />)
                }
            </div>
            <button className="testimonies__button btn--right">right</button>
        </div>
    </section>
  );
};

export default Testimonials;
