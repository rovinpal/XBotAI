import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
]);

export default function App() {
  return <RouterProvider router={ router } />;
}
