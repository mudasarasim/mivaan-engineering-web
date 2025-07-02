import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[
             { img: '/img/bg.jpeg', text: 'BUILDING\nICONS' },
               { img: '/img/bbb.png', text: 'BUILDING\nSERVICES' },
            { img: '/img/bt.jpg', text: 'BUILDING\nFUTURES' },         
           
          ].map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} position-relative`}>
              <div className="hero-image-overlay" />
              <img src={item.img} className="d-block w-100 hero-image" alt="Banner" />
              <div className="carousel-caption text-start" style={{ left: '12%', top: '33%' }}>
                <h1 className="display-4 fw-bold text-white">{item.text}</h1>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>

      {/* Welcome Section */}
      <section className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h2 className="text-teal fw-bold">WELCOME</h2>
            <p>
              ACC (Arabian Construction Company) is a premier, leading construction contractor with a portfolio that includes
              some of the Middle East, Africa and India’s most iconic and sophisticated construction masterpieces.
            </p>
            <p>
              For more than 50 years, we have shaped the skylines of major cities, set the infrastructure for large industrial
              facilities and built landmark projects in healthcare, hospitality, commercial and residential. We focus on
              delivering quality while maintaining the highest health and safety standards.
            </p>
            <p className="fw-semibold text-teal">Find out more about us</p>
          </div>
          <div className="col-md-4">
            <div className="bg-teal text-white p-3">
              <h5 className="mb-3">FACTS & FIGURES</h5>
            </div>
            <ul className="list-group list-group-flush border">
              <li className="list-group-item d-flex justify-content-between">
                <strong>57</strong> <span>Years of experience</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>12</strong> <span>Countries of operation</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>13</strong> <span>Offices across ME, India, Africa, UK</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>15,000+</strong> <span>Workforce</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="bg-light py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
          <div className="flex-grow-1">
            <h4 className="text-teal fw-bold">THE ADDRESS SKY VIEW – MAIN BRIDGE LIFT</h4>
            <p>
              The team at the Address Sky View site in Downtown Dubai achieved a remarkable feat of engineering by lifting
              the 1500 tonne, 3-floor Sky Bridge to a height of 220m using strand-jacking technology. Watch our mini-documentary
              to see how they did it.
            </p>
          </div>
          <div className="position-relative">
            <img src="/img/bg.jpeg" alt="Bridge Lift" className="img-fluid rounded shadow" style={{ maxWidth: '480px' }} />
            <div
              className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle p-3"
              style={{ cursor: 'pointer', width: '60px', height: '60px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#286961" viewBox="0 0 16 16" width="30" height="30">
                <path d="M6.79 5.093a.5.5 0 0 0-.79.407v5a.5.5 0 0 0 .79.407l4-2.5a.5.5 0 0 0 0-.814l-4-2.5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Slider */}
      <section className="container my-5">
        <h2 className="text-teal fw-bold mb-4">PROJECTS</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="card border-0">
              <div className="position-relative">
                <img src="/img/back.jpg" alt="Administrative City" className="img-fluid rounded back" />
                <div className="position-absolute top-0 start-0 bg-teal text-white px-2 py-1">
                  ABOMEY CALAVI – BENIN
                </div>
                <div className="view-overlay d-flex justify-content-center align-items-center">
                  <span className="view-text">VIEW PROJECT</span>
                </div>
              </div>
              <div className="mt-2 fw-bold">ADMINISTRATIVE CITY, ABOMEY</div>
              <p className="text-muted small">
                16 low rise modern office buildings fully fitted out with associated car park structures, medical centre and conference facilities.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="card border-0">
              <div className="position-relative">
                <img src="/img/back1.avif" alt="Mashreq Bank" className="img-fluid rounded back" />
                <div className="position-absolute top-0 start-0 bg-teal text-white px-2 py-1">
                  DUBAI, UAE
                </div>
                <div className="view-overlay d-flex justify-content-center align-items-center">
                  <span className="view-text">VIEW PROJECT</span>
                </div>
              </div>
              <div className="mt-2 fw-bold">MASHREQ BANK HEADQUARTERS, DUBAI</div>
              <p className="text-muted small">
                Prestigious Headquarters of Mashreq Bank.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="card border-0">
              <div className="position-relative">
                <img src="/img/bbb.png" alt="H&CO Building" className="img-fluid rounded back" />
                <div className="position-absolute top-0 start-0 bg-teal text-white px-2 py-1">
                  DOUALA, CAMEROON
                </div>
                <div className="view-overlay d-flex justify-content-center align-items-center">
                  <span className="view-text">VIEW PROJECT</span>
                </div>
              </div>
              <div className="mt-2 fw-bold">H&CO BUILDING, CAMEROON</div>
              <p className="text-muted small">
                Luxurious residential project comprising of 30 luxury apartments and penthouses over 12 floors.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 1 */}
          <SwiperSlide>
            <div className="card border-0">
              <div className="position-relative">
                <img src="/img/back.jpg" alt="Administrative City" className="img-fluid rounded back" />
                <div className="position-absolute top-0 start-0 bg-teal text-white px-2 py-1">
                  ABOMEY CALAVI – BENIN
                </div>
                <div className="view-overlay d-flex justify-content-center align-items-center">
                  <span className="view-text">VIEW PROJECT</span>
                </div>
              </div>
              <div className="mt-2 fw-bold">ADMINISTRATIVE CITY, ABOMEY</div>
              <p className="text-muted small">
                16 low rise modern office buildings fully fitted out with associated car park structures, medical centre and conference facilities.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="card border-0">
              <div className="position-relative">
                <img src="/img/back1.avif" alt="Mashreq Bank" className="img-fluid rounded back" />
                <div className="position-absolute top-0 start-0 bg-teal text-white px-2 py-1">
                  DUBAI, UAE
                </div>
                <div className="view-overlay d-flex justify-content-center align-items-center">
                  <span className="view-text">VIEW PROJECT</span>
                </div>
              </div>
              <div className="mt-2 fw-bold">MASHREQ BANK HEADQUARTERS, DUBAI</div>
              <p className="text-muted small">
                Prestigious Headquarters of Mashreq Bank.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="card border-0">
              <div className="position-relative">
                <img src="/img/bbb.png" alt="H&CO Building" className="img-fluid rounded back" />
                <div className="position-absolute top-0 start-0 bg-teal text-white px-2 py-1">
                  DOUALA, CAMEROON
                </div>
                <div className="view-overlay d-flex justify-content-center align-items-center">
                  <span className="view-text">VIEW PROJECT</span>
                </div>
              </div>
              <div className="mt-2 fw-bold">H&CO BUILDING, CAMEROON</div>
              <p className="text-muted small">
                Luxurious residential project comprising of 30 luxury apartments and penthouses over 12 floors.
              </p>
            </div>
          </SwiperSlide>

          {/* Add more slides as needed */}
        </Swiper>
      </section>

    </>


  );
};

export default Home;
