const { array } = require("yargs")

function stripInput(input) {
  return input.match(/[(){}\[\]]/g)
}

const wonkyWord = stripInput('te(s)t{i}n[g]')
console.log(wonkyWord)