import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home/";
import Roadmap from "../pages/Roadmap/Roadmap";
import Problems from "../pages/Problems";
import Contests from "../pages/Contests";
import UpcomingContests from "../pages/Contests/UpcomingContests";
import PastContests from "../pages/Contests/PastContests";
import DummyStandings from "../pages/Contests/DummyStandings";
import Blogs from "../pages/Blogs/Blogs";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/SignUp";
import signUpLoader from "../pages/SignUp/loader";
import SignIn from "../pages/SignIn";
import signInAction from "../pages/SignIn/actions";
import Author from "../pages/Author/Author";
import AuthorDashboard from "../pages/Author/AuthorDashboard";
import AuthorProblems from "../pages/Author/AuthorProblems";
import AuthorContests from "../pages/Author/AuthorContests";
import IUPC from "../pages/IUPC";
import UpcomingIUPC from "../pages/IUPC/UpcomingIUPC";
import PastIUPC from "../pages/IUPC/PastIUPC";
import Editor from "../pages/Editor";
import RequireAuth from "../pages/RequireAuth";
import ErrorBoundary from "../pages/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
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
      {
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      { path: "signup", element: <SignUp />, loader: signUpLoader },
      {
        path: "signin",
        element: <SignIn />,
        loader: signUpLoader,
        action: signInAction,
      },
      { path: "dummy-contest", element: <DummyStandings /> },
      {
        path: "iupc",
        element: <IUPC />,
        children: [
          { index: true, element: <UpcomingIUPC /> },
          { path: "past-contests", element: <PastIUPC /> },
        ],
      },
      {
        path: "author",
        element: (
          <RequireAuth>
            <Author />
          </RequireAuth>
        ),
        children: [
          { index: true, element: <AuthorDashboard /> },
          { path: "problems", element: <AuthorProblems /> },
          { path: "contests", element: <AuthorContests /> },
        ],
      },
      {
        path: "editor",
        element: <Editor />,
      },
    ],
  },
]);
