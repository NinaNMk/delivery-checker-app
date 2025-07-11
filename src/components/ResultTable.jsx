import React from "react";

export default function ResultTable({ steps }) {
    return (
        <>
            <strong className="steps-heading">Steps:</strong>
            <table className="table">
                <thead>
                <tr>
                    <th className="th">#</th>
                    <th className="th">Address</th>
                    <th className="th">Action</th>
                </tr>
                </thead>
                <tbody>
                {steps.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? "tr-even" : "tr-odd"}>
                        <td className="td">{i + 1}</td>
                        <td className="td">{s.address}</td>
                        <td className="td">
                            {s.action === "pickup" && <span className="action-pickup">Pickup</span>}
                            {s.action === "dropoff" && <span className="action-dropoff">Dropoff</span>}
                            {s.action === null && <span className="action-none">No Action</span>}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
