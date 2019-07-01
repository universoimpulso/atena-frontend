import { combineReducers } from "redux";

import auth from "./auth";
import ranking from "./ranking";
import generalReports from "./generalReports";
import experienceCard from "./experienceCard";
import editAchievements from "./editAchievements";

export default combineReducers({
  auth,
  ranking,
  generalReports,
  experienceCard,
  editAchievements
});
