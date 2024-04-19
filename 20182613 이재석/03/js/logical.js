const num1=parseInt(prompt("점수를 입력하세요: "));
let str;
//AND 연산, 둘다 true여야 결과값 true
if(num1>=90){ // >=,>,<=,<
  str="A 학점!";
}else if(num1>=80){
  str ="B 학점!";
}else{
  str="C 학점!";
}

alert(str);
