import Navbar from './components/Navbar/Navbar';
import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/Appointment_System_for_Hospitals/" element={<Home />} />        
          <Route path="/Appointment_System_for_Hospitals/Services" element={<Services />} />        
          <Route path="/Appointment_System_for_Hospitals/FindDoctor" element={<FindDoctor />} />        
          <Route path="/Appointment_System_for_Hospitals/About" element={<About />} />        
        
        </Routes>
    </Router>
  )
}

export default App
