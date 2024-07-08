const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter first number: ', num1 => {
    readline.question('Enter second number: ', num2 => {
      readline.question('Enter operation (+, -, *, /): ', operation => {
        let result;
        switch(operation) {
          case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
          case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
          case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
          case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
          default:
            console.log('Invalid operation');
            readline.close();
            return;
        }
        console.log(`Result: ${result}`);
        readline.close();
      });
    });
  });
  