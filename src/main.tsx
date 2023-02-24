import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
// import { ScaleLoader } from "react-spinners";
import router from "./app/router";
import "src/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      // fallbackElement={<ScaleLoader color={SPINNER_COLOR} />}
    />
  </React.StrictMode>
);
