import "./Skills.css";

const skills = [
  "JavaScript", "HTML", "CSS", "python", "SQL", "R", "ML & AI", "DSA", "Django", "Flask",
];
  
  const Skills = () => {
    return (
      <section className="skills" id="skills">
        <h2>My Skills</h2>
        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default Skills;