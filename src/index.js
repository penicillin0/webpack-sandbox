import React from "react";
import { render } from "react-dom";
import data from "../data/member.json";
import { Team } from "./components/Team";

render(<Team members={data} />, document.getElementById("root"));
