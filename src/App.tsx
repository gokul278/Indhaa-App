import { Redirect, Route, useLocation } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Splash from "./components/00-Splashscreen/Splash";
import Menubar from "./components/01-Menubar/Menubar";
import Map from "./components/02-Map/Map";
import Login from "./components/03-Login/Login";
import OTP from "./components/04-OTP/OTP";
import Registration from "./components/05-Registeration/Registration";
import Home from "./components/11-Home/Home";
import Profile from "./components/41-Profile/Profile";
import Cart from "./components/31-Cart/Cart";
import Chooselanguage from "./components/41-Profile/01-More/01-Chooselanguage/Chooselanguage";
import About from "./components/41-Profile/01-More/02-About/About";
import Terms from "./components/41-Profile/01-More/02-About/01-Terms/Terms";
import License from "./components/41-Profile/01-More/02-About/02-License/License";
import Open from "./components/41-Profile/01-More/02-About/03-Open/Open";
import Activity from "./components/21-Actvity/Activity";
import SendFeedback from "./components/41-Profile/01-More/03-SendFeedback/SendFeedback";
import Settings from "./components/41-Profile/01-More/04-Settings/Settings";
import CollectedCoupons from "./components/41-Profile/02-Coupons/01-CollectedCoupons/CollectedCoupons";
import Address from "./components/41-Profile/03-AddressDetails/01-Address/Address";
import Account from "./components/41-Profile/04-Account/Account";
import Search from "./components/50-Search/Search";
// import Language from "./components/02-Language/Language";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/activity">
              <Activity />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <Redirect to="/splash" />
            </Route>
            <Route exact path="/splash">
              <Splash />
            </Route>
            <Route exact path="/feedback">
              <SendFeedback />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/collectedcoupons">
              <CollectedCoupons />
            </Route>
            {/* <Route exact path="/map">
            <Map />
          </Route> */}
            <Route exact path="/address">
              <Address />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/otp">
              <OTP />
            </Route>
            <Route exact path="/register">
              <Registration />
            </Route>
            <Route exact path="/chooselanguage">
              <Chooselanguage />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/terms">
              <Terms />
            </Route>
            <Route exact path="/license">
              <License />
            </Route>
            <Route exact path="/open">
              <Open />
            </Route>
          </IonRouterOutlet>
          <Menubar />
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
