import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { ScaleLoader } from "react-spinners";
import "src/scss/components/_spinner.scss";

const SPINNER_COLOR = "hsl(22, 65%, 57%)";

const HomePage = React.lazy(() => import("src/pages/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={<ScaleLoader color={SPINNER_COLOR} className='spinner' />}
      >
        <HomePage />
      </Suspense>
    ),
  },
]);

export default router;
