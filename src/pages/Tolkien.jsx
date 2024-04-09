import ContentCard from '../components/ContentCard.jsx'
import tolkienFacts from '../utils/tolkien.js'

const Tolkien = () => {
  const bgImg = "../../public/one.png"
  const fgImg = "../../public/jrr.webp"

  return (
    <div className='tolkien-p'>
      { tolkienFacts.map((tolk) => {
        return <ContentCard title={tolk.title} content={tolk.content} key={tolk.title} bgImg={bgImg} fgImg={fgImg} />
      })}
    </div>
  )
}

export default Tolkien