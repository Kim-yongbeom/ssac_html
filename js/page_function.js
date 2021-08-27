const hamburger = document.querySelector(".hamburger-menu");
const gnb = document.querySelector(".gnb");

hamburger.addEventListener("click", function () {
  gnb.classList.toggle("active");
});

// 탭을 선택해서 클릭 => 클릭된 탭은 활성화, 탭과 같은 순서에 있는 이미지 그룹이 화면에 표시
// 1. 탭을 클릭 => 클릭된 탭에 active 클래스를 추가 / 클릭된 탭의 순서를 저장
// 2. 클릭된 탭의 순서와 같은 순서의 그룹에 active 클래스를 추가

const tab = document.querySelectorAll(".tab-item");
const group = document.querySelectorAll(".group");

const findIndex = (event) => {
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === event.currentTarget) {
      return i;
    }
  }
};

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function (event) {
    for (let j = 0; j < tab.length; j++) {
      tab[j].classList.remove("active");
      group[j].classList.remove("active");
    }
    this.classList.add("active");

    let indexNumber = findIndex(event);
    group[indexNumber].classList.add("active");
  });
}
