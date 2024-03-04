import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle'
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import sImg1 from '../../images/story/1.jpg'
import sImg2 from '../../images/story/ask2.png'
import sImg3 from '../../images/story/3.jpg'
import sImg4 from '../../images/story/4.jpg'

import sIcon1 from '../../images/story/1.png'
import sIcon2 from '../../images/story/2.png'
import sIcon3 from '../../images/story/3.png'
import sIcon4 from '../../images/story/4.png'


import Shape from '../../images/story/shape.jpg'
import { Link } from '@material-ui/core';


const StorySection = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }


    const Tabs = [
        {
            Id: '1',
            tabItem: 'Our Story',
        },
        {
            Id: '2',
            tabItem: 'Offical Dating',
        },
        {
            Id: '3',
            tabItem: 'Marrige Proposal',
        },
        {
            Id: '4',
            tabItem: 'Our Đám Hỏi',
        }
    ]

    const Story = [
        {
            Id: '1',
            sImg: sImg1,
            sIcon:sIcon1,
            Shape:Shape,
            sTitle:'Our Story',
            date:'',
            description:'I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach'
        },
        {
            Id: '2',
            sImg: sImg2,
            sIcon:sIcon2,
            Shape:Shape,
            sTitle:'Offically Dating',
            date:'Apr 26,2021',
            description:'I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach'
        },
        {
            Id: '3',
            sImg: sImg3,
            sIcon:sIcon3,
            Shape:Shape,
            sTitle:'Marige Proposal',
            date:'July 28,2023',
            description:'I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach'
        },
        {
            Id: '4',
            sImg: sImg4,
            sIcon:sIcon4,
            Shape:Shape,
            sTitle:'Our Đám Hỏi',
            date:'Sep 10,2023',
            description:'I must explain to you how all this mistaken idea of denouing pleasure and praising pain was born and I will give you com acount of system,the actual teach'
        }
    ]



    return (

        <section className="wpo-story-section section-padding" id="story">
            <div className="container">
                <SectionTitle MainTitle={'Our love story'}/>
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-12 col-12">
                        <div className="tab-area">
                            <div className="tablinks">
                                <Nav tabs className="service-thumbs-outer">
                                    {Tabs.map((tab, titem) => (
                                        <NavItem key={titem}>
                                            <NavLink
                                                className={`service-thumb ${classnames({ active: activeTab === tab.Id })}`}
                                                onClick={() => { toggle(tab.Id); }}
                                            >
                                                {tab.tabItem}
                                                <span className="number">{tab.tabNumber}</span>
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </Nav>
                            </div>
                            <TabContent activeTab={activeTab}>
                                {Story.map((story, Sitem) => (
                                    <TabPane tabId={story.Id} key={Sitem}>
                                        <div className="wpo-story-item">
                                            <div className="wpo-story-img">
                                                <img src={story.sImg} alt="" style={{
                                                    aspectRatio: 16/9,
                                                    objectFit: 'cover'
                                                }}/>
                                            </div>
                                            <div className="wpo-story-content">
                                                <div className="wpo-story-content-inner">
                                                    <span><img src={story.sIcon} alt=""/></span>
                                                    <h2>{story.sTitle}</h2>
                                                    <span>{story.date}</span>
                                                    <p>{story.description} <Link href={'#/blog/' + story.Id}>Read More..</Link></p>
                                                    {/* <div className="border-shape">
                                                        <img src={story.Shape} alt=""/>
                                                    </div> */}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                ))}
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default StorySection;