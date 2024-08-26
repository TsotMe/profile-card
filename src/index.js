import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpeg" alt="Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Emily Johnson</h1>
      <p>
        Emily Johnson is a passionate software engineer with over 5 years of
        experience in full-stack development. She specializes in building
        scalable web applications using modern JavaScript frameworks like React
        and Node.js. Emily is known for her meticulous attention to detail and
        her ability to solve complex problems efficiently. In her free time, she
        enjoys hiking and experimenting with new recipes in the kitchen.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" bgColor="#E74C3C" />
      <Skill skill="Vue" bgColor="#8E44AD" />
      <Skill skill="Teamwork" bgColor="red" />
      <Skill skill="Javascript" bgColor="gray" />
      <Skill skill="Communication" bgColor="green" />
      <Skill skill="Adaptability" bgColor="blue" />
      <Skill skill="TypescTime management" bgColor="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skill}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
