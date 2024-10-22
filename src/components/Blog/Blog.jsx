import propTypes from 'prop-types';
import profile1 from '../../assets/images/boy1.png'
const Blog = ({ blog }) => {
    const { title, cover, reading_time, author,
        hashtags, posted_date } = blog;
    return (
        <div >
            <img src={cover}></img>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <img className='w-14' src={profile1} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
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