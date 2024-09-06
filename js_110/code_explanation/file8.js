// What will be logged and why?

let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}

/*
This code logs:
*
**
***
****
*****
******
*******
********
*********
**********
to the console.

`str` is initialized to empty string `('')`. within the while loop we check if the length of the `str` is 
greater than `10`. Concatenat the string `'*'` with the `str`, and log to the console.


*/