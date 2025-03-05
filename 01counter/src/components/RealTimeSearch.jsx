import React, { useState, useEffect } from "react";

// Custom hook for debouncing
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

function RealTimeSearch({ items }) {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="bg-gray-400 rounded-2xl"
            />
            <div>
                {filteredItems.map((item, index) => (
                    <h3 key={index}>{item}</h3>
                ))}
            </div>
        </div>
    );
}

export default RealTimeSearch;