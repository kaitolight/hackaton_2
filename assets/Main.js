import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FeedRSS from "./components/FeedRSS";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import CreateProjet from "./pages/createProjet/CreateProjet";
import Tests from "./pages/Tests";

function Main() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<FeedRSS />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/createProjet" element={<CreateProjet />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
    </Router>
  );
}

export default Main;

if (document.getElementById("app")) {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );
}
