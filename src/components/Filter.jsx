import { useState } from "react";
import "./Filter.css";

export default function Filter({ onFilterChange }) {
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    setLanguage(value);
    onFilterChange({ language: value, level, price });
  };

  const handleLevelChange = (e) => {
    const value = e.target.value;
    setLevel(value);
    onFilterChange({ language, level: value, price });
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    onFilterChange({ language, level, price: value });
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Languages</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Spanish">Spanish</option>
          <option value="Italian">Italian</option>
          <option value="Mandarin Chinese">Mandarin Chinese</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Korean">Korean</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Level of knowledge</label>
        <select value={level} onChange={handleLevelChange}>
          <option value="">All Levels</option>
          <option value="A1 Beginner">A1 Beginner</option>
          <option value="A2 Elementary">A2 Elementary</option>
          <option value="B1 Intermediate">B1 Intermediate</option>
          <option value="B2 Upper-Intermediate">B2 Upper-Intermediate</option>
          <option value="C1 Advanced">C1 Advanced</option>
          <option value="C2 Proficient">C2 Proficient</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Price</label>
        <select value={price} onChange={handlePriceChange}>
          <option value="">All Prices</option>
          <option value="0-20">$0 - $20</option>
          <option value="20-30">$20 - $30</option>
          <option value="30-40">$30 - $40</option>
          <option value="40+">$40+</option>
        </select>
      </div>
    </div>
  );
}
