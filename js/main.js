const calendarIcon = document.getElementById('icon-button');
const modal = document.getElementById('calendar-modal');
const closeModal = document.querySelector('.close');

const date = document.getElementById('date');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const selectButton = document.getElementById('selectDate');
const todayDateDisplay = document.getElementById('todayDate');
const affiliationSelect = document.getElementById('affiliation-select');
const teamSelect = document.getElementById('team-select');

const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = document.querySelector(".slider__img");
const sliderInner = document.querySelector(".slider__inner");
const sliderDot = document.querySelector(".slider__dot");

let currentDate = new Date();
let currentIndex = 0;
let sliderWidth = sliderImg.offsetWidth, // 이미지 가로 값
    dotIndex = "",
    interval = 2000, // setInterval 컨트롤 용 (3 초)
    sliderTimer = ""; // setInterval 컨트롤 용, 빈문자열 변수 선언해놓기
let sliderLength = document.querySelectorAll(".slider").length;
function init() {
    createDot(); // 닷 버튼 생성
    imgClone(); // 이미지 복사
}
init();

window.addEventListener("load", () => {
    // 창 실행되면 오토플레이 실행시키기 위함. init()에만 쓰면 무한실행
    autoPlay(); // 자동 플레이
});

// 닷메뉴 만들기
function createDot() {
    for (i = 1; i <= sliderLength; i++) {
        dotIndex += `<a href='#' class='dot'>이미지${i}</a>`; //이미지갯수만큼 닷 만들기
    }
    sliderDot.innerHTML += dotIndex; //만든 구문 태그형식으로 넣기
    sliderDot.firstElementChild.classList.add("active"); //첫번째이미지에 클래스 부여
}

function imgClone() {
    let sliderFirst = document.querySelectorAll(".slider")[0], // 첫번째 이미지
        sliderLast = document.querySelectorAll(".slider")[sliderLength - 1], // 마지막 이미지
        cloneFirst = sliderFirst.cloneNode(true), // 첫번째 이미지 복사
        cloneLast = sliderLast.cloneNode(true); // 마지막 이미지 복사
    sliderInner.appendChild(cloneFirst); //첫번째 이미지 복사해서 뒤에 넣기
    sliderInner.insertBefore(cloneLast, sliderFirst); //마지막이미지를 첫번째이미지 이전(앞)에 넣음
    sliderLength = document.querySelectorAll(".slider").length; //변경된 전체길이 값 다시 대입
}
// 이미지 총 길이 넣기
sliderInner.style.width = sliderWidth * sliderLength + "px"; // 가변되는 이미지 갯수때문에 자바스크립트로 해결
const slider = document.querySelectorAll(".slider"); // 슬라이드 컨트롤 때문에 이미지 갯수를 함수 실행 이후로 미룸

function autoPlay() {
    sliderTimer = setInterval(() => {
        // 셋인터벌 실행시킴
        let intervalNum = currentIndex + 1; // 복사된 값때문에 시작값은 1임,
        console.log(intervalNum);
        console.log(sliderLength);
        if (intervalNum == sliderLength - 1) intervalNum = 0; // 마지막 이미지에서 다음이미지 넘어가는 과정에 0으로 초기화
        gotoslider(intervalNum); // 슬라이더 이동함수에 변경된 인덱스 부여
    }, interval); // 언제? 3초마다 (ex_ 최초 로드시 0->1 되는 과정이 3초후에 일어남.)
}

function gotoslider(index) {
    if (index == 5 || index == 0) { //배너 개수 + 1
        sliderInner.classList.remove("transition");
    } else {
        sliderInner.classList.add("transition"); // 트랜지션효과부여하기위해서 사용
        let posInitial = sliderInner.offsetLeft; // -800px

        sliderInner.style.left = -sliderWidth * (index + 1) + "px";
    }
    sliderInner.style.left = -sliderWidth * (index + 1) + "px";

    currentIndex = index;
    console.log(index);
    // 닷 메뉴도 같이 이동
    document.querySelectorAll(".slider__dot .dot").forEach((el) => el.classList.remove("active"));
    if (index >= 4) { //배너 개수
        index = 0;
        document.querySelectorAll(".slider__dot .dot")[index].classList.add("active");
    } else {
        document.querySelectorAll(".slider__dot .dot")[index].classList.add("active");
    }
    clearInterval(sliderTimer);
    autoPlay();
}

