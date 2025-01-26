import Header from './components/Header.jsx';
import Main from  './components/Main.jsx';
import Books from './pages/Books.jsx'
import Movies from './pages/Movies.jsx'
import Tolkien from './pages/Tolkien.jsx'
import Appendix from './pages/Appendix.jsx'
import Login from './pages/Login/Login.jsx'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [bgImage, setBgImage] = useState('../public/bg-lotr.png')

  function handleHover(item) {
    let imgURL = '';
    switch(item){
      case 'books':
        imgURL = '../public/bookz.jpg'
        break;
      case 'movies':
        imgURL = '../public/movies.jpg'
        break;
      case 'tolkien':
        imgURL = '../public/tolkin.jpg'
        break;
      case 'appendix':
        imgURL = '../public/map.jpg'
        break;
      case 'home':
        imgURL = '../public/bg-lotr.png'
        break;
      default:
        imgURL = '../public/bg-lotr.png'
    }
    setBgImage(imgURL);
  }

  return (
    <Router>
      <div className='wrapper' style={{ backgroundImage: `url(${bgImage})` }}>
        <Header handleHover={handleHover} />
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/books' element={ <Books /> } />
          <Route path='/movies' element={ <Movies /> } />
          <Route path='/tolkien' element={ <Tolkien /> } />
          <Route path='/appendix' element={ <Appendix /> } />
          <Route path='/login' element={ <Login />}></Route>
        </Routes>
      </div>
    </Router>
  )
}


export default App
