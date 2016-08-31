//write your code here
var chessBoard = [];

function startChessBoard() {
  for(var row = 0; row < 8; row++) {
    chessBoard[row] = [];
  }

  for(var row = 0; row < 8; row++) {
    for(var col = 0; col < 8; col++) {
    chessBoard = fillChessBoard(chessBoard, row, col);
    }
  }
}

function fillChessBoard(chessBoard, row, col) {
  if (row == 1 || row == 6){
      chessBoard[row][col] = "Pion";
  }else if(row == 0 && col == 0 || row == 0 && col == 7 || row == 7 && col == 0 || row == 7 && col == 7){
      chessBoard[row][col] = "Benteng";
  }else if(row == 0 && col == 1 || row == 0 && col == 6 || row == 7 && col == 1 || row == 7 && col == 6){
      chessBoard[row][col] = "Kuda";
  }else if(row == 0 && col == 2 || row == 0 && col == 5 || row == 7 && col == 2 || row == 7 && col == 5){
      chessBoard[row][col] = "Gajah";
  }else if(row == 0 && col == 3 || row == 7 && col == 3){
      chessBoard[row][col] = "Raja";
  }else if(row == 0 && col == 4 || row == 7 && col == 4){
      chessBoard[row][col] = "Ratu";
  } else {
      chessBoard[row][col] = "";
  }

  if (row == 0 ||  row == 1){
    chessBoard[row][col] += " Hitam";
  }
  else if (row == 6 || row == 7){
    chessBoard[row][col] += " Putih";
  }

    return chessBoard;
}

startChessBoard();
console.log(chessBoard[7][0] == "Benteng Putih");
