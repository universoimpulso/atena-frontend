import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TransferXp from "./screens/TransferXp";
import HowItWorks from "./screens/HowItWorks";
import Ranking from "./screens/Ranking";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HowItWorks} />
      <Route exact path="/ranking" component={Ranking} />
      <Route exact path="/transfer-xp" component={TransferXp} />
    </Router>
  );
}

export default App;
