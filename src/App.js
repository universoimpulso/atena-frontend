import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import StyledApp from "./styles/global";

import TransferXp from "./pages/TransferXp";
import HowItWorks from "./pages/HowItWorks";
import Ranking from "./pages/Ranking";
import ScreenError from "./pages/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <StyledApp />
      <Header />
      <Router>
        <Route exact path="/" component={HowItWorks} />
        <Route exact path="/ranking" component={Ranking} />
        <Route exact path="/transfer-xp" component={TransferXp} />
        <Route exact path="/error" component={ScreenError} />
      </Router>
      <Footer />
    </>
  );
}

export default App;
