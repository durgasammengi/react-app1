import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Main from "./components/main/main";
import About from "./about";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      {/* <div className="App-img">image</div>
      <header className="App-header">
        <h1>It's Prasad Sammengi</h1>
      </header> */}
     
      <Router>
      <Header title="꧁༺քʀǟֆǟɖ ֆǟʍʍɛռɢɨ༻꧂"  />
      <h6></h6>
        <Routes>
         
            <Route path="/home" element={<Main message="Experienced Java developer with a strong track record of
            delivering successful projects. Proficient in Java 8 and above, with a
            solid understanding of design patterns and object-oriented programming. 
            Skilled in developing REST APIs and experience with agile development methodologies. 
            Seeking a challenging Java development role where I can utilize my skills and continue 
            learning and growing as a developer."       
            note="@ps"/>} />
            <Route path="about" element={<About about="checking"/>}/>
      
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
