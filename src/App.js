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
import { useEffect, useState } from 'react'
import axios from 'axios'

const GLOBAL_URL_API = 'https://aiclubiuh-core.tranminh20.repl.co'

function App() {

  const [members, setMembers] = useState([])
  const [events, setEvents] = useState([])
  const [papers, setPapers] = useState([])

  const getData = async () => {
    try {
      const res1 = await axios.get(`${GLOBAL_URL_API}/api/members/`)
      const res2 = await axios.get(`${GLOBAL_URL_API}/api/events/`)
      const res3 = await axios.get(`${GLOBAL_URL_API}/api/papers/`)

      console.log(res1)
      setMembers(res1.data)
      setEvents(res2.data)
      setPapers(res3.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home events={events} />}></Route>
          <Route path='/achievement' element={<Achievement papers={papers} />}></Route>
          <Route path='/achievement/top-paper' element={<TopPaper papers={papers} />}></Route>
          <Route path='/achievement/all-paper' element={<AllPaper papers={papers} />}></Route>
          <Route path='/member' element={<Member members={members} />}></Route>
          <Route path='/wiki'></Route>
          <Route path='/event' element={<Event events = {events}/>}></Route>
          <Route path='/event/:id_event' element={<EventDetail/>}></Route>
        </Routes>
      <Footer />      
      </Router>
    </div>
  );
}

export default App;
