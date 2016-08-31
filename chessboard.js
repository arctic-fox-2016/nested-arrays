//write your code
let papan_catur = [];
function init_papan_catur(){
  for(let x = 0; x < 8; x++){
    papan_catur[x] = [];
    for(let y = 0; y < 8; y++){
      let color;
      if(x == 0 || x == 1) color = "H";
      else if(x == 6 || x == 7) color = "P ";

      if(x == 0 && y == 0) papan_catur[x][y] = "Benteng " + color;
      else if(x == 0 && y == 1) papan_catur[x][y] = "Kuda " + color;
      else if(x == 0 && y == 2) papan_catur[x][y] = "Menteri " + color;
      else if(x == 0 && y == 3) papan_catur[x][y] = "Raja " + color;
      else if(x == 0 && y == 4) papan_catur[x][y] = "Ratu " + color;
      else if(x == 0 && y == 5) papan_catur[x][y] = "Menteri " + color;
      else if(x == 0 && y == 6) papan_catur[x][y] = "Kuda " + color;
      else if(x == 0 && y == 7) papan_catur[x][y] = "Benteng " + color;

      else if(x == 1 && y == 0) papan_catur[x][y] = "Pion " + color;
      else if(x == 1 && y == 1) papan_catur[x][y] = "Pion " + color;
      else if(x == 1 && y == 2) papan_catur[x][y] = "Pion " + color;
      else if(x == 1 && y == 3) papan_catur[x][y] = "Pion " + color;
      else if(x == 1 && y == 4) papan_catur[x][y] = "Pion " + color;
      else if(x == 1 && y == 5) papan_catur[x][y] = "Pion " + color;
      else if(x == 1 && y == 6) papan_catur[x][y] = "Pion " + color;
      else if(x == 1 && y == 7) papan_catur[x][y] = "Pion " + color;

      else if(x == 6 && y == 0) papan_catur[x][y] = "Pion " + color;
      else if(x == 6 && y == 1) papan_catur[x][y] = "Pion " + color;
      else if(x == 6 && y == 2) papan_catur[x][y] = "Pion " + color;
      else if(x == 6 && y == 3) papan_catur[x][y] = "Pion " + color;
      else if(x == 6 && y == 4) papan_catur[x][y] = "Pion " + color;
      else if(x == 6 && y == 5) papan_catur[x][y] = "Pion " + color;
      else if(x == 6 && y == 6) papan_catur[x][y] = "Pion " + color;
      else if(x == 6 && y == 7) papan_catur[x][y] = "Pion " + color;

      else if(x == 7 && y == 0) papan_catur[x][y] = "Benteng " + color;
      else if(x == 7 && y == 1) papan_catur[x][y] = "Kuda " + color;
      else if(x == 7 && y == 2) papan_catur[x][y] = "Menteri " + color;
      else if(x == 7 && y == 3) papan_catur[x][y] = "Raja " + color;
      else if(x == 7 && y == 4) papan_catur[x][y] = "Ratu " + color;
      else if(x == 7 && y == 5) papan_catur[x][y] = "Menteri " + color;
      else if(x == 7 && y == 6) papan_catur[x][y] = "Kuda " + color;
      else if(x == 7 && y == 7) papan_catur[x][y] = "Benteng " + color;
      else papan_catur[x][y] = null;

    }
  }
  return papan_catur;
}
console.log(init_papan_catur());