// 닷 버튼 클릭했을 때 해당 닷버튼의 이미지로 이동
document.querySelectorAll(".slider__dot .dot").forEach((a, index) => {
    a.addEventListener("click", (e) => {
        document.querySelectorAll(".slider__dot .dot").forEach((b) => {
            b.classList.remove("active");
        });
        a.classList.add("active");
        gotoslider(index);
        // sliderInner.style.left = `${-((index + 1) * sliderWidth)}px`;
        // sliderInner.classList.add("transition")
        // currentIndex = index;
    });
});


function formatDate(date, showYear = true) {
    const options = { month: 'numeric', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('ko-KR', options);
    const [month, day] = formattedDate.split('.').map(item => item.trim());
    const weekday = date.toLocaleDateString('ko-KR', { weekday: 'short' });

    return showYear
        ? `${date.getFullYear()}년 ${month}월 ${day}일 (${weekday})`
        : `${month}월 ${day}일 (${weekday})`;
}

function updateDisplayedDates() {

    const today = new Date(currentDate);

    date.textContent = formatDate(today, true); // 연도 포함

    console.log(today);
    console.log(currentDate);
    displayCurrentGame();
}
let currentSport = null; // 현재 선택된 스포츠
function filterBySport(sport) {
    currentSport = sport; // 현재 선택된 스포츠 저장

    // 모든 이미지를 선택
    var allImages = document.querySelectorAll('.sche-nav-links img');

    // 모든 이미지를 기본 이미지로 설정
    allImages.forEach(function (img) {
        if (img.id === 'sport-image-전체') {
            img.src = './image/전체-default픽토그램.png';
        } else if (img.id === 'sport-image-풋살') {
            img.src = './image/풋살-default픽토그램.png';
        } else if (img.id === 'sport-image-농구') {
            img.src = './image/농구-default픽토그램.png';
        } else if (img.id === 'sport-image-피구') {
            img.src = './image/피구-default픽토그램.png';
        } else if (img.id === 'sport-image-볼링') {
            img.src = './image/볼링-default픽토그램.png';
        } else if (img.id === 'sport-image-족구') {
            img.src = './image/족구-default픽토그램.png';
        } else if (img.id === 'sport-image-탁구') {
            img.src = './image/탁구-default픽토그램.png';
        } else if (img.id === 'sport-image-8자 줄넘기') {
            img.src = './image/8자 줄넘기-default픽토그램.png';
        } else if (img.id === 'sport-image-LOL') {
            img.src = './image/LOL-default픽토그램.png';
        } else if (img.id === 'sport-image-TFT') {
            img.src = './image/TFT-default픽토그램.png';
        } else if (img.id === 'sport-image-FC 온라인') {
            img.src = './image/FC 온라인-default픽토그램.png';
        }
    });
    if(sport === '')
        sport = '전체';
    // 선택된 스포츠의 활성화 이미지로 변경
    var image = document.querySelector(`img[id^='sport-image-${sport}']`);
    if (image) {
        image.src = `./image/${sport}픽토그램.png`; // 활성화 이미지 경로
    }
    // 현재 게임을 표시
    displayCurrentGame(currentSport);
}
function displayCurrentGame(sportFilter = currentSport) {
    const offset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(currentDate - offset);
    const today = date.toISOString().slice(0, 10);

    let currentGames = games.filter(game => game.date === today);

    // 스포츠 필터링
    if (sportFilter) {
        currentGames = currentGames.filter(game => sportsAndLocations[game.sportId].sport === sportFilter);
    }

    const currentGameElement = document.getElementById('current-game');
    currentGameElement.innerHTML = '';

    if (currentGames.length > 0) {
        currentGames.forEach(game => {
            const sportInfo = sportsAndLocations[game.sportId];
            const gameItem = document.createElement('div');
            gameItem.className = 'game-item';

            // 점수 비교
            const homeScore = game.home_score;
            const awayScore = game.away_score;

            // 이긴 쪽의 점수에 파란색 스타일 적용
            const homeScoreStyle = homeScore > awayScore ? 'color: blue;' : 'color: gray;';
            const awayScoreStyle = awayScore > homeScore ? 'color: blue;' : 'color: gray;';

            // 특정 스포츠 형식 적용
            if (sportInfo.sport === 'TFT') {
                let highestRankTeam = game.teams[0]; // 초기값 설정

                // rank가 가장 높은 팀 찾기
                game.teams.forEach(t => {
                    if (t.rank < highestRankTeam.rank) {
                        highestRankTeam = t; // rank가 더 낮은 팀으로 업데이트
                    }
                });

                gameItem.innerHTML = `
                    <div style="width:100px;">
                        <p>${game.time}</p>
                    </div>
                    <div style="width:100px;text-align: center;">
                        <p style="color: gray;">${sportInfo.sport}</p>
                    </div>

                    <p style= "width:25vw;text-align:right;">${highestRankTeam.team}</p>
                    <div class="teamDrop">
                        <div style="width:21vw;">
                            <p style="font-size:10px; color: gray;vertical-align:bottom;">외 7개 학과<p/>
                        </div>
                        <div class="dropdown-content">
                            ${game.teams
                            .filter(t => t.team !== highestRankTeam.team) // 가장 높은 팀 제외
                            .map(t => `<p value="${t.team}">${t.team}</p>`)
                            .join('')}
                        </div>
                    </div>
                    <div style="width:10vw;text-align: center;">
                        <p style="color: gray;">${sportInfo.location}</p>
                    </div>
                    <p id="status" style="margin-left: 10px; color: red;">${game.rain ? '우천취소' : ''}</p>
                `;
            } else {
                // 다른 스포츠의 기본 형식
                gameItem.innerHTML = `
                    <div style="width:100px;">
                        <p>${game.time}</p>
                    </div>
                    <div style="width:100px;text-align: center;">
                        <p style="color: gray;">${sportInfo.sport}</p>
                    </div>
                    <div style="text-align:right;width:15vw;">
                        <p style="white-space: nowrap;">${game.home.team}</p>
                    </div>
                   <img src="./image/major/${game.home.team}@4x.png" style="width: 3vw; height: 3vw;border-radius: 50%;" onclick="filterByTeam('${game.home.team}', '${game.home.affiliation}')"/>
                    <div class="score">
                        <p style="${homeScoreStyle}">${homeScore}</p>
                        <p> - </p>
                        <p style="${awayScoreStyle}">${awayScore}</p>
                    </div>
                    <img src="./image/major/${game.away.team}@4x.png" style="width: 3vw; height: 3vw; border-radius: 50%;" onclick="filterByTeam('${game.away.team}', '${game.away.affiliation}')"/>
                    <div style="text-align: left;width:15vw;">
                        <p style="white-space: nowrap;">${game.away.team}</p>
                    </div>
                    <div style="width:10vw;text-align: center;">
                        <p style="color: gray;">${sportInfo.location}</p>
                    </div>
                    <p id="status" style="margin-left: 10px; color: red;">${game.rain ? '우천취소' : ''}</p>
                `;
            }

            currentGameElement.appendChild(gameItem);
        });
    } else {
        currentGameElement.innerHTML = '<p>오늘 경기 정보가 없습니다.</p>';
    }

    console.log(today);
    console.log(currentGames);
}
function preventClick(e){
	e.preventDefault()
}

document.querySelectorAll('.sche-nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        // 모든 링크에서 active 클래스 제거
        document.querySelectorAll('.sche-nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        // 클릭한 링크에 active 클래스 추가
        this.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const activeLink = document.querySelector('#초기'); // 원하는 a 태그 선택
    activeLink.classList.add('active'); // 선택한 a 태그에 active 클래스 추가
});
// 초기 날짜 표시
updateDisplayedDates();
filterBySport('');
