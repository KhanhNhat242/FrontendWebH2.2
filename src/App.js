import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Achievement from './components/achievement/Achievement'
import Event from './components/event/Event'
import EventDetail from './components/event/EventDetail'
import TopPaper from './components/achievement/paper/TopPaper'
import AllPaper from './components/achievement/paper/AllPaper'
import Member from './components/member/Member'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/achievement' element={<Achievement />}></Route>
          <Route path='/achievement/top-paper' element={<TopPaper />}></Route>
          <Route path='/achievement/all-paper' element={<AllPaper />}></Route>
          <Route path='/member' element={<Member />}></Route>
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
