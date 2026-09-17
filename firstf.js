/**
 * mygrep.js is a custom implementation of linux grep and head command, 
 * firstf will find a pattern in the first n lines
 * firstf will work as follows
 * node firstf.js PATTERN FILENAME NUMBER_OF_LINES
 */

const fs = require('fs');
const path = require('path');

if(process.argv.length !== 5){
  console.log (`Usage: node ${path.basename(__filename)} PATTERN FILENAME NUMBER_OF_LINES`);
  return;
}

let filename = process.argv[3];
let pattern = process.argv[2];
let nlines = Number(process.argv[4]);

//File exists
if (!fs.existsSync(filename)){
  console.log(`${path.basename(__filename)}: ${filename}: No such file or directory`);
  return;
}

//Empty pattern
if (pattern.length === 0){
  console.log('PATTERN is an empty string');
  return;
}

//Wrong number
if (isNaN(nlines) || nlines<=0 ){
  console.log(`Please enter a valid number for NUMBER_OF_LINES`)
  return;
}

//Check the number of lines
let content = fs.readFileSync(filename, 'utf8');
let lines = content.split('\n');

let limit = nlines < lines.length ? nlines : lines.length;

for (let i = 0; i < limit; i++) {
  if (lines[i].includes(pattern)) {
    console.log(lines[i]);
  }
}
