import React, {useState, useEffect, useCallback} from 'react'

function UserData() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [userDatas, setUserDatas] = useState([]);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(() => {
        async function getData() {
            try {
                setLoading(true);
                const url = `https://api.freeapi.app/api/v1/public/randomusers?page=${page}&limit=${limit}`;
                const response = await fetch(url);
                const resData = await response.json();

                setStatus(resData?.statusCode);
                setUserDatas(resData?.data?.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setStatus("Error");
                setUserDatas([]);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [page, limit]);

    // ✅ Debouncing with `useCallback()`
    useEffect(() => {
        const timer = setTimeout(fetchData, 500);
        return () => clearTimeout(timer);
    }, [fetchData]);

    function getName(name) {
        const { title, first, last } = name
        return `${title} ${first} ${last}`
    }
    return (
        <div>
            <h1> Data Status: {status} </h1>
            <h1> User Data Length: {userDatas.length} </h1>

            <input type="number" value={page} onChange={(e) => setPage(e.target.value === "" ? "" : Number(e.target.value))} /> <br />
            <input type="number" value={limit} onChange={(e) => setLimit(e.target.value === "" ? "" : Number(e.target.value))} /> <br /><br />
            {/* ✅ Show Loading Indicator */}
            {loading && <p>Fetching data, please wait...</p>}
            <div>
                {userDatas?.map((userData) => (
                    <div key={userData?.id} >
                        <div>
                            <img src={userData?.picture?.large} alt="Profile Pic" />
                        </div>
                        <div>
                            <h3> Name : {getName(userData?.name)}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserData