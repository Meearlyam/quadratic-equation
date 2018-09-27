module.exports = function solveEquation(equation) {
  let elements = equation.split(' ');
  let a, b, c, D_sqrt;

  for(let i = 0, len = elements.length; i < len; i++){
    if(Number.isInteger(parseInt(elements[i]))) {

      if(i != len - 1){                          //not the last coefficient (c)      
        if(elements[i + 2].length > 1) { 
          if((i != 0) && (elements[i - 1] == "-")) {             
            a = -parseInt(elements[i]);
          }
          else {
            a = parseInt(elements[i]);
          }       
        }
        else {
          if((i != 0) && (elements[i - 1] == "-")) {
            b = -parseInt(elements[i]);
          }
          else {
            b = parseInt(elements[i]);
          }
        }  
      }
      else {
        if(elements[i - 1] == '+') {                  
          c = parseInt(elements[i]);
        }
        else {
          c = -parseInt(elements[i]);
        }
      }
    }
  }

  D_sqrt = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  return ([Math.round((- b + D_sqrt)/(2 * a)), 
          Math.round((- b - D_sqrt)/(2 * a))]).sort((left, right) => left - right);
}
