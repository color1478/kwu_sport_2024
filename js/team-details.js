// Firebase 초기 설정
var config = {
    apiKey: "AIzaSyC86MO6Ar7wKb_5m-G3F64mtp7VosC27oQ",
    authDomain: "kwu-sport.firebaseapp.com",
    databaseURL: "https://kwu-sport-default-rtdb.firebaseio.com/",
    projectId: "kwu-sport",
    storageBucket: "kwu-sport.appspot.com",
    messagingSenderId: "719636962480",
    appId: "1:719636962480:web:aad441e94aa751cca6af75",
    measurementId: "G-Y2G8VHF652"
};
firebase.initializeApp(config);

// Counter 버튼 기능 구현
function initializeCounters() {
    var dCounters = document.querySelectorAll('.banner-button');

    dCounters.forEach(function(dCounter) {
        var el = dCounter.querySelector('button');
        var cId = dCounter.id;
        var dDatabase = firebase.database().ref('major').child(cId);


        dDatabase.on('value', function(snap) {
            var data = snap.val() || 0;
            dCounter.querySelector('span').innerHTML = data;
        });


        el.addEventListener('click', function() {
            dDatabase.transaction(function(dCount) {
                return (dCount || 0) + 1;
            });
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // 'banner-button' 클래스에서 id가 majorname인 요소 찾기
    var majorElement = document.querySelector('.banner-button');
    var majorName = majorElement.id;  // id가 '경영학부'와 같은 값

    // 이미지 요소 찾기 및 설정 업데이트
    var imgElement = document.querySelector('.banner-contain img');
    if (imgElement) {
        imgElement.src = `../../../image/major/${majorName}@4x.png`;
        imgElement.alt = `${majorName} Logo`;
    
        // 이미지 로드 실패 시 대체 이미지 설정
        imgElement.onerror = function() {
            imgElement.src = '../../../image/연촌 로고.png';
        };
    }

    // 학부 이름 및 정보 설정
    var bannerMessage = document.querySelector('.banner-message h2');
    if (bannerMessage) {
        bannerMessage.textContent = majorName;
    }
});
