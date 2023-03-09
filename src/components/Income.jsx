import React from "react";
import "../style/Income.css";

function Income({ income, setIncome }) {
  // función para manejar los cambios en el input de ingresos
  const handleIncomeChange = (e) => {
    setIncome(parseFloat(e.target.value));
  };

  return (
    <div className="income-container">
      <h2 className="income-label">Ingresos</h2>
      <div className="income-input-container">
        <label htmlFor="income" className="income-input-label">Cantidad:</label>
        <input
          type="number"
          id="income"
          name="income"
          value={income}
          onChange={handleIncomeChange}
          className="income-input"
        />
      </div>
    </div>
  );
}

export default Income;
