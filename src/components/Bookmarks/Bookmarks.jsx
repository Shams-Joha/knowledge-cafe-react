import propTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {

    return (
        <div className="md:w-1/3 bg-gray-100">
            <h2 className="text-3xl text-center ">BookMarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}> </Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: propTypes.array
}

export default Bookmarks;