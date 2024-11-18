import { IonContent, IonPage } from "@ionic/react";
import { IonContext } from "@ionic/react/dist/types/contexts/IonContext";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";
import "./SendFeedback.css";

const SendFeedback: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div className="testing">
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
              Send Feedback
            </button>
          </div>
          <div className="SDContainer1" style={{ marginTop: "0px" }}>
            <p
              className="about"
              style={{
                paddingRight: "10px",
                marginTop: "5px",
                fontSize: "14px",
              }}
            >
              Tell us what you love about the app, or what we could be doing
              better.
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "90%",
                  background: "#f5f5f5",
                  marginTop: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "10px",
                  // padding: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    paddingLeft: "10px",
                    color: "#666666",
                  }}
                >
                  Feedback
                </div>
                <input
                  className="custom-input"
                  style={{ width: "100%" }}
                  type="email"
                />
              </div>
            </div>
            {/* <div className="input-container">
              <input type="text" id="input" required />
              <label htmlFor="input" className="label">
                Enter Feedback
              </label>
              <div className="underline"></div>
            </div> */}
          </div>

          <button className="testingButton">Submit feedback</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SendFeedback;
