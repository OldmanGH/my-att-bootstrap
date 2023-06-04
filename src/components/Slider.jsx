import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img width={400} height={550}
          className="d-block w-100"
          src="./img/first.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Пляж</h3>
          <p>Солнце, море и песок.</p>
            <Link exact to="/form">
              <Button variant="primary">Обратная связь</Button>
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={400} height={550}
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Яхта</h3>
          <p>Отдых в открытом море.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={400} height={550}
          className="d-block w-100"
          src="./img/three.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Бассейн</h3>
          <p>Отель у моря.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider