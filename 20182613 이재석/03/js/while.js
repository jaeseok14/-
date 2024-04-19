let stars = parseInt(prompt("별의 개수 : "));
let stars2 = stars;

while (stars>0) {
  document.write('*');
  stars--;
}

document.write(`<br>----------------<br>`);

do {
  document.write('*')
  stars2--;
} while (stars2>0)