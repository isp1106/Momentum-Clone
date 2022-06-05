const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저 기본 이벤트 막기
  loginForm.classList.add(HIDDEN_CLASSNAME); // 폼 숨기기
  const username = loginInput.value; // input의 value username에 할당
  localStorage.setItem(USERNAME_KEY, username); // 로컬저장소에 key & value 셋팅
  paintGreeting(username); // 함수실행, username (loginInput.value) 파라미터 지정
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`; // h1에 hello + username
  greeting.classList.remove(HIDDEN_CLASSNAME); //h1 표시하기
}

const savedUserName = localStorage.getItem(USERNAME_KEY); // null or 유저가입력한 input의 value

if (savedUserName === null) {
  // 입력값이 null일 경우
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 폼 표시하기
  loginForm.addEventListener("submit", onLoginSubmit); // submit되면 onLoginSubmit 실행
} else {
  // 입력값이 있는경우
  paintGreeting(savedUserName);
}
