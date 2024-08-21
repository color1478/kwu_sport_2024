const departments = [
    {korName: "미디어커뮤니케이션학부", engName: "School of Media & Communication", score: 210},
    {korName: "전자통신공학과", engName: "Electronics and Communications Engineering", score: 230},
    {korName: "법학부", engName: "Law", score: 210},
    {korName: "환경공학과", engName: "Environmental Engineering", score: 200},
    {korName: "국어국문학과", engName: "Korean Language and Literature", score: 200},
    {korName: "화학과", engName: "Chemistry", score: 200},
    {korName: "소프트웨어학부", engName: "Software", score: -50},
    {korName: "반도체시스템공학부", engName: "Semiconductor System Engineering", score: 560},
    // 나머지 학과 데이터 추가
];

departments.sort((a, b) => b.score - a.score);


function displayRankings() {
    const rankContainer = document.getElementById('rankContainer');
    rankContainer.innerHTML = '';

    departments.forEach((department, index) => {
        let rankClass;
        switch (index) {
            case 0:
                rankClass = 'rank1'; // 1위 클래스
                break;
            case 1:
                rankClass = 'rank2'; // 2위 클래스
                break;
            case 2:
                rankClass = 'rank3'; // 3위 클래스
                break;
            default:
                rankClass = 'rankout'; // 4위 이하 클래스
                break;
        }

        const rankInfDiv = document.createElement('div');
        rankInfDiv.classList.add('rankinf', rankClass);

        rankInfDiv.innerHTML = `
            <div class="num-contain">
                <p class="${index < 3 ? 'topnum' : 'number'}">${index + 1}</p><p class="${index < 3 ? 'top_mod' : 'mod'}">위</p>
            </div>
            <div class="major ${index < 3 ? 'topmajor' : 'rankout'}">
                <p class="major_kor">${department.korName}</p>
                <p class="major_eng">${department.engName}</p>
            </div>
            <div class="score-contain">
                <p class="${index < 3 ? 'top_total' : 'total'}">총점</p><p class="${index < 3 ? 'topscore' : 'score'}">${department.score}</p>
            </div>
            <img src="../image/major/환경공학과-로고.png"> 
        `; //img 변경 해야함

        rankContainer.appendChild(rankInfDiv);
    });
}

window.onload = displayRankings;