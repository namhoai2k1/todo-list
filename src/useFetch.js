import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                // npx json-server --watch data/db.json --port 8000
                .then((res) => {
                    if(!res.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((error) => {
                    setError(error.message);
                    setIsPending(false);
                });
        }, 1000);
    }, [url]);
    return { data, isPending, error };
};

export default useFetch;
