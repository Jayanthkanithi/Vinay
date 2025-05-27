import "./Projects.css";

const projects = [
  {
    title: " Enhanced Deep Learning Techniques for Alzheimer's disease Detection",
    desc: "Built CNN/RNN models using Python to detect Alzheimer’s from brain scan datasets. Applied object-oriented design principles, performed model evaluation using accuracy, precision, and confusion matrices. Gained experience in training scalable models and handling unstructured data.",
  },
  {
    title: " Employee Management System Using Flask Python Frame Work And Django",
    desc: "Designed and implemented a full-stack web application using Flask microservices and Django backend. Developed efficient CRUD operations, integrated SQL databases, and implemented secure authentication. Demonstrated knowledge of multi-tiered architecture and backend logic design.",
  },
];
  
  const Projects = () => {
    return (
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <div className="projects__grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default Projects;
  