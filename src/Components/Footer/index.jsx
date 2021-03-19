import React from "react"

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

import fStyle from "./style.module.css"

const Footer = (props) => {
    return (

        <footer className={fStyle.footer}
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'img/bridge.png'})`}}>
            <Swiper
                onSwiper={props.onSwiper}
                controller={props.controller}
                centeredSlides={true}
                initialSlide={2}
                loop={true}
                slideToClickedSlide={true}
                slidesPerView={3}
                className={fStyle.footerSwiper}>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={fStyle.footerItem}>1</div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={fStyle.footerItem}>2</div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={fStyle.footerItem}>3</div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={fStyle.footerItem}>4</div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={fStyle.footerItem}>5</div>
                </SwiperSlide>
            </Swiper>
        </footer>

    )
}

export default Footer
