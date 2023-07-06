import React from 'react'
import {Link}  from 'react-router-dom'
import Projects from '../../api/projects'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} className="logo" to="/">Feel<span>i<i className="fa fa-heart" aria-hidden="true"></i></span>ngs</Link>
                            </div>
                            <p>Welcome and open yourself to your truest love this year with us! With the Release
                                Process</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Information</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/portfolio">Portfolio</Link></li>
                                <li><Link onClick={ClickHandler} to="/blog">Latest News</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact us</Link></li>
                                <li><Link onClick={ClickHandler} to="/service">Our Services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            <div className="contact-ft">
                                <p>Would you have any enquiries.Please feel free to contuct us</p>
                                <ul>
                                    <li><i className="fi flaticon-email"></i>Feelings@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+888 (123) 869523</li>
                                    <li><i className="fi flaticon-maps-and-flags"></i>New York – 1075 Firs Avenue
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget instagram">
                            <div className="widget-title">
                                <h3>Instagram</h3>
                            </div>
                            <ul className="d-flex">
                                {Projects.slice(0,6).map((project, pitem) => (
                                    <li key={pitem}><Link onClick={ClickHandler} to={`/project-single/${project.id}`}><img src={project.pimg1} alt=""/></Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2021 Feelings Template. Design By <Link onClick={ClickHandler} to="/">wpOceans</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;