import React, { useState } from "react";
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
  const [newUser, setNewUser] = useState({});

  const [users, setUsers] = useState([{
    email: "test1@test.com",
    password: "12345",
    id: "1",
  },
  {
    email: "test2@test.com",
    password: "12345",
    id: "2",
  },
  ]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  }
  );
  const [canGoToUserDashboard, setCanGoToUserDashboard] = useState(false);
  const goToUserDashboard = (event) => {
    event.preventDefault();
    const userOK = users.find(userOnData => (userOnData.email === user.email) && (userOnData.password === user.password))
    console.log(userOK);
    window.localStorage.setItem('userSession', JSON.stringify(userOK));
    if (userOK) {
      setCanGoToUserDashboard(true);
    }
  };

  const goToUserDashboardFromRegister = (event, item) => {
    event.preventDefault();
    const userRegistred = users.find(userOnData => userOnData.email !== item.email)
    console.log(userRegistred)
    // if (userOK) {
    //   setCanGoToUserDashboard(true);
    // }
  }

  console.log(users)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register canGoToUserDashboard={canGoToUserDashboard} goToUserDashboardFromRegister={goToUserDashboardFromRegister} setNewUser={setNewUser} newUser={newUser} />} />
        <Route path="/login" element={<Login canGoToUserDashboard={canGoToUserDashboard} goToUserDashboard={goToUserDashboard} setUser={setUser} user={user} />} />
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
