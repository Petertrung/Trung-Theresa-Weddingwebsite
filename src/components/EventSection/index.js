import React from 'react'
import SectionTitle from '../SectionTitle'
import church from '../../images/event/church.png'
import cocktail from '../../images/event/cocktail.jpg'
import reception from '../../images/event/reception.jpg'
import LocationMap from '../Modal'


const Events = [
    {
        Simg: church,
        title:'The Ceremony',
        li1:'Saturday, 25 Sep, 2022 2:00 PM – 3:30 PM',
        li2:'Vietnamese Martyrs Parish, 6841 S 180th St, Tukwila, WA 98188',
    },
    {
        Simg: cocktail,
        title:'Cocktail Hour',
        li1:'Saturday, 25 Sep, 2022 6:00 PM – 7:00 PM',
        li2:'Main Entrance, 6801 S 180th St, Tukwila, WA 98188',
    },
    {
        Simg: reception,
        title:'The Reception',
        li1:'Saturday, 25 Sep, 2022 7:00 PM',
        li2:'Toma Thien Hall, 6801 S 180th St, Tukwila, WA 98188',
    },

]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="events">
            <div className="container">
                <SectionTitle MainTitle={'TIME AND PLACE'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-img">
                                        <img src={event.Simg} alt="" style={{
                                            width: '100%',
                                            aspectRatio: 16/9,
                                            objectFit: 'cover'
                                        }}/>
                                    </div>
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li><LocationMap/></li>
                                        </ul>
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

export default EventSection;