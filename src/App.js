import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Achievement from './components/achievement/Achievement'
import Event from './components/event/Event'
import EventDetail from './components/event/EventDetail'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/achievement' element={<Achievement />}></Route>
          <Route path='/member'></Route>
          <Route path='/wiki'></Route>
          <Route path='/event' element={<Event/>}></Route>
          <Route path='/event/:id' element={<EventDetail/>}></Route>
        </Routes>
      </Router>
      <Footer />      
    </div>
  );
}

export default App;
