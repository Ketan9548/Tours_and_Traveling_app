import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ApiContext } from '../../../context/Contextdata';


const BlogsPages = () => {
    const { blogs } = useContext(ApiContext)

    const { id } = useParams();
    const blog = blogs.find((item) => item.id.toString() === id);

    if (!blog) {
        return <h2 className="text-center text-2xl font-semibold text-red-600 mt-10">Blog not found</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
            <Link to="/blogslist" className="text-blue-600 hover:underline text-sm">&larr; Back to Blogs</Link>

            <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">{blog.location}</h1>
            <p className="text-sm text-gray-500 mb-4">By <span className="font-semibold">{blog.cab}</span> | {blog.date}</p>

            <img
                src={blog.img}
                alt={blog.location}
                className="w-full h-96 object-cover rounded-lg mb-6"
            />

            <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                    {blog.location} is a beautiful place that attracts tourists from all around the country.
                    Whether you're looking to relax, explore nature, or dive into local culture, there's something here for everyone.
                </p>
                <p>
                    Our cabs ensure a smooth and enjoyable journey with experienced drivers and comfortable vehicles.
                    Book now and explore {blog.location} with ease and convenience.
                </p>
                <p>
                    Stay tuned to our blog for more travel stories, tips, and detailed guides about various destinations.
                </p>
            </div>
        </div>
    );
};

export default BlogsPages;
