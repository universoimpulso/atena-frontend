import { combineReducers } from "redux";

import auth from "./auth";
import ranking from "./ranking";
import generalReports from "./generalReports";

export default combineReducers({
  generalReports,
  ranking,
  auth
});
