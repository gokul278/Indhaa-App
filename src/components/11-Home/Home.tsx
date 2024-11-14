import { IonContent, IonPage, IonTitle } from "@ionic/react";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import CarouselImage from "../../pages/Carousel/Carousel";
import "./Home.css";
import { Divider } from "primereact/divider";
import biryani from "../../assests/images/Foods/1.png";
import img2 from "../../assests/images/Foods/2.png";
import img3 from "../../assests/images/Foods/3.png";
import img4 from "../../assests/images/Foods/4.png";
import img5 from "../../assests/images/Foods/5.png";
import img6 from "../../assests/images/Foods/6.png";
import img7 from "../../assests/images/Foods/7.png";
import img8 from "../../assests/images/Foods/8.png";
import user from "../../assests/images/user.png";

import hotel1 from "../../assests/images/Hotel/1.png";
import hotel2 from "../../assests/images/Hotel/2.png";
import hotel3 from "../../assests/images/Hotel/3.png";
import hotel4 from "../../assests/images/Hotel/4.png";
import hotel5 from "../../assests/images/Hotel/5.png";
import hotel6 from "../../assests/images/Hotel/6.png";

import { VscSettings } from "react-icons/vsc";
import { FaSortDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import HotelCard from "../../pages/HotelCard/HotelCard";

const Home = () => {
  const [whatsMind, setWhatsMind] = useState([
    {
      name: "Biryani",
      img: biryani,
      path: "/biryani",
    },
    {
      name: "Dosa",
      img: img2,
      path: "/2",
    },
    {
      name: "Chicken",
      img: img3,
      path: "/3",
    },
    {
      name: "Noodles",
      img: img4,
      path: "/3",
    },
    {
      name: "Idli",
      img: img5,
      path: "/3",
    },
    {
      name: "Parotta",
      img: img6,
      path: "/3",
    },
    {
      name: "Paneer",
      img: img7,
      path: "/3",
    },
    {
      name: "Soup",
      img: img8,
      path: "/3",
    },
  ]);

  const hotel = [
    {
      name: "Hotel 1",
      img: { hotel1, hotel2, hotel3 },
      path: "/hotel1",
      rating: "4.0",
    },
    {
      name: "Hotel 2",
      img: { hotel4, hotel5, hotel6 },
      path: "/hotel2",
      rating: "4.5",
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  color: "#d90216",
                }}
              >
                <CiLocationOn style={{ fontSize: "30px" }} />
              </div>
              <div>
                <div
                  style={{
                    background: "#f6f6f6",
                    width: "70px",
                    fontSize: "14px",
                    fontWeight: "700",
                    textAlign: "center",
                    padding: "6px",
                    borderRadius: "10px",
                  }}
                >
                  Address
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    marginTop: "4px",
                    display: "flex",
                  }}
                >
                  <div>Gugai, Salem, Tamil Nadu</div>
                  <div style={{ marginTop: "3px", marginLeft: "5px" }}>
                    <FaAngleDown />
                  </div>
                </div>
              </div>
            </div>
            <img style={{ width: "40px", height: "40px" }} src={user} />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                background: "#f6f6f6",
                marginTop: "1vh",
                borderRadius: "50px",
                display: "flex",
                padding: "5px",
              }}
            >
              <div
                style={{
                  color: "#000",
                  width: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "10px",
                }}
              >
                <CiSearch style={{ color: "#aaa", fontSize: "25px" }} />
              </div>
              <input
                className="custom-input"
                style={{ width: "90%" }}
                type="text"
                placeholder="Search for Foods"
              />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <CarouselImage />
        </div>
        <div
          style={{
            fontSize: "16px",
            color: "#666666",
            letterSpacing: "2px",
            fontWeight: 900,
          }}
        >
          <Divider
            layout="horizontal"
            className="flex md:hidden"
            align="center"
          >
            <div style={{ fontSize: "14px" }}>WHAT'S ON YOUR MIND ?</div>
          </Divider>
        </div>
        <div style={{ display: "flex", overflow: "auto" }}>
          {whatsMind.map((element, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  background: `url(${element.img})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div style={{ fontSize: "14px", fontWeight: "400" }}>
                {element.name}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#666666",
            letterSpacing: "2px",
            fontWeight: 900,
            marginTop: "30px",
          }}
        >
          <Divider
            layout="horizontal"
            className="flex md:hidden"
            align="center"
          >
            <div style={{ fontSize: "14px" }}>ALL RESTAURANTS</div>
          </Divider>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              width: "75px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "800",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "2px",
              fontSize: "13px",
            }}
          >
            <div style={{ marginTop: "5px" }}>
              <VscSettings />
            </div>
            &nbsp;Sort
            <div style={{ marginLeft: "3px" }}>
              <FaSortDown />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "800",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "2px",
              fontSize: "13px",
            }}
          >
            <div style={{ width: "90px", textAlign: "center" }}>
              Prime Match
            </div>
          </div>
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "800",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "2px",
              fontSize: "13px",
            }}
          >
            <div style={{ width: "60px", textAlign: "center" }}>Nearest</div>
          </div>
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "800",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "2px",
              fontSize: "13px",
            }}
          >
            <div style={{ width: "80px", textAlign: "center" }}>
              Great Offers
            </div>
          </div>
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "800",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "2px",
              fontSize: "13px",
            }}
          >
            <div style={{ width: "80px", textAlign: "center" }}>
              Rating 4.0 +
            </div>
          </div>
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "800",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "2px",
              fontSize: "13px",
            }}
          >
            Cuisines
            <div style={{ marginLeft: "3px" }}>
              <FaSortDown />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          {hotel.map((element) => (
            <HotelCard data={{ ...element, img: Object.values(element.img) }} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
