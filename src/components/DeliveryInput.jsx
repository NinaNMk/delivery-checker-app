import React from "react";

export default function DeliveryInput({ value, onChange }) {
    return (
        <>
            <label className="label">Deliveries:</label>
            <textarea
                className="textarea"
                rows={5}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder='[[1,2],[3,4]]'
            />
        </>
    );
}
