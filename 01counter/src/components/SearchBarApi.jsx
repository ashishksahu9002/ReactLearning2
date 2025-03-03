import React, { useState, useEffect } from 'react'

function SearchBarApi() {

    const [query, setQuery] = useState('')
    const [userDatas, setUserDatas] = useState([])
    const [isNoName, setIsNoName] = useState(true)
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=50';
                const response = await fetch(url);
                const resJson = await response.json();
                setUserDatas(resJson.data.data);

            } catch (error) {
                console.error('Error:', error);
            }
        })()
    }, [])

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filtered = userDatas.filter(user =>
                user.email.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
            setIsNoName(filtered.length === 0);
        }, 500);

        return () => clearTimeout(debounce);
    }, [query, userDatas]);



    return (
        <div>
            <div>
                <input
                    placeholder='Type your query'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div>
                {
                    isNoName ? <h2>There is no email for "{query}"</h2> :
                        (
                            <ul>
                                {
                                    filteredItems.map((item) => (
                                        <li key={item.id}>{item.email}</li>
                                    ))
                                }
                            </ul>
                        )
                }
            </div>
        </div>
    )
}

export default SearchBarApi