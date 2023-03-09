import React from "react";
import '../style/ExpenseList.css'

function ExpenseList({ expenses }) {
    return (
        <div>
            <h2>Gastos registrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tipo de gasto</th>
                        <th>Cantidad</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.type}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseList;