let num = 0;
let flag = 2;
let result = []; // to store all number and operators
let flag2 = 0;
let target = document.getElementById('display');

/**
    flag value:
        1.  if entered input is number then flag=1
        2.  if entered input is operator then flag=2
*/

/** for 1 -8 */
for (let i = 0; i < 9; i++) {
  document.querySelectorAll('.content')[i].addEventListener('click', () => {
    number(i + 1);
  });
}
// for 9
document.querySelectorAll('.content')[9].addEventListener('click', () => {number(0);});

/** for operators  */
document.getElementById('+').addEventListener('click', () => { operator('+');});
document.getElementById('-').addEventListener('click', () => {operator('-');});
document.getElementById('/').addEventListener('click', () => {operator('/');});
document.getElementById('*').addEventListener('click', () => {operator('*');});

// to build the individual number
function number(x) {

  /** this condition is when we press number directly after getting result displayed 
       on screen  */  
  if (flag2 == 1) {
    flag2 = 0;
    target.innerText = '';
    num = 0;
    result.length = 0;
  }

  num = num * 10 + x;
  target.innerText += x;
  flag = 1;

}

// to print if something is wrong
function invalid() {
  target.innerText = 'invalid input ';
  num = 0;
  flag = 2;
  result.length = 0;
  setTimeout(() => {
    target.innerText = '';
  }, 1000);
}

// to check whether operator is used properly or not
function operator(opera) {
  if (flag == 2) {
    invalid();
  } else {
    if (flag2 == 1) 
        flag2 = 0;

    result.push(num);
    result.push(opera);
    target.innerText += ' ';
    target.innerText += opera;
    target.innerText += ' ';
    flag = 2;
    num = 0;
  }
}

/** for calculation of num1 operator num2 */
function calc(a, b, op) {
  if (op == '+') return a + b;
  if (op == '-') return a - b;
  if (op == '*') return a * b;
  if (op == '/') {
    if (b == 0) {
      invalid();
    } else return a / b;
  }
}

// to clear the screen
document.getElementById('clear').addEventListener('click', () => {
  target.innerText = '';
  num = 0;
  flag = 2;
  result.length = 0;
});

/** on press of = total calculation begins */
document.getElementById('=').addEventListener('click', () => {
  if (flag == 2) 
  {
    invalid();
  }
  else 
  {
    result.push(num);
    num = 0;
    flag = 1;
    var num1 = 0,num2 = 0,op,res;
    for (var i = 0; i < result.length; ) {
      if (i == 0) {
        num1 = result[i];
        i++;
        op = result[i];
        i++;
        num2 = result[i];
        i++;
        res = calc(num1, num2, op);
        num1 = res;
      }
      else {
        op = result[i];
        i++;
        num2 = result[i];
        i++;
        res = calc(num1, num2, op);
        num1 = res;
      }
    }
   /** to display the value  */
    if (res != undefined) {
      target.innerText = res;
      result.length = 0;
      num = res;
      flag2 = 1;
      flag = 1;
    }
  }
});
