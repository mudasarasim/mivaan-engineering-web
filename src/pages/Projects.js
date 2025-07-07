import React, { useState } from 'react';
import './Contact.css'

const Projects = () => {
  return (
   <>
      <div className="ms-breadcrumb m-b-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back"
                  style={{
                    background:
                      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("img/bg.jpeg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    padding: '80px 0',
                    textAlign: 'center',
                  }}>
                  <h2>Our Projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container my-5">
        <h2 className="text-teal fw-bold mb-4">PROJECTS</h2>      
        <div className="row g-4">
          {/* Row 1 - Actual Projects */}
          {[
            {
              img: "/img/Villa1.jpg",
              // location: "ABOMEY CALAVI – BENIN",
              // title: "ADMINISTRATIVE CITY, ABOMEY",
              // desc: "16 low rise modern office buildings fully fitted out with associated car park structures, medical centre and conference       facilities.",
            },
            {
              img: "/img/Villa 2.jpg",
              // location: "DUBAI, UAE",
              // title: "MASHREQ BANK HEADQUARTERS, DUBAI",
              // desc: "Prestigious Headquarters of Mashreq Bank.",
            },
            {
              img: "/img/Villa 3.jpg",
              // location: "DOUALA, CAMEROON",
              // title: "H&CO BUILDING, CAMEROON",
              // desc: "Luxurious residential project comprising of 30 luxury apartments and penthouses over 12 floors.",
            },
            {
              img: "/img/Villa 4.jpeg",
            },
            {
              img: "/img/Villa 5.jpeg",
            }
          ].map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 h-100">
                <div className="position-relative">
                  <img src={project.img} alt={project.title} className="img-fluid rounded back" />
                  <div className="position-absolute top-0 start-0 bg-teal text-white px-2 py-1">{project.location}</div>
                  {/* <div className="view-overlay d-flex justify-content-center align-items-center">
                    <span className="view-text">VIEW PROJECT</span>
                  </div> */}
                </div>
                <div className="mt-2 fw-bold">{project.title}</div>
                <p className="text-muted small">{project.desc}</p>
              </div>
            </div>
          ))}

          {/* Row 2 & 3 - Dummy Projects */}
          {/* {[...Array(6)].map((_, index) => (
            <div className="col-md-4" key={`dummy-${index}`}>
              <div className="card border-0 h-100">
                <div className="position-relative">
                  <img src="/img/bg.jpeg" alt="Dummy Project" className="img-fluid rounded back" />
                  <div className="position-absolute top-0 start-0 bg-secondary text-white px-2 py-1">DUMMY LOCATION</div>
                  <div className="view-overlay d-flex justify-content-center align-items-center">
                    <span className="view-text">VIEW PROJECT</span>
                  </div>
                </div>
                <div className="mt-2 fw-bold">DUMMY PROJECT TITLE</div>
                <p className="text-muted small">This is a placeholder project description to simulate real data in layout.</p>
              </div>
            </div>
          ))} */}
        </div>
</section>

   </>
  );
};

export default Projects;
