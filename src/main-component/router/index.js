import React from 'react';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ErrorPage from '../ErrorPage'

const AllRoute = () => {

  return (
    <div className="App">
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='404' element={<ErrorPage/>} />
          <Route path='blog/:id' element={<BlogDetails/>} />
          <Route path='blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide/>} />
          <Route path='blog-single-fullwidth/:id' element={<BlogDetailsFull/>} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft/>} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default AllRoute;
