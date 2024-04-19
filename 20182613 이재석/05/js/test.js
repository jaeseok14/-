function calculateGCD() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  
  var gcd = findGCD(num1, num2);
  
  document.getElementById("result").innerText = "두 수의 최대공약수는 " + gcd + "입니다.";
}

function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}