import React, { useState, useEffect } from 'react';
import { FaCartPlus, FaSearch, FaUserAlt, FaChevronLeft } from 'react-icons/fa';
import './UniformType.css';
import { useNavigate, useLocation } from 'react-router-dom';
import uniformsData from './uniform.json';  // Adjust the path based on the location of your JSON file

// const categories = [
//   "Front Desk/Reception Staff", "Housekeeping Staff", "Concierge Staff",
//   "Waitstaff and Bartenders", "Chefs and Kitchen Staff",
//   "Spa and Wellness Staff", "Event and Banquet Staff", "Maintenance and Engineering Staff"
// ];

const UniformType = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(location.state?.category || "");

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(location.state?.category);
    }
  }, [location, selectedCategory]);

  return (
    <div className='page'>
      <header className="navbar">
        <div className="navbar-left">
          <img src="https://www.landsend.com/pps/static/assets/global-header/LE_COMFY_LOGO_DesktopNavy.svg" alt="Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>
        <div className="navbar-right">
          <div className="icon"><FaUserAlt />Sign In</div>
          <div className="icon"><FaCartPlus />Cart</div>
        </div>
      </header>

      <div style={{ padding: '5px', margin: '0.3em' }}>
        <FaChevronLeft onClick={() => navigate('/secondpage')} />
      </div>

      {/* Uniform Cards */}
      <div className="card-grid">
        {uniformsData[selectedCategory].map((item, index) => (
          <div key={index} className="card">
            <div className="card-image">
              <img src={item.image} alt={item.heading} />
            </div>
            <h3>{item.heading}</h3>
            <p>{item.description}</p>
            <p>Brand: {item.brand}</p>
            <p>Rate: {item.rate}</p>
            <div className="card-buttons">
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniformType;
