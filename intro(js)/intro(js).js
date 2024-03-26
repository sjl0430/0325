
var sch = document.querySelector('.school');
var tri = document.querySelector('.trigger');
var maj = document.querySelector('.major');


let schMore = document.createTextNode('20년 입학 후 코로나19로 인해 비대면 강의를 진행하였고 22년 5월 입대하고 23년 11월에 전역 후, 바로 복학하여 실제 학교에 오가며 수업 받는 것은 24년이 처음입니다.');
let triMore = document.createTextNode("사전지식 없이 고등학교 시절 인터넷에서 코드를 찾아가며 카카오톡 봇 어플을 이용하여 카카오톡 채팅방에서 채팅창에 학교 이름을 입력하면 그 학교의 그날 급식 메뉴를 출력해주는 카카오톡 봇을 만들었고 그 때 처음으로 코딩에 관심이 생겨 지금까지 오게 되었습니다.");
let majMore = document.createTextNode("학교에서 배운 C언어, 파이썬, Java, HTML, JS 등의 지식이 있습니다. 확실한 비전이 없어 어떤 언어를 주로 사용할지 생각해둔 것도 없지만 열심히 해보려 합니다.");

let h3_0 = document.createElement('h3');
let h3_1 = document.createElement('h3');
let h3_2 = document.createElement('h3');

sch.onclick = function() {
    h3_0.appendChild(schMore);
    sch.append(h3_0);
    console.log("school, clicked!");
}
tri.onclick = function() {
    h3_1.appendChild(triMore);
    tri.append(h3_1);
    console.log("trigger, clicked!");
}
maj.onclick = function() {
    h3_2.appendChild(majMore);
    maj.append(h3_2);
    console.log("major, clicked!");
}