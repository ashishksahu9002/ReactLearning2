import React, { useState } from 'react'

function SearchBar({ items }) {

    const [query, setQuery] = useState('')
    const filteredItems = items.filter(item => item.toLowerCase().includes(query.toLowerCase()))

    return (
        <div>
            <div>
                <input 
                placeholder='Type your query'
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
            <div>
                <ul>
                    {
                        filteredItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SearchBar