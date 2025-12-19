import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import View from "./pages/View";
import Add from "./pages/Add";
import Dashboard from "./pages/Dashboard";
import Protected from "./pages/Protected";
import RedirectAuth from "./pages/RedirectAuth";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";


// const isAuth=localStorage.getItem("auth")==="true";
const customerAPI = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
          element: <RedirectAuth />,
      },
      {
        path:"/welcome",
        element:<Welcome></Welcome>
      },
      {
        path: "/login",
        element:  <Login></Login>,
      },
      {
        path: "/register",
        element:  <Register></Register>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/view",
        element: (<Protected><View></View></Protected>),
      },
      {
        path: "/add",
        element: (<Protected><Add></Add></Protected>),
      },
      {
        path: "/dashboard",
        element: (<Protected><Dashboard></Dashboard></Protected>),
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={customerAPI}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
