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
    { // 3교시 경기
        date: "2024-09-09",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        home_score: '1',
        away_score: '11',
        result: "-",
        rain: false
    },
    { // 4교시 경기
        date: "2024-09-09",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: false
        },
        home_score: '10',
        away_score: '1',
        result: "-",
        rain: false
    },
    { // 5교시 경기
        date: "2024-09-09",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        home_score: '0',
        away_score: '5',
        result: "-",
        rain: false
    },
    { // 6교시 경기
        date: "2024-09-09",
        time: "6교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: false
        },
        away: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: false
        },
        home_score: '4',
        away_score: '1',
        result: "-",
        rain: false
    },





    //          풋살            //
    //날짜 기권패 시간 수정해야됨
    {
        date: "2024-09-10",
        time: "1교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: false
        },
        home_score: '2',
        away_score: '5',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "2교시",
        sportId: 1,
        home: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        home_score: 13,
        away_score: 4,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: false
        },
        home_score: 6,
        away_score: 1,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: false
        },
        home_score: 9,
        away_score: 1,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        home_score: 6,
        away_score: 0,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "6교시",
        sportId: 1,
        home: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: true
        },
        away: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "1교시",
        sportId: 1,
        home: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        home_score: 0,
        away_score: 1,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "2교시",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        home_score: 3,
        away_score: 6,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        home_score: 5,
        away_score: 4,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        home_score: 3,
        away_score: 2,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: false
        },
        home_score: 1,
        away_score: 10,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "6교시",
        sportId: 1,
        home: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        home_score: 2,
        away_score: 4,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "1교시",
        sportId: 1,
        home: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "2교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        home_score: 11,
        away_score: 0,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: true
    },
    {
        date: "2024-09-13",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: false
        },
        home_score: 10,
        away_score: 4,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: true
    },
    {
        date: "2024-09-13",
        time: "6교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: true
    },
    {
        date: "2024-09-13",
        time: "7교시",
        sportId: 1,
        home: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        away: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "6교시",
        sportId: 1,
        home: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "1교시",
        sportId: 1,
        home: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "2교시",
        sportId: 1,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        away: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "6교시",
        sportId: 1,
        home: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "7교시",
        sportId: 1,
        home: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "6교시",
        sportId: 1,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-24",
        time: "2교시",
        sportId: 1,
        home: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "3교시",
        sportId: 1,
        home: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "4교시",
        sportId: 1,
        home: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "5교시",
        sportId: 1,
        home: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },









    //-----------------------------------//    
    //          농구            //
    {
        date: "2024-09-13",
        time: "1교시",
        sportId: 2,
        home: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: true
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "2교시",
        sportId: 2,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: true
    },
    {
        date: "2024-09-13",
        time: "3교시",
        sportId: 2,
        home: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: true
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "4교시",
        sportId: 2,
        home: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: true
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "5교시",
        sportId: 2,
        home: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: true
    },
    {
        date: "2024-09-13",
        time: "6교시",
        sportId: 2,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: true
    },
    {
        date: "2024-09-13",
        time: "7교시",
        sportId: 2,
        home: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: true
    },
    {
        date: "2024-09-19",
        time: "1교시",
        sportId: 2,
        home: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "2교시",
        sportId: 2,
        home: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "3교시",
        sportId: 2,
        home: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: true
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "4교시",
        sportId: 2,
        home: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "5교시",
        sportId: 2,
        home: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "6교시",
        sportId: 2,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: false
        },
        away: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "7교시",
        sportId: 2,
        home: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },









    //----------------------------------//
    //          피구            //
    {
        date: "2024-09-09",
        time: "1교시",
        sportId: 3,
        home: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: true
        },
        home_score: '3',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-09",
        time: "2교시",
        sportId: 3,
        home: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: true
        },
        away: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-09",
        time: "3교시",
        sportId: 3,
        home: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: true
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-09",
        time: "4교시",
        sportId: 3,
        home: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: true
        },
        home_score: '3',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-09",
        time: "7교시",
        sportId: 3,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: true
        },
        away: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        home_score: '-',
        away_score: '3',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "1교시",
        sportId: 3,
        home: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: true
        },
        away: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "2교시",
        sportId: 3,
        home: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: true
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "3교시",
        sportId: 3,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: true
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        home_score: '-',
        away_score: '3',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "4교시",
        sportId: 3,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: true
        },
        away: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "5교시",
        sportId: 3,
        home: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "6교시",
        sportId: 3,
        home: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "7교시",
        sportId: 3,
        home: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        away: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "4교시",
        sportId: 3,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: true
        },
        away: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "7교시",
        sportId: 3,
        home: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },













    //-----------------------------------//
    //          볼링            //
    //-----------------------------------//
    { // 4교시 경기
        date: "2024-09-09",
        time: "3교시",
        sportId: 4,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자바이오물리학과",
            abstention: true
        },
        away: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '1',
        result: "-",
        rain: false
    },
    { // 4교시 경기
        date: "2024-09-09",
        time: "4교시",
        sportId: 4,
        home: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: false
        },
        away: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: false
        },
        home_score: '526',
        away_score: '244',
        result: "-",
        rain: false
    },
    { // 5교시 경기
        date: "2024-09-09",
        time: "5교시",
        sportId: 4,
        home: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: false
        },
        home_score: '475',
        away_score: '606',
        result: "-",
        rain: false
    },
    { // 6교시 경기
        date: "2024-09-09",
        time: "6교시",
        sportId: 4,
        home: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        home_score: '506',
        away_score: '558',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "3교시",
        sportId: 4,
        home: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        home_score: 667,
        away_score: 302,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "4교시",
        sportId: 4,
        home: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "5교시",
        sportId: 4,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        home_score: 379,
        away_score: 233,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "6교시",
        sportId: 4,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: true
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "3교시",
        sportId: 4,
        home: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        home_score: 297,
        away_score: 336,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "4교시",
        sportId: 4,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: true
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "5교시",
        sportId: 4,
        home: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: false
        },
        home_score: 281,
        away_score: 374,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "6교시",
        sportId: 4,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        home_score: 335,
        away_score: 434,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "3교시",
        sportId: 4,
        home: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: true
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "4교시",
        sportId: 4,
        home: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },


















    //          족구            //
    {
        date: "2024-09-10",
        time: "1교시",
        sportId: 5,
        home: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: true
        },
        away: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "2교시",
        sportId: 5,
        home: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: true
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "3교시",
        sportId: 5,
        home: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        home_score: 2,
        away_score: 1,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "4교시",
        sportId: 5,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        home_score: 1,
        away_score: 2,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "5교시",
        sportId: 5,
        home: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: true
        },
        away: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "6교시",
        sportId: 5,
        home: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: true
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "7교시",
        sportId: 5,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "1교시",
        sportId: 5,
        home: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: true
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "2교시",
        sportId: 5,
        home: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: true
        },
        away: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "3교시",
        sportId: 5,
        home: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "4교시",
        sportId: 5,
        home: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        home_score: 0,
        away_score: 2,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "5교시",
        sportId: 5,
        home: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "6교시",
        sportId: 5,
        home: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: true
        },
        away: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "7교시",
        sportId: 5,
        home: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: true
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },










    //----------------------------------//
    //          탁구            //
    {
        date: "2024-09-09",
        time: "2교시",
        sportId: 6,
        home: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: true
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        home_score: '-',
        away_score: '3',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-10",
        time: "1교시",
        sportId: 6,
        home: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        home_score: '0',
        away_score: '2',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "2교시",
        sportId: 6,
        home: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: true
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "1교시",
        sportId: 6,
        home: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "2교시",
        sportId: 6,
        home: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "2교시",
        sportId: 6,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: true
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-23",
        time: "2교시",
        sportId: 6,
        home: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: true
        },
        away: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-25",
        time: "1교시",
        sportId: 6,
        home: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-25",
        time: "2교시",
        sportId: 6,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-25",
        time: "3교시",
        sportId: 6,
        home: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: true
        },
        away: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-25",
        time: "4교시",
        sportId: 6,
        home: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-25",
        time: "5교시",
        sportId: 6,
        home: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-25",
        time: "6교시",
        sportId: 6,
        home: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: true
        },
        away: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-25",
        time: "7교시",
        sportId: 6,
        home: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: true
        },
        away: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },












    //--------------------------------------//
    //          롤          //
    {
        date: "2024-09-11",
        time: "1교시",
        sportId: 8,
        home: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: true
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-12",
        time: "5교시",
        sportId: 8,
        home: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: false
        },
        home_score: 0,
        away_score: 1,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "3교시",
        sportId: 8,
        home: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "7교시",
        sportId: 8,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "1교시",
        sportId: 8,
        home: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        home_score: 1,
        away_score: 0,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "2교시",
        sportId: 8,
        home: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: false
        },
        away: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: false
        },
        home_score: 0,
        away_score: 1,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "3교시",
        sportId: 8,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        home_score: 1,
        away_score: 0,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "4교시",
        sportId: 8,
        home: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "1교시",
        sportId: 8,
        home: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: true
        },
        away: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "2교시",
        sportId: 8,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: true
        },
        away: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "3교시",
        sportId: 8,
        home: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        away: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "1교시",
        sportId: 8,
        home: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "2교시",
        sportId: 8,
        home: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: true
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-20",
        time: "3교시",
        sportId: 8,
        home: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: false
        },
        away: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },













    //--------------------------------//
    //          FC온라인            //
    {
        date: "2024-09-11",
        time: "5교시",
        sportId: 10,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자통신공학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "컴퓨터정보공학부",
            abstention: false
        },
        home_score: 0,
        away_score: 1,
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "6교시",
        sportId: 10,
        home: {
            affiliation: "인문사회과학대학",
            team: "국어국문학과",
            abstention: false
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "소프트웨어학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-11",
        time: "7교시",
        sportId: 10,
        home: {
            affiliation: "인문사회과학대학",
            team: "미디어커뮤니케이션학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "반도체시스템공학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "5교시",
        sportId: 10,
        home: {
            affiliation: "자연과학대학",
            team: "수학과",
            abstention: true
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자융합공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "6교시",
        sportId: 10,
        home: {
            affiliation: "인문사회과학대학",
            team: "영어산업학과",
            abstention: true
        },
        away: {
            affiliation: "자연과학대학",
            team: "스포츠융합과학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-13",
        time: "7교시",
        sportId: 10,
        home: {
            affiliation: "경영대학",
            team: "국제통상학부",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전자공학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "4교시",
        sportId: 10,
        home: {
            affiliation: "전자정보공과대학",
            team: "전자재료공학과",
            abstention: false
        },
        away: {
            affiliation: "전자정보공과대학",
            team: "전기공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "5교시",
        sportId: 10,
        home: {
            affiliation: "정책법학대학",
            team: "행정학과",
            abstention: true
        },
        away: {
            affiliation: "인공지능융합대학",
            team: "로봇학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "6교시",
        sportId: 10,
        home: {
            affiliation: "공과대학",
            team: "화학공학과",
            abstention: true
        },
        away: {
            affiliation: "자연과학대학",
            team: "전자바이오물리학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-19",
        time: "7교시",
        sportId: 10,
        home: {
            affiliation: "자연과학대학",
            team: "화학과",
            abstention: true
        },
        away: {
            affiliation: "공과대학",
            team: "환경공학과",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "4교시",
        sportId: 10,
        home: {
            affiliation: "인공지능융합대학",
            team: "정보융합학부",
            abstention: true
        },
        away: {
            affiliation: "경영대학",
            team: "경영학부",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "5교시",
        sportId: 10,
        home: {
            affiliation: "인문사회과학대학",
            team: "동북아문화산업학부",
            abstention: false
        },
        away: {
            affiliation: "인문사회과학대학",
            team: "산업심리학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "6교시",
        sportId: 10,
        home: {
            affiliation: "공과대학",
            team: "건축학과",
            abstention: true
        },
        away: {
            affiliation: "공과대학",
            team: "건축공학과",
            abstention: true
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },
    {
        date: "2024-09-20",
        time: "7교시",
        sportId: 10,
        home: {
            affiliation: "정책법학대학",
            team: "국제학부",
            abstention: true
        },
        away: {
            affiliation: "정책법학대학",
            team: "법학부",
            abstention: false
        },
        home_score: '-',
        away_score: '-',
        result: "-",
        rain: false
    },










    




    { //tft
        date: "2024-09-07",
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
        rain: true
    },

];
