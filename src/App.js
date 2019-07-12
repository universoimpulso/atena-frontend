import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./config/ReactotronConfig";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import store from "./store";
import StyledApp from "./styles/global";

import TransferXp from "./pages/TransferXp";
import HowItWorks from "./pages/HowItWorks";
import Ranking from "./pages/Ranking";
import Admin from "./pages/admin";
import UserInfo from "./pages/UserInfo";

import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StyledApp />
        <Header />
        <Switch>
          <Route exact path="/" component={HowItWorks} />
          <Route path="/ranking" component={Ranking} />

          {store.getState().auth.user ? (
            <>
              <Route path="/transfer" component={TransferXp} />
              <Route path="/admin" component={Admin} />
              <Route path="/userInfo" component={UserInfo} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
        <Footer />
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
