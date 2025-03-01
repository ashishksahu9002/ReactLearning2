// automatically
import React, { useEffect, useState } from 'react'

function FetchDataFromApi() {

    const [userDatas, setUserDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        (async ()=>{
            try {
                const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
                const response = await fetch(url);
                const resJson = await response.json();
                setUserDatas(resJson.data.data);
                (resJson.statusCode === 200) ? setIsLoading(false) : setIsLoading(true)
            } catch (error) {
                console.error('Error:', error);
            }

        })()
    }, [])

    return isLoading ? (
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
    )
}

export default FetchDataFromApi