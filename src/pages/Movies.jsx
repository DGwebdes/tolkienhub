import ContentCard from "../components/ContentCard"
import tolkienMovies from "../utils/movieList"

const Movies = () => {
  const fgImg = "../../public/ring.jpg"

  return (
    <div className="movie-p">
      { tolkienMovies.map((movie) => {
        return <ContentCard title={movie.title} content={movie.content} key={movie.title} bgImg={movie.bgImg} fgImg={fgImg} />
      })}
    </div>
  )}

export default Movies