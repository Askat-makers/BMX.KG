import React from 'react';
import { Carousel, Container } from 'react-bootstrap'
import './Slider.css'

const Slider = () => {
    return (
        <div className="carousel-block">
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={'https://cdn.shopify.com/s/files/1/0313/5989/t/9/assets/hero.jpg?v=2309937665646667121'} alt="Winter" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={'https://cdn.shopify.com/s/files/1/0313/5989/t/9/assets/hero.jpg?v=2309937665646667121'} alt="Winter" />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Slider;