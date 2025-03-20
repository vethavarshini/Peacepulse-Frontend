import React, { useState } from 'react';
import SleepTips from './SleepTips';
import Relax from './Relax';
import SleepMusic from './SleepMusic';
import HealthyHabits from './HealthyHabits';
import Feedback from './Feedback';
import Contact from './Contact';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Carousel'; // Import your Carousel component

function Section() {
  const [selectedOption, setSelectedOption] = useState('sleepTips');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the autoplay speed (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className="relative bg-gradient-to-r from-violet-50 to-orange-50">
        {/* Content */}
        {/* Container */}
        <div className="stress1 mx-auto w-full px-5 md:px-10 md:py-24 lg:py-16">
          {/* Content Grid */}
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2 w-full">
            {/* Heading Content */}
            <div className="max-w-[720px] p-8 bg-white shadow-lg rounded-lg ml-20">
              <h1 className="mb-3 pb-4 text-4xl font-bold text-green-700 md:text-6xl">Fast, Reliable and Secure</h1>
              <p className="mb-6 max-w-[528px] text-xl md:mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
              </p>
              <div className="flex items-center">
                <a href="#"
                  className="mr-5 inline-block rounded-full bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8">
                  Let's Talk
                </a>
                <a href="#"
                  className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold">
                  <p>View Showreel</p>
                </a>
              </div>
            </div>
            {/* Carousel */}
            <div className="ml-10">
              <Carousel /> {/* Replace this with your carousel component */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Navbar */}
      <nav className="flex justify-center bg-gray-800 p-3">
        <button
          className={`px-4 py-2 mx-2 bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'sleepTips' ? 'text-white' : 'text-gray-700'}`}
          onClick={() => handleOptionClick('sleepTips')}
        >
          Sleep Tips
        </button>
        <button
          className={`px-4 py-2 mx-2 bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'relaxation' ? 'text-white' : 'text-gray-700'}`}
          onClick={() => handleOptionClick('relaxation')}
        >
          Relaxation Techniques
        </button>
        <button
          className={`px-4 py-2 mx-2 bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'sleepMusic' ? 'text-white' : 'text-gray-700'}`}
          onClick={() => handleOptionClick('sleepMusic')}
        >
          Sleep Music
        </button>
        <button
          className={`px-4 py-2 mx-2 bg-gradient-to-r from-purple-400 to-blue-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'healthyHabits' ? 'text-white' : 'text-gray-700'}`}
          onClick={() => handleOptionClick('healthyHabits')}
        >
          Healthy Habits
        </button>
      </nav>

      {/* Main content area */}
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 flex flex-col lg:flex-row">
        {/* Render content based on selected option */}
        {selectedOption === 'sleepTips' && <SleepTips />}
        {selectedOption === 'relaxation' && <Relax />}
        {selectedOption === 'sleepMusic' && <SleepMusic />}
        {selectedOption === 'healthyHabits' && <HealthyHabits />}

        {/* Advertisement sidebar */}
        <div className="w-full lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md lg:ml-8 mt-8 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">Calm Your Mind</h2>
          <Slider {...settings}>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/3185388/3185388-hd_1080_1920_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/2970405/2970405-hd_1080_1920_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/2768651/2768651-hd_1080_1920_24fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slider>
        </div>
      </div>
      <Feedback />
      <Contact />
    </div>
  );
}

export default Section;
