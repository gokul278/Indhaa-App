import { IonContent, IonPage, IonRouterOutlet } from "@ionic/react";
import React, { useState } from "react";
import { FaArrowLeft, FaFonticonsFi } from "react-icons/fa";
import "./Chooselanguage.css";
import english from "./../../../../assests/images/Places/English.png";
import tamil from "./../../../../assests/images/Places/Tamil.png";
import telugu from "./../../../../assests/images/Places/Telugu.png";
import kerala from "./../../../../assests/images/Places/Kerala.png";
import hindi from "./../../../../assests/images/Places/Hindi.png";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";

const Chooselanguage: React.FC = () => {
  const history = useHistory();
  const options = [
    { name: "English", image: english },
    { name: "தமிழ்", image: tamil },
    { name: "हिंदी", image: hindi },
  ];

  const [language, setLanguage] = useState("English");

  return (
    <IonPage>
      <IonContent>
        <div className="CLMainContainer">
          <div className="CLContainer1">
            <button className="CLback-button">
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
              Select Language
            </button>
          </div>

          <div className="CLContainer2">
            {options.map((option, index) => (
              <div
                className={`CLoption-item ${
                  language === option.name ? "selected-item" : null
                }`}
                onClick={() => {
                  setLanguage(option.name);
                }}
              >
                <div className="CLcontent1">
                  <span style={{ fontSize: "Larger", padding: "10px" }}>
                    {option.name}
                  </span>
                  <img
                    src={option.image}
                    alt={`${option.name} icon`}
                    className="language-icon"
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: "10vh" }}>
            <div className="button-con">
              {" "}
              <button className="But">Confirm</button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chooselanguage;
