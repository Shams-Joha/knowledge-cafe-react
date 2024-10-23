
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from "prop-types";


const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id}  handleMarkAsRead={handleMarkAsRead}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                ></Blog>)
            }

        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark: propTypes.func,
    handleMarkAsRead: propTypes.func
}
export default Blogs;