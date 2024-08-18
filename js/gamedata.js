var teamsByAffiliation = {
    "전자정보공과대학": ["전자공학과", "전자통신공학과", "전자융합공학과", "전자재료공학과", "전기공학과"],
    "인공지능융합대학": ["소프트웨어학부", "컴퓨터정보공학부", "정보융합학부", "로봇학부"],
    "공과대학": ["화학공학과", "환경공학과", "건축공학과", "건축학과"],
    "자연과학대학": ["수학과", "화학과", "전자바이오물리학과", "스포츠융합과학과"],
    "경영대학": ["경영학부", "국제통상학부"],
    "인문사회과학대학": ["국어국문학과", "영어산업학과", "산업심리학과", "미디어커뮤니케이션학부", "동북아문화산업학부"],
    "정책법학대학": ["행정학과", "법학부", "국제학부"]
};
var sportsAndLocations = {
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
var games = [
    {
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
        date: "2024-08-18",
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
