import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";

const License: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div>
          <div className="TContainer1">
            <button className="Tback-button">
              <div style={{ fontSize: "30px" }}>
                <MdArrowBack
                  onClick={() => {
                    history.push("/about", {
                      direction: "back",
                      animation: "slide",
                    });
                  }}
                />
              </div>
              Licenses and Registrations
            </button>
          </div>
          <div>
            {" "}
            <p className="Term">Terms of Service </p>
            <p
              style={{
                fontSize: "Large",
                fontStyle: "italic",
                paddingLeft: "25px",
              }}
            >
              Latest update on march
            </p>
            <p className="accept">1. Acceptance of terms</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default License;
