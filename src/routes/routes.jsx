import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap/Roadmap";
import Problems from "../pages/Problems";
import Contests from "../pages/Contests";
import UpcomingContests from "../pages/Contests/UpcomingContests";
import PastContests from "../pages/Contests/PastContests";
import HostContests from "../pages/Contests/HostContests";
import DummyStandings from "../pages/Contests/DummyStandings";
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
      {
        path: "contests",
        element: <Contests />,
        children: [
          {
            index: true,
            element: <UpcomingContests />,
          },
          { path: "past-contests", element: <PastContests /> },
        ],
      },
      { path: "blogs", element: <Blogs /> },
      { path: "profile", element: <Profile /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "host-contests", element: <HostContests /> },
      { path: "dummy-contest", element: <DummyStandings /> },
    ],
  },
]);
