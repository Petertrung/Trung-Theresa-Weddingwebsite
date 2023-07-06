import React, { Component } from "react";
import SectionTitle from "../SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '../../images/testimonial/img-1.jpg'
import test2 from '../../images/testimonial/img-2.jpg'
import test3 from '../../images/testimonial/img-3.jpg'





const Testimonials = [
    {
      tstImg:test1,
      name:'Jenefer Marvella',
      date:'12/12/19',
      descriptoion:'This is not only a wedding planning agency but also a dreamy friend. I am very glad to work with them.They make my dream come true. In my wedding I found them as my best friends.',
    },
    {
      tstImg:test2,
      name:'Jenefer Marvella',
      date:'12/12/19',
      descriptoion:'This is not only a wedding planning agency but also a dreamy friend. I am very glad to work with them.They make my dream come true. In my wedding I found them as my best friends.',
    },
    {
      tstImg:test3,
      name:'Aliza Anney',
      date:'12/12/19',
      descriptoion:'This is not only a wedding planning agency but also a dreamy friend. I am very glad to work with them.They make my dream come true. In my wedding I found them as my best friends.',
    },
]



class Testimonial extends Component {
    
    render() {
        var settings = {
            dots: true,
            arrows: false,
            speed: 1200,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="wpo-testimonial-area ">
                <div className="container">
                    <SectionTitle MainTitle={'What Our Clients Say'} />
                    <div className="wpo-testimonial-wrap">
                        <div className="testimonial-slider owl-carousel">
                            <Slider {...settings}>
                                {Testimonials.map((tstml, tsm) => (
                                    <div className="wpo-testimonial-item" key={tsm}>
                                        <div className="wpo-testimonial-img">
                                            <img src={tstml.tstImg} alt=""/>
                                        </div>
                                        <div className="wpo-testimonial-content">
                                            <p>{tstml.descriptoion}</p>
                                            <h2>{tstml.name}</h2>
                                            <span>Previous Client</span>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;