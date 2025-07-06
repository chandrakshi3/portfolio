// client/src/components/Skills.jsx
import "./Services.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiExpress,
  SiC,
  SiPython
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <SiHtml5 />, label: "HTML" },
    { icon: <SiCss3 />, label: "CSS" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiC />, label: "C Programming" },
    { icon: <SiPython />, label: "Python / DSA" }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        {skills.map(({ icon, label }) => (
          <div className="skill-box" key={label}>
            {icon}
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
