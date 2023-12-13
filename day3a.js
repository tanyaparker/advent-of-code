var num;
var sum = 0;
var map = [
  ['.', '.', '.', '5', '9', '8', '.', '6', '3', '3'],
  ['.', '.', '.', '*', '.', '.', '.', '*', '.', '.'],
  ['.', '.', '3', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
  ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
  ['.', '.', '.', '$', '.', '*', '.', '.', '.', '*'],
  ['6', '6', '4', '.', '.', '.', '.', '4', '6', '7']
];

for (var i=0; i<map.length; i++) {
  for (var j=0; j<map[i].length; j++ ) {
    if (Number(map[i][j])) {
      if (nearSymbol(map, i, j)) {
        sum = sum + Number(getNumber(map, i, j));
      }
    }
  }
}

console.log(sum);

function nearSymbol(map, x, y) {
  if (x-1 >= 0 && y-1 >= 0 && map[x-1][y-1].match(/[^\d.]/)) {
    return true;
  } else if (x-1 >= 0 && map[x-1][y].match(/[^\d.]/)) { 
    return true;
  } else if (x-1 >= 0 && y+1 < map[x].length && map[x-1][y+1].match(/[^\d.]/)) { 
    return true;
  } else if (y-1 >= 0 && map[x][y-1].match(/[^\d.]/)) { 
    return true;
  } else if (y+1 < map[x].length && map[x][y+1].match(/[^\d.]/)) { 
    return true;
  } else if (x+1 < map.length && y-1 >= 0 && map[x+1][y-1].match(/[^\d.]/)) { 
    return true;
  } else if (x+1 < map.length && map[x+1][y].match(/[^\d.]/)) { 
    return true;
  } else if (x+1 < map.length && y+1 < map[x].length && map[x+1][y+1].match(/[^\d.]/)) { 
    return true;
  } else return false;
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
