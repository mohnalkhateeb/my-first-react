// import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <header>
        <h1>Hello in My First React Code</h1>
    
      </header> */}
      <Header></Header>
      {/* <main>
        
      </main> */}
      <Main></Main>

      {/* <footer>
        <p>Aothered by : Mohammad Alkhateeb</p>
      </footer> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
