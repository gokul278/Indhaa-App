import { IonContent, IonPage, IonToast } from "@ionic/react";
import React, { useState } from "react";
import "./CollectedCoupons.css";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";
import { backspace, backspaceOutline } from "ionicons/icons";
import { PiSelectionBackground } from "react-icons/pi";

interface Coupon {
  img: string;
  name: string;
  offer: string;
  expiresDays: string;
  expiresDate: string;
  description: string;
  coupon: string;
  terms: { points: string }[];
  websiteLink: string;
}

const CollectedCoupons: React.FC = () => {
  const history = useHistory();
  const couponData: Coupon[] = [
    {
      img: "",
      name: "ixigo",
      offer: "Up to ₹6000 Off!",
      expiresDays: "45",
      expiresDate: "30th December 2024",
      description: "India's leading flight booking platform",
      coupon: "XYHNSGD1212S",
      terms: [{ points: "Coupon is valid for all users" }],
      websiteLink: "https://www.google.com/",
    },
    {
      img: "",
      name: "abc",
      offer: "Up to ₹1000 Off!",
      expiresDays: "90",
      expiresDate: "30th Jan 2025",
      description: "India's ABC",
      coupon: "234DW234FVD",
      terms: [
        { points: "Coupon is valid for all users" },
        {
          points: "Coupon is Valid",
        },
      ],
      websiteLink: "https://www.google.com/",
    },
  ];

  const [modelStatus, setModelStatus] = useState(false);
  const [modelData, setModelData] = useState<Coupon | null>(null);

  return (
    <IonPage>
      <IonContent>
        <div>
          <div className="CLContainer1">
            <button className="Tback-button">
              <div style={{ fontSize: "30px" }}>
                <MdArrowBack
                  onClick={() => {
                    history.push("/profile", {
                      direction: "back",
                      animation: "slide",
                    });
                  }}
                />
              </div>{" "}
              Your Coupons
            </button>
          </div>
          <div>
            <p className="brand">BRAND COUPONS</p>
          </div>
          <div className="coupon-container">
            {couponData.map((element) => (
              <div className="coupon-card" key={element.name}>
                <div className="coupon-logo">
                  <img
                    src="https://i.pinimg.com/236x/4c/5e/ef/4c5eef5c4b33145fd48360f6d61eb1f0.jpg"
                    alt="ixigo logo"
                  />
                </div>
                <div className="coupon-info">
                  <h3>{element.name}</h3>
                  <h4>{element.offer}</h4>
                  <p>Expires in {element.expiresDays} days</p>
                </div>
                <div className="coupon-footer">
                  <div
                    onClick={() => {
                      setModelStatus(true);
                      setModelData(element);
                    }}
                  >
                    View details &gt;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {modelStatus && modelData && (
          <div className="overlay">
            <div className="header">
              <button
                onClick={() => setModelStatus(false)}
                className="close-button"
              >
                <FaTimes />
              </button>
            </div>

            <div className="coupon-modal">
              <div className="coupon-logo">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ixigo_Logo.png/600px-Ixigo_Logo.png"
                  alt="ixigo logo"
                />
              </div>
              <div className="coupon-info">
                <h3>{modelData.name}</h3>
                <h4>{modelData.offer}</h4>
                <p>Valid till {modelData.expiresDate}</p>
              </div>
            </div>

            <div className="coupon-details">
              <h3>Coupon Details</h3>
              <p className="about">About {modelData.name}</p>
              <p className="description">{modelData.description}</p>
              <div className="coupon-code-container">
                <span className="coupon-code">{modelData.coupon}</span>
                <button
                  className="copy-button"
                  id="open-copymessage"
                  onClick={() =>
                    navigator.clipboard.writeText(modelData.coupon)
                  }
                  style={{ color: "#d90216" }}
                >
                  TAP TO COPY
                </button>
                <IonToast
                  trigger="open-copymessage"
                  message="Coupon Copied!"
                  duration={2000}
                ></IonToast>
              </div>
              <div className="terms">
                <p>Terms & conditions</p>
                {modelData.terms.map((term, index) => (
                  <ul key={index}>
                    <li>{term.points}</li>
                  </ul>
                ))}
              </div>
              <button
                onClick={() => window.open(modelData.websiteLink, "_blank")}
                className="claim-button"
              >
                Visit {modelData.name} to claim
              </button>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CollectedCoupons;
