import React from "react";

function Skills() {
  return (
    <section
      className="skills py-5"
      id="skills"
      style={{
        backgroundColor: "#edf2f7",
        padding: "60px 30px",
        fontFamily: "'Poppins', sans-serif",
        color: "#2d3748",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "auto" }}>
        <h2
          className="text-center mb-4"
          style={{
            color: "#805ad5",
            fontSize: "2.5rem",
            fontWeight: "bold",
            animation: "fadeIn 1s ease-in",
            fontFamily: "'Abril Fatface', cursive",
          }}
        >
          My Skills
        </h2>
        <div className="row text-center">
          {/* Front-End Skills */}
          <div className="col-md-4 mb-4">
            <div
              className="card border-light shadow-sm"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s",
                padding: "20px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  className="fw-bold"
                  style={{
                    color: "#6b46c1",
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  Front-End
                </h3>
                <ul
                  className="list-unstyled"
                  style={{
                    color: "#2d3748",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Dart</li>
                  <li>React</li>
                  <li>Flutter</li>
                  <li>Responsive Web Design</li>
                  <li>UI/UX Design Principles</li>
                  <li>Accessibility (a11y) Best Practices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back-End Skills */}
          <div className="col-md-4 mb-4">
            <div
              className="card border-light shadow-sm"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s",
                padding: "20px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  className="fw-bold"
                  style={{
                    color: "#6b46c1",
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  Back-End
                </h3>
                <ul
                  className="list-unstyled"
                  style={{
                    color: "#2d3748",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>RESTful API Development</li>
                  <li>GraphQL</li>
                  <li>Authentication & Authorization</li>
                  <li>Serverless Architecture</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other Tools & Technologies */}
          <div className="col-md-4 mb-4">
            <div
              className="card border-light shadow-sm"
              style={{
                borderRadius: "15px",
                transition: "transform 0.3s",
                padding: "20px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  className="fw-bold"
                  style={{
                    color: "#6b46c1",
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    fontFamily: "'Oswald', sans-serif",
                  }}
                >
                  Other Tools
                </h3>
                <ul
                  className="list-unstyled"
                  style={{
                    color: "#2d3748",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  <li>Git & GitHub</li>
                  <li>Bootstrap</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <h3
          className="text-center mt-5"
          style={{
            color: "#6b46c1",
            fontSize: "2rem",
            fontWeight: "bold",
            marginTop: "40px",
            fontFamily: "'Abril Fatface', cursive",
          }}
        >
          Soft Skills
        </h3>
        <ul
          className="list-unstyled text-center"
          style={{
            color: "#2d3748",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginTop: "20px",
          }}
        >
          <li>Strong Communication Skills</li>
          <li>Team Collaboration</li>
          <li>Problem Solving</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Critical Thinking</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
