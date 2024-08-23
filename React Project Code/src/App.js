import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Homepage from './components/Homepage';
import Register from './Register';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';


function App() {
  return (
      <>
     
    <BrowserRouter>
                                                                                                                                                                                                                                                   
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            {/* <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="/ourServices" element={<OurServices text={`Focused, hard work is the real key
            to success. Keep your eyes on the goal, 
            and just keep taking the next step 
            towards completing it.`}
            maxLength={35}/>}/> */}
        </Routes>
    </BrowserRouter>
    
    </>
  );
}


export default App;
