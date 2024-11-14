import React, { useRef, useState } from "react";
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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { MdArrowBack } from "react-icons/md";
import { useHistory, useLocation } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

type OtpState = {
  [key: string]: string; // This allows any string as a key, with a value of type string.
};

const OTP = () => {
  const history = useHistory();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phonenumber = queryParams.get("phonenumber");

  const [otp, setOtp] = useState<OtpState>({
    myotpInput1: "",
    myotpInput2: "",
    myotpInput3: "",
    myotpInput4: "",
    myotpInput5: "",
    myotpInput6: "",
  });

  const inputRefs = useRef<(HTMLIonInputElement | null)[]>([]);

  const handleInputChange = (index: number, event: CustomEvent) => {
    const value = event.detail.value || "";

    setOtp((prevOtp) => ({
      ...prevOtp,
      [`myotpInput${index}`]: value,
    }));

    // Auto-focus on next input if current input is filled
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.setFocus();
    }

    // // Handle backspace to focus on the previous input
    // if (value === "" && index > 0) {
    //   inputRefs.current[index - 1]?.setFocus();
    // }
  };

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
                justifyContent: "flex-start",
                alignItems: "start",
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
                }}
              ></div>
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
                marginTop: "30px",
              }}
            >
              <div style={{ width: "60%", textAlign: "center" }}>Enter OTP</div>
            </div>
            <div
              style={{
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ width: "80%", textAlign: "center" }}>
                We've sent the 6 digit code to
              </div>
            </div>

            <div
              style={{
                color: "#000",
                fontSize: "17px",
                fontWeight: "800",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <div style={{ width: "80%", textAlign: "center" }}>
                +91 {phonenumber}
              </div>
            </div>

            <IonGrid
              id="myotp"
              className="ion-text-center"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <IonRow id="myotpgridrow">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <IonCol
                    key={`otp-col-${index}`}
                    id={`myotpgridrowcol${index}`}
                    size="2"
                  >
                    <IonInput
                      ref={(el) => (inputRefs.current[index] = el)}
                      id={`myotpInput${index}`}
                      fill="outline"
                      maxlength={1}
                      minlength={1}
                      mode="md"
                      type="tel"
                      className="myotpotp"
                      style={{ "--border-radius": "10px" }}
                      value={otp[`myotpInput${index}`]} // Correct dynamic key access
                      onIonInput={(e) => handleInputChange(index, e)}
                    />
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "85%",
                  color: "#d90216",
                  fontWeight: "900",
                  textAlign: "center",
                }}
              >
                Request a new code
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
                background:
                  otp.myotpInput1.length === 1 &&
                  otp.myotpInput2.length === 1 &&
                  otp.myotpInput3.length === 1 &&
                  otp.myotpInput4.length === 1 &&
                  otp.myotpInput5.length === 1 &&
                  otp.myotpInput6.length === 1
                    ? "#d90216"
                    : "#d3d3d3",
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
                cursor:
                  otp.myotpInput1.length === 1 &&
                  otp.myotpInput2.length === 1 &&
                  otp.myotpInput3.length === 1 &&
                  otp.myotpInput4.length === 1 &&
                  otp.myotpInput5.length === 1 &&
                  otp.myotpInput6.length === 1
                    ? "pointer"
                    : "not-allowed",
                opacity:
                  otp.myotpInput1.length === 1 &&
                  otp.myotpInput2.length === 1 &&
                  otp.myotpInput3.length === 1 &&
                  otp.myotpInput4.length === 1 &&
                  otp.myotpInput5.length === 1 &&
                  otp.myotpInput6.length === 1
                    ? 1
                    : 0.6,
              }}
              onClick={() => {
                otp.myotpInput1.length === 1 &&
                otp.myotpInput2.length === 1 &&
                otp.myotpInput3.length === 1 &&
                otp.myotpInput4.length === 1 &&
                otp.myotpInput5.length === 1 &&
                otp.myotpInput6.length === 1
                  ? history.push("/register")
                  : null;
              }}
            >
              <p>Verify OTP</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OTP;
