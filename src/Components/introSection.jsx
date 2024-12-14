import React from "react";
function Intro()
{
    return(
        
      <section className="hero text-center d-flex align-items-center justify-content-center" 
      style={{ height: '100vh', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: '#fff' }}>
      <div>
        <h1 className="display-4 fw-bold">Hi, I'm Hari Raval</h1>
        <p className="lead">I'm a passionate web developer specializing in creating modern, responsive websites and apps.</p>
        <a className="btn btn-lg mt-4" href="#projects" style={{ backgroundColor: '#38b2ac', color: '#fff' }}>View My Work</a>
      </div>
    </section>

    );
}
export default Intro;