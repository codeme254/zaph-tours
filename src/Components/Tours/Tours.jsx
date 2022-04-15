import React from "react";
import Heading from "../Heading/Heading";
import tourImg1 from "./../../Assets/images/zone-4.jpg";
import tourImg2 from "./../../Assets/images/zone-1.jpg";
import tourImg3 from "./../../Assets/images/zone-2.jpg";
import tourImg4 from "./../../Assets/images/zone-3.jpg";
import tourImg5 from "./../../Assets/images/zone-5.jpg";
import tourImg6 from "./../../Assets/images/zone-6.jpg";
import Tour from "./Tour";

const Tours = () => {
  // image, duration, zone, pricing
  const tours = [
    {
      image: tourImg1,
      duration: "24 April 2022 - 29 April 2022",
      zone: "thiba falls",
      pricing: "from $10",
      description:
        "come enjoy a beatiful hike to thiba falls, free lunch and unlimited photography and show your friends how good you are at swimming",
    },
    {
      image: tourImg2,
      duration: "4 may 2022 - 5 may 2022",
      zone: "castle mountain",
      pricing: "from $12",
      description:
        "we take an adventure hike through the forest as we stomp our way through the rocks to the catering and fun.",
    },
    {
      image: tourImg3,
      duration: "5 august 2022 - 20 august 2022",
      zone: "mt kenya",
      pricing: "from $30",
      description:
        "will you be strong to climb the mountain and write at the center of mt kenya I was here? And ooh, don't forget heavy clothing.",
    },
    {
      image: tourImg4,
      duration: "22 september - 30 september 2022",
      zone: "l. victoria",
      pricing: "from $15",
      description:
        "we explore the luo land in kenya as we swim in lake victoria. The museum probably will be the best place you will visit here.",
    },
    {
      image: tourImg6,
      duration: "20 october 2022 - 1 november 2022",
      zone: "l. nakuru",
      pricing: "from $20",
      description:
        "If you have never seen flamingoes, then this is an opportunity that you don't want to waste, Lake Nakuru national park is where we will spend most of our time here.",
    },
    {
      image: tourImg5,
      duration: "18 december 2022 - 3 january 2023",
      zone: "mombasa",
      pricing: "from $300",
      description:
        "of course, no touring year can be complete if you fail to visit the coastal beach of Kenya known as Mombasa, let's explore the salty water and have more fun.",
    },
  ];
  return (
    <section className="tours">
      <Heading
        subHeading="our tours"
        mainHeading="see incoming tours"
        bgText="book a tour"
      />
      <div className="tours__container">
        {tours.map((el, i) => (
          <Tour
            image={el.image}
            duration={el.duration}
            zone={el.zone}
            pricing={el.pricing}
            description={el.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Tours;
