import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap/Roadmap";
import Problems from "../pages/Problems";
import Contests from "../pages/Contests";
import Blogs from "../pages/Blogs/Blogs";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/Signup";
import SignIn from "../components/Login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "roadmap", element: <Roadmap /> },
      { path: "problems", element: <Problems /> },
      { path: "contests", element: <Contests /> },
      { path: "blogs", element: <Blogs /> },
      { path: "profile", element: <Profile /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
    ],
  },
]);
