import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        service: '',
        lastname: '',
        events: '',
        notes: '',
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
            email,
            service,
            lastname,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (service === '') {
            error.service = "Please enter your service";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.service === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                service: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            service,
            lastname,
            error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Lastname"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                    <div>
                        <select name="service" className="form-control" value={service} onChange={this.changeHandler}>
                            <option>Service</option>
                            <option>Photography</option>
                            <option>The Rehearsal Dinner</option>
                            <option>The Afterparty</option>
                            <option>Videographers</option>
                            <option>Perfect Cake</option>
                            <option>All Of The Above</option>
                        </select>
                        <p>{error.service ? error.service : ''}</p>
                    </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn-s4 mt-4">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;