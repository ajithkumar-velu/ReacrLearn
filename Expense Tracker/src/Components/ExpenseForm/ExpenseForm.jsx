// import PropTypes from 'prop-types'; // Import for prop validation
// import { useState } from 'react';

// const ExpenseForm = ({ onAddExpense }) => {
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [date, setDate] = useState('');
//   const [category, setCategory] = useState(''); // Optional: Add category

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic input validation (optional but recommended)
//     if (!description || !amount || !date) {
//       alert('Please fill in all required fields (Description, Amount, Date).');
//       return; // Prevent form submission if validation fails
//     }

//     const newExpense = {
//       id: Math.floor(Math.random() * 10000), // Generate a random ID
//       description,
//       amount: +amount, // Convert amount to a number
//       date,
//       category, // Optional: Include category
//     };

//     onAddExpense(newExpense);

//     setDescription('');
//     setAmount('');
//     setDate('');
//     setCategory(''); // Optional: Clear category
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-control">
//         <label>Description</label>
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-control">
//         <label>Amount</label>
//         <input
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-control">
//         <label>Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.value)} // Use `e.value` for date inputs
//           required
//         />
//       </div>
//       {/* Optional: Add category input */}
//       <div className="form-control">
//         <label>Category</label>
//         <select value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="">Select Category</option>
//           {/* Add options for different categories */}
//         </select>
//       </div>
//       <button type="submit">Add Expense</button>
//     </form>
//   );
// };

// ExpenseForm.propTypes = {
//   onAddExpense: PropTypes.func.isRequired, // Ensure onAddExpense is a function
// };

// export default ExpenseForm;
























import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const {toin, toex} = props
  return (
    <div className='container' >
      <h1>Expence Tracker</h1>
      <div className="balance-info">
        <p className='bal' >Balance: {toin > toex? toin - toex : 0}</p>
        <div className="row">
          <div className="col q1">
            <p>Total Income</p>
            <h2>{toin}</h2>
          </div>
          <div className="col">
            <p>Total Expence</p>
            <h2>{toex}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseForm
