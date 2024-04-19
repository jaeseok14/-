let n = parseInt(prompt("첫번째 숫자를 입력하세요: "));
let m = parseInt(prompt("두번째 숫자를 입력하세요: "));

function getGCD(a, b) {
  let answer = 0; // 최대공약수 
  let min = 0; // 두 수 중에서 값이 더 작은것.
  
  // 작은 수 구하기
  if (a <= b) { // a가 b보다 작으면!
    min = a;
  } else { // b가 a보다 작을 경우
    min = b;
  }
  
  // 두 수를 각각 i로 나누었을 때 두 수의 나머지가 0일 때 -> 최대 공약수 저장.
  for (let i = 1; i <= min; i++) {
    if (a % i == 0 && b % i == 0) {
      answer = i;
    }
  }
  return answer;
}

setTimeout(() => {
  console.log(`${getGCD(n, m)}`);
}, 5000);
