import React, { useState, useEffect } from "react";
import "./userInfo.css";
import API from "../../API";
import person from "./person.jpg"
import icon from "./icon.png"

function UserInfo() {
  const [goToParams, setGoToParams] = useState(true);

  const [user, setUser] = useState({
    name: "Elvis",
    lastname: "PRESLEY",
    agency: "Lyon",
    position: "Tech Lead JS",
    id: "",
  });
  // useEffect(() => {
  //   API
  //     .get("/api/user/:id")
  //     .then((res) => console.log(res.dataUser))
  //     .then((dataUser) => setUser({
  //       name: dataUser.name,
  //       lastname: dataUser.lastname,
  //       agency: dataUser.agency,
  //       position: dataUser.position,
  //       id: dataUser.id,
  //     }))
  // }, [user]);
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    console.warn(user);
    API
      .post("/api/auth/login", user, { withCredentials: true })
      .then((res) => res.data)
      .catch(console.log("Error to save"));
  };
  if (goToParams) {
    return (
      <div id="userInfoContainer">
        <div className="containerButton"><button className="button" onClick={() => setGoToParams(!goToParams)}><img src={icon} /></button></div>
        <span><img src={person} /></span>
        <div className="textInfoUser">
          <strong>{user.name} {user.lastname}</strong>
          <p>{user.agency}</p>
          <p>{user.position}</p>
        </div>
      </div>
    );
  }
  return (
    <div id="userInfoContainer">
      <div className="containerButton"><button className="button" onClick={() => setGoToParams(!goToParams)}><img src={icon} /></button></div>
      <span><img src={person} /></span>
      <form className="formParamsInfoUser" onSubmit={handleLogin}>
        <input className="inputInfoUser" name="name" placeholder={user.name} onChange={handleChange} />
        <input className="inputInfoUser" name="lastname" placeholder={user.lastname} onChange={handleChange} />
        <input className="inputInfoUser" name="agency" placeholder={user.agency} onChange={handleChange} />
        <input className="inputInfoUser" name="position" placeholder={user.position} onChange={handleChange} />
        <input type="submit" value="Save" className="inputInfoUser buttonSubmitInfoUser" />
      </form>
    </div>
  )
}
export default UserInfo;