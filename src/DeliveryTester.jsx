import React, { useState } from "react";
import { checkDeliveryPath } from "./checkDeliveryPath";

export default function DeliveryTester() {
    const [deliveriesInput, setDeliveriesInput] = useState("[[1,2],[3,4]]");
    const [pathInput, setPathInput] = useState("[1,3,2,4]");
    const [result, setResult] = useState(null);

    const handleCheck = () => {
        try {
            const deliveries = JSON.parse(deliveriesInput);
            const path = JSON.parse(pathInput);
            const output = checkDeliveryPath(deliveries, path);
            setResult(output);
        } catch (e) {
            setResult({ error: "Invalid input JSON" });
        }
    };

    return (
        <div style={{ padding: "20px", width: "500px" }}>
            <h2>Delivery Algorithm Tester</h2>
            <label>Deliveries (JSON):</label>
            <textarea value={deliveriesInput} onChange={(e) => setDeliveriesInput(e.target.value)} rows="3" style={{ width: "100%" }} />
            <label>Path (JSON):</label>
            <textarea value={pathInput} onChange={(e) => setPathInput(e.target.value)} rows="2" style={{ width: "100%" }} />
            <button onClick={handleCheck} style={{ marginTop: "10px" }}>Run Algorithm</button>
            <pre>{result ? JSON.stringify(result, null, 2) : null}</pre>
        </div>
    );
}
