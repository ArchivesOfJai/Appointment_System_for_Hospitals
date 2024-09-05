import Navbar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Services from './components/Services/Services';
import FindDoctor from './components/FindDoctor/FindDoctor';
import About from './components/About/About';

function App() {
  return(
    <Router>
        <Navbar /> 
        <div style={{height: '57px',width: '100%'}}></div>
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/Services" element={<Services />} />        
          <Route path="/FindDoctor" element={<FindDoctor />} />        
          <Route path="/About" element={<About />} />        
        
        </Routes>
    </Router>
  )
}

export default App
