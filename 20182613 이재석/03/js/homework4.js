const num=parseInt(prompt("1보다 더 큰 숫자를 입력하세요: "));

var num2=0;
var sum=0;

for (let i= 2;i<=num;i+=2){
   document.write(`${i}`);
   document.write("--------");
   num2=i;
   sum+=i;
   document.write(`${sum}`);
   document.write("<br>");
}