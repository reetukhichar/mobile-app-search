import React, { useState } from "react";
import data from './mobiles.json';
import MobileCard from './MobileCard';
import './App.css';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const mobilesPerPage = 8;

  const filteredMobiles = data.filter(mobile =>
    mobile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastMobile = currentPage * mobilesPerPage;
  const indexOfFirstMobile = indexOfLastMobile - mobilesPerPage;
  const currentMobiles = filteredMobiles.slice(indexOfFirstMobile, indexOfLastMobile);

  const totalPages = Math.ceil(filteredMobiles.length / mobilesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="App">
      <h1>Mobile Search App</h1>
      <div className="search-box">
      <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          placeholder="Search mobile..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mobile-grid">
        {currentMobiles.map(mobile => (
          <MobileCard key={mobile.id} mobile={mobile} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
