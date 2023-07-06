import React from 'react'
import Simg from '../../images/section-title.png'


const SectionTitle = (props) => {
    return(
        <div className="row">
            <div className="wpo-section-title">
                <div className="section-title-img">
                    <img src={Simg} alt=""/>
                </div>
                <h2>{props.MainTitle}</h2>
            </div>
        </div>
    )
}

export default SectionTitle;