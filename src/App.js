import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import Home from './Home';
import UniformType from './UniformType';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firstpage" element={<FirstPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
          <Route path='/uniform' element={<UniformType/>}/>
        </Routes>
    </Router>
  );
}

export default App;
