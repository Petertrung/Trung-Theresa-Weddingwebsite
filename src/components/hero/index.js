import React from 'react'
import TimeCountDown from '../countdown'
import hImg1 from '../../images/slider/shape.png'
import hImg2 from '../../images/slider/shape2.png'
import hImg4 from '../../images/slider/shape3.png'
import hImg5 from '../../images/slider/shape4.png'
import vertTrees from '../../images/slider/vert-trees.jpg'


const Hero = (props) => {
    return(
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="shape-1"><img src={hImg1} alt="hImg1"/></div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Trung & Theresa</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>We Are Getting Married Sept 21, 2024</p>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <TimeCountDown/>
                                        </div>
                                    </div>
                                    <div className="shape-2"><img src={hImg2} alt="hImg2"/></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img src={vertTrees} alt="hImg3"/>
                    </div>
                    <div className="static-hero-shape-1"><img src={hImg4} alt="hImg4"/></div>
                    <div className="static-hero-shape-2"><img src={hImg5} alt="hImg5"/></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;