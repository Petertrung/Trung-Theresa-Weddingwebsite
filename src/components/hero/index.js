import React from "react";
import TimeCountDown from "../countdown";
// import hImg1 from "../../images/slider/shape.png";
// import hImg2 from "../../images/slider/shape2.png";
import stars1 from "../../images/background/stars/8.png"
import stars2 from "../../images/background/stars/stars 1 (1).png"
import hImg4 from "../../images/background/pinkCloud/pink paint (9).png";
import hImg5 from "../../images/background/pinkCloud/pink paint (8).png";
import brushedCircle from "../../images/background/text/brush circle.png";
import and from "../../images/background/text/&.png"
import vertTrees from "../../images/slider/vert-trees.jpg";

const Hero = (props) => {
  return (
    <section className="static-hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <img src={stars1} alt="stars" className="star-1 star"/>
            <img src={stars2} alt="stars 2" className="star-2 star"/>
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-6 col-12">
                <div className="wpo-static-hero-inner">
                  <div className="hero-circle">
                    <img src={brushedCircle} width={"100%"} alt="circle" />
                    <div className="centered">
                      <div data-swiper-parallax="300" className="slide-title">
                    <h2 className="names">Trung <br/>
                    <img src={and} alt="&" className="and"/><br/>
                     Theresa</h2>
                  </div>
                      <div data-swiper-parallax="400" className="slide-text">
                    <p>are Getting Married Sept 21, 2024</p>
                  </div>
                    </div>
                  </div>
                  <div className="wpo-wedding-date">
                    <div className="clock-grids">
                      <TimeCountDown />
                    </div>
                  </div>
                  <div className="shape-2">
                    <img src={hImg2} alt="hImg2" />
                  </div> 
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
            <img src={vertTrees} alt="hImg3" />
          </div>
          <div className="static-hero-shape-1">
            <img src={hImg4} alt="hImg4" />
          </div>
          <div className="static-hero-shape-2">
            <img src={hImg5} alt="hImg5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
