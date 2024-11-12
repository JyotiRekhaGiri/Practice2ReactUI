import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <button onClick={() => navigate('/firstpage')} style={{ margin: '10px', textDecoration: 'none', color: 'white', fontSize: '18px', padding: '10px 20px', backgroundColor: 'rgb(18,18,83)', borderRadius: '10px',borderColor: 'white',boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)' }}>
          Go to First Page
        </button>
        <button onClick={() => navigate('/secondpage')} style={{ margin: '10px', textDecoration: 'none', color: 'white', fontSize: '18px', padding: '10px 20px', backgroundColor: 'rgb(18,18,83)', borderRadius: '10px',borderColor: 'white',boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)' }}>
          Go to Second Page
        </button>
      </div>
    );
}

export default Home;
