import React from "react";
import image from "../../assests/images/image.png";
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Menubar.css";
import { StatusBar, Style } from "@capacitor/status-bar";

import { ellipse, square, triangle } from "ionicons/icons";
import { useLocation } from "react-router";

import { MdOutlineHome } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Menubar = () => {
  const location = useLocation();

  const configureStatusBar = async () => {
    const path = location.pathname;
    let bgcolor = "#ffffff";
    if (path === "/splash") {
      bgcolor = "#d90216";
    }
    // Change the color (example: blue)
    await StatusBar.setBackgroundColor({ color: bgcolor });

    // Optional: Set the style (light or dark content)
    await StatusBar.setStyle({ style: Style.Light });
  };

  // Call the function on app startup
  configureStatusBar();

  return (
    <>
      {location.pathname === "/home" ||
      location.pathname === "/activity" ||
      location.pathname === "/cart" ||
      location.pathname === "/profile" ? (
        <IonTabBar slot="bottom" mode="ios">
          <IonTabButton tab="home" href="/home" className="no-ripple">
            <div className="tabicons">
              <MdOutlineHome />
            </div>
            <div className="tabname">
              <IonLabel>Home</IonLabel>
            </div>
          </IonTabButton>

          <IonTabButton tab="activity" href="/activity" className="no-ripple">
            <div className="tabicons">
              <MdOutlinePendingActions />
            </div>
            <div className="tabname">
              <IonLabel>Activity</IonLabel>
            </div>
          </IonTabButton>

          <IonTabButton tab="cart" href="/cart" className="no-ripple">
            <div className="tabicons">
              <MdOutlineShoppingCart />
            </div>
            <div className="tabname">
              <IonLabel>Cart</IonLabel>
            </div>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile" className="no-ripple">
            <div className="tabicons">
              <FiUser />
            </div>
            <div className="tabname">
              <IonLabel>Profile</IonLabel>
            </div>
          </IonTabButton>
        </IonTabBar>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menubar;
