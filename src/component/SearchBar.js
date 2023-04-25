import React, { useState } from 'react';
import Data from './Data';

const SearchBar = ({ filterItem, setItem, menuItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    filterItem(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center align-items-center my-3">
        <input type="text" placeholder="Search by category" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-control form-control-md" style={{ width:"800px" }} />
        <button type="submit" className="btn btn-primary fw-bold" style={{ marginLeft:'10px' }}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
