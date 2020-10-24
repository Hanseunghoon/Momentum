const wiseContainer = document.querySelector(".js-wise");

const day_msg = new Array(6);
const random_num = Math.floor(Math.random()*6);

// 매일 생각나는 명언을 적어주자.
function loadWiseSaying(){ 
  day_msg[0] = "태어날 때 가난하게 태어난 것은 당신의 잘못이 아니지만, 죽을 때 가난하게 죽는 것은 당신의 잘못이다. <b>  - 빌 게이츠 -</b>";
  day_msg[1] = "승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다. <b>  - 매튜슨 -</b>";
  day_msg[2] = "남과 비교하지 말고 전과 비교하라 <b>  - 유영만 -</b>";
  day_msg[3] = "만남은 인연이고, 관계는 노력이다. <b>  - 양광모 -</b>";
  day_msg[4] = "지는것이 이기는 것이다. <b>  - 인간관계 中 -</b>";
  day_msg[5] = "말을 독점하면 적이 많아진다. 말은 적게 하고 많이 들어라. 들을수록 내 편이 많아진다. <b>  - 소통의 비법 中 -</b>";
}

function paintWiseSaying(){
  loadWiseSaying();

  const wise_saying = document.createElement("p");
  wise_saying.className = "wise_saying";
  wise_saying.innerHTML = `${day_msg[random_num]}`;
  wiseContainer.appendChild(wise_saying);
}

function init(){
  paintWiseSaying();
}

init();

