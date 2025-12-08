import "../styles/FilterBar.css";

export default function FilterBar({ filters, onFilterChange }) {
  const languages = ["English", "French", "Spanish", "German", "Mandarin Chinese", "Italian", "Korean", "Vietnamese", "Polish"];
  const levels = ["A1 Beginner", "A2 Elementary", "B1 Intermediate", "B2 Upper-Intermediate", "C1 Advanced", "C2 Proficient"];
  const prices = [
    { label: "10$", value: 10 },
    { label: "20$", value: 20 },
    { label: "30$", value: 30 },
    { label: "40$", value: 40 },
  ];

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Languages</label>
        <select
          value={filters.language}
          onChange={(e) => onFilterChange("language", e.target.value)}
        >
          <option value="">All languages</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Level of knowledge</label>
        <select
          value={filters.level}
          onChange={(e) => onFilterChange("level", e.target.value)}
        >
          <option value="">All levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Price</label>
        <select
          value={filters.price}
          onChange={(e) => onFilterChange("price", e.target.value)}
        >
          <option value="">All prices</option>
          {prices.map((price) => (
            <option key={price.value} value={price.value}>
              {price.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
