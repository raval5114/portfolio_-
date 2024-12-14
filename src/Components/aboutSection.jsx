import React from "react";

function About() {
  return (
    <>
      {/* About Me Section */}
      <section
        className="about py-5"
        id="about"
        style={{
          backgroundColor: "#f7fafc",
          padding: "60px 30px",
          fontFamily: "'Roboto', sans-serif",
          color: "#2d3748",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px", margin: "auto" }}>
          <h2
            className="text-center mb-4"
            style={{
              color: "#4c51bf",
              fontSize: "2.5rem",
              marginBottom: "20px",
              animation: "fadeIn 1s ease-in",
            }}
          >
            About Me
          </h2>

          <p
            className="text-center"
            style={{
              color: "#2d3748",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "auto",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Hello! I’m Hari Raval, a passionate web and mobile developer
            specializing in Flutter, Node.js, and React.js. With a deep
            understanding of both front-end and back-end technologies, I love to
            create beautiful and functional applications that provide an
            exceptional user experience.
          </p>

          <h3
            className="mt-5"
            style={{
              color: "#4c51bf",
              fontSize: "2rem",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            My Journey
          </h3>
          <p
            style={{
              color: "#2d3748",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            My journey into the world of technology began when I first
            discovered programming in school. Since then, I’ve been captivated
            by the endless possibilities it offers. I started with HTML and
            CSS, creating simple static web pages, and gradually progressed to
            dynamic web applications using JavaScript frameworks.
          </p>

          <p
            style={{
              color: "#2d3748",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            As I delved into mobile app development, I found Flutter to be an
            incredibly powerful tool that allows for building cross-platform
            applications efficiently. I enjoy the challenge of solving complex
            problems and continuously strive to improve my skills through
            personal projects and collaborations.
          </p>

          <h3
            className="mt-5"
            style={{
              color: "#4c51bf",
              fontSize: "2rem",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            My Passion
          </h3>
          <p
            style={{
              color: "#2d3748",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            I’m particularly passionate about creating user-friendly
            applications that solve real-world problems. I believe that good
            design and functionality go hand in hand, and I aim to balance both
            in my projects.
          </p>

          <p
            style={{
              color: "#2d3748",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            In my free time, I enjoy exploring new technologies, contributing to
            open-source projects, and participating in coding challenges. I also
            love to share knowledge with others, whether through blogging or
            mentoring fellow developers.
          </p>

          <h3
            className="mt-5"
            style={{
              color: "#4c51bf",
              fontSize: "2rem",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            Let's Connect
          </h3>
          <p
            style={{
              color: "#2d3748",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            I'm always eager to collaborate on interesting projects or discuss
            new ideas. Feel free to reach out to me through my contact page or
            connect with me on social media!
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
