import React, { useState, useEffect } from "react";
import "./userInfo.css";
import API from "../../API";
import person from "./person.jpg"
import icon from "./icon.png"

function UserInfo() {
  const [goToParams, setGoToParams] = useState(true);

  const [user, setUser] = useState({
    firstName: "Elvis",
    lastName: "PRESLEY",
    agency: "Lyon",
    position: "Tech Lead JS",
    email:"mail@mail.com",
    id: "",
  });
  useEffect(() => {
    API
      .get("/api/users/1")
      .then((res) => console.log(res.data))
  }, []);

  // console.warn(user);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    API
      .put("/api/users/2", user)
      .then((res) => res.data)
      .catch(console.log("Error to save"));
  };
  if (goToParams) {
    return (
      <div id="userInfoContainer">
        <div className="containerButton"><button className="button" onClick={() => setGoToParams(!goToParams)}><img src={icon} /></button></div>
        <span><img src={person} /></span>
        <div className="textInfoUser">
          <strong>{user.firstName} {user.lastName}</strong>
          <p>{user.agency.name}</p>
          <p>{user.position}</p>
          <p>{user.email}</p>
        </div>
      </div>
    );
  }
  return (
    <div id="userInfoContainer">
      <div className="containerButton"><button className="button" onClick={() => setGoToParams(!goToParams)}><img src={icon} /></button></div>
      <span><img src={person} /></span>
      <form className="formParamsInfoUser" onSubmit={handleLogin}>
        <input className="inputInfoUser" name="firstName" placeholder={user.firstName} onChange={handleChange} />
        <input className="inputInfoUser" name="lastName" placeholder={user.lastName} onChange={handleChange} />
        <input className="inputInfoUser" name="agency" placeholder={user.agency.name} onChange={handleChange} />
        <input className="inputInfoUser" name="position" placeholder={user.position} onChange={handleChange} />
        <input className="inputInfoUser" name="email" placeholder={"email"} onChange={handleChange} />
        <input type="submit" value="Save" className="inputInfoUser buttonSubmitInfoUser" />
      </form>
    </div>
  )
}
export default UserInfo;