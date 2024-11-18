import React, { useState } from "react";
import {
  IonContent,
  IonFooter,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import "./Cart.css";
import cart1 from "../../assests/images/Cart/1.png";
import cart2 from "../../assests/images/Cart/2.png";
import { FaStar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Cart() {
  const [selectedSegment, setSelectedSegment] = useState("orders");

  const [cartData, setCardData] = useState([
    {
      name: "Chicken Noodles",
      rating: "4.0",
      price: "90",
      img: cart1,
      quantity: 1,
      totalrating: "22",
      bookmark: true,
    },
    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      quantity: 2,
      totalrating: "155",
      bookmark: false,
    },

    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      quantity: 2,
      totalrating: "155",
      bookmark: false,
    },

    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      quantity: 2,
      totalrating: "155",
      bookmark: false,
    },
    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      quantity: 2,
      totalrating: "155",
      bookmark: false,
    },
    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      quantity: 2,
      totalrating: "155",
      bookmark: false,
    },
    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      quantity: 2,
      totalrating: "155",
      bookmark: false,
    },

    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      quantity: 2,
      totalrating: "155",
      bookmark: false,
    },
  ]);

  const [favoriteData, setFavoriteData] = useState([
    {
      name: "Chicken Noodles",
      rating: "4.0",
      price: "90",
      img: cart1,
      totalrating: "22",
      cart: true,
    },
    {
      name: "Chicken 65",
      rating: "4.5",
      price: "150",
      img: cart2,
      totalrating: "155",
      cart: false,
    },
  ]);

  const handleQuantityChange = (index: any, action: any) => {
    const updatedCartData = cartData.map((item, i) => {
      if (i === index) {
        if (action === "increment") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "decrement" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCardData(updatedCartData);
  };

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
                  <IonLabel>Your Cart</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton
                  value="favorite"
                  className={
                    selectedSegment === "favorite" ? "active-segment" : ""
                  }
                >
                  <IonLabel>Favorite</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>
          </div>

          <div style={{ width: "100%", height: "92vh", overflowX: "auto" }}>
            {selectedSegment === "orders" && (
              <>
                <div
                  style={{
                    marginTop: "40px",
                    marginBottom: "50px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {cartData.map((element, index) => (
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
                              justifyContent: "center",
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
                            {element.bookmark ? (
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  border: "#ccc solid 1px",
                                  width: "120px",
                                  justifyContent: "center",
                                  padding: "2px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  paddingTop: "4px",
                                }}
                              >
                                <div
                                  style={{ marginTop: "2px", color: "#d90216" }}
                                >
                                  <FaBookmark />
                                </div>
                                <div>Favorited</div>
                              </div>
                            ) : (
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  border: "#ccc solid 1px",
                                  width: "120px",
                                  justifyContent: "center",
                                  padding: "2px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  paddingTop: "4px",
                                }}
                              >
                                <div
                                  style={{ marginTop: "1px", color: "#d90216" }}
                                >
                                  <FaRegBookmark />
                                </div>
                                <div>Add to Favorite</div>
                              </div>
                            )}
                          </div>
                          <div
                            style={{
                              width: "35%",
                              display: "flex",
                              flexDirection: "column",
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
                            <div
                              style={{
                                display: "flex",
                                background: "#d90216",
                                marginTop: "10px",
                                color: "#fff",
                                borderRadius: "5px",
                              }}
                            >
                              {/* Minus Button */}
                              <div
                                style={{
                                  width: "25px",
                                  height: "30px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleQuantityChange(index, "decrement")
                                }
                              >
                                <FaMinus />
                              </div>
                              {/* Quantity Display */}
                              <div
                                style={{
                                  width: "40px",
                                  height: "30px",
                                  fontSize: "16px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                {element.quantity}
                              </div>
                              {/* Plus Button */}
                              <div
                                style={{
                                  width: "25px",
                                  height: "30px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  handleQuantityChange(index, "increment")
                                }
                              >
                                <FaPlus />
                              </div>
                            </div>
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
                              ₹{element.price}
                            </div>
                            {element.cart ? (
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  border: "#ccc solid 1px",
                                  width: "120px",
                                  justifyContent: "center",
                                  padding: "2px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  paddingTop: "4px",
                                }}
                              >
                                <div
                                  style={{
                                    marginTop: "2px",
                                    color: "#d90216",
                                    fontSize: "15px",
                                  }}
                                >
                                  <IoCart />
                                </div>
                                <div
                                  style={{
                                    marginTop: "3px",
                                  }}
                                >
                                  Cart Added
                                </div>
                              </div>
                            ) : (
                              <div
                                style={{
                                  display: "flex",
                                  gap: "10px",
                                  border: "#ccc solid 1px",
                                  width: "120px",
                                  justifyContent: "center",
                                  padding: "2px",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  paddingTop: "4px",
                                }}
                              >
                                <div
                                  style={{ marginTop: "1px", color: "#d90216" }}
                                >
                                  <IoCartOutline />
                                </div>
                                <div>Add to Card</div>
                              </div>
                            )}
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

        {selectedSegment === "orders" ? (
          <div
            style={{
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              top: "83vh",
            }}
          >
            <div
              style={{
                background: "#d90216",
                width: "96%",
                height: "6vh",
                marginTop: "3vh",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <p>Place a Order</p>
            </div>
          </div>
        ) : null}
      </IonContent>
    </IonPage>
  );
}

export default Cart;
