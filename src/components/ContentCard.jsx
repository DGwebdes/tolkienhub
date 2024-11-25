import { PropTypes } from 'prop-types'

const ContentCard = ( { title, content, bgImg, fgImg }) => {

  return (
    <div className="content-card">
        <div className="img-wrapper">
            <h1 className="cont-title">{ title }</h1>
            <img src={bgImg} alt="card-pop-up" className="ft-flash" />
            <img src={fgImg} alt="card-img" className="bg-img" />
        </div>
        <p> { content } </p>
    </div>
  )
}

ContentCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  bgImg: PropTypes.string,
  fgImg: PropTypes.string
}

export default ContentCard