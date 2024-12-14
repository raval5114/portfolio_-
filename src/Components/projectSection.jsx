import React from "react";

function Projects() {
  return (
    <section className="projects py-5" id="projects" style={{ backgroundColor: '#f7fafc' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#38b2ac', fontSize: '2.5rem', fontWeight: 'bold' }}>My Projects</h2>
        <div className="row">

          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#e6fffa', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2c7a7b', fontSize: '1.5rem' }}>Project 1: Basic Calculator</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                a basic calculator application that performs arithmetic operations like addition, subtraction, multiplication, and division. You can make it more interactive by adding features like history, memory functions, and advanced operations.
                </p>
                <a target="_blank"href="https://github.com/raval5114/calcapp" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#e6fffa', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2c7a7b', fontSize: '1.5rem' }}>Project 1: To Do List</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                a simple to-do list application where users can add tasks, mark them as complete, and delete them. You can implement basic CRUD operations (Create, Read, Update, Delete) using Flutter's state management and storage options.
                </p>
                <a href="https://github.com/raval5114/todolist" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#e6fffa', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2c7a7b', fontSize: '1.5rem' }}>Project 3: Expense Tracker</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                  A web application to track your expenses and manage your budget effectively. Users can categorize their expenses, view spending trends, and generate reports. Built with React and MongoDB.
                </p>
                <a href="https://github.com/raval5114/expense_tracker2" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#ebf4ff', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2b6cb0', fontSize: '1.5rem' }}>Project 4: Weather App</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                An app that fetches weather data from an API (like OpenWeatherMap) and displays it to the user. Users can enter a city or use GPS to get their current location's weather forecast.
             </p>
                <a href="https://github.com/raval5114/weather_app" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div> 

          {/* <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#e6fffa', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2c7a7b', fontSize: '1.5rem' }}>Project 5: Quiz App</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                  An interactive quiz application that allows users to test their knowledge on various topics. Users can take quizzes, see their scores, and view leaderboard rankings.
                </p>
                <a href="#" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#ebf4ff', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2b6cb0', fontSize: '1.5rem' }}>Project 6: Fitness Tracker</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                an app for tracking fitness activities like running, walking, or cycling. Users can start/stop a workout session, track distance covered, time taken, and calories burned. You can also incorporate features like setting goals, progress tracking, and sharing achievements.
                </p>
                <a href="#" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#e6fffa', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2c7a7b', fontSize: '1.5rem' }}>Project 7: E-commerce Site</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                  An e-commerce platform for users to browse and purchase products online. Features user authentication, product reviews, and an admin dashboard.
                </p>
                <a href="#" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#ebf4ff', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2b6cb0', fontSize: '1.5rem' }}>Project 6: Flashcard App</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                an app for learning and memorizing using flashcards. Users can create decks of flashcards with questions on one side and answers on the other. Include features like flipping cards, shuffling decks, and tracking progress.
                </p>
                <a href="#" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div> */}

          {/* <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#ebf4ff', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2b6cb0', fontSize: '1.5rem' }}>Project 7: Weather App</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                an app that fetches weather data from an API (like OpenWeatherMap) and displays it to the user. Users can enter a city or use GPS to get their current location's weather forecast.
                </p>
                <a href="#" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#ebf4ff', border: 'none', borderRadius: '10px' }}>
              <div className="card-body">
                <h3 className="card-title" style={{ color: '#2b6cb0', fontSize: '1.5rem' }}>Project 8: Chat Application</h3>
                <p className="card-text" style={{ color: '#4a5568' }}>
                a simple chat application where users can send text messages to each other in real-time. You can use Firebase or other backend services for implementing real-time messaging functionality.
                </p>
                <a href="#" className="btn btn-outline-primary">View Project</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
