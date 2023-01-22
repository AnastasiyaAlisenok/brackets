function check(str, bracketsConfig) {
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

    if(str[i] === '|' && str[i+1] === '|') {
      str.splice(i, i+1);
    } else if(str[i] === '|') {
      s.push(bracketsConfig[bracket])
    } else if(bracket === '7' && str[i+1] === '7') {
      str.splice(i, i+1);
    } else if(bracket === '7') {
      n.push(bracketsConfig[bracket]);
    } else if(bracket === '8' && str[i+1] === '8') {
      str.splice(i, i+1);
    } else if(bracket === '8') {
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
console.log(s)
console.log(n)
return stack.length === 0 && s.length%2 === 0 && n.length%2 === 0;
}



  str = '|(|)';
  bracketsConfig =[['(', ')'], ['|', '|']];
  console.log(check(str, bracketsConfig));