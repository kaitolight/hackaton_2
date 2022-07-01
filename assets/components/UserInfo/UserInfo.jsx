import React, { useState, useEffect } from "react";
import "./userInfo.css";
import API from "../../API";
import person from "./person.jpg"
import icon from "./icon.png"

function UserInfo() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    API
      .get("/api/categories")
      .then((res) => setCategories(res.data))
      .catch(console.log("Error to save the projet"));
  }, []);
  const [goToParams, setGoToParams] = useState(true);

  const [user, setUser] = useState({
    firstName: "Elvis",
    lastName: "PRESLEY",
    agency: "Lyon",
    position: "Tech Lead JS",
    email: "mail@mail.com",
  });
  useEffect(() => {
    API
      .get("/api/users/9")
      .then((res) => setUser(res.data))
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
  console.log(user)
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
        <select
          className="inputInfoUser"
          name="category"
          onChange={handleChange}>
          <option value="">Choose a category</option>

          {categories.map((category, i) =>
            <option key={i} value={"api/categories/" + category.id}>{category.name}</option>)}
        </select>
        <input className="inputInfoUser" name="position" placeholder={user.position} onChange={handleChange} />
        <input className="inputInfoUser" name="email" placeholder={"email"} onChange={handleChange} />
        <input type="submit" value="Save" className="inputInfoUser buttonSubmitInfoUser" />
      </form>
    </div>
  )
}
export default UserInfo;