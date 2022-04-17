import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Be Fit And Fine</h3>
                    <p>Fitness is the key to success, be fit and be fine.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Hard-working!</h3>
                    <p>Hard work makes a man perfect, works harder for a better end.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-50"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Good Instructor</h3>
                    <p>A good instructor makes your season enjoyable and can make you Jon sina too.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;