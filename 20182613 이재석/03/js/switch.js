//switch 예제
let subject = prompt("신청할 과목: 1-HTML, 2-CSS, 3-Javascript");

if (subject !== null){
  switch(subject){
    case "1" : document.write("HTML을 신청했습니다.");
      break;
    case "2" : document.write("CSS을 신청했습니다.");
      break;
    case "3" : document.write("Javascript을 신청했습니다.");
      break;
    default: document.write("잘못 입력했습니다. 다시 입력해 주세요.")
  }
}