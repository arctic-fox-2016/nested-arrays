//tentukan nilai posisi dari tiap buah catur
let papan = [
    ["benteng hitam", "kuda hitam", "peluncur hitam", "ster hitam", "raja hitam", "peluncur hitam", "kuda hitam","benteng hitam" ],
    ["pion hitam","pion hitam","pion hitam","pion hitam","pion hitam","pion hitam","pion hitam","pion hitam"],
    ["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],
    ["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],
    ["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],
    ["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],
    ["pion putih","pion putih","pion putih","pion putih","pion putih","pion putih","pion putih","pion putih"],
    ["benteng putih","kuda putih","peluncur putih","ster putih","raja putih","peluncur putih","kuda putih","benteng putih"]
  ];

// console.log(papan[0][1]+[6][0]);
// //
// let pionPutih = []//posisi pionputih
// for  (a ass i = 0; i < 8; i++){
//   for (var j = 0; j < 8; i++){
//     if (i+j  ) {
//
//     }
//   }
//   }
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    console.log(papan[i][j]+"="+"("+i+","+j+")");
    }
    //
}
// console.log (papan[3][7]); //true
