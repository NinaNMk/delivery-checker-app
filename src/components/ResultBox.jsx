import React from "react";
import ResultTable from "./ResultTable";

export default function ResultBox({ result, error }) {
    return (
        <div className="result-box">
            <div className="result-content">
            {error ? (
                <div className="error-text">{error}</div>
            ) : result ? (
                result.status === "success" ? (
                    <ResultTable steps={result.steps}/>
                ) : (
                    <div className="error-text">
                        <div className="error-text-code">{result.error_code}:</div>
                        <div className="error-text">{result.error_message}</div>
                    </div>
                )
            ) : (
                <div className="placeholder-text">Results will appear here...</div>
            )}
         </div>
        </div>
    );
}
