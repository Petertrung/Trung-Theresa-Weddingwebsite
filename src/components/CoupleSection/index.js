import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Square from '../../images/slider/square-heart.jpg'
 
class CoupleSection extends Component {

    render() {
        return(
            <section className="couple-section section-padding" id="couple">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xs-12">
                            <div className="couple-area clearfix">
                                <div className="text-grid bride">
                                    <h3>Trung Nguyen</h3>
                                    <p>- 'Theresa is this fireball of energy that is so passionate about the things she loves. As firery as she is, she is just as caring and warm.'</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/peter.nguyen.52035/"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="https://www.instagram.com/nguyenfor_thewin/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <img src={Square} alt=""/>
                                    </div>
                                </div>
                                <div className="text-grid groom">
                                    <h3>Theresa Le</h3>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/TreeResa"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="https://www.instagram.com/meresatheresa/"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}
 
export default CoupleSection;