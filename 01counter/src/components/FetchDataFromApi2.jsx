// On button click
import React, { useState } from 'react'

function FetchDataFromApi2() {

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const [userDatas, setUserDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';

    async function fetchData() {
        try {
            const url = `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`
            const res = await fetch(url)
            const resJson = await res.json()
            console.log(resJson)
            setUserDatas(resJson.data.data);
            (resJson.statusCode === 200) ? setIsLoading(false) : setIsLoading(true)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div>
                <input placeholder='Give page value' value={page} onChange={(e) => setPage(e.target.value)} /> {' '}
                <input placeholder='Give user limit value' value={limit} onChange={(e) => setLimit(e.target.value)} />
                <button onClick={fetchData} > Fetch Data </button>
            </div>
            {isLoading ? (
                <h1>Data is loading</h1>
            ) : (
                <div>
                    <h1>List of users</h1>
                    {
                        userDatas.map((user) => (
                            <h2 key={user.id}>
                                {user.email}
                            </h2>
                        ))
                    }
                </div>
            )}
        </>
    )
}

export default FetchDataFromApi2