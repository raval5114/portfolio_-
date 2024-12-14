import React from "react";

function Contact() {
  return (
    <section
      className="contact py-5"
      id="contact"
      style={{
        backgroundColor: "#edf2f7",
        fontFamily: "'Poppins', sans-serif",
        color: "#2d3748",
        padding: "60px 30px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "800px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#805ad5",
            fontSize: "2.5rem",
            fontWeight: "bold",
            fontFamily: "'Abril Fatface', cursive",
          }}
        >
          Contact Me
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "40px",
            color: "#4a5568",
          }}
        >
          Feel free to connect with me on these platforms. I’d love to hear from
          you!
        </p>
        <div
          className="contact-details"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
        >
          {/* Mobile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
            className="contact-card"
          >
            <i
              className="fa fa-phone"
              style={{
                color: "#6b46c1",
                fontSize: "1.5rem",
              }}
            ></i>
            <span
              style={{
                fontSize: "1.2rem",
                color: "#2d3748",
              }}
            >
              +91 12345 67890
            </span>
          </div>

          {/* Email */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
            className="contact-card"
          >
            <i
              className="fa fa-envelope"
              style={{
                color: "#6b46c1",
                fontSize: "1.5rem",
              }}
            ></i>
            <span
              style={{
                fontSize: "1.2rem",
                color: "#2d3748",
              }}
            >
              yourname@gmail.com
            </span>
          </div>

          {/* LinkedIn */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
            className="contact-card"
          >
            <i
              className="fa fa-linkedin"
              style={{
                color: "#6b46c1",
                fontSize: "1.5rem",
              }}
            ></i>
            <a
              href="https://linkedin.com/in/yourprofile"
              style={{
                textDecoration: "none",
                color: "#2d3748",
                fontSize: "1.2rem",
              }}
            >
              LinkedIn
            </a>
          </div>

          {/* Social Media */}
          <h3
            className="text-center mt-5"
            style={{
              color: "#6b46c1",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Follow Me
          </h3>
          <div
            className="social-media-icons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
              <i
                className="fab fa-facebook"
                style={{
                  color: "#4267B2",
                  fontSize: "2rem",
                  transition: "transform 0.3s",
                }}
              ></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">
              <i
                className="fab fa-twitter"
                style={{
                  color: "#1DA1F2",
                  fontSize: "2rem",
                  transition: "transform 0.3s",
                }}
              ></i>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
              <i
                className="fab fa-instagram"
                style={{
                  color: "#C13584",
                  fontSize: "2rem",
                  transition: "transform 0.3s",
                }}
              ></i>
            </a>
            
         </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
