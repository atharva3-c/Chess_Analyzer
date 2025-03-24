import React from "react";
import WhiteKing from "./pieces/svg";

import kingB from "./pieces/king-b.svg";
import queenB from "./pieces/queen-b.svg";
import bishopB from "./pieces/bishop-b.svg";
import knightB from "./pieces/knight-b.svg";
import rookB from "./pieces/rook-b.svg";
import pawnB from "./pieces/pawn-b.svg";

import kingW from "./pieces/king-w.svg";
import queenW from "./pieces/queen-w.svg";
import bishopW from "./pieces/bishop-w.svg";
import knightW from "./pieces/knight-w.svg";
import rookW from "./pieces/rook-w.svg";
import pawnW from "./pieces/pawn-w.svg";
export default function Piece({ piece_name }) {
  //
  // function piece_source(piece_name) {
  //   console.log("ps", piece_name)
  //   switch (piece_name) {
  //     case "black king":
  //       return "./pieces/king-b.svg"
  //     case "black queen":
  //       return "./pieces/queen-b.svg"
  //     case "black bishop":
  //       return "./pieces/bishop-b.svg"
  //     case "black knight":
  //       return "./pieces/knight-b.svg"
  //     case "black rook":
  //       return "./pieces/rook-b.svg"
  //     case "black pawn":
  //       return "./pieces/pawn-b.svg"
  //
  //     case "white king":
  //       return "./pieces/king-w.svg"
  //     case "white queen":
  //       return "./pieces/queen-w.svg"
  //     case "white bishop":
  //       return "./pieces/bishop-w.svg"
  //     case "white knight":
  //       return "./pieces/knight-w.svg"
  //     case "white rook":
  //       return "./pieces/rook-w.svg"
  //     case "white pawn":
  //       return "./pieces/pawn-w.svg"
  //     default:
  //       return "../../logo.svg"
  //   }
  // }
  // console.log(piece_source(piece_name))

  function piece_source(piece_name) {
    const pieces = {
      "black king": kingB,
      "black queen": queenB,
      "black bishop": bishopB,
      "black knight": knightB,
      "black rook": rookB,
      "black pawn": pawnB,
      "white king": kingW,
      "white queen": queenW,
      "white bishop": bishopW,
      "white knight": knightW,
      "white rook": rookW,
      "white pawn": pawnW,
    };

    return pieces[piece_name] || "../../logo.svg";
  }
  return (
    <div>{
      <img src={piece_source(piece_name)} alt={piece_name} />
    }
    </div>

  )
}
