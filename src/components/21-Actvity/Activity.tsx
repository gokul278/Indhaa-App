import React, { useState } from "react";
import {
  IonContent,
  IonFooter,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import cart1 from "../../assests/images/Cart/1.png";
import cart2 from "../../assests/images/Cart/2.png";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import hotel1 from "../../assests/images/Hotel/1.png";

function Activity() {
  const [selectedSegment, setSelectedSegment] = useState("orders");

  const [cartData, setCardData] = useState([
    {
      name: "Chicken Noodles",
      rating: "4.0",
      price: "90",
      img: cart2,
      totalrating: "22",
    },
    {
      name: "Hotel 1",
      rating: "4.5",
      location: "Salem, Tamil Nadu",
      img: hotel1,
      totalrating: "155",
    },
  ]);

  const [favoriteData, setFavoriteData] = useState([
    {
      name: "Chicken Noodles",
      rating: "4.0",
      price: "90",
      img: cart1,
      totalrating: "22",
      quantity: 1,
      order: "pending",
    },
    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      totalrating: "155",
      quantity: 2,
      order: "completed",
    },
    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      totalrating: "155",
      quantity: 2,
      order: "cancelled",
    },
  ]);

  return (
    <IonPage>
      <IonContent>
        <div style={{ width: "100%", height: "92vh", position: "absolute" }}>
          <div
            style={{
              width: "100%",
              height: "10vh",
              background: "#fff",
              position: "fixed",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <IonSegment
                value={selectedSegment}
                mode="ios"
                onIonChange={(e: any) => setSelectedSegment(e.detail.value)}
              >
                <IonSegmentButton
                  value="orders"
                  className={
                    selectedSegment === "orders" ? "active-segment" : ""
                  }
                >
                  <IonLabel>Recently Viewed</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton
                  value="favorite"
                  className={
                    selectedSegment === "favorite" ? "active-segment" : ""
                  }
                >
                  <IonLabel>Orders</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
          </div>

          <div style={{ width: "100%", height: "92vh", overflowX: "auto" }}>
            {selectedSegment === "orders" && (
              <>
                <div
                  className="segment-content"
                  style={{ marginTop: "40px", padding: "10px" }}
                >
                  <div
                    style={{
                      marginTop: "30px",
                      marginBottom: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {cartData.map((element) => (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "10px",
                          padding: "20px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "-10px",
                          }}
                        >
                          <div
                            style={{
                              width: "25px",
                              height: "25px",
                              background: "#f5f5f5",
                              borderRadius: "50%",
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "23px",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <IoIosClose />
                          </div>
                        </div>
                        <div style={{ width: "100%", display: "flex" }}>
                          <div
                            style={{
                              width: "65%",
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{ fontSize: "16px", fontWeight: "700" }}
                            >
                              {element.name}
                            </div>
                            <div style={{ display: "flex" }}>
                              <div
                                style={{
                                  width: "45px",
                                  display: "flex",
                                  justifyContent: "center",
                                  background: "green",
                                  color: "#fff",
                                  paddingTop: "2px",
                                  paddingBottom: "2px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                }}
                              >
                                {element.rating}
                                <div style={{ marginLeft: "5px" }}>
                                  <FaStar style={{ fontSize: "12px" }} />
                                </div>
                              </div>
                              <div
                                style={{
                                  fontSize: "12px",
                                  marginTop: "2px",
                                  marginLeft: "5px",
                                }}
                              >
                                {element.totalrating} ratings
                              </div>
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "#666666",
                              }}
                            >
                              {element.price ? (
                                <>₹{element.price}</>
                              ) : (
                                <>{element.location}</>
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "35%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                                objectFit: "cover",
                                objectPosition: "center",
                              }}
                              src={element.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            {selectedSegment === "favorite" && (
              <>
                {" "}
                <div
                  className="segment-content"
                  style={{ marginTop: "40px", padding: "10px" }}
                >
                  <div
                    style={{
                      marginTop: "30px",
                      marginBottom: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {favoriteData.map((element) => (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          borderRadius: "10px",
                          padding: "20px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "-10px",
                          }}
                        >
                          <div
                            style={{
                              width: "25px",
                              height: "25px",
                              background: "#f5f5f5",
                              borderRadius: "50%",
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "23px",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <IoIosClose />
                          </div>
                        </div>
                        <div style={{ width: "100%", display: "flex" }}>
                          <div
                            style={{
                              width: "65%",
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{ fontSize: "16px", fontWeight: "700" }}
                            >
                              {element.name}
                            </div>
                            <div style={{ display: "flex" }}>
                              <div
                                style={{
                                  width: "45px",
                                  display: "flex",
                                  justifyContent: "center",
                                  background: "green",
                                  color: "#fff",
                                  paddingTop: "2px",
                                  paddingBottom: "2px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                }}
                              >
                                {element.rating}
                                <div style={{ marginLeft: "5px" }}>
                                  <FaStar style={{ fontSize: "12px" }} />
                                </div>
                              </div>
                              <div
                                style={{
                                  fontSize: "12px",
                                  marginTop: "2px",
                                  marginLeft: "5px",
                                }}
                              >
                                {element.totalrating} ratings
                              </div>
                            </div>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "#666666",
                              }}
                            >
                              ₹{element.price} x {element.quantity} = ₹
                              {parseInt(element.price) * element.quantity}
                            </div>
                            {element.order === "completed" ? (
                              <div
                                style={{
                                  fontSize: "14px",
                                  color: "green",
                                  fontWeight: "900",
                                }}
                              >
                                Delivered !
                              </div>
                            ) : element.order === "pending" ? (
                              <div
                                style={{
                                  fontSize: "14px",
                                  color: "#FF8000",
                                  fontWeight: "900",
                                }}
                              >
                                Yet to be Delivered
                              </div>
                            ) : element.order === "cancelled" ? (
                              <div
                                style={{
                                  fontSize: "14px",
                                  color: "red",
                                  fontWeight: "900",
                                }}
                              >
                                Cancelled
                              </div>
                            ) : null}
                          </div>
                          <div
                            style={{
                              width: "35%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "10px",
                              }}
                              src={element.img}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Activity;
