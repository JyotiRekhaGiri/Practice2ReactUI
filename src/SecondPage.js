import React, { useState } from 'react';
import './SecondPage.css'; // Make sure to add relevant CSS for styling
import { FaCartPlus, FaSearch, FaUserAlt } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';

const categories = [
  "Front Desk/Reception Staff",
  "Housekeeping Staff",
  "Concierge Staff",
  "Waitstaff and Bartenders",
  "Chefs and Kitchen Staff",
  "Spa and Wellness Staff",
  "Event and Banquet Staff",
  "Maintenance and Engineering Staff"
];

const uniformsData = {
    "Front Desk/Reception Staff": [
      {
        image: "https://storage.googleapis.com/gethotefycom.appspot.com/uploads/hotel-reception-staff.webp",
        heading: "Front Desk Uniform",
        description: "Professional attire for reception staff."
      },
      {
        image: "https://t4.ftcdn.net/jpg/01/96/15/07/240_F_196150706_Xuy4Tw0L5x0Lo1ExaqGIpSfytpvBn8UA.jpg",
        heading: "Reception Staff Outfit",
        description: "Stylish and welcoming uniform for the front desk."
      }
    ],
    "Housekeeping Staff": [
      {
        image: "https://cdn11.bigcommerce.com/s-ab5f8/images/stencil/500x659/products/1747/4193/4280-406_7280-406_007__33842.1522795291.jpg?c=2",
        heading: "Housekeeping Uniform",
        description: "Comfortable and practical outfit for housekeeping."
      },
      {
        image: "https://5.imimg.com/data5/SELLER/Default/2024/5/421489045/JB/SO/MM/28667155/housekeeping-staff-uniform.jpg",
        heading: "Cleaning Staff Uniform",
        description: "Efficient and easy-to-wear housekeeping uniform."
      }
    ],
    "Concierge Staff": [
      {
        image: "https://www.bolzonelladivise.com/wp-content/uploads/divise-hotel-2.jpg",
        heading: "Concierge Uniform",
        description: "Elegant and tailored attire for concierge staff."
      },
      {
        image: "https://i.pinimg.com/736x/05/54/74/05547480add2a85262de51d739baffef.jpg",
        heading: "Concierge Attire",
        description: "Sophisticated style for concierge professionals."
      }
    ],
    "Waitstaff and Bartenders": [
      {
        image: "https://i.pinimg.com/736x/c9/2c/84/c92c842ee81b07dfd1bd3e5fefd4b1b5.jpg",
        heading: "Waitstaff Uniform",
        description: "Chic and functional uniform for waitstaff."
      },
      {
        image: "https://cdn.garment.dony.vn/wp-content/uploads/2023/03/Top-waiter-uniform-design-and-trends-styles-and-ideas.jpg",
        heading: "Bartender Uniform",
        description: "Stylish attire for bartenders and waitstaff."
      }
    ],
    "Chefs and Kitchen Staff": [
      {
        image: "https://kylemarkworkwear.co.uk/media/mgs_blog/0/7/07c4b13a-e850-424d-82ce-8e25aec6d785.jpeg",
        heading: "Chef's Coat",
        description: "Classic white coat for chefs and kitchen staff."
      },
      {
        image: "https://www.qualityteams.com.au/wp-content/uploads/2020/08/cheff-and-kitchen-staff-uniforms.jpg",
        heading: "Kitchen Staff Uniform",
        description: "Durable and comfortable attire for kitchen staff."
      }
    ],
    "Spa and Wellness Staff": [
      {
        image: "https://m.media-amazon.com/images/I/81F3wA5+gWL._AC_UY1100_.jpg",
        heading: "Spa Attendant Uniform",
        description: "Relaxing and clean attire for spa staff."
      },
      {
        image: "https://5.imimg.com/data5/CA/MS/UD/ANDROID-24520709/spa-wellness-kasack-m-jpg.jpg",
        heading: "Wellness Staff Uniform",
        description: "Comfortable and stylish uniform for wellness staff."
      }
    ],
    "Event and Banquet Staff": [
      {
        image: "https://s.alicdn.com/@sc04/kf/H512bf4179a86429faedb0e8288bcbae0t.png",
        heading: "Banquet Staff Attire",
        description: "Formal attire for event and banquet staff."
      },
      {
        image: "https://s.alicdn.com/@sc04/kf/H2ae7b23e9e584f1ba183ac15b4e1664dY.jpg_300x300.jpg",
        heading: "Event Staff Uniform",
        description: "Professional look for event staff."
      }
    ],
    "Maintenance and Engineering Staff": [
      {
        image: "https://5.imimg.com/data5/MT/XV/KG/SELLER-4762225/maintenance-uniforms.jpg",
        heading: "Maintenance Uniform",
        description: "Durable attire for maintenance staff."
      },
      {
        image: "https://cdn.garment.dony.vn/wp-content/uploads/2023/03/Top-design-and-best-trends-maintenance-uniform-styles-and-ideas.jpg",
        heading: "Engineering Staff Uniform",
        description: "Protective and comfortable uniform for engineering staff."
      }
    ]
  };  

const SecondPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const navigate= useNavigate();

  return (
    <div className='main-content'>
      {/* Navbar */}
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

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Uniform Cards */}
      <div className="uniform-gallery">
        {uniformsData[selectedCategory].map((uniform, index) => (
          <div key={index} className="uniform-card">
            <img src={uniform.image} alt={`${selectedCategory} uniform ${index + 1}`} className="uniform-image" />
            <h3 className="uniform-heading">{uniform.heading}</h3>
            <p className="uniform-description">{uniform.description}</p>
            <button onClick={() =>navigate('')}>Read More</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2024 LANDS'END. All rights reserved.
      </footer>
    </div>
  );
};

export default SecondPage;
