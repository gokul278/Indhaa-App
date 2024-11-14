import React, { useEffect, useState } from "react";
import image from "../../assests/images/image.png";
import {
  IonActionSheet,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Splash.css";
import { Link, useHistory } from "react-router-dom";
import { SiTicktick } from "react-icons/si";

const Splash = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear timeout if component unmounts before timeout finishes
    return () => clearTimeout(timer);
  }, []);

  const history = useHistory();

  const language = ["Tamil", "English", "Hindi"];

  const isDisabled = true;

  const [chooseLanguage, setChooseLanguage] = useState("");

  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            background: "#d90216",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            position: "absolute",
          }}
        >
          <div
            style={{
              background: `url(${image}) no-repeat`,
              width: "150px",
              height: "150px",
            }}
          ></div>
        </div>

        {loading ? (
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: "20px",
              zIndex: "100",
              position: "relative",
            }}
          >
            <div
              className="footer "
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                width: "100%",
                borderRadius: "50px",
              }}
            >
              <IonImg
                style={{ width: "50px", height: "50px" }}
                src={image}
              ></IonImg>
              <span
                style={{
                  width: "auto",
                  height: "50px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "#000",
                }}
              >
                Made in Qatar with love ❤️
              </span>
            </div>
          </div>
        ) : (
          <div
            className="languageSettings"
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "flex-end",
              zIndex: "100",
              position: "relative",
            }}
          >
            <div
              style={{
                background: "#fff",
                width: "100%",
                height: "40vh",
                padding: "20px",
                justifyContent: "center",
                textAlign: "center",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            >
              <p
                style={{
                  height: "5vh",
                  fontSize: "large",
                  color: "black",
                  fontWeight: "700",
                  textAlign: "start",
                }}
              >
                Select Your Language
              </p>
              <div
                style={{
                  height: "15vh",
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="languages"
              >
                {language.map((element, index) => (
                  <div
                    className="linkbutton"
                    style={{
                      color: chooseLanguage === element ? "#d90216" : "#666666",
                    }}
                    key={index}
                    onClick={() => {
                      setChooseLanguage(element);
                    }}
                  >
                    <p>{element}</p>
                    <div>
                      <SiTicktick />
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  background: chooseLanguage ? "#d90216" : "#d3d3d3",
                  width: "100%",
                  height: "7vh",
                  marginTop: "3vh",
                  borderRadius: "10px",
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: chooseLanguage ? "pointer" : "not-allowed",
                  opacity: chooseLanguage ? 1 : 0.6,
                }}
                onClick={() => {
                  chooseLanguage ? history.push("/login") : null;
                }}
              >
                <p>Next</p>
              </div>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Splash;
