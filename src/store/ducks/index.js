import { combineReducers } from "redux";

import auth from "./auth";
import ranking from "./ranking";
import generalReports from "./generalReports";
import experienceCard from "./experienceCard";
import achievements from "./achievements";

export default combineReducers({
  auth,
  ranking,
  generalReports,
  experienceCard,
  achievements
});
