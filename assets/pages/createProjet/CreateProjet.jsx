import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./createProjet.css";
import Nav from "../../components/nav/Nav";
import API from "../../API";

function CreateProjet() {
  const categories = [
    "Digital Transformation",
    "IT Engineering",
    "IT Infrastructure",
    "IT Consultins",
    "Industrial Engineering",
    "Traning",
  ];
  const [newprojet, setNewprojet] = useState({
    name: "",
    description: "",
    createdAt: "",
    category_id: "",
    agency_id: "",
  });
  const handleChange = (e) => {
    setNewprojet({
      ...newprojet,
      [e.target.name]: e.target.value,
    });
  };
  const saveProjet = (event) => {
    event.preventDefault();
    API.post("/api/xxxxxx", newprojet, { withCredentials: true })
      .then((res) => res.data)
      .catch(console.log("Error to save the projet"));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("isUserLoggedIn"))) {
      navigate("/createProjet");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div id="createProjetPageContainer">
      <Nav />
      <div className="createProjetContainer">
        <form className="createProjetForm" onSubmit={saveProjet}>
          <h1 className="titleCreateProjet">
            Complete this form to create your project
          </h1>
          <p>What's name of your project ?</p>
          <input
            placeholder="Write here..."
            className="inputCreateProjet inputNameCreateProjet"
            name="name"
            onChange={handleChange}
          />
          <p>My new super project is ...</p>
          <textarea
            placeholder="Write here..."
            className="inputCreateProjet"
            name="description"
            onChange={handleChange}
          />
          <section>
            <div>
              <p className="labelCreateProjet">
                When does your project start ?
              </p>
              <input
                type="date"
                min="2000-01-01"
                max="2050-12-31"
                className="inputCreateProjet littles"
                name="createdAt"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="labelCreateProjet">
                Select a category for your project
              </p>
              <select
                className="inputCreateProjet littles"
                name="category_id"
                onChange={handleChange}
              >
                <option value="">Choose a category</option>

                {categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <p className="labelCreateProjet">
                Which agency does your project depend?
              </p>
              <input
                placeholder="Write here..."
                className="agency_idCreateProjet inputCreateProjet littles"
                name="agency_id"
                onChange={handleChange}
              />
            </div>
          </section>

          <button type="submit" className="submitButtonCreateProjet">
            Go to work
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProjet;
