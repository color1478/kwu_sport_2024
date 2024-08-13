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
const teamsByAffiliation = {
    "전자정보공과대학": ["전자공학과", "전자통신공학과", "전자융합공학과", "전자재료공학과", "전기공학과"],
    "인공지능융합대학": ["소프트웨어학부", "컴퓨터정보공학부", "정보융합학부", "로봇학부"],
    "공과대학": ["화학공학과", "환경공학과", "건축공학과", "건축학과"],
    "자연과학대학": ["수학과", "화학과", "전자바이오물리학과", "스포츠융합과학과"],
    "경영대학": ["경영학부", "국제통상학부"],
    "인문사회과학대학": ["국어국문학과", "영어산업학과", "산업심리학과", "미디어커뮤니케이션학부", "동북아문화산업학부"],
    "정책법학대학": ["행정학과", "법학부", "국제학부"]
};
const sportsAndLocations = {
    1: { sport: '풋살', location: '풋살장' },
    2: { sport: '농구', location: '농구장' },
    3: { sport: '피구', location: '노천극장' },
    4: { sport: '볼링', location: '볼링장' },
    5: { sport: '족구', location: '노천극장' },
    6: { sport: '탁구', location: '탁구장' },
    7: { sport: '8자 줄넘기', location: '광운스퀘어' },
    8: { sport: 'LOL', location: '피시방' },
    9: { sport: 'TFT', location: '피시방' },
    10: { sport: 'FC 온라인', location: '강의실' },
    // 필요한 종목과 장소 추가
};
const games = [
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부"
        },
        home_score: 2,
        away_score: 1,
        result: "홈팀 승",
        rain: true
    },
    {
        date: "2024-08-03",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "공과대학",
            team: "화학공학과"
        },
        away: {
            affiliation: "자연과학대학",
            team: "화학과"
        },
        home_score: 0,
        away_score: 3,
        result: "원정팀 승",
        isActive: false
    },
    {
        date: "2024-08-03",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "경영대학",
            team: "경영학부"
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과"
        },
        home_score: 1,
        away_score: 2,
        result: "원정팀 승",
        rain: true
    },
    {
        date: "2024-08-04",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "정책법학대학",
            team: "행정학과"
        },
        away: {
            affiliation: "자연과학대학",
            team: "수학과"
        },
        home_score: 2,
        away_score: 2,
        result: "무승부",
        rain: false
    },
    {
        date: "2024-08-04",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부"
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자공학과"
        },
        home_score: 3,
        away_score: 1,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-05",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "자연과학대학",
            team: "물리학과"
        },
        away: {
            affiliation: "공과대학",
            team: "기계공학과"
        },
        home_score: 1,
        away_score: 4,
        result: "원정팀 승",
        rain: false
    },
    {
        date: "2024-08-05",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "경영대학",
            team: "회계학과"
        },
        away: {
            affiliation: "정책법학대학",
            team: "법학과"
        },
        home_score: 0,
        away_score: 0,
        result: "무승부",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "인문사회과학대학",
            team: "사회학과"
        },
        away: {
            affiliation: "자연과학대학",
            team: "생물학과"
        },
        home_score: 2,
        away_score: 3,
        result: "원정팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 3,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 4,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 5,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 6,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 7,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 8,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 9,
        teams: [
            { affiliation: "인공지능융합대학", team: "소프트웨어학부", rank: 1 },
            { affiliation: "인문사회과학대학", team: "미디어커뮤니케이션학부", rank: 2 },
            { affiliation: "팀C 소속", team: "팀C", rank: 3 },
            { affiliation: "팀D 소속", team: "팀D", rank: 4 },
            { affiliation: "팀E 소속", team: "팀E", rank: 5 },
            { affiliation: "팀F 소속", team: "팀F", rank: 6 },
            { affiliation: "팀G 소속", team: "팀G", rank: 7 },
            { affiliation: "팀H 소속", team: "팀H", rank: 8 }
        ],
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 10,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    },
    {
        date: "2024-08-13",
        time: "10:00",
        sportId: 2,
        home: {
            affiliation: "공과대학",
            team: "미디어커뮤니케이션학부"
        },
        away: {
            affiliation: "경영대학",
            team: "마케팅학과"
        },
        home_score: 3,
        away_score: 2,
        result: "홈팀 승",
        rain: false
    }
];


let currentDate = new Date();

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
                    <img src="${game.home.image}" style="width: 3vw; height: 3vw;border-radius: 50%;" onclick="filterByTeam('${game.home.team}', '${game.home.affiliation}')"/>
                    <div class="score">
                        <p style="${homeScoreStyle}">${homeScore}</p>
                        <p> - </p>
                        <p style="${awayScoreStyle}">${awayScore}</p>
                    </div>
                    <img src="${game.away.image}" style="width: 3vw; height: 3vw; border-radius: 50%;" onclick="filterByTeam('${game.away.team}', '${game.away.affiliation}')"/>
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