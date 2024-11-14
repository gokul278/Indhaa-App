import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assests/images/01-Banner.jpeg";
import banner2 from "../../assests/images/02-Banner.jpeg";
import banner3 from "../../assests/images/03-Banner.jpeg";

const CarouselImage = () => {
  return (
    <div style={{ overflow: "hidden", borderRadius: "30px" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        stopOnHover={false}
        interval={3000}
        preventMovementUntilSwipeScrollTolerance
        swipeScrollTolerance={50}
      >
        <div>
          <img
            style={{
              width: "100%",
              height: "150px",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
            alt=""
            src={banner1}
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "150px",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
            alt=""
            src={banner1}
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "150px",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
            alt=""
            src={banner3}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselImage;
