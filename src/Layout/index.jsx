import React, {useEffect, useState} from "react";

import SwiperCore, {Thumbs, Controller} from 'swiper';

import Footer from "../Components/Footer";
import Main from "../Components/Main";

import lStyle from "./style.module.css"

SwiperCore.use([Thumbs, Controller]);

const Layout = () => {

    const [swiper, setSwiper] = useState(null);
    const [swiperThumbs, setSwiperThumbs] = useState(null);

    useEffect(() => {
        if (swiper && swiperThumbs) {
            swiper.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiper;
        }
    }, [swiper, swiperThumbs]);

    return (
        <div className={lStyle.layout} style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + 'img/background.png'})`
        }}>
            <Main onSwiper={setSwiper} controller={{control: swiperThumbs}}/>
            <Footer onSwiper={setSwiperThumbs} controller={{control: swiper}}/>
        </div>
    )

}

export default Layout
