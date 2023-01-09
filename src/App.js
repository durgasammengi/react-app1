import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Main from "./components/main/main";
import About from "./about";
function Modal({ children, shown, close }) {
  return shown ? (
      <div
        className="modal-content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <button onClick={close}>Close</button>
        {children}
      </div>
  ) : null;
}

function App() {
  const [modalShown, toggleModal] = React.useState(true);
  return (
    <div className="App">
      <Modal
       shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <h1>Look! I'm inside the modal!</h1>
      </Modal>
      <Router>
      <Header title="Prasad Sammengi"  />
      <h6></h6>
      
        <Routes>
            <Route index element={<Navigate to="/home" replace />} /> 
            <Route path="/home" element={<Main message="Experienced Java developer with a strong track record of
            delivering successful projects. Proficient in Java 8 and above, with a
            solid understanding of design patterns and object-oriented programming. 
            Skilled in developing REST APIs and experience with agile development methodologies. 
            Seeking a challenging Java development role where I can utilize my skills and continue 
            learning and growing as a developer."       
            note="@ps"/>} />
            <Route path="/about" element={<About about="checking"/>}/>
      
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
