import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";


export const ApiContext = createContext();

const Contextdata = ({ children }) => {
    const [data, setdata] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const response = await axios.get(`/api/alldata`);
            setdata(response.data);
            // console.log("the data is response is:", response.data);
        } catch (err) {
            setError("Failed to fetch data. Please try again later.", err);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <ApiContext.Provider value={{ data, error, loading }}>
            {children}
        </ApiContext.Provider>
    )
}

export default Contextdata
