import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mybanner } from "./components/Ban";
import { Mycontact } from "./components/Cont";
import { Myfooter } from "./components/Foot";
import { Mynavbar } from "./components/Nav";
import { Myprojects } from "./components/Proj";
import { Myskills } from "./components/Skill";
import { MyCertificates } from "./components/Mycertificate";

function App() {
  return (
    <div className="App">
      <Mynavbar />
      <Mybanner />
      <Myskills />
      <Myprojects />
      <MyCertificates />
      <Mycontact />
      <Myfooter />
    </div>
  );
}

export default App;
