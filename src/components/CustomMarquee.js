import React from "react";
import Marquee from "react-fast-marquee";
import uuid from "react-uuid";
import { Pic01, Pic02, Pic03, Pic04, Pic05, Pic06, Pic07 } from "../assets";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const CustomMarquee = () => {
  const sampleImages = [Pic01, Pic02, Pic03, Pic04, Pic05, Pic06, Pic07];

  return (
    <div>
      <Marquee gradient={false} speed={35} pauseOnClick pauseOnHover>
        {shuffle(sampleImages).map((el) => (
          <div
            key={uuid()}
            className='rounded-lg md:rounded-xl overflow-hidden m-2 md:m-5'
          >
            <img
              alt={el}
              key={uuid()}
              className='w-28 md:w-48 lg:w-64'
              src={el}
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        gradient={false}
        speed={35}
        pauseOnClick
        pauseOnHover
        direction='right'
      >
        {shuffle(sampleImages).map((el) => (
          <div
            key={uuid()}
            className='rounded-lg md:rounded-xl overflow-hidden m-2 md:m-5'
          >
            <img
              alt={el}
              key={uuid()}
              className='w-28 md:w-48 lg:w-64'
              src={el}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
