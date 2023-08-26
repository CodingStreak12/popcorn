import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxValue={5}
      messages={["worst", "bad", "average", "good", "awesome"]}
    /> */}
    {/* <StarRating maxValue={10} color="blue" size={22} defaultRating={3} /> */}
    <App />
  </React.StrictMode>
);
