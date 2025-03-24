const Piece=({
    rank,
    file,
    piece,
})=>{
    return( <div className={`piece ${piece} p-${rank}${rank}${file}`}
    />
    )
}

export default Piece;