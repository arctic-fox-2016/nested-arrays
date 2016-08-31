//write your code here
//[warna_papan[(bidak:)warna,nama_bidak]] --> s/d papaan kedelapan
//  |
//  v
// sd baris kedelapan
let chessBoard = [[],[[],[]] ]
let chessPiece = ["powns", "l_rook","l_knight","l_bishop","queen","king","r_bishop","r_knight","r_rook"]
let boardColor = ["black","white"]
let pieceColor = boardColor

let initialBoard =()=>{
  for (let i=0;i<8;i++){
    for (let j=0;j<8;j++){
      if (i+j%2===0){
        //initial board color black
        chessBoard[i][j][0] = boardColor[0]
      }else
        //initial board color white
        chessBoard[i][j][0] = boardColor[1]
    }
      //initial chess piece empty
      chessBoard[i][j][0] = "empty"

  }
}

let initialPiece =()=>{
  //lay chessPiece
  for (let i=0;i<8;i++){
    //white pawn
    chessBoard [1][i][1][0]=pieceColor[1]
    chessBoard [1][i][1][1]=chessPiece[0]
    //black pawn
    chessBoard [6][i][1][0]=pieceColor[0]
    chessBoard [6][i][1][1]=chessPiece[0]
    //lay rook, knigjt, bishop, queen, king white
    chessBoard [0][i][1][0]=pieceColor[1]
    chessBoard [0][i][1][1]=chessPiece[i+1]
    //lay rook, knight, bishop, queen, king black
    chessBoard [7][i][1][0]=pieceColor[0]
    chessBoard [7][i][1][1]=chessPiece[i+1]
}
}
initialBoard();
initialPiece();
let checkPiece = (x,y) =>{
  console.log("warna papan = "+chessBoard[x][y][0] + ", Isi bidak = "+chessBoard[x][y][1][1]+" " + chessBoard[x][y][1][0])
}
checkPiece(0,7);
