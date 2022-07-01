import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import FilterProjects from "./pages/FilterProjects";
import CreateProjet from "./pages/createProjet/CreateProjet";
import MyProjects from "./pages/myProjects/MyProjects";
import Tests from "./pages/Tests";

function Main() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filter-projects" element={<FilterProjects />} />
        <Route path="/userDashboard" element={<UserDashboard />} />
        <Route path="/createProjet" element={<CreateProjet />} />
        <Route path="/myProjects" element={<MyProjects />} />
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
