let fah = parseFloat(prompt("변환할 인치"));
let cel;

cel = (fah*2.54).toFixed(2);
alert(`${fah}인치는 ${cel}센티미터입니다.`);