function seed() {
  let seeds = [];
  for(let i = 0; i<arguments.length; i++){
    seeds.push(arguments[i]);
  }
  return seeds;
}

function same([x, y], [j, k]) {
  const [xValue,yValue] = [x,y];
  const [jValue,kValue] = [j,k];
  if((xValue===jValue) && (yValue === kValue)){
    return true;
  } 
  return false;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  const [xValue,yValue] = cell;
  for(i=0; i<this.length;i++){
    let [x,y] = this[i];
    if((x===xValue) && (y===yValue)){
      return true;
    }
  }
  return false;
}

const printCell = (cell, state) => {

  if(contains.call(state,cell)){
    return '\u25A3';
  }
  return '\u25A2';
};

const corners = (state = []) => {

  let xCord = [];
  let yCord = [];

  let corner = {
    topRight: [0,0],
    bottomLeft: [0,0]
  };

  if(state.length){   
    state.forEach(element=>{
      let [x,y] = element;
      xCord.push(x);
      yCord.push(y);
    });
    let minX = Math.min(...xCord);
    let maxX = Math.max(...xCord);
    let minY = Math.min(...yCord);
    let maxY = Math.max(...yCord);

    corner.topRight = [maxX,maxY];
    corner.bottomLeft = [minX,minY];
    return corner;
  }
  
  return corner;
};

const printCells = (state) => {

  let {topRight,bottomLeft} = corners(state);
  let [xTop,yTop] = topRight
  let [xBottom,yBottom] = bottomLeft;
  
  let output = "";
 
  
  for(let i = yTop; i>=yBottom; i--){
    let row = [];
    for(let j = xBottom; j<=xTop; j++){
      row.push(printCell([j,i],state));
    } 
    output += row.join(" ") + "\n";
  }

  return output;
};

const getNeighborsOf = ([x, y]) => {
  const value = [];
  value.push(x);
 value.forEach(element=>{
   console.log(element);
 })
};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;