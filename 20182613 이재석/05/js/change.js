const title = document.querySelector("#title");
const userName = document.querySelector("#desc p");
const pfImage = document.querySelector("#profile img");

title.onclick = () =>{
  title.innerText="프로필";
  // title.style.backgroundColor="black";
  title.style.color="white";
  // if(!title.classList.contains("cliked")){
  //   title.classList.add("cliked");
  // }else{
  //   title.classList.remove("cliked");
  // }
  title.classList.toggle("cliked");
}
userName.onclick = () =>{
  userName.innerHTML=`이름 : <b>민들레</b>`;
  userName.style.color = "blue";
}
pfImage.onclick = () =>pfImage.src = "img/pf2.png";0