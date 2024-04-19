const students = ["Park","Kim","Lee","Kang"];

//for문 예제
// for(let i =0;i<students.length;i++)
// {
//   document.write(`${students[i]}<br>`);
// }

//foreach문 예제
// students.forEach(function(students){
//   document.write(`${students}. `)
// });

// 화살표 함수를 사용하면 아래와같다
// students.forEach(students => {
//   document.write(`${students}. `)
// });

// for of 문 예제
// for (let student of students){
//   document.write(`${student}. `);
// }


//for in문 예제
// const gitBook={
//   title : "깃&깃허브 입문",
//   pubDate: "2019-12-06",
//   pages : 272,
//   finished : true
// }

// for (key in gitBook){
//   document.write(`${key} : ${gitBook[key]}<br>`);
// }