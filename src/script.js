function check(str, bracketsConfig) {
  bracketsConfig = Object.fromEntries(bracketsConfig);
  str = [...str];
  
  let stack = []
  
  

  if(str.length%2 > 0) {
    return false;
  } else {
  for(let i=0; i<str.length; i++) {
    let bracket = str[i];

    if(bracket === '|' && !stack.includes('|')) {
      stack.push(bracketsConfig[bracket])
    } else if(bracket === '|' && stack.includes('|')) {
      let index = stack.findIndex(item => item == '|');
      console.log(index)
      stack.splice(index, 1);
    } else if(bracket === '7' && !stack.includes('7')) {
      stack.push(bracketsConfig[bracket]);
    } else if(bracket === '7' && stack.includes('7')) {
      let ind = stack.findIndex(item => item == '7');
      stack.splice(ind, 1);
    }  else if(bracket === '8' && !stack.includes('8')) {
      stack.push(bracketsConfig[bracket]);
    } else if(bracket === '8' && stack.includes('8')) {
      let el = stack.findIndex(item => item == '8');
      stack.splice(el, 1);
    } else if(bracketsConfig[bracket]) {
      stack.push(bracketsConfig[bracket])
    } else {
      if(stack.pop() === '|' || stack.pop() === '7' || stack.pop() === '8') {
        return false;
      } else if(bracket !== stack.pop()) {
        return false;
      } 
    }
}}
console.log(stack)
return stack.length === 0;
}


  str = '8888877878887777777888888887777777887887788788887887777777788888888887788888';
  bracketsConfig = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
  console.log(check(str, bracketsConfig));