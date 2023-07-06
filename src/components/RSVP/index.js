import React, { Component } from 'react'
import SectionTitle from '../../components/SectionTitle'

import vec1 from '../../images/contact/1.png'
import vec2 from '../../images/contact/2.png'

class RSVP extends Component {


    state = {
        name: '',
        guest: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            guest, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (guest === '') {
            error.guest = "Please Select your Guest List";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.guest === '') {
            this.setState({
                name: '',
                guest: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            guest,
            error } = this.state;

        return(
            <section className={`wpo-contact-section ${this.props.pt}`} id="RSVP">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="wpo-contact-form-area">
                            <SectionTitle MainTitle={'Are you attending?'}/>
                            <form onSubmit={this.subimtHandler} className="form">
                                <div className="row">
                                    <div>
                                        <div className="form-field">
                                            <input value={name} onChange={this.changeHandler} className="form-control" type="text" name="name" placeholder="Name"/>
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select name="guest" className="form-control" value={guest} onChange={this.changeHandler}>
                                            <option>Number Of Guests</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                        </select>
                                        <p>{error.guest ? error.guest : ''}</p>
                                    </div>
                                    <div className="submit-area">
                                        <div className="form-submit">
                                            <button type="submit" className="theme-btn-s3">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="border-style"></div>
                        </div>
                        <div className="vector-1">
                            <img src={vec1} alt=""/>
                        </div>
                        <div className="vector-2">
                            <img src={vec2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  RSVP;