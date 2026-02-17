export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="projects">Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Mess Fee Management System</h3>
          <p>React + Node.js web app to manage hostel mess fees digitally.</p>
        </div>
        <div className="project-card">
          <h3>Diabetes Prediction</h3>
          <p>Hybrid ML model with Flask UI for medical predictions.</p>
        </div>
        <div className="project-card">
          <h3>Task Manager App</h3>
          <p>
            MERN-based application for adding, organizing, and tracking tasks.
          </p>
        </div>
      </div>
    </section>
  );
}
