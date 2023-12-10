import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/component/About";
import ErrorPage from "./src/component/ErrorPage";
import Contact from "./src/component/Contact";
import RestaurantMenu from "./src/component/RestaurentMenu";
import Profile from "./src/component/Profile";
import Shimmer from "./src/component/Shimmer";
import userContext from "./src/utils/useUserContext";
userContext;

const Instamart = lazy(() => import("./src/component/Instamart"));

let userInfo = {};

function App() {
  const [user, setUser] = useState({
    name: "Kunal Gathe",
    email: "kunalgathe@gmail.com",
  });
  return (
    <userContext.Provider value={{ 
      user: user, 
      setUser: setUser
      }}>
      <Navbar />
      <Outlet />
      <Footer />
    </userContext.Provider>
  );
}

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/res/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Instamart loading...</h1>}>
            {" "}
            <Instamart />{" "}
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
