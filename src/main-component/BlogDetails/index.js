import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/footer';


const BlogDetails =() => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)

    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
             <BlogSingle/>
             <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;
