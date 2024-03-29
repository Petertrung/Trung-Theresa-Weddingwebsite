import React from "react";
import { Link } from "react-router-dom";
//import Projects from "../../api/projects";

const Footer = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link onClick={ClickHandler} className="logo" to="/">
                    aTT<span></span>ventures
                  </Link>
                </div>
                <p>
                  Welcome to our website!! Please join us for our special day!!
                </p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li> */}
                  <li>
                    <Link onClick={ClickHandler} to="https://www.instagram.com/a.t.t.ventures/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="mailto:theresaandtrung@gmail.com">
                      <i className="ti-google"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Information</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/portfolio">Portfolio</Link></li>
                            </ul>
                        </div> 
                    </div> */}
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <p>
                    Should you have any inquiries, please feel free to contact us.
                  </p>
                  <ul>
                    <li
                      onClick={(e) => {
                        window.location.href = 'mailto:theresaandtrung@gmail.com';
                        e.preventDefault();
                      }}
                    >
                      <i className="fi flaticon-email"></i>
                      theresaandtrung@gmail.com
                    </li>
                    <li
                     onClick={(e) => {
                        window.location.href = 'tel:2062653633';
                        e.preventDefault();
                      }}>
                      <i className="fi flaticon-phone-call"></i>(206) 265-3633
                    </li>
                    <li
                     onClick={(e) => {
                        window.location.href = 'tel:2064580486';
                        e.preventDefault();
                      }}>
                      <i className="fi flaticon-phone-call"></i>(206) 458-0486
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*<div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget instagram">
                <div className="widget-title">
                  <h3>Instagram</h3>
                </div>
                <ul className="d-flex">
                   {Projects.slice(0, 6).map((project, pitem) => (
                    <li key={pitem}>
                      <Link
                        onClick={ClickHandler}
                        to={`/project-single/${project.id}`}
                      >
                        <img src={project.pimg1} alt="" />
                      </Link>
                    </li>
                  ))} 
                </ul>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright"> &copy; 2024 aTTventures.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
