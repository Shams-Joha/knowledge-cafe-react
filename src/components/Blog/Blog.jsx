import propTypes from 'prop-types';
import profile1 from '../../assets/images/boy1.png'
import { FaBookBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, reading_time, author,
        hashtags, posted_date } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover}></img>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5 mb-4'>
                    <img className='w-14' src={profile1} alt="" />
                    <div >
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => {
                        handleAddToBookmark(blog)
                    }} className='ml-2 text-red-600 text-2xl'><FaBookBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: propTypes.object.isRequired
}
export default Blog;