import React from "react";
import { render } from "react-dom";
import data from "../data/data.json";

render(<Team members={data} />, document.getElementById("root"));
