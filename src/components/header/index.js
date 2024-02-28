import React, { Component } from "react";
import { connect } from "react-redux";
import MobileMenu from "../MobileMenu";
import { removeFromCart } from "../../store/actions/action";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import HeaderTopbar from "../HeaderTopbar";

class Header extends Component {

  render() {

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }



    return (
      <header id="header" className={this.props.topbarBlock}>
        <HeaderTopbar />
        <div className={`wpo-site-header ${this.props.hclass}`}>
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu/>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <NavLink onClick={ClickHandler} className="navbar-brand logo" to="/">aTT<span></span>ventures</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div id="navbar" className="collapse navbar-collapse navigation-holder">
                    <button className="menu-close"><i className="ti-close"></i></button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link activeClass="active" to="/" spy={true} smooth={true} duration={500} >Home</Link>
                      </li>
                      <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100} duration={500} >Couple</Link></li>
                      <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} >Story</Link></li>
                      <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} >Gallery</Link></li>
                      <li><Link activeClass="active" to="RSVP" spy={true} smooth={true} duration={500} >RSVP</Link></li>
                      <li><Link activeClass="active" to="events" spy={true} smooth={true} offset={-80} duration={500} >Events</Link></li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
