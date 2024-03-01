// images
import sImg1 from  '../images/story/1.jpg'
import sImg2 from '../images/story/ask2.png'
import sImg3 from '../images/story/3.jpg'
//import sImg4 from '../../images/story/4.jpg'

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Our Story',
        screens: sImg1,
        description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
        author: 'Loura Sweety',
        create_at: '25 Sep 2021',
        blogSingleImg:sImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Offical Dating',
        screens: sImg2,
        description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
        author: 'David Luis',
        create_at: '23 Sep 2021',
        blogSingleImg:sImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Marige Proposal',
        screens: sImg3,
        description: 'Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.',
        author: 'Jenefer Willy',
        create_at: '21 Sep 2021',
        blogSingleImg:sImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;