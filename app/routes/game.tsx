import { useState } from 'react';
import type { Route } from "./+types/game";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tic-Tac-Toe Game - Game Demo" },
    { name: "description", content: "Play an interactive tic-tac-toe game with time travel feature" },
  ];
}

function Square({ value, onSquareClick }: { value: string | null; onSquareClick: () => void }) {
  const displayValue = value === 'X' ? '❌' : value === 'O' ? '⭕' : '';
  
  return (
    <button className="square" onClick={onSquareClick}>
      <span className="text-4xl">{displayValue}</span>
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }: {
  xIsNext: boolean; 
  squares: (string | null)[]; 
  onPlay: (nextSquares: (string | null)[]) => void;
}) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `🎉 Winner: ${winner}`;
  } else {
    const nextPlayer = xIsNext ? 'X' : 'O';
    const nextIcon = xIsNext ? '❌' : '⭕';
    status = `${nextIcon} Next player: ${nextPlayer}`;
  }

  return (
    <>
      <div className="status">
        <div className="flex items-center justify-center gap-3">
          <span>{status}</span>
        </div>
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }    return (
      <li key={move} className="mb-2">
        <button 
          onClick={() => jumpTo(move)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
            move === currentMove 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 hover:shadow-md border border-gray-200'
          }`}
        >
          {description}
        </button>
      </li>
    );});
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Tic-Tac-Toe Game
          </h1>
          <p className="text-gray-600 text-lg">Challenge yourself with this classic game!</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300 min-w-[300px]">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white text-lg font-bold">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Game History</h2>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <ol className="space-y-1">{moves}</ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
