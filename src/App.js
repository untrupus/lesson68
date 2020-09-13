import React from 'react';
import './App.css';
import Counter from "./containers/Counter/Counter";
import ToDo from "./containers/ToDo/ToDo";

function App() {
  return (
      <div className="App">
        {/*<Counter/>*/}
        <ToDo/>
      </div>
  );
}

export default App;
