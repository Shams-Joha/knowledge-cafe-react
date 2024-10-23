import propTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="md:w-1/3 bg-gray-100">
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">BookMarks: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}> </Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: propTypes.array,
    readingTime: propTypes.number
}

export default Bookmarks;