import { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);
    // console.log('remove Bookmark', id)
    
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id) // show me the ones that does not fall under this rule
    setBookmarks(remainingBookmarks);
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleMarkAsRead={
          handleMarkAsRead
        } handleAddToBookmark={handleAddToBookmark}></Blogs>
        {/* Udated state now send it to bookmarks */}
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}




export default App
