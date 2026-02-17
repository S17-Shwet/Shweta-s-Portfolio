import { useState } from "react";

export default function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="about" className="section">
      <h2 className="about">About Me</h2>
      <p className="about-container">
        I am an Information Technology student passionate about frontend
        development and software testing. I enjoy building clean, responsive,
        and functional websites using React, HTML, CSS, and JavaScript.
        {/* Education */}
        <div className="collapsible">
          <h3
            onClick={() => toggleSection("education")}
            className="collapsible-title"
          >
            Education
          </h3>
          {openSection === "education" && (
            <ul className="collapsible-content">
              <li>
                <strong>10th-2020: </strong> From Shri Siddhanath Vidyalay,
                Kharsundi. (Grade-87.60)
              </li>
              <br />
              <li>
                <strong>12th-2022: </strong> From Aabasaheb Khebudkar Junior
                College of Science, Atpadi. (Grade-87.60)(MHTCET-95.76)
              </li>
              <br />
              <li>
                <strong>B.Tech(IT)-2026: </strong> From Government College of
                Engineering, Karad. (CGPA-8.50)
              </li>
            </ul>
          )}
        </div>
        {/* Experience */}
        <div className="collapsible">
          <h3
            onClick={() => toggleSection("experience")}
            className="collapsible-title"
          >
            Experience
          </h3>
          {openSection === "experience" && (
            <ul className="collapsible-content">
              <li>
                <strong>12th-2022: </strong> From Aabasaheb Khebudkar Junior
                College of Science, Atpadi. (Grade-87.60)(MHTCET-95.76)
              </li>
              <br />
              <li>
                <strong>B.Tech(IT)-2026: </strong> From Government College of
                Engineering, Karad. (CGPA-8.50)
              </li>
            </ul>
          )}
        </div>
      </p>
    </section>
  );
}
