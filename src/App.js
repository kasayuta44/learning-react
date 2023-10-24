import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*Lists */
const waves = [
  { wave: 'Day', isEvent: false, id: 1 },
  { wave: 'Rush', isEvent: true, id: 2},
  { wave: 'Fog', isEvent: true, id: 3},
  { wave: 'Goldie Seeking', isEvent: true, id: 4},
  { wave: 'Grillers', isEvent: true, id: 5},
  { wave: 'Mudmouths', isEvent: true, id: 6},
  { wave: 'Mothership', isEvent: true, id: 7},
  { wave: 'Cohock Charge', isEvent: true, id: 8},
  { wave: 'Tornado', isEvent: true, id: 9},
];

const tides = [
  { tide: 'Normal Tide', id: 1 },
  { tide: 'High Tide', id: 2 },
  { tide: 'Low Tide', id: 3 },
];

/* Turning JS lists into HTML lists with .map function*/
function MyWaveList() {
  const listItems = waves.map(wave =>
    <li
    key = {wave.id}
    style = {{
      color: wave.isEvent ? 'gray' : 'orange'
    }}
    >
      {wave.wave}
    </li>
    );

  return (
    <ul>{listItems}</ul>
  );
}

function MyTideList() {
  const listItems = tides.map(tide =>
    <li
    key = {tide.id}
    >
      {tide.tide}
    </li>
    );

  return (
    <ul>{listItems}</ul>
  );
}

/*Basic button with click-counter function*/
/*Extra note: if you want counter to be synced among multiple buttons
initiate count, setCount variables and handleClick() function in App() prior to the return ()
then add <button count={count} onClick={handleClick} /> 
the MyButton() function will not have the variable/function creation and onClick={onClick} */
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

/*Tic-Tac-Toe stuff */
function MySquare() {
  return (
    <button className="square">
      X
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app!</h1>
      <MySquare />
    </div>
    
  );
}

export default App;
