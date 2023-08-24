import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Achievement from './components/achievement/Achievement'

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
          <Route path='/event'></Route>
        </Routes>
      </Router>
      <Footer />      
    </div>
  );
}

export default App;
