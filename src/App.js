
import './App.css';

import Header from './components/header/header';
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      {/* <div className="App-img">image</div>
      <header className="App-header">
        <h1>It's Prasad Sammengi</h1>
      </header> */}


      <Header title="Prasad Sammengi" subTitle="Profile Details" />
      <h6>Prasad Sammengi</h6>
      <Main message="Experienced Java developer with a strong track record of
       delivering successful projects. Proficient in Java 8 and above, with a
        solid understanding of design patterns and object-oriented programming. 
        Skilled in developing REST APIs and experience with agile development methodologies. 
        Seeking a challenging Java development role where I can utilize my skills and continue 
        learning and growing as a developer." 
      
      note="my footer"/>
      
      
    </div>
    
  );
}

export default App;
