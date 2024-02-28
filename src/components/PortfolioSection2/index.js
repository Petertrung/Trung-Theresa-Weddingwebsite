import React from 'react'
import SectionTitle from '../SectionTitle'
//import pImg1 from '../../images/portfolio/1.jpg'
//import pImg2 from '../../images/portfolio/2.jpg'
import pImg3 from '../../images/portfolio/3.jpg'
//import pImg4 from '../../images/portfolio/4.jpg'
import pImg5 from '../../images/portfolio/5.jpg'
import pImg6 from '../../images/portfolio/6.jpg'
import pImg7 from '../../images/portfolio/7.jpg'
import pImg8 from '../../images/portfolio/8.jpg'
//import pImg9 from '../../images/portfolio/9.jpg'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const Portfolios = [
    {
        Pimg:'https://onedrive.live.com/embed?resid=8E2E516E19319715%2144691&authkey=%21AAs6rsYvblmUf5Y&width=3648&height=2736',
    },
    {
        Pimg:'https://onedrive.live.com/embed?resid=8E2E516E19319715%2144679&authkey=%21AB3g11m-zAmi1kc&width=3648&height=2736',
    },
    {
        Pimg:'https://onedrive.live.com/embed?resid=8E2E516E19319715%2144683&authkey=%21AHfa_Fh4HM5wCzU&width=3648&height=2736',
    },
    {
        Pimg:'https://onedrive.live.com/embed?resid=8E2E516E19319715%2144716&authkey=%21APje5jF7aBOJrl8&width=5184&height=2920',
    },
    {
        Pimg:'https://onedrive.live.com/embed?resid=8E2E516E19319715%2144601&authkey=%21AONqV0UUDfMwBYs&width=4640&height=2603',
    },
    {
        Pimg:pImg5,
    },
    {
        Pimg:pImg7,
    },
    {
        Pimg:pImg8,
    },
    {
        Pimg:'https://onedrive.live.com/embed?resid=8E2E516E19319715%2144688&authkey=%21AHRGWDHEHsXsbtE&width=3648&height=2736',
    },
    {
        Pimg:pImg6,
    },
    {
        Pimg:'https://onedrive.live.com/embed?resid=8E2E516E19319715%2144605&authkey=%21ALR3tl8QrWFq6js&width=6960&height=3904',
    },
    {
        Pimg:pImg3,
    },
] 

const PortfolioSection2 = (props) => {
    return(
        <section className={`wpo-portfolio-section section-padding ${props.pClass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Captured Moments'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Portfolios.map((portfolio, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <ReactFancyBox
                                                thumbnail={portfolio.Pimg}
                                                image={portfolio.Pimg}
                                                />
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

export default PortfolioSection2;