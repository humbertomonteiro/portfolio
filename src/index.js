import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-coverflow";
// import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { register } from "swiper/element/bundle";

register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
