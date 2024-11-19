import { IonContent, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router";
import { FaPlus } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { Divider } from "primereact/divider";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

const Address = () => {
  const history = useHistory();

  const [address, setAddress] = useState([
    {
      type: "Office",
      address: "Gugai, Salem, Tamil Nadu, India",
      phoneno: "9842653413",
    },
  ]);

  return (
    <IonPage>
      <IonContent>
        <div className="CLMainContainer">
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
              </div>{" "}
              My Addresses
            </button>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "90%",
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "10px",
              color: "#d90216",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "start",
                fontSize: "18px",
              }}
            >
              <FaPlus />
            </div>
            <div
              style={{
                width: "80%",
              }}
            >
              Add Address
            </div>
            <div
              style={{
                width: "10%",
                display: "flex",
                justifyContent: "start",
                fontSize: "18px",
                color: "#666",
              }}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "90%",
            }}
          >
            <Divider
              layout="horizontal"
              className="flex md:hidden"
              align="center"
            >
              <div style={{ fontSize: "14px" }}>SAVED ADDRESS</div>
            </Divider>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {address.map((element) => (
            <div
              style={{
                width: "90%",
                background: "#f5f5f5",
                borderRadius: "10px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                  fontSize: "18px",
                  color: "#555",
                }}
              >
                <div>
                  <MdOutlineEdit />
                </div>
                <div>
                  <MdDelete />
                </div>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#000",
                  fontWeight: "700",
                  marginTop: "-10px",
                }}
              >
                {element.type}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  fontWeight: "700",
                }}
              >
                {element.address}
              </div>
              <div
                style={{ fontSize: "12px", color: "#666666", display: "flex" }}
              >
                Phone Number:
                <div style={{ marginLeft: "10px", fontWeight: "700" }}>
                  +91-{element.phoneno}
                </div>
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Address;
