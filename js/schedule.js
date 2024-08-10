const date1 = document.getElementById('date1');
const date2 = document.getElementById('date2');
const date3 = document.getElementById('date3');
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
        date: "2024-08-03",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        date: "2024-08-10",
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
        ? `${date.getFullYear()}년 ${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 (${weekday})`
        : `${String(month).padStart(2, '0')}월 ${String(day).padStart(2, '0')}일 (${weekday})`;
}

function updateDisplayedDates() {
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    const today = new Date(currentDate);

    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);

    date1.textContent = formatDate(yesterday, false); // 연도 없이 표시
    date2.textContent = formatDate(today, true); // 연도 포함
    date3.textContent = formatDate(tomorrow, false); // 연도 없이 표시

    todayDateDisplay.textContent = formatDate(today, false); // 오늘 날짜에 연도 포함x
    const now = new Date();
    if (currentDate.getDate() === now.getDate() &&
        currentDate.getMonth() === now.getMonth() &&
        currentDate.getFullYear() === now.getFullYear()) {
        todayDateDisplay.style.color = 'blue';
        todayDateDisplay.textContent += ' 오늘';
    } else {
        todayDateDisplay.style.color = 'black';
    }
    const popup = document.getElementById('calendarPopup');
    popup.style.display = 'none';
    displayCurrentGame();
}

// 날짜 선택 버튼 클릭 시 알림창 표시


let currentSport = null; // 현재 선택된 스포츠
let currentTeam = null; // 현재 선택된 팀
let currentAffiliation = null; // 현재 선택된 소속

function filterBySport(sport) {
    currentSport = sport; // 현재 선택된 스포츠 저장
    const teamSelect = document.getElementById('team-select').value;
    const affiliationSelect = document.getElementById('affiliation-select').value;

    // 모든 이미지를 선택
    var allImages = document.querySelectorAll('.sche-nav-links img');

    // 모든 이미지를 기본 이미지로 설정
    allImages.forEach(function (img) {
        if (img.id === 'sport-image-전체') {
            img.src = '../image/전체-default픽토그램.png';
        } else if (img.id === 'sport-image-풋살') {
            img.src = '../image/풋살-default픽토그램.png';
        } else if (img.id === 'sport-image-농구') {
            img.src = '../image/농구-default픽토그램.png';
        } else if (img.id === 'sport-image-피구') {
            img.src = '../image/피구-default픽토그램.png';
        } else if (img.id === 'sport-image-볼링') {
            img.src = '../image/볼링-default픽토그램.png';
        } else if (img.id === 'sport-image-족구') {
            img.src = '../image/족구-default픽토그램.png';
        } else if (img.id === 'sport-image-탁구') {
            img.src = '../image/탁구-default픽토그램.png';
        } else if (img.id === 'sport-image-8자 줄넘기') {
            img.src = '../image/8자 줄넘기-default픽토그램.png';
        } else if (img.id === 'sport-image-LOL') {
            img.src = '../image/LOL-default픽토그램.png';
        } else if (img.id === 'sport-image-TFT') {
            img.src = '../image/TFT-default픽토그램.png';
        } else if (img.id === 'sport-image-FC 온라인') {
            img.src = '../image/FC 온라인-default픽토그램.png';
        }
    });
    if (sport === '')
        sport = '전체';
    // 선택된 스포츠의 활성화 이미지로 변경
    var image = document.querySelector(`img[id^='sport-image-${sport}']`);
    if (image) {
        image.src = `../image/${sport}픽토그램.png`; // 활성화 이미지 경로
    }
    // 현재 게임을 표시
    displayCurrentGame(currentSport, teamSelect, affiliationSelect);
}

