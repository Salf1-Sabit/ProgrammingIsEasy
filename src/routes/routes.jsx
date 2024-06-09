import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Roadmap from "../pages/Roadmap/Roadmap";
import Problems from "../pages/Problems";
import Contests from "../pages/Contests";
import UpcomingContests from "../pages/Contests/UpcomingContests";
import PastContests from "../pages/Contests/PastContests";
import DummyStandings from "../pages/Contests/DummyStandings";
import Blogs from "../pages/Blogs/Blogs";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/Signup";
import SignIn from "../components/Login/Login";
import Author from "../pages/Author/Author";
import AuthorDashboard from "../pages/Author/AuthorDashboard";
import AuthorProblems from "../pages/Author/AuthorProblems";
import AuthorContests from "../pages/Author/AuthorContests";

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
      { path: "dummy-contest", element: <DummyStandings /> },
      {
        path: "author",
        element: <Author />,
        children: [
          { index: true, element: <AuthorDashboard /> },
          { path: "problems", element: <AuthorProblems /> },
          { path: "contests", element: <AuthorContests /> },
        ],
      },
    ],
  },
]);
