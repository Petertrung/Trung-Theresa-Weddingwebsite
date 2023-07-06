import React from 'react'
import {Link} from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle'
import Projects from '../../api/projects'

const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const ProjectSection = (props) => {
    return(
        <section className={`wpo-portfolio-section section-padding ${props.prClass}`}>
            <div className="container">
            <SectionTitle topTitle={'Portfolio'} MainTitle={'Our Amazing Work'}/>
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Projects.map((project, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={project.pimg1} alt=""/>
                                            <div className="hover-content">
                                                <h4><Link onClick={ClickHandler} to={`/project-single/${project.id}`}>{project.title}</Link></h4>
                                                <span>{project.location}- {project.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default ProjectSection;