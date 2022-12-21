
import './App.css';

import Header from './components/header/header';
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      {/* <div className="App-img">image</div>
      <header className="App-header">
        <h1>It's Prasad Sammengi</h1>
      </header> */}

<div className="App">
      <Header title="My header" subTitle="Prasad sammengi" />
      <Main message="My content" />
      <Footer note="Footer Note" />
    </div>
    </div>
    
  );
}

export default App;
