import React, { useState } from 'react';
import BlogBar from './BlogBar';
import SpeechBar from './SpeechBar';
import BookBar from './BookBar';
import SongBar from './SongBar';
import Feedback from './Feedback';
import Contact from './Contact';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Recommendation() {
  const [selectedOption, setSelectedOption] = useState('speech');

  // Function to handle option selection
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
    <div className='bg-gray-600'>
      {/* Navbar */}
      <nav className="flex justify-center p-3 ">
  <button
    className={`px-4 py-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'speech' ? 'text-white' : 'text-gray-700'}`}
    onClick={() => handleOptionClick('speech')}
  >
    Speech
  </button>
  <button
    className={`px-4 py-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'books' ? 'text-white' : 'text-gray-700'}`}
    onClick={() => handleOptionClick('books')}
  >
    Books
  </button>
  <button
    className={`px-4 py-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'blog' ? 'text-white' : 'text-gray-700'}`}
    onClick={() => handleOptionClick('blog')}
  >
    Blog
  </button>
  <button
    className={`px-4 py-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 rounded focus:outline-none ${selectedOption === 'songs' ? 'text-white' : 'text-gray-700'}`}
    onClick={() => handleOptionClick('songs')}
  >
    Songs
  </button>
</nav>

      

      {/* Main content area */}
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 flex flex-col lg:flex-row">
        {/* Render content based on selected option */}
        {selectedOption === 'blog' && <BlogBar />}
        {selectedOption === 'speech' && <SpeechBar />}
        {selectedOption === 'books' && <BookBar />}
        {selectedOption === 'songs' && <SongBar />}

        {/* Advertisement sidebar */}
        <div className="w-full lg:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md lg:ml-8 mt-8 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">Works To Do</h2>
          <Slider {...settings}>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/6189263/6189263-sd_540_960_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/6134616/6134616-sd_540_960_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/7590822/7590822-sd_540_960_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/6077692/6077692-sd_540_960_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="https://videos.pexels.com/video-files/5320011/5320011-hd_1080_1920_25fps.mp4" type="video/mp4" />
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

export default Recommendation;
