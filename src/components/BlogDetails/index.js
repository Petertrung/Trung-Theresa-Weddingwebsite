import React from 'react';
import { Link } from 'react-router-dom'
// import gl1 from '../../images/blog/img-3.jpg'
// import gl2 from '../../images/blog/img-2.jpg'
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom'
//import BlogSidebar from '../../components/BlogSidebar'

const BlogSingle = (props) => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)


    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-12 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={BlogDetails.blogSingleImg} alt="" />
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-user"></i> By <Link to="/blog-single/1">{BlogDetails.author}</Link> </li>
                                        <li><i className="fi flaticon-calendar"></i> {BlogDetails.create_at}</li>
                                    </ul>
                                </div>
                                <h2>{BlogDetails.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: BlogDetails.article }} />
                            </div>

                            {/* <div className="tag-share clearfix">
                                <div className="tag">
                                    <span>Share: </span>
                                    <ul>
                                        <li><Link to="/blog-single/1">Planning</Link></li>
                                        <li><Link to="/blog-single/1">photography</Link></li>
                                        <li><Link to="/blog-single/1">creative</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/* <BlogSidebar blLeft={props.blLeft}/> */}
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
