module.exports = function check(str, bracketsConfig) {
  bracketsConfig = Object.fromEntries(bracketsConfig);
  str = [...str];
  
  let stack = []
  let s =[]
  let n = []

  if(str.length%2 > 0) {
    return false;
  } else {
  for(let i=0; i<str.length; i++) {
    let bracket = str[i];

    if(bracket === '|') {
      s.push(bracketsConfig[bracket])
    } else if(bracket === '7' || bracket === '8') {
      n.push(bracketsConfig[bracket]);
    } else if(bracketsConfig[bracket]) {
      stack.push(bracketsConfig[bracket])
    } else {
      if(bracket !== stack.pop()) {
        return false;
      } 
    }
}}
console.log(stack)
return stack.length === 0 && s.length%2 === 0 && n.length%2 === 0;
}

