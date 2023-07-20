"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import slider_image_1 from "../assets/images/sliderImages/slider_image_1.jpg";
import slider_image_2 from "../assets/images/sliderImages/slider_image_2.jpg";
import slider_image_3 from "../assets/images/sliderImages/slider_image_3.jpg";
import slider_image_4 from "../assets/images/sliderImages/slider_image_4.jpg";

function Banner() {
    return (
        <div className="bg-red-400">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <Image src={slider_image_1} alt="Banner Image 01" />
                </div>
                <div>
                    <Image src={slider_image_2} alt="Banner Image 02" />
                </div>
                <div>
                    <Image src={slider_image_3} alt="Banner Image 03" />
                </div>
                <div>
                    <Image src={slider_image_4} alt="Banner Image 04" />
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
