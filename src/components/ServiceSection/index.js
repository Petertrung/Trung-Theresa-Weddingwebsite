import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Services from '../../api/service'
import {Link} from 'react-router-dom'


const ServiceSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <section className="wpo-Service-section section-padding" id="Service">
            <div className="container">
                <SectionTitle topTitle={'Our Services'} MainTitle={'What We Can Do'}/>
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {Services.map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-12" key={sitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <img src={service.simg1} alt=""/>
                                    </div>
                                    <div className="wpo-Service-text">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection;