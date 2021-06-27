import logo from './logo.svg';
import './App.css';
import React from 'react';
import HornedBeasts from './components/HornedBeasts';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello in My First React Code</h1>
    
      </header>
      <main>
        <div>
        <HornedBeasts title='Forest' source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5omSUVfXJSD6O2yyNQ8yJveYS7Hb2Yll7Yw&usqp=CAU'  detail ='Here is the scary beauty and true fantasy'/>
        <HornedBeasts title='dreset' source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9j8N50X1BKfrDxai7-pVYHnTQqbjI0vL3EA&usqp=CAU'  detail ='The beauty of suffering and frightening calm'/>
        <HornedBeasts title='sea' source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7F9VbpOs4y0-6PQmx7EzMkfW8onuSi6iH8g&usqp=CAU'  detail ='The beauty of the unknown and the fear of the moment'/>

        </div>
      </main>
      <footer>
        <p>Aothered by : Mohammad Alkhateeb</p>
      </footer>
    </div>
  );
}

export default App;
