function stripInput(input) {
  return input.replace(/[\-A-Za-z0-9,"'+*/=.,;:&$!?@#%^<>|_]/g, "") 
}

const wonkyWord = stripInput('te(s)t{i}n[g]')
console.log(wonkyWord)