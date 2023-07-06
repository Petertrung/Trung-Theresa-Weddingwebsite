import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import BlogSingle from '../../components/BlogDetails'
import Scrollbar from '../../components/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Footer from '../../components/footer';

const BlogDetailsFull =() => {

    const { id } = useParams()

    const BlogDetails = blogs.find(item => item.id === id)

    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default BlogDetailsFull;