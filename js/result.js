document.getElementById("result_sports-selection").addEventListener("click", function () {
    // 경로 부분만 가져오기
    const path = window.location.pathname;
    // 마지막 부분 추출
    const lastSegment = path.substring(path.lastIndexOf('/') + 1);
    if (lastSegment == 'results.html')
        window.location.href = "./sports_result/풋살.html";
});

document.getElementById("rank-selection").addEventListener("click", function () {
    // 경로 부분만 가져오기
    const path = window.location.pathname;
    // 마지막 부분 추출
    const lastSegment = path.substring(path.lastIndexOf('/') + 1);
    if (lastSegment != 'results.html')
        window.location.href = "../results.html";
});
document.addEventListener("DOMContentLoaded", function () {
    const activeLink = document.querySelector('#초기'); // 원하는 a 태그 선택
    activeLink.classList.add('active'); // 선택한 a 태그에 active 클래스 추가
    const sportValue = activeLink.getAttribute('data-sport');
    filterBySport(sportValue);
    // 한글 인코딩
    const encodedSegment = encodeURIComponent(lastSegment);

    // 결과 출력
    console.log(encodedSegment);

});
function filterBySport(sport) {
    currentSport = sport; // 현재 선택된 스포츠 저장

    // 모든 이미지를 선택
    var allImages = document.querySelectorAll('.sche-nav-links img');

    // 모든 이미지를 기본 이미지로 설정
    allImages.forEach(function (img) {
        if (img.id === 'sport-image-전체') {
            img.src = '../../image/전체-default픽토그램.png';
        } else if (img.id === 'sport-image-풋살') {
            img.src = '../../image/풋살-default픽토그램.png';
        } else if (img.id === 'sport-image-농구') {
            img.src = '../../image/농구-default픽토그램.png';
        } else if (img.id === 'sport-image-피구') {
            img.src = '../../image/피구-default픽토그램.png';
        } else if (img.id === 'sport-image-볼링') {
            img.src = '../../image/볼링-default픽토그램.png';
        } else if (img.id === 'sport-image-족구') {
            img.src = '../../image/족구-default픽토그램.png';
        } else if (img.id === 'sport-image-탁구') {
            img.src = '../../image/탁구-default픽토그램.png';
        } else if (img.id === 'sport-image-8자 줄넘기') {
            img.src = '../../image/8자 줄넘기-default픽토그램.png';
        } else if (img.id === 'sport-image-LOL') {
            img.src = '../../image/LOL-default픽토그램.png';
        } else if (img.id === 'sport-image-TFT') {
            img.src = '../../image/TFT-default픽토그램.png';
        } else if (img.id === 'sport-image-FC 온라인') {
            img.src = '../../image/FC 온라인-default픽토그램.png';
        }
    });
    if (sport === '')
        sport = '전체';
    // 선택된 스포츠의 활성화 이미지로 변경
    var image = document.querySelector(`img[id^='sport-image-${sport}']`);
    if (image) {
        image.src = `../../image/${sport}픽토그램.png`; // 활성화 이미지 경로
    }
}