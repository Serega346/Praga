import React from "react"

import {Swiper, SwiperSlide} from 'swiper/react';

import FoodItem from "../FoodItem";

import 'swiper/swiper-bundle.css';
import foodStyle from "./style.module.css"

const Main = (props) => {
    return (
        <main>
            <Swiper onSwiper={props.onSwiper}
                    controller={props.controller}
                    slidesPerView={1}
                    loop={true}
                    loopedSlides={5}

            >
                <SwiperSlide className={foodStyle.swiper}>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default Main
