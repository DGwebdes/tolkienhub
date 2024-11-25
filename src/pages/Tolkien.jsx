import ContentCard from '../components/ContentCard.jsx'
import tolkienFacts from '../utils/tolkien.js'

const Tolkien = () => {
  return (
    <div className='tolkien-p'>
      { tolkienFacts.map((tolk) => {
        return <ContentCard title={tolk.title} content={tolk.content} key={tolk.title} bgImg={tolk.bgImg} fgImg={tolk.fgImg} />
      })}
    </div>
  )
}

export default Tolkien