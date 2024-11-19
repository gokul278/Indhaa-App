import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { Divider } from "primereact/divider";
import biryani from "../../assests/images/Foods/1.png";
import img2 from "../../assests/images/Foods/2.png";
import img3 from "../../assests/images/Foods/3.png";
import img4 from "../../assests/images/Foods/4.png";
import img5 from "../../assests/images/Foods/5.png";
import img6 from "../../assests/images/Foods/6.png";
import img7 from "../../assests/images/Foods/7.png";
import img8 from "../../assests/images/Foods/8.png";

const Search: React.FC = () => {
  const history = useHistory();

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

  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingBottom: "8px",
            background: "#fff",
            zIndex: 100,
          }}
        >
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
              onClick={() => {
                history.push("/home", {
                  direction: "back",
                  animation: "slide",
                });
              }}
            >
              <IoIosArrowBack style={{ color: "#aaa", fontSize: "25px" }} />
            </div>
            <input
              onClick={() => {
                history.push("/search");
              }}
              className="custom-input"
              style={{ width: "90%", height: "4vh" }}
              type="text"
              placeholder="Search for Foods"
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "9vh",
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
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              rowGap: "10px",
            }}
          >
            {whatsMind.map((element, index) => (
              <div
                style={{
                  width: "30vw",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={element.img}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt={element.name}
                />
                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "16px",
                  }}
                >
                  {element.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
