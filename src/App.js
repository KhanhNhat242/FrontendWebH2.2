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

function App() {
  const [members, setMember] = useState([])
  const [events, setEvents] = useState([])

  const getMembers = async () => {
    try {
      const res1 = await axios.get('https://raw.githubusercontent.com/KhanhNhat242/APIH22Fake/main/infor_member.json')
      const res2 = await axios.get('https://raw.githubusercontent.com/KhanhNhat242/APIH22Fake/main/event_data.json')
      // console.log(res.data)
      setMember(res1.data)
      setEvents(res2.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  const getEvent = async () => {
    try {
      const res = await axios.get('https://raw.githubusercontent.com/KhanhNhat242/APIH22Fake/main/event_data.json')
      // console.log(res.data)
      setEvent(res.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMembers()
    getEvent()
  }, [])

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home events={events} />}></Route>
          <Route path='/achievement' element={<Achievement />}></Route>
          <Route path='/achievement/top-paper' element={<TopPaper />}></Route>
          <Route path='/achievement/all-paper' element={<AllPaper />}></Route>
          <Route path='/member' element={<Member members={members} />}></Route>
          <Route path='/wiki'></Route>
          <Route path='/event' element={<Event events = {events}/>}></Route>
          <Route path='/event/:id_event' element={<EventDetail/>}></Route>
        </Routes>
      </Router>
      <Footer />      
    </div>
  );
}

export default App;
