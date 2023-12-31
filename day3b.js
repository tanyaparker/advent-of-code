var num, ratio, matches;
var sum = 0;
var map = [
['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
['.', '6', '6', '4', '.', '5', '9', '8', '.', '.']
];

for (var i=0; i<map.length; i++) {
  for (var j=0; j<map[i].length; j++ ) {
    if (map[i][j].match(/[^\d.]/)) {
      ratio = getGearRatio(map, i, j);
      sum = sum + ratio;
    }
  }
}

console.log(sum);

function getGearRatio(map, x, y) {
num = 1;
matches = 0;

  if (x-1 >= 0 && y-1 >= 0 && (Number(map[x-1][y-1]) || map[x-1][y-1] == 0)) { 
    num = num * getNumber(map, x-1, y-1);
    matches++;
  }
  
  if (x-1 >= 0 && (Number(map[x-1][y]) || map[x-1][y] == 0)) { 
    num = num * getNumber(map, x-1, y);
    matches++;
  }
  
  if (x-1 >= 0 && y+1 < map[x].length && (Number(map[x-1][y+1]) || map[x-1][y+1] == 0)) { 
    num = num * getNumber(map, x-1, y+1);
    matches++;
  }
  
  if (y-1 >= 0 && (Number(map[x][y-1]) || map[x][y-1] == 0)) { 
    num = num * getNumber(map, x, y-1);
    matches++;
  }
  
  if (y+1 < map[x].length && (Number(map[x][y+1]) || map[x][y+1] == 0)) { 
    num = num * getNumber(map, x, y+1);
    matches++;
  }
  
  if (x+1 < map.length && y-1 >= 0 && (Number(map[x+1][y-1]) || map[x+1][y-1] == 0)) { 
    num = num * getNumber(map, x+1, y-1);
    matches++;
  }
  
  if (x+1 < map.length && (Number(map[x+1][y]) || map[x+1][y] == 0)) { 
    num = num * getNumber(map, x+1, y);
    matches++;
  }
  
  if (x+1 < map.length && y+1 < map[x].length && (Number(map[x+1][y+1]) || map[x+1][y+1] == 0)) { 
    num = num * getNumber(map, x+1, y+1);
    matches++;
  }
  
  if (matches == 2) {
    return num;
  } else {
    return 0;
  }
}

function getNumber(map, x, y) {
  var k = y+1;
  var subNum = map[x][y];
  map[x][y] = '.';
  
  // concatenate digits to the right
  for (k=y+1; k<=map[x].length; k++) {
    if (Number(map[x][k]) || map[x][k] == 0) {
      subNum = subNum + map[x][k];
      map[x][k] = '.';
    } else break;
  }
  
  // concatenate digits to the left
  for (k=y-1; k>=0; k--) {
    if (Number(map[x][k]) || map[x][k] == 0) {
      subNum = map[x][k] + subNum;
      map[x][k] = '.';
    } else break;
  }
  return subNum;
}
