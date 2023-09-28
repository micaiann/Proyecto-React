import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div className='global-carousel'>
			<h2 style={{textAlign:"center"}}>Novedades</h2>
            <br></br>
			<Carousel className='carousel-container'  >
				<div className='carousel-images'>
					<img src="../images/book4.jpg"   alt="image1"/>
					

				</div >
				<div  className='carousel-images'>
					<img src="../images/book7.jpg"   alt="image2" />
					

				</div>
				<div className='carousel-images' >
				
					<img src="../images/book11.jpg"  alt="image3"/>

				</div>
                <div className='carousel-images' >
				
                <img src="../images/book8.jpg"  alt="image3"/>

            </div>
            <div className='carousel-images' >
				
                <img src="../images/book12.jpg"  alt="image3"/>

            </div>
			
			</Carousel>
			</div>
		);
	}
};
