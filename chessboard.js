//Release 0
//write your code here
let black = ["pion","mentri","kuda","benteng","ratu","raja"]
let white = ["pawn", "slider", "knight", "roof", "queen", "king"]

let position = [[0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7], [], [],
                [], [], [0,1,2,3,4,5,6,7], [0,1,2,3,4,5,6,7]]

//release 1
let shootingGuard = [
  ["Number","Name","Position","PointPer Game"],
  [12,"Joe Schomo","Center",[14,32,7,0,24]],
  [9,"Ken Buckets","Point Guard",[14,32,7,0,23]],
  [31,"Harvey Kay","Shooting Guard",[14,32,7,0,23]],
  [18,"Sally Talls","Power Forward",[18,29,26,31,19]],
  [22,"Mo Diboux","Small Forward",[11,0,23,5,21]]
]


let chessBoard = () => {

  /*for (var i=0;i<position.length; i++){
    if (position[0,1] == 0) {
        position[0,1] == black[0];
        console.log(position);
    }
  }
  */
  position[0][0] = black[3]; //benteng
  position[0][1] = black[2]; // kuda
  position[0][2] = black[1]; // mentri
  position[0][3] = black[5]; // raja
  position[0][4] = black[4]; // ratu
  position[0][5] = black[1]; // mentri
  position[0][6] = black[2]; // kuda
  position[0][7] = black[3];// benteng

  position[1][0] = black[0];

  for (var i=0;i<8;i++) {
      position[1][i] = black[0];
  }
  for (var i=0;i<8;i++) {
      position[6][i] = white[0];
  }
  position[7][0] = white[3]; //benteng
  position[7][1] = white[2]; // kuda
  position[7][2] = white[1]; // mentri
  position[7][3] = white[4]; // ratu
  position[7][4] = white[5]; // raja
  position[7][5] = white[1]; // mentri
  position[7][6] = white[2]; // kuda
  position[7][7] = white[3];// benteng

}



console.log(shootingGuard[3][2]);
console.log(JSON.stringify(shootingGuard[1][3])== JSON.stringify([14,32,7,0,24]))

//console.log(shootingGuard);
//chessBoard();


//release 1
