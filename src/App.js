import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "./config/ReactotronConfig";

import { store, persistor } from "./store";
import StyledApp from "./styles/global";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";
import history from "./services/history";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <StyledApp />
          <Header />
          <Routes />
          <Footer />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
