import React, { useRef } from "react";
import Heading from "./../Heading/Heading";
import Testimony from "./Testimony";
import { ChevronLeft, ChevronRight } from "../Icons/Icons";
import traveler1 from './../../Assets/images/vac2.jpg'
import traveler2 from './../../Assets/images/vac1.jpg'
import traveler3 from './../../Assets/images/vac3.jpg'
import traveler4 from './../../Assets/images/vac4.jpg'
import traveler5 from './../../Assets/images/vac5.jpg'
import traveler6 from './../../Assets/images/vac6.jpg'

// userProfileImage, name, date, testimonyTitle, testimony

const Testimonials = () => {
    const scrollContainerRef = useRef(null)
    const testimonies = [
        {
            serProfileImage: traveler1,
            name: 'Elisa Allans',
            date: 'January 2, 2022',
            testimonyTitle: 'best travel experience',
            testimony: 'Zaph tours is the best travelling company in the world, I have tried them myself I think I have found my tour vendors from now henceforth'
        },
        {
            serProfileImage: traveler2,
            name: 'Caroline Njeri',
            date: 'January 8, 2022',
            testimonyTitle: 'best holliday ever',
            testimony: 'Zaph tours is the best travelling company in the world, I have tried them myself I think I have found my tour vendors from now henceforth'
        },
        {
            serProfileImage: traveler3,
            name: 'zaphenath paneah',
            date: 'December 29, 2021',
            testimonyTitle: 'pure fun with zaph tours',
            testimony: 'Zaph tours is the best travelling company in the world, I have tried them myself I think I have found my tour vendors from now henceforth'
        },
        {
            serProfileImage: traveler4,
            name: 'emilly ivy',
            date: 'November 28, 2021',
            testimonyTitle: 'travelling has never been this fun',
            testimony: 'Zaph tours is the best travelling company in the world, I have tried them myself I think I have found my tour vendors from now henceforth'
        },
        {
            serProfileImage: traveler5,
            name: 'john swift',
            date: 'april 28, 2021',
            testimonyTitle: 'best hike ever',
            testimony: 'Zaph tours is the best travelling company in the world, I have tried them myself I think I have found my tour vendors from now henceforth'
        },
        {
            serProfileImage: traveler6,
            name: 'john omondi',
            date: 'march 28, 2021',
            testimonyTitle: 'best travel experience',
            testimony: 'Zaph tours is the best travelling company in the world, I have tried them myself I think I have found my tour vendors from now henceforth'
        },
    ]
    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth'})
    }
    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth'})
    }
  return (
    <section className="testimonials">
      <Heading
        subHeading="happy customers"
        mainHeading="we make travellers happy"
        bgText="happy customers"
      />

        <div className="testimonies__container">
            <button className="testimonies__button btn--left" onClick={scrollRight}><ChevronLeft /></button>
            <div className="testimonies__carousel" ref={scrollContainerRef}>
                {
                    testimonies.map((el, i) => <Testimony userProfileImage={el.serProfileImage} name={el.name} date={el.date} testimonyTitle={el.testimonyTitle} testimony={el.testimony} key={i} />)
                }
            </div>
            <button className="testimonies__button btn--right" onClick={scrollLeft}><ChevronRight /></button>
        </div>
    </section>
  );
};

export default Testimonials;
