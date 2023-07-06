import React, { Component } from 'react';
import TimeCountDown from '../countdown'
 
class WeddingTime extends Component {

    render() {
        return(
            <section className={`wpo-wedding-time ${this.props.wdClass}`}>    
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="clock-grids" id="clock2">
                                <TimeCountDown/>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        );
    }
}
 
export default WeddingTime;