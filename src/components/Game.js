import { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function reset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Ir a la jugada #' + move;
    } else {
      description = 'Ir al inicio del juego';
    }
    return (
      <button 
        key={move} 
        onClick={() => jumpTo(move)}
        type="button" 
        className="list-group-item list-group-item-action p-0"
      >
        <small>{description}</small>
      </button>
    );
  });

  return (
    <div className="game mt-5">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info mt-3">
        <button className="btn btn-sm btn-primary mb-2" onClick={reset}>
          Nuevo juego 
          <i className="bi bi-arrow-clockwise ms-1"></i>
        </button>
        <div className="list-group">
          {moves}
        </div>
      </div>
    </div>
  );
}