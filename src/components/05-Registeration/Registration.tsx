import React, { useState } from "react";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import { MdArrowBack } from "react-icons/md";
import { useHistory, useLocation } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Registration = () => {
  const history = useHistory();

  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "#fff",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                color: "#000",
                padding: "10px",
                fontSize: "30px",
                width: "100%",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "20%",
                }}
              >
                <MdArrowBack
                  onClick={() => {
                    history.push("/login");
                  }}
                />
              </div>

              <div
                style={{
                  width: "60%",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#000",
                }}
              >
                Register
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "85%",
                  background: "#f5f5f5",
                  marginTop: "30px",
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
                  Name
                </div>
                <input
                  className="custom-input"
                  style={{ width: "100%" }}
                  type="text"
                  onInput={(e: any) => {
                    setUserInput({
                      ...userInput,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "85%",
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
                  E-Mail
                </div>
                <input
                  className="custom-input"
                  style={{ width: "100%" }}
                  type="email"
                  onInput={(e: any) => {
                    setUserInput({
                      ...userInput,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
            onClick={()=>{
              if(userInput.name && userInput.email){
                history.push("/home");
              }
            }}
              style={{
                background:
                  userInput.name && userInput.email ? "#d90216" : "#d3d3d3",
                width: "85%",
                height: "7vh",
                marginTop: "3vh",
                borderRadius: "10px",
                marginBottom: "20px",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor:
                  userInput.name && userInput.email ? "pointer" : "not-allowed",
                opacity: userInput.name && userInput.email ? 1 : 0.6,
              }}
            >
              <p>Register</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registration;
