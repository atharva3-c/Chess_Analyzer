import './board.css';
import { getCharacter } from '../../helper';
import Files from '../bits/Files'
import Ranks from '../bits/Ranks'
import { useState, useEffect } from "react";
const Board = () => {

  const getClassName = (i, j) => {
    let c = 'tile'
    c += (i + j) % 2 === 0 ? ' tile--light' : ' tile--dark'
    return c;
  }
  const mapping = {
    "k": "black king", K: "white king",
    "q": "black queen", Q: "white queen",
    "b": "black bishop", B: "white bishop",
    "n": "black knight", N: "white knight",
    "r": "black rook", R: "white rook",
    "p": "black pawn", P: "white pawn",
  }

  const state = useState(["rnbkqbnr", "pppppppp", "8", "8", "8", "8", "PPPPPPPP", "RNBQKBNR"])
  console.log(state[0][7][0])
  const ranks = Array(8).fill().map((x, i) => 8 - i)
  const files = Array(8).fill().map((x, i) => getCharacter(i))

  return <div className='board'>
    <Ranks ranks={ranks} />

    <div className='tiles'>
      {
        ranks.map((rank, i) => files.map((file, j) =>
          <div key={file + '-' + rank} className={getClassName(i, j)}>{state[0][i][j] != 8 ? state[0][i][j] : " "}</div>
        ))
      }
    </div>
    <Files files={files} />
  </div>
}

export default Board;
