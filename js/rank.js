const departments = [
  {korName: "미디어커뮤니케이션학부", engName: "Media and Communication", score: "-"},
  {korName: "국어국문학과", engName: "Korean Language and Literature", score: "-"},
  {korName: "영어산업학과", engName: "English Language and Industry", score: "-"},
  {korName: "동북아문화산업학부", engName: "Northeast Asia Cultural Industries", score: "-"},
  {korName: "산업심리학과", engName: "Industrial Psychology", score: "-"},
  {korName: "법학부", engName: "Law", score: "-"},
  {korName: "행정학과", engName: "Public Administration", score: "10"},
  {korName: "국제학부", engName: "International Studies", score: "-"},
  {korName: "전자통신공학과", engName: "Electronics and Communications Engineering", score: "-"},
  {korName: "전자공학과", engName: "Electronic Engineering", score: "-"},
  {korName: "전기공학과", engName: "Electrical Engineering", score: "-"},
  {korName: "전자재료공학과", engName: "Electronic Materials Engineering", score: "-"},
  {korName: "전자융합공학과", engName: "Electronic Convergence Engineering", score: "-"},
  {korName: "반도체시스템공학과", engName: "Semiconductor System Engineering", score: "-"},
  {korName: "환경공학과", engName: "Environmental Engineering", score: "20"},
  {korName: "건축공학과", engName: "Architectural Engineering", score: "-"},
  {korName: "건축학과", engName: "Architecture", score: "-"},
  {korName: "화학공학과", engName: "Chemical Engineering", score: "-"},
  {korName: "화학과", engName: "Chemistry", score: "-"},
  {korName: "수학과", engName: "Mathematics", score: "-"},
  {korName: "스포츠융합과학과", engName: "Convergence Sports Science", score: "-"},
  {korName: "전자바이오물리학과", engName: "Electrical and Biological Physics", score: "-"},
  {korName: "소프트웨어학부", engName: "Software", score: "-"},
  {korName: "컴퓨터정보공학부", engName: "Computer and Information Engineering", score: "-"},
  {korName: "정보융합학부", engName: "Information Convergence", score: "-"},
  {korName: "로봇학부", engName: "Robotics", score: "-"},
  {korName: "경영학부", engName: "Business Administration", score: "-"},
  {korName: "국제통상학부", engName: "International Trade", score: "-"}
];

// 점수를 숫자로 변환하여 내림차순 정렬
departments.sort((a, b) => {
  // 점수가 "-"인 경우는 비교에서 제외하고 뒤로 보내기
  const scoreA = a.score === "-" ? -Infinity : parseInt(a.score);
  const scoreB = b.score === "-" ? -Infinity : parseInt(b.score);
  return scoreB - scoreA; // 내림차순 정렬
});

function displayRankings() {
  const rankContainer = document.getElementById('rankContainer');
  rankContainer.innerHTML = '';

  let currentRank = 1;
  let previousScore = null;
  let sameRankCount = 0;

  departments.forEach((department, index) => {
      // 점수가 "-"인 경우 rankout 클래스를 적용하고 순위를 매기지 않음
      if (department.score === "-") {
          rankClass = 'rankout';
      } else {
          // 동일한 점수일 경우 동일 순위 적용
          if (previousScore === department.score) {
              sameRankCount++;
          } else {
              currentRank += sameRankCount;
              sameRankCount = 1;  // 동일한 점수가 아니면 다음 학과가 첫 번째로 동일한 순위를 가진 것이므로 1로 설정
          }

          previousScore = department.score;

          switch (currentRank) {
              case 1:
                  rankClass = 'rank1'; // 1위 클래스
                  break;
              case 2:
                  rankClass = 'rank2'; // 2위 클래스
                  break;
              case 3:
                  rankClass = 'rank3'; // 3위 클래스
                  break;
              default:
                  rankClass = 'rankout'; // 4위 이하 클래스
                  break;
          }
      }

      const rankInfDiv = document.createElement('div');
      rankInfDiv.classList.add('rankinf', rankClass);

      rankInfDiv.innerHTML = `
          <div class="num-contain">
              <p class="${rankClass !== 'rankout' && currentRank <= 3 ? 'topnum' : 'number'}">${rankClass === 'rankout' ? '-' : currentRank}</p><p class="${rankClass !== 'rankout' && currentRank <= 3 ? 'top_mod' : 'mod'}">위</p>
          </div>
          <div class="major ${rankClass !== 'rankout' && currentRank <= 3 ? 'topmajor' : 'rankout'}">
              <p class="major_kor">${department.korName}</p>
              <p class="major_eng">${department.engName}</p>
          </div>
          <div class="score-contain">
              <p class="${rankClass !== 'rankout' && currentRank <= 3 ? 'top_total' : 'total'}">총점</p><p class="${rankClass !== 'rankout' && currentRank <= 3 ? 'topscore' : 'score'}">${department.score}</p>
          </div>
          <img src="../image/major/${department.korName}@4x.png"> 
      `;

      rankContainer.appendChild(rankInfDiv);
  });
}

window.onload = displayRankings;
