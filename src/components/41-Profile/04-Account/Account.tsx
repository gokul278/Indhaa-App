import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";
import { FiEdit } from "react-icons/fi";

const Account: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent>
        <div className="CLMainContainer" style={{ height: "100vh" }}>
          <div className="CLContainer1" style={{ height: "10vh" }}>
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
              Account Settings
            </button>
          </div>
          <div style={{ height: "80vh", overflow: "auto" }}>
            <div
              style={{
                background: "#f5f5f5",
                marginLeft: "10px",
                marginRight: "10px",
                marginBottom: "20px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                paddingBottom: "20px",
                gap: "5px",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="user-avatar"
                  style={{ height: "100px", width: "100px", fontSize: "50px" }}
                >
                  G
                </div>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "-50px",
                    marginTop: "-20px",
                    background: "#e0e0e0",
                    padding: "3px",
                    borderRadius: "50%",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FiEdit />
                </div>
              </div>
              <div>
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
                      background: "#fff",
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
                      Name
                    </div>
                    <input
                      className="custom-input"
                      style={{ width: "100%", background: "#fff" }}
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div>
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
                      background: "#fff",
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
                      Mobile Number
                    </div>
                    <input
                      className="custom-input"
                      style={{ width: "100%", background: "#fff" }}
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div>
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
                      background: "#fff",
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
                      Email
                    </div>
                    <input
                      className="custom-input"
                      style={{ width: "100%", background: "#fff" }}
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div>
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
                      background: "#fff",
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
                      Date of Birth
                    </div>
                    <input
                      className="custom-input"
                      style={{ width: "100%", background: "#fff" }}
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div>
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
                      background: "#fff",
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
                      Anniversary
                    </div>
                    <input
                      className="custom-input"
                      style={{ width: "100%", background: "#fff" }}
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div>
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
                      background: "#fff",
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
                      Gender
                    </div>
                    <select
                      className="custom-input"
                      style={{ background: "#fff" }}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "10vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "90%",
                  background: "#d90216",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Update Profile
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
