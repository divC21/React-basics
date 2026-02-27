import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => <h1>This is a title component</h1>;
const subTitle = <h3>This is a subtitle component</h3>;
const HeaderComponent = () => (
  <>
    <header>
      <h1>Hello world from React!</h1>
      <input type="text" placeholder="Enter search keywords" />
    </header>
    <TitleComponent />
    {TitleComponent()}
    {subTitle}
    {
      // everything written inside {} is Javascript expression and
      //variables and it is sanitized by JSX
    }
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
