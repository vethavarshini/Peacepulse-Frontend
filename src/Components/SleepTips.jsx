import React, { useState, useEffect } from 'react';

function SleepTips() {
  const [tips, setTips] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredDetails, setHoveredDetails] = useState(null);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const response = await fetch('http://localhost:5000/sleeptips');
      const data = await response.json();
      setTips(data);
    } catch (error) {
      console.error('Error fetching tips:', error);
    }
  };

  const handleMouseEnter = (index, details) => {
    setHoveredIndex(index);
    setHoveredDetails(details);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoveredDetails(null);
  };

  return (
    <div className="container mx-auto lg:pt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {tips.map((tip, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => handleMouseEnter(index, tip)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[360px] h-[300px] bg-gray-200 flex items-center justify-center text-center p-4">
              <p className="text-lg font-semibold">{tip.title}</p>
            </div>
            {hoveredIndex === index && (
              <div className="absolute top-0 left-0 w-full bg-black bg-opacity-75 text-white p-3">
                <h3 className="text-lg font-semibold mb-2">{hoveredDetails.title}</h3>
                <p className="text-sm mb-1">{hoveredDetails.description}</p>
                <p className="text-xs mb-2">{hoveredDetails.author}</p>
                {/* Add more details if necessary */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SleepTips;
