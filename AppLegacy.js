import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!",
);
/* "heading" is a React element and all React elements are object */
console.log(heading);

/* Nested elements using create elements*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello world from Nested divs",
    ),
  ),
);

/* To add siblings , 3rd argument can be array of React createElement */
const siblings = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading", key: "h1" },
      "Hello world from Nested divs",
    ),
    React.createElement("h2", { id: "subheading", key: "h2" }, "I am a h2 tag"),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(siblings); //render is responsible for converting heading object to HTML and add it to DOM
