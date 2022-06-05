const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); // Date object 생성
  const hours = String(date.getHours()).padStart(2, "0"); // padStart(maxlength, string) : max길이 2로 설정, 2에 부족할 시 0을 채워넣음
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 현재시간 바로 보기
setInterval(getClock, 1000); // 시간 1초씩 증가
