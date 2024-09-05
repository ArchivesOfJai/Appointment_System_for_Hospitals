import Navbar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';

function App() {
  return(
    <Router>
        <Navbar /> 
        <div style={{height: '57px',width: '100%'}}></div>
        <Routes>
          <Route path="/" element={<Home />} />        
        
        </Routes>
    </Router>
  )
}

export default App
