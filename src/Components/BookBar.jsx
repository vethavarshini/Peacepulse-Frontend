import React, { useState, useEffect } from 'react';

function BookBar() {
  const [books, setBooks] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredDetails, setHoveredDetails] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      // Fetch book details from the backend
      const response = await fetch('http://localhost:5000/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
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

  const redirectToSource = (sourceUrl) => {
    window.open(sourceUrl, '_blank');
  };

  return (
    <div className="container mx-auto lg:pt-12 bg-gray-600">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {books.map((book, index) => (
          <div 
            key={index} 
            className="relative rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => handleMouseEnter(index, book)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Displaying image from the database */}
            <img 
              src={book.imageUrl} 
              alt={`Book ${index + 1}`} 
              className="w-[360px] h-[300px] object-cover"
            />
            {hoveredIndex === index && (
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white p-3">
                <h3 className="text-lg font-semibold mb-2">{hoveredDetails.title}</h3>
                <p className="text-sm mb-1">{hoveredDetails.description}</p>
                <p className="text-xs mb-2">{hoveredDetails.author}</p>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => redirectToSource(hoveredDetails.sourceUrl)}
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

export default BookBar;
