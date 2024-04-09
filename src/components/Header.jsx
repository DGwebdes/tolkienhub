import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const Header = ( { handleHover } ) => {
  return (
    <header className="header">
      <Link to={'/'}>
        <img src="../../public/site-logo.svg" alt="nav-logo" width={60} height={60}
          onMouseEnter={() => handleHover('home')}/>
      </Link>
        <ul className='navigation'>
          <li className='books' onMouseEnter={() => handleHover('books')}>
            <Link to={'./books'}>The Books</Link>
          </li>
          <li className='movies' onMouseEnter={() => handleHover('movies')}>
            <Link to={'/movies'}>The Movies</Link>
          </li>
          <li className='tolkien' onMouseEnter={() => handleHover('tolkien')}>
            <Link to={'/tolkien'}>The Man</Link>
          </li>
          <li className='appendix' onMouseEnter={() => handleHover('appendix')}>
            <Link to={'/appendix'}>Appendix</Link>
          </li>
        </ul>
        <Link to={'/login'}>
          <i className="fa-solid fa-circle-user"></i>
        </Link>
    </header>
  )
}

Header.propTypes = {
  handleHover: PropTypes.func,
}

export default Header