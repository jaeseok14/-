const bttn = document.querySelector("button"); //버튼 요소 가져옴

function display(){
  alert("클릭했습니다.");
}
//display 함수는 전달인자로 다른 함수에 전달되는 콜백함수
// bttn.addEventListener("click",display);         //버튼 클릭하면 display 함수실행


bttn.addEventListener("click",()=>{           //버튼클릭하면 alert 실행
  alert("클릭했습니다.");
})
