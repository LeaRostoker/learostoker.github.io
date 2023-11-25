import React from 'react';
import '../styles/style.css';

const Main = () => {
  return (
    <main>
      <section id="intro">
        <div className="intro-container">
          <div className="intro-content">
            <div id="name-container">
              <h1 id="name"></h1>
            </div>
            <div id="image-container">
              <img src="process.env.PUBLIC_URL + img/profile-picture.jpeg" alt="Profile Picture" />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-row">
            <div id="about-image">
              <img src="img/about-picture.JPG" alt="Profile Picture" />
            </div>
            <div id="about-container">
              <h2 className="about-title">About Me</h2>
              <p className="about-text">
                Welcome to my website! I'm Léa, a soon-to-be IT and multimedia engineer graduating in September for{' '}
                <a className="text" href="https://www.ingenieur-imac.fr/" target="_blank" rel="noopener noreferrer">
                  IMAC
                </a>{' '}
                engineering school.
                {/* ... your existing content */}
              </p>
              <div className="about-button-row">
                {/* ... your existing content */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="project-row">
            {/* ... your existing content */}
          </div>
          <div className="project-row">
            {/* ... your existing content */}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-row">
            <div className="col-md-6">
              <div className="contact-info">
                <h2 className="contact-title">Contact Me</h2>
                <div className="contact-buttons-col">
                  {/* ... your existing content */}
                </div>
                <p>
                  <b>Email: </b>lea.rostoker.12@gmail.com
                </p>
                <p>
                  <b>Phone: </b> +33 6 28 58 83 86
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
