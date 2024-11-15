import React, { useState } from 'react';
import './SecondPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faPaperPlane,
  faQuestion,
  faTimes,
  faVestPatches,
  faVest,
  faShirt,
  faTShirt,
  faShoePrints,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { FaCartPlus, FaSearch, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReadMoreClick = () => {
    navigate('/uniform', { state: { category: selectedCategory } });
  };

  return (
    <div className='main-content'>
      <header className="navbar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
        </div>
        <div className="navbar-left">
          <img src="https://www.landsend.com/pps/static/assets/global-header/LE_COMFY_LOGO_DesktopNavy.svg" alt="Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <div className="search-wrapper">
            <FaSearch className="search-icon" style={{ color: "grey" }} />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>
        <div className="navbar-right">
          <div className="icon"><FaUserAlt />Sign In</div>
          <div className="icon"><FaCartPlus />Cart</div>
        </div>
      </header>

      <div className='body-part'>
        <div className={`first-half ${isSidebarOpen ? 'open' : ''}`}>
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={toggleSidebar} />
          <Nav className="flex-column pt-2">
            <p className="ml-3 text-dark mx-3 navileft">RESOURCES</p>

            <Nav.Item className="active">
              <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold" }}>
                <FontAwesomeIcon icon={faHome} className="mr-2 mx-2" style={{ fontWeight: "bold", color: "rgb(78, 6, 78)" }} onClick={() => navigate('/home')} />
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold" ,textDecoration: "underline"}}>
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
          <hr />

          <div>
            <Nav className="flex-column pt-2">
              <p className="ml-3 text-dark mx-3 navileft">DEPARTMENT</p>

              <Nav.Item className="active">
                <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faShirt} className="mr-2 mx-2" style={{ fontWeight: "bold", color: "rgb(78, 6, 78)" }} onClick={() => navigate('/home')} />
                  Clothing (288)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faShoePrints} className="mr-2 mx-2" style={{ fontWeight: "bold", color: "rgb(78, 6, 78)" }} onClick={() => navigate('/firstpage')} />
                  Shoes (12)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className='text-dark' style={{ fontWeight: "bold" }}>
                  <FontAwesomeIcon icon={faVestPatches} className="mr-2 mx-2" style={{ fontWeight: "bold", color: "rgb(78, 6, 78)" }} onClick={() => navigate('')} />
                  Accessories (12)
                </Nav.Link>
              </Nav.Item>

              <p className="ml-3 text-dark mx-3 navileft">Show More Department filters</p>

            </Nav>
          </div>
          <hr />

          <div>
            <Nav className="flex-column pt-2">
              <p className="ml-3 text-dark mx-3 navileft">CATEGORY</p>

              <Nav.Item className="active">
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Tops (140)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Bottoms (94)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Outerwear (41)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Dresses (13)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Shoes (12)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Accessories (12)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Backpacks (6)
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/" className="text-dark" style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
                  <input type="checkbox" className="mr-2" />
                  Socks & Hosiery (3)
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="ml-3 text-dark mx-3 navileft">Show More Category filters</p>
          </div>

        </div>

        <div className='second-half'>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? "active" : ""}
                id='cat'
              >
                {category}
              </button>
            ))}
          </div>

          <div className='text-center' style={{ marginTop: "rem" }}>
            <h1>Get back to Hospitality Uniform Types! </h1>
          </div>

          <div className="uniform-gallery">
            {uniformsData[selectedCategory].slice(0, 2).map((uniform, index) => (
              <div key={index} className="uniform-card">
                <img src={uniform.image} alt={`${selectedCategory} uniform ${index + 1}`} className="uniform-image" />
                <h3 className="uniform-heading">{uniform.heading}</h3>
                <p className="uniform-description">{uniform.description}</p>
                <button onClick={handleReadMoreClick}>Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        © 2024 LANDS'END. All rights reserved.
      </footer>
    </div>
  );
};


export default SecondPage;
