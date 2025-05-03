import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";
import Nanital from "../Components/Blogs/Blogsimges/Nanital.jpg";
import Masuri from "../Components/Blogs/Blogsimges/Masuri.jpg";
import Kedarnath from "../Components/Blogs/Blogsimges/Kedarnath.webp";
import Dehradun from "../Components/Blogs/Blogsimges/Dehardun.jpg";
import Chardham from "../Components/Blogs/Blogsimges/Chardham.jpg";
import Haridwar from "../Components/Blogs/Blogsimges/Haridwar.jpg";
// Tours img 


export const ApiContext = createContext();

const Contextdata = ({ children }) => {
    const blogs = [
        { id: 1, img: Nanital, location: "Nanital", cab: "Rudrapur Cabs", date: "September 15th, 2022" },
        { id: 2, img: Masuri, location: "Masuri", cab: "Rudrapur Cabs", date: "September 15th, 2022" },
        { id: 3, img: Kedarnath, location: "Kedarnath", cab: "Rudrapur Cabs", date: "January 21st, 2020" },
        { id: 4, img: Dehradun, location: "Dehradun", cab: "Rudrapur Cabs", date: "May 09th, 2023" },
        { id: 5, img: Chardham, location: "Chardham", cab: "Rudrapur Cabs", date: "November 15th, 2022" },
        { id: 6, img: Haridwar, location: "Haridwar", cab: "Rudrapur Cabs", date: "December 10th, 2019" },
    ];
    const Tours = [
        {
            id: 1,
            name: "Nanital",
            img: Nanital
        },
        {
            id: 2,
            name: "Dehradun",
            img: Dehradun
        }
        ,
        {
            id: 3,
            name: "Masuri",
            img: Masuri
        }
    ]
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
        <ApiContext.Provider value={{ data, error, loading, blogs, Tours }}>
            {children}
        </ApiContext.Provider>
    )
}

export default Contextdata
