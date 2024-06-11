import React from "react";
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residences.css'
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common";
const Resdiences = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className="orangeText">Best Choices</span>
                <span className="primaryText" >Popular Residencies</span>
            </div>
            <Swiper{...sliderSettings}>
                <SlideNextButton/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />

                                <span className="secondaryText r-price">
                                    <span style={{color:'orange'}}>$</span><span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Resdiences

const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className="r-prevButton">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="r-nextButton">
          &gt;
        </button>
      </div>
    );
  };