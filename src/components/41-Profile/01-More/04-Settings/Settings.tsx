import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import "./Settings.css";
import { IonContent, IonPage } from "@ionic/react";
import { MdArrowBack } from "react-icons/md";
const Settings: React.FC = () => {
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
              Settings
            </button>
          </div>

          <div className="AContainer" style={{ marginTop: "-20px" }}>
            <div
              onClick={() => {
                history.push("/terms");
              }}
              className="Para"
              style={{ borderBottom: "1px solid rgb(209 203 203)" }}
            >
              {" "}
              <p>
                Add a Place <br /> In case we're missing something
              </p>
            </div>
            <div
              onClick={() => {
                history.push("/open");
              }}
              style={{ borderBottom: "1px solid rgb(209 203 203)" }}
              className="Para"
            >
              {" "}
              <p>
                Places you've added <br /> See all the places you've added so
                far
              </p>
            </div>
            <div
              onClick={() => {
                history.push("/license");
              }}
              className="Para"
              style={{ borderBottom: "1px solid rgb(209 203 203)" }}
            >
              {" "}
              <p>
                Account settings <br /> Delete your account{" "}
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
