import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import ranking from "./ranking";
import generalReports from "./generalReports";
import experienceCard from "./experienceCard";
import achievements from "./achievements";

export default combineReducers({
  auth,
  user,
  ranking,
  generalReports,
  experienceCard,
  achievements
});
