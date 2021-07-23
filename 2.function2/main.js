function palindrome(message){
    if(message == message.split("").reverse().join("")){
      return console.log(true);
    }
    return console.log(false);
  }
  palindrome('hello');
  palindrome('abcba');