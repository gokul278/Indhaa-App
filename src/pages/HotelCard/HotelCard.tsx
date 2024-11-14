import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaStar } from "react-icons/fa";

interface HotelCardProps {
  name: string;
  img: string[]; // Array of image URLs
  path: string;
  rating: string;
}

const HotelCard: React.FC<{ data: HotelCardProps }> = ({ data }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        borderRadius: "30px",
        marginBottom: "30px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
        >
          {data.img.map((element) => (
            <div>
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundPosition: "center",
                  objectFit: "cover",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                alt=""
                src={element}
              />
            </div>
          ))}
        </Carousel>
        <div
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "900" }}>{data.name}</div>
          <div
            style={{
              width: "50px",
              display: "flex",
              justifyContent: "center",
              background: "green",
              color: "#fff",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            {data.rating}
            <div style={{ marginLeft: "5px" }}>
              <FaStar style={{ fontSize: "12px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
