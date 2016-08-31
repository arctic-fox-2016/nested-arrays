//write your code here
let table = [[],[]]

let key = ["Number","Name","Position","Points per Game"]
let joe = [12, "Joe Schmo","Center",[14,32,7,0,23]]
let ken = [9, "Ken Buckets","Poin Guard",[9,0,11,22,0]]
let kay = [31, "Harvey Kay","Shooting Guard",[0,30,16,0,25]]
let sally = [18, "Sally Talls","Power Forward",[18,29,26,31,19]]
let mo = [22, "Mo Diboux","Small Forward",[11,0,23,17,0]]
table[0] = key
table[1] = joe
table[2] = ken
table[3] = kay
table[4] = sally
table[5] = mo

console.log(table[3][2] == "Shooting Guard");
console.log(JSON.stringify(table[1][3]) == JSON.stringify([14, 32, 7, 0, 23]));
