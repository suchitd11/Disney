/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <section className="relative mt-3 shadow-2xl max-w-screen-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="1" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="2" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="3" />
        </div>
        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="4" />
        </div>
      </Carousel>
    </section>
  )
}

export default Slider