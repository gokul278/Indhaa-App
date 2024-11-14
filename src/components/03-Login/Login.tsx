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
import "./Login.css";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const [phonenumber, setPhonenumber] = useState("");

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "#fff",
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
              }}
            >
              <MdArrowBack
                onClick={() => {
                  history.push("/splash");
                }}
              />
            </div>
            <div
              style={{
                color: "#000",
                fontSize: "25px",
                fontWeight: "900",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "60%", textAlign: "center" }}>
                Login or Create <br /> an Account
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
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    color: "#000",
                    width: "15%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  +91
                </div>
                <input
                  className="custom-input"
                  style={{ width: "85%" }}
                  type="number"
                  onInput={(e: any) => {
                    setPhonenumber(e.target.value);
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
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background: phonenumber.length === 10 ? "#d90216" : "#d3d3d3",
                width: "85%",
                height: "7vh",
                marginTop: "3vh",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: phonenumber.length === 10 ? "pointer" : "not-allowed",
                opacity: phonenumber.length === 10 ? 1 : 0.6,
              }}
              onClick={() => {
                phonenumber.length === 10
                  ? history.push("/otp?phonenumber=" + phonenumber)
                  : null;
              }}
            >
              <p>Login</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
