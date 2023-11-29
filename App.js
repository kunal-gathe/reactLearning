import React from "react";
import ReactDOM from "react-dom/client";

let heading = React.createElement("h1", { key: "2016" }, "hello");
let heading2 = React.createElement("h2", { key: "2015" }, "World");

let divTag = React.createElement(
  "div",
  {
    style: { backgroundColor: "red" },
  },
  [heading, heading2]
);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(divTag);
