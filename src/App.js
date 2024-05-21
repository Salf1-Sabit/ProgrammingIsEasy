import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap/Roadmap";
import Problems from "./pages/Problems";
import Blogs from "./pages/Blogs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import CustomizedSnackbar from "./components/UI/CustomSnackbar";

// context
import SnackbarContextProvider from "././components/store/SnackbarContext";

function App() {
  return (
    <SnackbarContextProvider>
      <BrowserRouter>
        <Navbar />
        <CustomizedSnackbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </SnackbarContextProvider>
  );
}

export default App;
