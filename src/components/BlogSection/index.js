import React from 'react'
import {Link} from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle'
import blogs from '../../api/blogs'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className={`wpo-blog-section section-padding ${props.blogClass}`}>
            <div className="container">
                <SectionTitle topTitle={'News'} MainTitle={'From Our Blog'}/>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.map((blog, Bitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt=""/>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li>By <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.author}</Link></li>
                                            <li>{blog.create_at}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h2>
                                        <p>{blog.description}</p>
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

export default BlogSection;