const Calculator = function() {
  this.evaluate = string => {
    const numCheck = "(-?\\d+\\.?\\d*e?\\+?-?\\d*)";
    const operatorChecks = [" (\\*|\\/) ", " (\\+|-) "];
    
    operatorChecks.forEach((check) => {
      while (string.search(new RegExp(check)) != -1) {
        string = string.replace(new RegExp(numCheck + check + numCheck), (_, a, o, b) => {
          [a, b] = [+a, +b];
          switch (o) {
            case '*': return a * b;
            case '/': return a / b;
            case '+': return a + b;
            case '-': return a - b;
          };
        });
      };
    });
    
    return string;
  };
};
