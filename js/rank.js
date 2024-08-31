const departments = [
    {korName: "미디어커뮤니케이션학부", engName: "Media and Communication", score: 0},
    {korName: "국어국문학과", engName: "Korean Language and Literature", score: 0},
    {korName: "영어산업학과", engName: "English Language and Industry", score: 0},
    {korName: "동북아문화산업학부", engName: "Northeast Asia Cultural Industries", score: 0},
    {korName: "산업심리학과", engName: "Industrial Psychology", score: 0},
    {korName: "법학부", engName: "Law", score: 0},
    {korName: "행정학과", engName: "Public Administration", score: 0},
    {korName: "국제학부", engName: "International Studies", score: 0},
    {korName: "전자통신공학과", engName: "Electronics and Communications Engineering", score: 0},
    {korName: "전자공학과", engName: "Electronic Engineering", score: 0},
    {korName: "전기공학과", engName: "Electrical Engineering", score: 0},
    {korName: "전자재료공학과", engName: "Electronic Materials Engineering", score: 0},
    {korName: "전자융합공학과", engName: "Electronic Convergence Engineering", score: 0},
    {korName: "반도체시스템공학과", engName: "Semiconductor System Engineering", score: 0},
    {korName: "환경공학과", engName: "Environmental Engineering", score: 0},
    {korName: "건축공학과", engName: "Architectural Engineering", score: 0},
    {korName: "건축학과", engName: "Architecture", score: 0},
    {korName: "화학공학과", engName: "Chemical Engineering", score: 0},
    {korName: "화학과", engName: "Chemistry", score: 0},
    {korName: "수학과", engName: "Mathematics", score: 0},
    {korName: "스포츠융합과학과", engName: "Convergence Sports Science", score: 0},
    {korName: "전자바이오물리학과", engName: "Electrical and Biological Physics", score: 0},
    {korName: "소프트웨어학부", engName: "Software", score: 0},
    {korName: "컴퓨터정보공학부", engName: "Computer and Information Engineering", score: 0},
    {korName: "정보융합학부", engName: "Information Convergence", score: 0},
    {korName: "로봇학부", engName: "Robotics", score: 0},
    {korName: "경영학부", engName: "Business Administration", score: 0},
    {korName: "국제통상학부", engName: "International Trade", score: 0}

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
            <img src="../image/major/${department.korName}@4x.png"> 
        `; //img 변경 해야함

        rankContainer.appendChild(rankInfDiv);
    });
}

window.onload = displayRankings;