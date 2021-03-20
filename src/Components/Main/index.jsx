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
                    <h1 className={foodStyle.categoryName}>Фастфуд</h1>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <h1 className={foodStyle.categoryName}>Напої</h1>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <h1 className={foodStyle.categoryName}>Десерти</h1>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <h1 className={foodStyle.categoryName}>Категорія</h1>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                </SwiperSlide>
                <SwiperSlide className={foodStyle.swiper}>
                    <h1 className={foodStyle.categoryName}>Категорія</h1>
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
