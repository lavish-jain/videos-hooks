import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [searchText, setSearchText] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchText);
  };
  return (
    <div className="ui segment">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <input
            placeholder="Search for a video here"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
