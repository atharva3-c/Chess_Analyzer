import './board.css';
import { getCharacter } from '../../helper';
import Files from '../bits/Files'
import Ranks from '../bits/Ranks'
import { useState, useEffect } from "react";
import Piece from '../Piece/piece.js';
const Board = () => {

  const getClassName = (i, j) => {
    let c = 'tile'
    c += (i + j) % 2 === 0 ? ' tile--light' : ' tile--dark'
    return c;
  }

  const getRowArray = (row) => {
    let arr = []
    for (const char of row) {
      arr.push(mapping[char]);
    }
    return arr
  }


  const mapping = {
    "k": "black king", K: "white king",
    "q": "black queen", Q: "white queen",
    "b": "black bishop", B: "white bishop",
    "n": "black knight", N: "white knight",
    "r": "black rook", R: "white rook",
    "p": "black pawn", P: "white pawn",
    "1": " ", "2": "  ", "3": "   ", "4": "    ", "5": "     ", "6": "      ", "7": "       ", "8": "         "
  }

  const state = useState(["rnbkqbnr", "pppppppp", "8", "8", "8", "8", "PPPPPPPP", "RNBQKBNR"])
  console.log(state[0][7][0])
  const ranks = Array(8).fill().map((x, i) => 8 - i)
  const files = Array(8).fill().map((x, i) => getCharacter(i))

  return <div className='board'>
    {/* <Piece piece_name="black king" /> */}
    <Ranks ranks={ranks} />
    <div className='tiles'>
      {
        ranks.map((rank, i) => {
          const row = getRowArray(state[0][i]);
          console.log(rank, row);
          files.map((file, row, j) =>
            <div key={file + '-' + rank} className={getClassName(i, j)}>
              <div className="piece">
                <Piece piece_name={row} />
              </div>
            </div>
          )
        }
        )
      }
    </div>
    <Files files={files} />
  </div>
}
export default Board;
