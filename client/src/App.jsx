import "./App.css";
import { AppLayout } from "./components/layout/AppLayout";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {Home} from "../src/components/pages/Home"
import {About} from "../src/components/pages/About"
import {Contact} from "../src/components/pages/Contact"
import {Register} from "../src/components/pages/Register"
import {Login} from "../src/components/pages/Login"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}>

  </RouterProvider>
}

export default App;
