import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaRegStar, FaUser, FaMapMarkerAlt, FaCommentDots, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Feedback = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedback');
        setFeedbackList(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (message.trim() !== "" && name.trim() !== "" && location.trim() !== "") {
      try {
        await axios.post('http://localhost:5000/api/feedback', { message, name, location, rating });
        setFeedbackList([...feedbackList, { message, name, location, rating }]);
        setMessage('');
        setName('');
        setLocation('');
        setRating(5);
      } catch (error) {
        console.error('Error submitting feedback:', error);
      }
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <FaArrowRight className="text-3xl text-gray-500 hover:text-gray-700 transition" />,
    prevArrow: <FaArrowLeft className="text-3xl text-gray-500 hover:text-gray-700 transition" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="p-10 bg-gray-200" id="feedback">
      <div className="flex justify-between">
        {/* Feedback Section */}
        <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-10 text-black text-center">Feedback</h2>

          <form onSubmit={handleSubmit} className="mb-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 mb-4">
                <div className="relative">
                  <FaCommentDots className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    className="w-full p-4 pl-10 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500 shadow-sm bg-blue-100"
                    rows="3"
                    placeholder="Enter your feedback here..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    style={{ fontFamily: 'Verdana, sans-serif', fontSize: '14px' }}
                  ></textarea>
                </div>
              </div>
              <div className="w-full px-2 mb-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    className="w-full p-4 pl-10 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500 shadow-sm bg-blue-100"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    style={{ fontFamily: 'Verdana, sans-serif', fontSize: '14px' }}
                  />
                </div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    className="w-full p-4 pl-10 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500 shadow-sm bg-blue-100"
                    type="text"
                    placeholder="Your Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    style={{ fontFamily: 'Verdana, sans-serif', fontSize: '14px' }}
                  />
                </div>
                <div className="relative">
                  <FaStar className="absolute left-3 top-3 text-gray-400" />
                  <input
                    className="w-full p-4 pl-10 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-blue-500 shadow-sm bg-blue-100"
                    type="number"
                    placeholder="Rating (1-5)"
                    value={rating}
                    onChange={(event) => setRating(parseInt(event.target.value))}
                    min="1"
                    max="5"
                    style={{ fontFamily: 'Verdana, sans-serif', fontSize: '14px' }}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 focus:outline-none focus:bg-gradient-to-r focus:from-green-500 focus:to-blue-600 shadow-md"
              style={{ fontFamily: 'Verdana, sans-serif', fontSize: '14px', display: 'block', margin: '0 auto', transition: 'background 0.3s' }}
            >
              Submit Feedback
            </button>
          </form>
        </div>
        {/* Carousel Section */}
        <div className="relative w-2/3">
          <Slider {...settings} className="mb-8">
            {feedbackList.map((item, index) => (
              <div key={index} className="p-4 flex justify-center">
                <div className="border border-gray-300 rounded-lg p-6 h-full bg-blue-200 text-gray-800 px-6 py-3 hover:bg-blue-300 shadow-lg transform transition duration-500 hover:scale-105" style={{ width: '300px', height: '400px' }}>
                  {/* Carousel Content */}
                  <div className="text-xl font-semibold mb-2" style={{ fontFamily: 'Helvetica, sans-serif' }}>{item.message}</div>
                  <div className="text-md font-medium mb-4 flex items-center" style={{ fontFamily: 'Times New Roman, serif' }}>
                    <FaUser className="mr-2" />{item.name} <FaMapMarkerAlt className="ml-2 mr-1" /> {item.location}
                  </div>
                  <div className="flex items-center justify-center">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-2xl" />
                    ))}
                    {[...Array(5 - item.rating)].map((_, i) => (
                      <FaRegStar key={i} className="text-gray-300 text-2xl" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

