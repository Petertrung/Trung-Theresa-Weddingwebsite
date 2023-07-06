import React from 'react';
import {Link} from 'react-router-dom'
import Services from '../../api/service';
import Projects from '../../api/projects';
import about from '../../images/blog/about-widget.jpg'
import blogs from '../../api/blogs'

const BlogSidebar = (props) => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt=""/>
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {Services.map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title} <span>{service.id}</span></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0,6).map((project, pitem) => (
                            <li key={pitem}><Link onClick={ClickHandler} to={`/project-single/${project.id}`}><img src={project.pimg1} alt=""/></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">photography</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">wedding</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">events</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">creative</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Solution</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">collection</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Idea</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">bride & groom</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                        <h2>How We Can <br/> Help You!</h2>
                        <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
