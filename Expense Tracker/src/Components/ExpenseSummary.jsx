import PropTypes from 'prop-types';

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h3>Total Expenses: ₹{totalExpenses}</h3>
      {/* Add more summary information as needed */}
    </div>
  );
};

ExpenseSummary.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    // Add other prop types as needed
  })).isRequired,
};

export default ExpenseSummary;