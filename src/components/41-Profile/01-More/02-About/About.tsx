import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./About.css";
import { IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router";
import { MdArrowBack } from "react-icons/md";
import { IonContent, IonPage } from "@ionic/react";

const About: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div>
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
              </div>
              About
            </button>
          </div>

          <div className="AContainer" style={{ marginTop: "-30px" }}>
            <div
              onClick={() => {
                history.push("/terms", {
                  direction: "forward",
                  animation: "slide",
                });
              }}
              className="Para"
              style={{ borderBottom: "1px solid rgb(209 203 203)" }}
            >
              {" "}
              <p style={{ width: "100%" }}>
                <div>Terms of Service</div>{" "}
                <div>
                  <IoIosArrowForward />
                </div>{" "}
              </p>
            </div>
            <div
              className="Para"
              style={{ borderBottom: "1px solid rgb(209 203 203)" }}
            >
              <p>
                App version <br />
                v18.6.1 Live
              </p>
            </div>{" "}
            <div
              onClick={() => {
                history.push("/open", {
                  direction: "forward",
                  animation: "slide",
                });
              }}
              style={{ borderBottom: "1px solid rgb(209 203 203)" }}
              className="Para"
            >
              {" "}
              <p style={{ width: "100%" }}>
                <div>Open Source Libraries</div>{" "}
                <div>
                  <IoIosArrowForward />
                </div>
              </p>
            </div>
            <div
              onClick={() => {
                history.push("/license", {
                  direction: "forward",
                  animation: "slide",
                });
              }}
              className="Para"
            >
              {" "}
              <p style={{ width: "100%" }}>
                <div>Licenses and Registrations</div>{" "}
                <div>
                  <IoIosArrowForward />
                </div>
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
