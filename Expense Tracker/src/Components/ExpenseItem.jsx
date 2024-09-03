import PropTypes from 'prop-types';

const ExpenseItem = ({ expense }) => {
  return (
    <li>
      <h3>{expense.description}</h3>
      <p>₹{expense.amount}</p>
      <p>{expense.date}</p>
      {/* Optional: Add category display */}
      <p>Category: {expense.category}</p>
    </li>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    description: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.string,
    category: PropTypes.string, // Optional
  }),
};

export default ExpenseItem;