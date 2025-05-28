import "./Education.css";
const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education__item">
          <h3> B.Tech - Artificial Intelligence And Data Science</h3>
          <p> KL UNIVERSITY, Vijayawada, 2021 – 2025</p>
          <p>CGPA: 8.98 / 10</p>
        </div>
        <div className="education__item">
          <h3>  12th standard</h3>
          <p> TIRUMALA EDUCATIONAL INSTITUTIONS, Bhimavaram, 2019 – 2021</p>
          <p>Percentage: 92.00</p>
        </div>
        <div className="education__item">
          <h3>10th standard</h3>
          <p>SRI CHAITANYA TECHNO SCHOOL, Tadepalliguden, 2019</p>
          <p>GPA: 9.5 / 10</p>
        </div>
      </div>
    </section>
  );
};
export default Education;