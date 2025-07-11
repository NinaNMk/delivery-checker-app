import React from "react";

export default function PathInput({ value, onChange }) {
    return (
        <>
            <label className="label">Path:</label>
            <textarea
                className="textarea"
                rows={3}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder='[1,2,3,4]'
            />
        </>
    );
}
