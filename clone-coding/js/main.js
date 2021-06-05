// 스크롤시 헤더 색 변경
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    // 첫 화면에서 한 번이라도 스크롤이 내려가면, 
    if (scroll > 1) {
      //헤더 색깔 검정
      $(".navbar").css("background" , "#000000");
    }
    // 스크롤 변화가 없다면,
    else{
      //헤더색 투명
      $(".navbar").css("background" , "#ffffff00");   
    }
  })
})

// 슬라이드 이미지 선택자
const sliderImages = document.querySelectorAll('.slide')
// 오른쪽 화살표 선택자
const arrowRight = document.querySelector('.arrow--right')
// 왼쪽 화살표 선택자
const arrowLeft = document.querySelector('.arrow--left')
// 현재 보여지는 슬라이드 번호
let current = 0;

// 동그라미들 선택자
const dots = document.querySelectorAll('.dot')
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const dot4 = document.querySelector('.dot4')
const dot5 = document.querySelector('.dot5')
const dot6 = document.querySelector('.dot6')

// 슬라이드 이미지 리셋
const reset = () => {
  // 슬라이드 이미지 모두 보이지 않는 상태로 설정
  sliderImages.forEach((el) => el.style.display = 'none')
  dots.forEach((el) => el.style.background = '#ffffff62')
}

// 자동 슬라이드 기능을 위한 함수
const autoSlide = () => {
  // 모든 슬라이드 이미지를 보이지 않는 상태로 설정
  reset()
  // 마지막 슬라이드 이미지라면,
  if (current === sliderImages.length - 1) {
      // current 값을 -1로 설정
      current = -1
  } 
  
  // 마지막 슬라이드 이미지가 아니라면,
  // current 값에 1을 더함
  current++
  // 슬라이드 이미지 배열에서 index값이 current인 이미지를 보이는 상태로 설정 
  sliderImages[current].style.display = 'block'
  dots[current].style.background = '#ffffff'
}

// 수동 슬라이드를 위한 함수들
// 1. 왼쪽 화살표에 클릭 이벤트가 발생할 시 작동할 함수
const slideLeft = () => {
  // 모든 슬라이드 이미지 display를 none으로 리셋
  reset()
  // current(현재 보여지는 슬라이드 이미지)의 
  // 이전 슬라이드 이미지가 보이도록 스타일 변경
  sliderImages[current - 1].style.display = 'block';
  dots[current - 1].style.background = '#ffffff'
  // current값을 1만큼 뺌
  current--;
}

// 2. 오른쪽 화살표에 클릭 이벤트가 발생할 시 작동할 함수
const slideRight = () => {
  // 모든 슬라이드 이미지 display를 none으로 리셋
  reset()
  // current(현재 보여지는 슬라이드 이미지)의 
  // 다음 슬라이드 이미지가 보이도록 스타일 변경 
  sliderImages[current + 1].style.display = 'block';
  dots[current + 1].style.background = '#ffffff'
  // current값을 1만큼 더함
  current++;
}

// 오른쪽 화살표를 클릭할 시 작동하는 익명의 함수
arrowLeft.addEventListener('click', function() {
  // 만약 current값이 0이라면,
  // 즉 현재 보이는 슬라이드 이미지가 첫번째 순서라면,
  if(current === 0) {
      // current값을 슬라이드 이미지 배열의 길이로 변경
      current = sliderImages.length;
  }
  slideLeft()
})

// 왼쪽 화살표를 클릭할 시 작동하는 익명의 함수
arrowRight.addEventListener('click', function() {
  // 만약 current값이 슬라이드 이미지 배열 길이 - 1만큼의 값이라면,
  // 즉 현재 보이는 슬라이드 이미지가 마지막 순서라면,
  if(current === sliderImages.length - 1) {
      // current값을 -1로 설정
      current = -1;
  }
  slideRight()
})

// 첫번째 동그라미 클릭할 시 작동하는 익명의 함수
dot1.addEventListener("click", function(){
  reset()
  current = 0
  sliderImages[current].style.display = 'block';
  dots[current].style.background = '#ffffff'
})

// 두번째 동그라미 클릭할 시 작동하는 익명의 함수
dot2.addEventListener("click", function(){
  reset()
  current = 1
  sliderImages[current].style.display = 'block';
  dots[current].style.background = '#ffffff'
})

// 세번째 동그라미 클릭할 시 작동하는 익명의 함수
dot3.addEventListener("click", function(){
  reset()
  current = 2
  sliderImages[current].style.display = 'block';
  dots[current].style.background = '#ffffff'
})

// 네번째 동그라미 클릭할 시 작동하는 익명의 함수
dot4.addEventListener("click", function(){
  reset()
  current = 3
  sliderImages[current].style.display = 'block';
  dots[current].style.background = '#ffffff'
})

// 다섯번째 동그라미 클릭할 시 작동하는 익명의 함수
dot5.addEventListener("click", function(){
  reset()
  current = 4
  sliderImages[current].style.display = 'block';
  dots[current].style.background = '#ffffff'
})

// 여섯번째 동그라미 클릭할 시 작동하는 익명의 함수
dot6.addEventListener("click", function(){
  reset()
  current = 5
  sliderImages[current].style.display = 'block';
  dots[current].style.background = '#ffffff'
})





window.onload = function () {
  const mediaEl = document.getElementById("demo");

  window.addEventListener("resize", function () {
    window.innerWidth >= 960
      ? (mediaEl.innerHTML = "데스크탑")
      : window.innerWidth >= 768
      ? (mediaEl.innerHTML = "태블릿PC")
      : (mediaEl.innerHTML = "스마트폰");
  });
};

const $scrollToTop = document.querySelector(".scrollToTop");

$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
})


// 윈도우에 스크롤 이벤트가 발생하면,
// 스크롤 위치에 따라 scrollToTop 요소의 투명도 변경
window.addEventListener("scroll", function () {
  // 현재 스크롤 위치를 콘솔창에 출력해보세요
  //   console.log(window.scrollY);

  // 만약 스크롤 위치가 1400 이상이라면,
  window.scrollY >= 1400
    ? ($scrollToTop.style.opacity = 1) // scrollToTop 버튼이 보이게 합니다
    : ($scrollToTop.style.opacity = 0); // 아니라면 안보이게 합니다
});


var myImage = document.getElementById("mainImage");
	var imageArray = [ "../images/bg_img.jpg",
			"../images/mudo.jpg", "../images/slide3.jpg", "../images/slide4.jpg", "../images/slide5.jpg","../images/slide6 (2).jpg" ];
	var imageIndex = 0;

	function changeImage() {
		myImage.setAttribute("src", imageArray[imageIndex]);
		imageIndex++;
		if (imageIndex >= imageArray.length) {
			imageIndex = 0;
		}
	}
	setInterval(changeImage, 3000);