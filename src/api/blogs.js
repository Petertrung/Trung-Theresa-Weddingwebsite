// images
import blogImg1 from "../images/blog/img-1.jpg";
import blogImg2 from "../images/blog/img-2.jpg";
import blogImg3 from "../images/blog/img-3.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Top 10 wedding gifts.',
        screens: blogImg1,
        description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
        author: 'Loura Sweety',
        create_at: '25 Sep 2021',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Best Photography Idea.',
        screens: blogImg2,
        description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
        author: 'David Luis',
        create_at: '23 Sep 2021',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Wedding Flower Collect.',
        screens: blogImg3,
        description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
        author: 'Jenefer Willy',
        create_at: '21 Sep 2021',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;