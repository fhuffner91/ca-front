import { Carousel, CarouselItem } from "react-bootstrap";

export default function Carrossel(){
    return(
        <Carousel>
        <CarouselItem>
          <img
            className="d-block w-100"
            src="/images/bolo.jpg"
            alt="First slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            src="/images/hotdog.jpg"
            alt="First slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block w-100"
            src="/images/pizza.jpg"
            alt="First slide"
          />
        </CarouselItem>
      </Carousel>
    )
}