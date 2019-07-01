import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import store from "./store";
import StyledApp from "./styles/global";

import TransferXp from "./pages/TransferXp";
import HowItWorks from "./pages/HowItWorks";
import Ranking from "./pages/Ranking";
import Admin from "./pages/admin";
import Github from "./pages/Github";

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
          <Route path="/github/:status" component={Github} />

          {store.getState().auth.user ? (
            <>
              <Route path="/transfer" component={TransferXp} />
              <Route path="/admin" component={Admin} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
