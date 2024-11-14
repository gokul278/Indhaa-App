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
import "./Map.css";
import { useHistory } from "react-router";

const Map = () => {
  const [place, setPlace] = useState("");

  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="MapfullPage">
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "absolute",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.6848929363337!2d78.14989567415687!3d11.64578838856081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef6bdbbc3f7d%3A0x404c804a4826efdf!2sZAdroit%20IT%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1731395784852!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "100vh",
              }}
            ></iframe>
          </div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              // background: "yellow",
              position: "absolute",
              zIndex: 100,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "28vh",
                background: "#fff",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  color: "#000",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "900",
                }}
              >
                Select Location
              </div>
              <input
                style={{ marginTop: "20px", marginBottom: "20px" }}
                value={place}
                onChange={(e) => {
                  setPlace(e.target.value);
                }}
                className="custom-input"
                placeholder="Enter Location"
              />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    background: "#fff",
                    width: "48%",
                    height: "7vh",
                    borderRadius: "10px",
                    border: "2px solid #d90216",
                    color: "#d90216",
                    fontSize: "20px",
                    fontWeight: "700",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    history.push("/splash");
                  }}
                >
                  <p>Back</p>
                </div>

                <div
                  style={{
                    background: place ? "#d90216" : "#d3d3d3",
                    width: "48%",
                    height: "7vh",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "700",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: place ? "pointer" : "not-allowed",
                    opacity: place ? 1 : 0.6,
                  }}
                  onClick={() => {
                    place ? history.push("/login") : null;
                  }}
                >
                  <p>Next</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Map;
