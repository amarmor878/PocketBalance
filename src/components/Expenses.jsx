import React, { useState } from "react";
import '../style/Expenses.css'

function Expenses({ addExpense, selectedType, setSelectedType }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");

    // opciones de tipos de gasto
    const expenseTypes = [
        "Comida",
        "Transporte",
        "Entretenimiento",
        "Facturas",
        "Otros",
    ];

    // función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = {
            description,
            amount: parseFloat(amount),
            date: new Date(date),
            type: selectedType,
        };
        addExpense(newExpense);
        setDescription("");
        setAmount(0);
        setDate("");
        setSelectedType("");
    };

    // función para manejar los cambios en el input de descripción
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    // función para manejar los cambios en el input de cantidad
    const handleAmountChange = (e) => {
        setAmount(parseFloat(e.target.value));
    };

    // función para manejar los cambios en el input de fecha
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    // función para manejar los cambios en el desplegable de tipos de gasto
    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <div>
            <h2>Gastos</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">Descripción:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                />

                <label htmlFor="amount">Cantidad:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={handleAmountChange}
                    required
                />

                <label htmlFor="date">Fecha:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />

                <label htmlFor="type">Tipo de gasto:</label>
                <select
                    id="type"
                    name="type"
                    value={selectedType}
                    onChange={handleTypeChange}
                    required
                >
                    <option value="">Selecciona un tipo de gasto</option>
                    {expenseTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>

                <button type="submit">Agregar gasto</button>
            </form>
        </div>
    );
}

export default Expenses;