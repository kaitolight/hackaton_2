import React, { useState } from "react"
import "./userDashboard.css";
import Nav from "../../components/nav/Nav";

function UserDashboard() {
  const [projets, setProjets] = useState([{
    id:1,
    name: "Les avocats chinois . ,",
    description: "Assotiation des avocats, en lutte pour une meilleur porduction des avocats d'origine chinois",
    createdAt: "30/06/2022",
    endedAt: "",
    status: "todo",
    categoriy_id: 1,
    agency_id: 1, 
  },
  {
    id:1,
    name: "Les avocats chinois . ,",
    description: "Assotiation des avocats, en lutte pour une meilleur porduction des avocats d'origine chinois",
    createdAt: "30/06/2022",
    endedAt: "",
    status: "todo",
    categoriy_id: 1,
    agency_id: 1, 
  },
  {
    id:1,
    name: "Les avocats chinois . ,",
    description: "Assotiation des avocats, en lutte pour une meilleur porduction des avocats d'origine chinois",
    createdAt: "30/06/2022",
    endedAt: "",
    status: "todo",
    categoriy_id: 1,
    agency_id: 1, 
  },
{
    id:1,
    name: "Les avocats chinois . ,",
    description: "Assotiation des avocats, en lutte pour une meilleur porduction des avocats d'origine chinois",
    createdAt: "30/06/2022",
    endedAt: "",
    status: "todo",
    categoriy_id: 1,
    agency_id: 1, 
  }]);
  return (
    <div id="userDashboardContainer">
      <Nav />
      <div className="allProjetsContainer">
        {projets.map((projet) => 
        <p>{projet.name}</p>
        )}
      </div>
    </div>
  );
}

export default UserDashboard
