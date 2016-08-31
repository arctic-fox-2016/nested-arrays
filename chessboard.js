//write your code here
//[warna_papan[(bidak:)warna,nama_bidak]] --> s/d papaan kedelapan
//  |
//  v
// sd baris kedelapan
var chessBoard = [[],[]]
var pion = ["powns putih","powns hitam"]
var pionHitam = []
var pionPutih = []
var kosong = []
var kesatriaPutih = ["rook putih","knight putih","bishop putih","queen putih","king putih","bishop putih","knight putih","rook putih"]
var kesatriaHitam = ["rook Hitam","knight Hitam","bishop Hitam","queen Hitam","king Hitam","bishop Hitam","knight Hitam","rook Hitam"]
for (var i = 0; i < 8; i++) {
  pionPutih.push(pion[0])
  pionHitam.push(pion[1])
  kosong.push("kosong")
}
chessBoard [0]= kesatriaPutih
chessBoard [1]= pionPutih
chessBoard [2,3,4,5]= kosong
chessBoard [6]= pionHitam
chessBoard [7]= kesatriaHitam
console.log(chessBoard[7][0])
console.log(chessBoard[1][0])
console.log(chessBoard[5][0])
console.log(chessBoard[1][5])
console.log(chessBoard[6][4])
console.log(chessBoard[0][0])
