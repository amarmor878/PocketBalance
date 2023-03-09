import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import '../style/Chart.css'

function Chart({ expenses }) {
    // agrupamos los gastos por tipo
    const groupedExpenses = expenses.reduce((acc, curr) => {
        const { type, amount } = curr;
        acc[type] = acc[type] ? acc[type] + amount : amount;
        return acc;
    }, {});

    // creamos una array de objetos con la información necesaria para la gráfica
    const data = Object.keys(groupedExpenses).map((key) => ({
        name: key,
        value: groupedExpenses[key],
    }));

    // colores para las secciones de la gráfica
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

    return (
        <div className="chart-container">
            <h2>Gastos por tipo</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <style jsx>{`
        .chart-container {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h2 {
          margin-bottom: 1rem;
        }
      `}</style>
        </div>
    );
}

export default Chart;
