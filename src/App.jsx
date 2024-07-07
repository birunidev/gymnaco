import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import GetDemo from "./pages/GetDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/get-demo",
    element: <GetDemo />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
