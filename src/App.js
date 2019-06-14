import React from "react";
import { Provider } from "react-redux";
import "./config/ReactotronConfig";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from "./store";
import StyledApp from "./styles/global";

import TransferXp from "./pages/TransferXp";
import HowItWorks from "./pages/HowItWorks";
import Ranking from "./pages/Ranking";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <StyledApp />
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={HowItWorks} />
          <Route exact path="/ranking" component={Ranking} />
          <Route exact path="/transfer-xp" component={TransferXp} />
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
