import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { ScaleLoader } from "react-spinners";
import router from "./router/router";
import "src/scss/index.scss";

const SPINNER_COLOR = "hsl(22, 65%, 57%)";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<ScaleLoader color={SPINNER_COLOR} />}
    />
  </React.StrictMode>
);
