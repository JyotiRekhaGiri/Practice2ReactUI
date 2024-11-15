import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Nav} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaFacebookF, FaX, FaBars, FaSearch, FaTimes, FaLinkedin, FaInstagram, FaYoutube, FaDribbble } from 'react-icons/fa';  // Import FaTimes

function FirstPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    Solutions: false,
    Industries: false,
    About: false,
    Impact: false,
  });
  const [hospitalityOpen, setHospitalityOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (link) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [link]: !prevState[link],
    }));
  };

  const navigate = useNavigate();

  const links = {
    Solutions: ['Solution 1', 'Solution 2', 'Solution 3'],
    Industries: ['Industry 1', 'Industry 2', 'Industry 3'],
    About: ['Team', 'Company', 'History'],
    Impact: ['Environment', 'Community', 'Economy'],
  };

  return (
    <div className="App">
      <div className="Nav">
        <div className="logo">
          <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/default-album/cintas-logo-header.png?sfvrsn=400e0362_3" alt='logo' style={{ width: "50px", height: "50px" }} />
        </div>

        <div className="links">
          {Object.keys(links).map((link) => (
            <div
              key={link}
              className="link-item"
              onMouseEnter={() => toggleDropdown(link)}
              onMouseLeave={() => toggleDropdown(link)}
            >
              <span>{link}</span>
              <FaChevronDown className="chevron" />
              {dropdownOpen[link] && (
                <div className="dropdown">
                  {links[link].map((sublink, index) => (
                    <a href={`/${link.toLowerCase()}/${sublink.toLowerCase()}`} key={index}>
                      {sublink}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <FaSearch className="search-icon" />
        </div>

        <div className="buttons">
          <button className="call-now">Call Now</button>
          <button className="contact-us">Contact Us</button>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="close-icon" onClick={toggleMenu}>
            <FaTimes />
          </div>

          {Object.keys(links).map((link) => (
            <div key={link} className="link-item">
              <span onClick={() => toggleDropdown(link)}>{link}</span>
              <FaChevronDown className="chevron" />
              {dropdownOpen[link] && (
                <div className="dropdown">
                  {links[link].map((sublink, index) => (
                    <a href={`/${link.toLowerCase()}/${sublink.toLowerCase()}`} key={index}>
                      {sublink}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Buttons placed at the end in mobile view */}
          <div className="mobile-buttons">
            <button className="call-now">Call Now</button>
            <button className="contact-us">Contact Us</button>
          </div>
        </div>
      )}

      {/* Placeholder Content */}
      <div className="name-links">{/* Additional Links */}</div>
      <div className="content-body">
        <div className="first">
          <div className="row">

            <div className="col-sm-6 text-card" >
              <div className="card" style={{ backgroundColor: "rgb(18, 18, 83)", color: "white", marginTop: "0.3rem" }}>
                <div className="card-body" style={{ padding: "2rem" }}>
                  <h1 className="card-title">Hospitality</h1>
                  <p className="card-text">
                    Every detail of your property influences your guests' experience, from the warm welcome to the cleanliness of your lobby; first impressions can last a lifetime.
                  </p>
                  <a href="#" className="btn btn-danger bttn">Request Information</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 image-card">
              <div className="card">
                <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/industries/hospitality-home-banner.png?sfvrsn=4f1bd8f3_1" alt="Hospitality Image" />
              </div>
            </div>
          </div>
        </div>

        <div className="second">
          <div className="row">
            <div className="col-sm-6 text-card secondFirst">
              <div className="dropdown" style={{ color: "rgb(18,18,83)" }}>
                <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Hospitality
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button">Apparel Program</button>
                  <button className="dropdown-item" type="button">Another action</button>
                  <button className="dropdown-item" type="button">Something else here</button>
                </div>
              </div>

            </div>
            <div className="col-sm-13 text-card">
              <Nav className="flex-column pt-2">
                <p className="ml-3 text-dark mx-3 navileft">Hospitality</p>

                <Nav.Item className="active">
                  <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold" }}>
                    <FontAwesomeIcon icon={faHome} className="mr-2 mx-2" style={{ fontWeight: "bold", color: "rgb(78, 6, 78)" }} onClick={() => navigate('/home')} />
                    Type
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold", textDecoration: "underline" }}>
                    Find Your Uniform
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold", textDecoration: "underline" }}>
                    Sizing & Fit
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold", textDecoration: "underline" }}>
                    Get Started
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="card">
                <div className="card-body" style={{ padding: '2rem' }}>
                  <h1 className="card-title">
                    Create an atmosphere that expresses brand vision and inspires guests
                  </h1>
                  <p className="card-text">
                    The carefully chosen details found throughout your property curate an engaging experience that leaves your guests eager for more. Cintas provides stylish, retail-inspired apparel, sleek designer restroom accessories, personalized logo mats, fire safety services, and first aid & safety products. We develop tailored programs to address the specific needs of your property.
                  </p>
                  <p style={{ marginTop: '10px' }}>
                    Cintas has established the benchmark for employee apparel that combines style with functionality. We create tailored programs to meet the unique requirements of each of your departments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="third">
          <div className="row">
            <div className="col-sm-6 image-card">
              <div className="card">
                <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/industries/hospitality/hospitality-apparel-program.tmb-medium_475.webp?sfvrsn=ee3f532b_1" alt='' />
              </div>
            </div>

            <div className="col-sm-6 text-card" >
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Apparel Program</h1>
                  <p className="card-text">
                    A fully managed apparel program includes weekly delivered apparel, professional laundering, repairs, inventory control + peace of mind.                  </p>
                  <a href="#" className="btn btn-danger" style={{ padding: '0.8rem', fontWeight: "bold" }}>READ MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth">
          <div className="row">

            <div className="col-sm-6 text-card" >
              <div className="card">
                <div className="card-body" style={{ padding: "2rem" }}>
                  <h1 className="card-title">Apparel Purchase</h1>
                  <p className="card-text">
                    A purchased program includes tailored garments designed solely for your team by award-winning fashion designers.
                  </p>
                  <a href="#" className="btn btn-danger" style={{ padding: '0.8rem', fontWeight: "bold" }}>READ MORE</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 image-card">
              <div className="card">
                <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/industries/hospitality/hospitality-apparel-purchase.tmb-medium_475.webp?sfvrsn=a5986d6d_1" alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className="fifth">
          <div className="row">
            <div className="col-sm-6 image-card">
              <div className="card">
                <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/industries/hospitality/hospitality-first-aid.tmb-medium_475.webp?sfvrsn=676e8f12_1" alt='' />
              </div>
            </div>
            <div className="col-sm-6 text-card" >
              <div className="card">
                <div className="card-body" style={{ padding: "2rem" }}>
                  <h1 className="card-title">First Aid & Safety</h1>
                  <p className="card-text">
                    Protect your guests, your employees and your property with leading safety and compliance solutions. Cintas helps you stay prepared for minor cuts and scrapes as well as medical emergencies with an array of carefully selected first aid and safety products. You choose the products your facility needs to create your custom program, and we manage your inventory efficiently.
                  </p>
                  <a href="#" className="btn btn-danger" style={{ padding: '0.8rem', fontWeight: "bold" }}>READ MORE</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="sixth">
          <div className="row">
            <div className="col-sm-6 text-card" >
              <div className="card" >
                <div className="card-body" style={{ padding: "2rem" }}>
                  <h1 className="card-title">Facility Services</h1>
                  <p className="card-text">
                    Our restroom collections feature a unique selection of designer accessories that blend style and functionality, while creating a warm, home-like atmosphere. We are committed to delivering services that let you focus on what truly matters – the experiences of your guests.                  </p>
                  <a href="#" className="btn btn-danger" style={{ padding: '0.8rem', fontWeight: "bold" }}>READ MORE</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 image-card">
              <div className="card">
                <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/industries/hospitality/hospitality-facility-services.tmb-medium_475.webp?sfvrsn=cb4ef619_1" alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className="seventh">
          <div className="row">
            <div className="col-sm-6 image-card">
              <div className="card">
                <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/industries/hospitality/hospitality-fire-protection.tmb-medium_475.webp?sfvrsn=bc7d6585_1" alt='' />
              </div>
            </div>
            <div className="col-sm-6 text-card" >
              <div className="card">
                <div className="card-body" style={{ padding: "2rem" }}>
                  <h1 className="card-title">Fire Protection</h1>
                  <p className="card-text">
                    Keep your property prepared with skilled maintenance, inspections and fire protections services you need.  From round-the-clock monitoring, testing of emergency and exit lights to inspecting every inch of your fire sprinkler system – we know it’s the details that count when it comes to fire protection.                  </p>
                  <a href="#" className="btn btn-danger bttn" style={{ padding: '0.8rem', fontWeight: "bold" }}>READ MORE</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="eighth">

          <div className="row">
            <div className="col-sm-6 text-card" >
              <div className="card" >
                <div className="card-body" style={{ padding: "2rem" }}>
                  <h1 className="card-title">Garment Dispensing</h1>
                  <p className="card-text">
                    An innovative apparel solution that is convenient and hassle-free. As a turnkey solution, it includes all the elements to provide your property with a highly efficient and accountable apparel program. Our apparel solution delivers the peace of mind of being prepared with clean, ready-to-wear garments that fit correctly—all within seconds.                  </p>
                  <a href="#" className="btn btn-danger bttn" style={{ padding: '0.8rem', fontWeight: "bold" }}>READ MORE</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 image-card">
              <div className="card">
                <img src="https://assets-prd.cintas.com/sf-assets/images/default-source/industries/hospitality/hospitality-garment-dispensing.tmb-medium_475.webp?sfvrsn=67e3499c_1" alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className="card ninth">
          <div className="image-backgrd">
            <div className="hover-card">
              <h1 style={{ fontWeight: "bold" }}>Contact a Cintas Representative Today!</h1>
              <button className="hover-btn">CONTACT US</button>
            </div>
          </div>
        </div>

      </div>


      <div className="footer">
        <div className="container my-5">
          <footer className="footer-content">
            <div className="row" style={{ display: 'flex', flexDirection: 'start' }}>
              {/* Social Media Icons */}
              <div className="col-12 col-lg-4 text-center d-flex justify-content-start">
                <div className="icon-row">
                  <button className="social-icon"><FaFacebookF /></button>
                  <button className="social-icon"><FaDribbble /></button>
                  <button className="social-icon"><FaLinkedin /></button>
                  <button className="social-icon"><FaInstagram /></button>
                  <button className="social-icon"><FaYoutube /></button>
                </div>
              </div>

              {/* Link Names */}
              <div className='sixcol'>
                <div className="col-12 col-lg-4 text-center link-row footer-link">
                  <a href="#">Contact</a>
                </div>
                <div className="col-12 col-lg-4 text-center link-row footer-link">
                  <a href="#">Investor Relations</a>
                </div>
                <div className="col-12 col-lg-4 text-center link-row footer-link">
                  <a href="#">SDS</a>
                </div>
                <div className="col-12 col-lg-4 text-center link-row footer-link">
                  <a href="#">Careers</a>
                </div>
                <div className="col-12 col-lg-4 text-center link-row footer-link">
                  <a href="#">Location Finder</a>
                </div>
                <div className="col-12 col-lg-4 text-center link-row footer-link">
                  <a href="#">Home</a>
                </div>
              </div>

              {/* Copyright */}
              <div className="col-12 text-right copyright">
                © 2024 Cintas Corporation <span style={{ color: "rgb(18,18,83)", fontWeight: 'bold' }}>| Data Protection Center | Legal | Fraud Alert | Privacy Notices | Sitemap | Your Privacy Choices</span> check mark logo for your privacy choice<br></br>
                <p>This site is protected by reCAPTCHA and the Google <span style={{ color: "rgb(18,18,83)" }}> Privacy Policy</span> Opens in a new window. and Terms of <span style={{ color: "rgb(18,18,83)" }}>ServiceOpens</span> in a new window. apply.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>

    </div>
  );
}

export default FirstPage;
