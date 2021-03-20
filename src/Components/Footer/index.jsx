import React from "react"

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

import fStyle from "./style.module.css"

const Footer = (props) => {
    return (

        <footer className={fStyle.footer}
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/bridge.png'})`}}>
            <Swiper
                onSwiper={props.onSwiper}
                controller={props.controller}
                centeredSlides={true}
                loop={true}
                slideToClickedSlide={true}
                slidesPerView={3}
                className={fStyle.footerSwiper}>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={`${fStyle.footerItem} footerItem`}>
                        <img src={`${process.env.PUBLIC_URL + '/img/burger-ico.svg'}`} alt="ico"
                             className={fStyle.footerItemImg}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={`${fStyle.footerItem} footerItem`}>
                        <img src={`${process.env.PUBLIC_URL + '/img/burger-ico.svg'}`} alt="ico"
                             className={fStyle.footerItemImg}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={`${fStyle.footerItem} footerItem`}>
                        <img src={`${process.env.PUBLIC_URL + '/img/burger-ico.svg'}`} alt="ico"
                             className={fStyle.footerItemImg}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={`${fStyle.footerItem} footerItem`}>
                        <img src={`${process.env.PUBLIC_URL + '/img/beer.svg'}`} alt="ico"
                             className={fStyle.footerItemImg}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={fStyle.swiperSlide}>
                    <div className={`${fStyle.footerItem} footerItem`}>
                        <img src={`${process.env.PUBLIC_URL + '/img/sweet.svg'}`} alt="ico"
                             className={fStyle.footerItemImg}/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </footer>

    )
}

export default Footer
