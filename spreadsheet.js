//write your code here
var playerData = [["Number", "Name", "Position", "Points per Game"]];

// Insert player data into table
function createData() {

  playerData.push([12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]]);
  playerData.push([9, "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]]);
  playerData.push([31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]]);
  playerData.push([18, "Sally Talls", "Power Forward", [18, 29, 26, 31, 19]]);
  playerData.push([22, "Mo Diboux", "Small Forward", [11, 0, 23, 17, 0]]);
}

createData();
console.log(playerData[3][2] == "Shooting Guard");
console.log(JSON.stringify(playerData[1][3]) == JSON.stringify([14, 32, 7, 0, 23]));
