var sample = 'hello';

function reverseString (str_param){
  return str_param.split("").reverse().join("");
}

console.log(reverseString(sample));