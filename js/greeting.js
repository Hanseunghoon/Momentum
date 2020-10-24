// document.quertSelector(태그이름 또는 클래스이름) : html문서 내에 있는 것을 가져오는 것
const nameContainer = document.querySelector(".js-name");

// 이름 출력 함수
function paintName(name) {
  // html문서에 있는 js-name클래스를 가지는 태그
  nameContainer.innerHTML = "";

  // span태그 생성 후 속성 지정
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `안녕 ${name}! 오늘도 힘내자 :)`;    // span태그의 텍스트를 지정
  
  // js-name의 클래스를가지는 태그의 span태그를 안에다 넣음
  nameContainer.appendChild(title);
}

// 이벤트 핸들 
function handleSubmit(event) {
  event.preventDefault();     // 기본 이벤트(새로고침) 제거

  // event.target : 이벤트 주체
  // 이벤트 주체가 가지는 input태그의 값
  const form = event.target;  
  const input = form.querySelector("input");
  const value = input.value;

  // input 태그의 값을 로컬스토리지에 저장 (키, 값)
  localStorage.setItem("username", value);

  paintName(value);
}

// 이름 입력 input 이벤트 처리 (로컬 스토리지에 이름이 없을 때)
function paintInput() {
  // input 태그 생성 후, 속성 지정
  const input = document.createElement("input");
  input.placeholder = "당신의 이름은?";
  input.type = "text";
  input.className = "name__input";

  // form 태그 생성 후 이벤트리스너(제출) 달아주기
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);

  // form 태그 내부에 input 태그 넣어주기
  form.appendChild(input);

  nameContainer.appendChild(form);
}

// 로컬 스토리지에 있는 username가져오기
function loadName() {
  // localStorage.getItem(키) : 로컬스토리지에 있는 해당 key를 가진 항목의 값을 가져온다.
  const name = localStorage.getItem("username");

  if (name === null) {  // 가져올 이름이 없다면 입력받아야 한다.
    paintInput();
  } else {              // 가져올 이름이 있다면 이름을 출력한다.
    paintName(name);
  }
}

// 메인 init함수
function init() {
  loadName();
}

init();
