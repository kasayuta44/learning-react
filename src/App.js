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

function MySquare({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function MyBoard() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player :" + (xIsNext ? "X": "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <MySquare value={squares[0]} onSquareClick={() => handleClick(0)} />
        <MySquare value={squares[1]} onSquareClick={() => handleClick(1)} />
        <MySquare value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <MySquare value={squares[3]} onSquareClick={() => handleClick(3)} />
        <MySquare value={squares[4]} onSquareClick={() => handleClick(4)} />
        <MySquare value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <MySquare value={squares[6]} onSquareClick={() => handleClick(6)} />
        <MySquare value={squares[7]} onSquareClick={() => handleClick(7)} />
        <MySquare value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;  
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app!</h1>
      <MyBoard />
    </div>
    
  );
}

export default App;
