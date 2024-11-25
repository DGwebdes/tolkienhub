import ContentCard from "../components/ContentCard"
import tolkienBooks from "../utils/bookList"

const Books = () => {
  const fgImg = "../../public/ring.jpg"


  return (
    <div className="book-p">
      {
        tolkienBooks.map((book) => {
          return <ContentCard title={book.title} content={book.content} key={book.title} bgImg={book.bgImg} fgImg={fgImg} />
        })
      }
    </div>
  )
}

export default Books