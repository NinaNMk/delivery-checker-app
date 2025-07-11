import React, { useState } from "react";
import { checkDeliveryPath } from "./deliverychecker";
import DeliveryInput from "./components/DeliveryInput";
import PathInput from "./components/PathInput";
import ResultBox from "./components/ResultBox";
import "./App.css";

export default function App() {
    const [deliveries, setDeliveries] = useState("[[1,2],[3,4]]");
    const [path, setPath] = useState("[1,2,3,4]");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const onCompute = () => {
        setError("");
        setResult(null);
        try {
            const d = JSON.parse(deliveries);
            const p = JSON.parse(path);
            setResult(checkDeliveryPath(d, p));
        } catch {
            setError("Invalid JSON input.");
        }
    };

    return (
        <div className="container">
            <h1 className="title">Delivery Checker</h1>
            <DeliveryInput value={deliveries} onChange={setDeliveries} />
            <PathInput value={path} onChange={setPath} />
            <button className="button" onClick={onCompute}>
                Check Path
            </button>
            <ResultBox result={result} error={error} />
        </div>
    );
}
