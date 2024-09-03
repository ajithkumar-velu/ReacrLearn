import PropTypes from 'prop-types'; // Import for prop validation (optional)
import { useState } from 'react';

const ExpenseFilter = ({ onFilter }) => {
  const [selectedYear, setSelectedYear] = useState('2023'); // Default year

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    onFilter(event.target.value);
  };

  return (
    <div>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

// Optional prop validation (recommended for maintainability)
ExpenseFilter.propTypes = {
  onFilter: PropTypes.func.isRequired, // Ensure onFilter is a function
};

export default ExpenseFilter;