import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import { Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Main Home',
                link: '/home'
            },
            {
                id: 13,
                title: 'Announcement S1',
                link: '/home2'
            },
            {
                id: 14,
                title: 'Announcement S2',
                link: '/home3'
            },
            {
                id: 12,
                title: 'Wedding Planner',
                link: '/home4'
            },
            {
                id: 16,
                title: 'Shop Home',
                link: '/home5'
            },
            {
                id: 17,
                title: 'Invitation',
                link: '/home6'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/1'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/1'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/1'
            },
        ]
    },

    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    <div className="menu-close">
                         <div className="clox" onClick={this.menuHandler}><i className="ti-close"></i></div>
                    </div>

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <NavLink onClick={ClickHandler} to={item.link}>{item.title}</NavLink>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><NavLink onClick={ClickHandler} className="active" to={submenu.link}>{submenu.title}</NavLink></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                        <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100}  duration={500} >Couple</Link></li>
                        <li><Link activeClass="active" to="story" spy={true} smooth={true}  duration={500} >Story</Link></li>
                        <li><Link activeClass="active" to="gallery" spy={true} smooth={true}  duration={500} >Gallery</Link></li>
                        <li><Link activeClass="active" to="RSVP" spy={true} smooth={true}  duration={500} >RSVP</Link></li>
                        <li><Link activeClass="active" to="events" spy={true} smooth={true} offset={-80}  duration={500} >Events</Link></li>
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}>
                    <button type="button" className="navbar-toggler open-btn">
                            <span className="icon-bar first-angle"></span>
                            <span className="icon-bar middle-angle"></span>
                            <span className="icon-bar last-angle"></span>
                    </button>
                </div>
            </div>
        )
    }
}
