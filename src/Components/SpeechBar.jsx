import React, { useState, useEffect } from 'react';

function SpeechBar() {
  const [speeches, setSpeeches] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredDetails, setHoveredDetails] = useState(null);

  useEffect(() => {
    fetchSpeeches();
  }, []);

  const fetchSpeeches = async () => {
    try {
      const response = await fetch('http://localhost:5000/speeches');
      const data = await response.json();
      setSpeeches(data);
    } catch (error) {
      console.error('Error fetching speeches:', error);
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

  const redirectToSource = () => {
    window.open('https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.coursesidekick.com/communications/4296378&ved=2ahUKEwjxls3drNCGAxXCqlYBHYv1BD8QFnoECA4QAw&usg=AOvVaw3ggPTWPgz3MM92OzUb0j1S', '_blank');
  };

  return (
    <div className="container mx-auto lg:pt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {speeches.map((speech, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => handleMouseEnter(index, speech)}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={speech.imageUrl} // Use imageUrl field
              alt={`Speech ${index + 1}`} 
              className="w-[360px] h-[300px]"
            />
            {hoveredIndex === index && (
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-3">
                <h3 className="text-lg font-semibold mb-2">{hoveredDetails.title}</h3>
                <p className="text-sm mb-1">{hoveredDetails.description}</p>
                <p className="text-xs mb-2">{hoveredDetails.speaker}</p>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={redirectToSource}
                >
                  Read More
                </button>
                {/* Render other details from the hoveredDetails object */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeechBar;
