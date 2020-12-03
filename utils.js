const { array } = require("yargs")

function stripInput(input) {
  const newString = input.replace(/[\-A-Za-z0-9,"'+*/=.,;:&$!?@#%^<>|_]/g, "")
  let array = newString.split('')
  return array
}

const wonkyWord = stripInput('te(s)t{i}n[g]')
console.log(wonkyWord)