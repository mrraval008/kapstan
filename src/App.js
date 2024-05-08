import './App.css';
import RootLayout from './components/rootlayout/RootLayout';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Dashboard, { fetchApplicationData } from './components/dashboard/Dashboard';
import Home from './components/Home/Home';
import Maintanance from './components/Maintanance/Maintanance';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "", element: <Home></Home> },
      {
        path: "/applications",
        element: <Dashboard></Dashboard>,
        loader: fetchApplicationData,
      },
      {
        path: "/connection",
        element: <Maintanance></Maintanance>,
      },
      {
        path: "/cost",
        element:<Maintanance></Maintanance>,
      },

      {
        path: "/security",
        element: <Maintanance></Maintanance>,
      },
      {
        path: "/admin",
        element:<Maintanance></Maintanance>,
      },
      {
        path: "/docs",
        element: <Maintanance></Maintanance>,
      },

    ]
  }

])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
