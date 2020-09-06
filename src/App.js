import React from 'react';
import logo from './logo.svg';
import Search from './components/search';
import './App.css';
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <section className="covid">
        <a href="http://">Get the latest on our COVID-19 response</a>
      </section>
      <section>
        <Navbar/>
      </section>
      <section>
      </section>
    </div>
  );
}

export default App;
