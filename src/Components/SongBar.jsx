import React, { useState, useEffect } from 'react';

function SongBar() {
  const [songs, setSongs] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredDetails, setHoveredDetails] = useState(null);
  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await fetch('http://localhost:5000/songs');
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error('Error fetching images:', error);
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
    window.open('https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP?si=df8cc9532aad4325', '_blank');
  };

  return (
    <div className="container mx-auto lg:pt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {songs.map((song, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => handleMouseEnter(index, song)}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={song.imageUrl} 
              alt={`Song ${index + 1}`} 
              className="w-[360px] h-[300px]"
            />
            {hoveredIndex === index && (
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-3">
                <h3 className="text-lg font-semibold mb-2">{hoveredDetails.title}</h3>
                <p className="text-sm mb-1">{hoveredDetails.description}</p>
                <p className="text-xs mb-2">{hoveredDetails.artist}</p>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => redirectToSource(hoveredDetails.songUrl)} // Update this line
                >
                  Listen Now
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

export default SongBar;
