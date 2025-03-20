import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll'; 
import Feedback from './Feedback';
import Contact from './Contact';
import MainContent from './MainContent';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

function Home() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [showImage, setShowImage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 500);
  }, []);

  const handleTryCalmClick = () => {
    loginWithRedirect();
  };

  return (
    <div className="home-container">
    <NavBar/>
      <div className="text-center p-60  mt-18 ">
        <h1 className="text-5xl text-white font-bold animate__animated animate__fadeInUp mt-5">Peace your mind. Change your life.</h1>
        <p className="text-xl text-white mt-4 animate__animated animate__fadeInUp animate__delay-1s">
          Mental health is hard. Getting support doesn't need to be. Our Website puts
          the tools to feel better in your back pocket, with personalized content
          to manage stress and anxiety, get better sleep, and feel more present
          in your life. Relax your mind, and wake up as the person you want to be.
        </p>
        {isAuthenticated ? (
          <button
            onClick={handleTryCalmClick}
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600"
          >
            Explore Peace
          </button>
        ) : (
          <button
            onClick={handleTryCalmClick}
            className="mt-10 inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600"
          >
            Explore Peace
          </button>
        )}
      </div>
      <Element name="MainContact">
        <MainContent/>
      </Element>
      <Feedback />
      <Element name="Contact">
        <Contact/>
      </Element>
    </div>
  );
}

export default Home;
