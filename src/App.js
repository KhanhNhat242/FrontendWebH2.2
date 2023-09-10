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
import { event_data as  events, member_data as members, paper} from './data/data.js'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

function App() {

  // const [members, setMember] = useState([])
  // const [events, setEvents] = useState([])
  // const [topPaper, setTopPaper] = useState([])
  // const [commonPaper, setCommonPaper] = useState([])

  // const getData = async () => {
  //   try {
  //     const res1 = await axios.get('https://raw.githubusercontent.com/KhanhNhat242/APIH22Fake/main/infor_member.json')
  //     const res2 = await axios.get('https://raw.githubusercontent.com/KhanhNhat242/APIH22Fake/main/event_data.json')
  //     const res3 = await axios.get('https://raw.githubusercontent.com/KhanhNhat242/APIH22Fake/main/interest_paper.json')
  //     const res4 = await axios.get('https://raw.githubusercontent.com/KhanhNhat242/APIH22Fake/main/infor_paper.json')
  //     // console.log(res.data)
  //     setMember(res1.data)
  //     setEvents(res2.data)
  //     setTopPaper(res3.data)
  //     setCommonPaper(res4.data)
  //   }
  //   catch(err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home events={events} />}></Route>
          <Route path='/achievement' element={<Achievement paper={paper} />}></Route>
          <Route path='/achievement/top-paper' element={<TopPaper paper={paper} />}></Route>
          <Route path='/achievement/all-paper' element={<AllPaper paper={paper} />}></Route>
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
