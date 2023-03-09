import React, { useState, useEffect } from "react";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import Chart from "./components/Chart";
import ExpenseList from "./components/ExpenseList";
import "./style/App.css";

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // función para agregar un nuevo gasto
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  

  return (
    <div className="App">
      <h1 className="title">Control de gastos</h1>
      <div className="income-container">
        <Income income={income} setIncome={setIncome} />
      </div>
      <div className="expenses-container">
        <Expenses
          addExpense={addExpense}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
      <div className="chart-container">
        <Chart expenses={expenses} />
      </div>
      <div className="expense-list-container">
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