function displayCurrentGame(sportFilter = currentSport, teamFilter = currentTeam, affiliationFilter = currentAffiliation) {
    const offset = new Date().getTimezoneOffset() * 60000;
    const date = new Date(currentDate - offset);
    const today = date.toISOString().slice(0, 10);

    let currentGames = games.filter(game => game.date === today);

    // 스포츠 필터링
    if (sportFilter) {
        currentGames = currentGames.filter(game => sportsAndLocations[game.sportId].sport === sportFilter);
    }

    // 소속 필터링
    if (affiliationFilter) {
        currentGames = currentGames.filter(game => {
            if (game.sportId == 9) {
                return game.team.some(team => team.affiliation == affiliationFilter);
            } else {
                return (game.home.affiliation == affiliationFilter || game.away.affiliation == affiliationFilter);
            }
        });
    }

    // 팀 필터링
    if (teamFilter) {
        currentGames = currentGames.filter(game => {
            if (game.sportId == 9) {
                return game.team.some(team => teams.team == teamFilter);
            } else {
                return (game.home.team == teamFilter || game.away.team == teamFilter);
            }
        });
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
                    <div style="width:100px;">
                        <p style="color: gray;">${sportInfo.sport}</p>
                    </div>

                    <p style= "margin-left: auto;">${highestRankTeam.team}</p>
                    <div class="teamDrop">
                        <div class="score">
                            <p style="font-size:10px; color: gray;">외 7개 학과<p/>
                        </div>
                        <div class="dropdown-content">
                            ${game.teams
                            .filter(t => t.team !== highestRankTeam.team) // 가장 높은 팀 제외
                            .map(t => `<a href="#" value="${t.team}">${t.team}</a>`)
                            .join('')}
                        </div>
                    </div>
                    <p style="color: gray;">${sportInfo.location}</p>
                    <p id="status" style="margin-left: 10px; color: red;">${game.rain ? '우천취소' : ''}</p>
                `;
            } else {
                // 다른 스포츠의 기본 형식
                gameItem.innerHTML = `
                    <div style="width:100px;">
                        <p style="width:100px;">${game.time}</p>
                    </div>
                    <div style="width:100px;">
                        <p style="color: gray;">${sportInfo.sport}</p>
                    </div>
                        <p style="width: 150px;text-align:right;white-space: nowrap;">${game.home.team}</p>
                        <img src="${game.home.image}" style="width: 30px; height: 30px; margin-right: 5px;border-radius: 50%;" onclick="filterByTeam('${game.home.team}', '${game.home.affiliation}')"/>
                    <div class="score">
                        <p style="${homeScoreStyle}">${homeScore}</p>
                        <p> - </p>
                        <p style="${awayScoreStyle}">${awayScore}</p>
                    </div>
                        <img src="${game.away.image}" style="width: 30px; height: 30px; margin-right: 5px;border-radius: 50%;" onclick="filterByTeam('${game.away.team}', '${game.away.affiliation}')"/>
                        <p style="width: 150px; text-align: left;white-space: nowrap;">${game.away.team}</p>

                    <p style="color: gray;">${sportInfo.location}</p>
                    <p id="status" style="margin-left: 10px; color: red;">${game.rain ? '우천취소' : ''}</p>
                `;
            }

            currentGameElement.appendChild(gameItem);
        });
    } else {
        currentGameElement.innerHTML = '<p>오늘 경기 정보가 없습니다.</p>';
    }
}


// 팀 선택 및 소속 선택 시 현재 선택된 소속과 팀 업데이트
document.getElementById('affiliation-select').addEventListener('change', function () {
    currentAffiliation = this.value;
    // 팀 선택 활성화 로직 추가
});

document.getElementById('team-select').addEventListener('change', function () {
    currentTeam = this.value;
});


affiliationSelect.addEventListener('change', function () {
    const selectedAffiliation = this.value;
    teamSelect.innerHTML = '<option value="">팀 선택</option>'; // 초기화
    if (selectedAffiliation) {
        const teams = teamsByAffiliation[selectedAffiliation];
        teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team;
            option.textContent = team;
            teamSelect.appendChild(option);
        });
        teamSelect.disabled = false; // 팀 선택 활성화
    } else {
        teamSelect.disabled = true; // 소속이 선택되지 않으면 팀 선택 비활성화
    }
    displayCurrentGame(); // 소속 선택 시 경기 정보 업데이트
});

prevButton.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDisplayedDates();
});

nextButton.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDisplayedDates();
});

teamSelect.addEventListener('change', () => {
    displayCurrentGame();
});
document.querySelectorAll('.sche-nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        // 모든 링크에서 active 클래스 제거
        document.querySelectorAll('.sche-nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        // 클릭한 링크에 active 클래스 추가
        this.classList.add('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const activeLink = document.querySelector('#초기'); // 원하는 a 태그 선택
    activeLink.classList.add('active'); // 선택한 a 태그에 active 클래스 추가
});

let currentYear;
let currentMonth;

document.getElementById('calendarButton').addEventListener('click', function () {
    const popup = document.getElementById('calendarPopup');
    if (popup.style.display === 'none') {
        popup.style.display = 'block';
        const rect = this.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY}px`;
        popup.style.left = `${rect.left}px`;

        const today = new Date();
        currentYear = today.getFullYear();
        currentMonth = today.getMonth();

        loadCalendar();
    } else {
        popup.style.display = 'none';
    }
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('calendarPopup').style.display = 'none';
});

document.getElementById('prevMonth').addEventListener('click', function () {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    loadCalendar();
});

document.getElementById('nextMonth').addEventListener('click', function () {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    loadCalendar();
});

function loadCalendar() {
    const calendarElement = document.getElementById('calendar');
    const YearElement = document.getElementById('currentYear');
    const monthElement = document.getElementById('currentMonth');
    calendarElement.innerHTML = '';

    YearElement.textContent = `${currentYear}`;
    monthElement.textContent = `${String(currentMonth + 1).padStart(2, '0')}`;

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    daysOfWeek.forEach(day => {
        const dayNameElement = document.createElement('div');
        dayNameElement.className = 'day-name';
        dayNameElement.textContent = day;
        calendarElement.appendChild(dayNameElement);
    });

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const startingDay = firstDay.getDay();
    for (let i = 0; i < startingDay; i++) {
        const emptyDay = document.createElement('div');
        calendarElement.appendChild(emptyDay);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayRow = document.createElement('div');
        dayRow.className = 'day-row';
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        dayElement.style.position = 'relative';
        const eventDot = document.createElement('div');
        eventDot.className = 'event-dot';
        eventDot.style.display = 'none'; // 기본적으로 점을 숨김
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const hasEvent = games.some(event =>
            event.date === formattedDate
        );

        if (hasEvent) {
            eventDot.style.display = 'block';
        }

        dayElement.addEventListener('mouseover', function () {
            this.style.backgroundColor = 'lightgray';
        });

        dayElement.addEventListener('mouseout', function () {
            if (!this.classList.contains('selected')) {
                this.style.backgroundColor = '';
            }
        });

        dayElement.addEventListener('click', function () {
            const allDays = document.querySelectorAll('.day');
            allDays.forEach(d => {
                d.classList.remove('selected');
                d.style.backgroundColor = '';
                d.style.color = 'black';
            });

            this.classList.add('selected');
            this.style.backgroundColor = 'orange';
            this.style.color = 'white';
            const select_date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(this.textContent).padStart(2, '0')}`;
            currentDate = new Date(select_date);
            updateDisplayedDates();
        });

        calendarElement.appendChild(dayElement);
        dayElement.appendChild(eventDot);
        dayRow.appendChild(dayElement);
        calendarElement.appendChild(dayRow);
    }
}

// 초기 날짜 표시
updateDisplayedDates();
filterBySport('');