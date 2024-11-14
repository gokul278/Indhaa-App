import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import "./Profile.css";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineLanguage } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import {
  IoAlertCircleOutline,
  IoSettingsOutline,
  IoFastFoodOutline,
} from "react-icons/io5";
import { IoIosHeartEmpty, IoMdLogOut } from "react-icons/io";
import { PiAddressBook } from "react-icons/pi";
import { LuBadgePercent } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";

const Profile: React.FC = () => {
  const options = [
    { icon: <MdOutlineLanguage />, name: "Choose Language", path: "/language" },
    { icon: <BsInfoCircle />, name: "About", path: "/language" },
    { icon: <FaRegEdit />, name: "Send feedback", path: "/language" },
    {
      icon: <IoAlertCircleOutline />,
      name: "Report a safety emergency",
      path: "/language",
    },
    { icon: <IoSettingsOutline />, name: "Settings", path: "/language" },
    { icon: <IoMdLogOut />, name: "Log out", path: "/language" },
  ];
  const foods = [
    { icon: <IoFastFoodOutline />, name: "Your orders", path: "/language" },
    { icon: <IoIosHeartEmpty />, name: "Favorite orders", path: "/language" },
    { icon: <PiAddressBook />, name: "Address book", path: "/language" },
  ];
  const coupons = [
    { icon: <LuBadgePercent />, name: "Collected coupons", path: "/language" },
    {
      icon: <RiDiscountPercentFill />,
      name: "Apply membership coupons",
      path: "/language",
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <div style={{ width: "100%", height: "93vh" }}>
          <div style={{ padding: "10px" }}>
            <div
              style={{
                height: "20vh",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                borderRadius: "20px",
              }}
            >
              <div className="SubContainer1">
                <div
                  style={{
                    width: "30%",
                    height: "20vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="user-avatar">G</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    width: "70%",
                    gap: "7px",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                    GOKUL
                  </div>
                  <div style={{ fontSize: "16px" }}>gokulhk278@gmail.com</div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#d90216",
                      display: "flex",
                    }}
                  >
                    View activity
                    <div style={{ marginLeft: "5px", marginTop: "2px" }}>
                      {" "}
                      <FaCaretRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: "10px" }}>
            <div style={{ height: "68vh", overflow: "auto" }}>
              <div className="Container2" style={{ marginTop: "10px" }}>
                <div className="option-list">
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Food Orders
                  </p>
                  {foods.map((food, index) => (
                    <div className="option-item" key={index}>
                      <div className="content1">
                        <span
                          style={{
                            background: "#e0e0e0",
                            padding: "2px",
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {food.icon}
                        </span>
                        <span
                          style={{
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "16px",
                          }}
                        >
                          {food.name}
                        </span>
                      </div>
                      <div className="content2">
                        <span
                          style={{
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {<FaAngleRight />}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="Container2">
                <div className="option-list">
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Coupons
                  </p>
                  {coupons.map((coupon, index) => (
                    <div className="option-item" key={index}>
                      <div className="content1">
                        <span
                          style={{
                            background: "#e0e0e0",
                            padding: "2px",
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {coupon.icon}
                        </span>
                        <span
                          style={{
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "16px",
                          }}
                        >
                          {coupon.name}
                        </span>
                      </div>
                      <div className="content2">
                        <span
                          style={{
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {<FaAngleRight />}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="Container2">
                <div className="option-list">
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    More
                  </p>
                  {options.map((option, index) => (
                    <div className="option-item" key={index}>
                      <div className="content1">
                        <span
                          style={{
                            background: "#e0e0e0",
                            padding: "2px",
                            borderRadius: "50%",
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {option.icon}
                        </span>
                        <span
                          style={{
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "16px",
                          }}
                        >
                          {option.name}
                        </span>
                      </div>
                      <div className="content2">
                        <span
                          style={{
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {<FaAngleRight />}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
