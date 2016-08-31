//write your code here
let table = [
  ["Number","Name","Position","Point per Game"],
  [12,"Joe Schmo","Center",[14,32,7,0,23]],
  [9,"Ken","Point Guard",[19,0,16,22,0]],
  [31,"Harvey","Shooting Guard",[0,30,16,0,25]],
  [18,"Sally","Power Forward",[18,29,26,31,19]],
  [22,"Mo","Small Forward",[11,0,23,17,0]]
]
console.log(table[3][2] == "Shooting Guard");
console.log(JSON.stringify(table[1][3]) == JSON.stringify([14,32,7,0,23]));
