import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home';
import MainContent from './Components/MainContent'; // Adjust the path as needed

import Stress from './Components/Stress';
import SongBar from './Components/SongBar';
import SpeechBar from './Components/SpeechBar';
import BlogBar from './Components/BlogBar';
import BookBar from './Components/BookBar';




function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api`)
      .then(response => {
        setBackendData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  

  return (
    <Router>
      <div className="App">
         {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
  
          <Link to="/stress">Stress</Link>
          
          <Link to='/SpeechBar'></Link>
          <Link to='/SongBar'></Link>
          <Link to='/BookBar'></Link>
          <Link to='/BlogBar'></Link>
        </nav>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<MainContent backendData={backendData} />} />
          
          <Route path="/stress" element={<Stress />} />
          
          {/* <Route path="/SpeechBar" element={<SpeechBar/>}/>
          <Route path="/SongBar" element={<SongBar/>}/>
          <Route path="/BookBar" element={<BookBar/>}/>
          <Route path="/BlogBar" element={<BlogBar/>}/> */}
        </Routes>
      </div>
    </Router>
    // <div><Sleep/></div>
  );
}

export default App;
