// import PropTypes from 'prop-types';
// import ExpenseItem from '../ExpenseItem';

// const ExpenseList = ({ expenses }) => {
//   return (
//     <div>
//       <h2>Expense List</h2>
//       {expenses.length === 0 ? (
//         <p>No expenses found.</p>
//       ) : (
//         <ul>
//           {expenses.map((expense) => (
//             <ExpenseItem key={expense.id} expense={expense} />
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// ExpenseList.propTypes = {
//     expenses: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired, 

//       amount: PropTypes.number.isRequired,
//       date: PropTypes.string.isRequired, 

//       // Add other prop types as needed
//     })).isRequired,
//   };
// export default ExpenseList;













import { useEffect, useState } from "react"
import "./ExpenseList.css"
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const ExpenseList = () => {

  const [expenses, setexpenses] = useState(localStorage.getItem('expense') ? JSON.parse(localStorage.getItem('expense')):[])
  
  useEffect(()=>{
    localStorage.setItem("expense", JSON.stringify(expenses))
  }, [expenses])

  let totalExpenses = 0;
  let totalIncome = 0;
  const [name, setname] = useState("")
  const [amount, setamount] = useState('')
  const [type, settype] = useState("")

  const handleName = (e) => {
    setname(e.target.value)
  }
  const handleAmount = (e) => {
    setamount(e.target.value)
  }
  const handleType = (e) => {
    settype(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setexpenses([...expenses, { type: type, name: name, amount: amount }])
    
      

    // plus.map((val)=>{totalExpenses+=Number(val.amount)})
    // console.log(totalExpenses);
    
    settype("")
    setname("")
    setamount("")

  }


  const handleDelete = (index) =>{
    const a = expenses.filter((_, i) => i !== index)
    setexpenses(a)
  }
  expenses.map((i)=>{
    if(i.type == "Expense"){
      totalExpenses +=Number(i.amount)
    }else if(i.type == "Income"){
      totalIncome +=Number(i.amount)
    }
  })

  return (
    <div>
      <ExpenseForm toex={totalExpenses} toin={totalIncome} />
        <div className="container-list" >

      <div className="expenses">
        <h2>Expenses</h2>
        
        
        <div className="expenses-table">
          <p>S.no.</p>
          <p>Discription</p>
          <p>Amount</p>
          <p>Type</p>
          <p className="ex-item-del">Delete</p>
        </div>
        <hr />
        {expenses.length < 1 ?
        <h2 className="not-found" >No data found</h2>:
        
          expenses.map((item, index) => (
            <div key={index} >
              <div className="list-of-expenses">
                <p>{index + 1}</p>
                <p>{item.name}</p>
                <p>{item.amount}</p>
                <p>{item.type}</p>
                <p onClick={()=>handleDelete(index)} className="ex-item-del" > X </p>
                <p className="temp" style={{ backgroundColor: item.type === "Expense" ? "red" : "green" }} ></p>
              </div>
              <hr />
            </div>
          ))
        }


      </div>

      <form className="add-expenses" onSubmit={handleSubmit}>
        <h2>Add new</h2>
        <div className="ex-row">
          <div className="ex-type ex-col">
            <label htmlFor="name">Entry Type:</label>
            <select name="name" id="name" value={type} onChange={handleType} required>
              <option value="">Select type</option>
              <option value="Expense">Expense</option>
              <option value="Income">Income</option>
            </select>
          </div>
          <div className="ex-name ex-col">
            <label htmlFor="expense-name">Name:</label>
            <input type="text" id="expense-name" value={name} required onChange={handleName} />
          </div>
          <div className="ex-amount ex-col">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" value={amount} required onChange={handleAmount} />
          </div>
        </div>
        <input className="add-btn" type="submit" value="Add Expense" />
      </form>
    </div>
    </div>

  )
}

export default ExpenseList
