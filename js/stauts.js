document.querySelectorAll('.contain').forEach(item => {
    item.addEventListener('click', () => {
        // 이미 선택된 요소는 클릭 이벤트를 무시하고 반환
        if (item.classList.contains('selected')) return;

        // 모든 contain 요소에서 selected 클래스 제거
        document.querySelectorAll('.contain').forEach(i => i.classList.remove('selected'));
        
        // 클릭한 요소에 selected 클래스 추가
        item.classList.add('selected');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const offlineSelection = document.getElementById('offline-selection');
    const onlineSelection = document.getElementById('online-selection');

    const offlineSports = document.querySelectorAll('.sport-contain.offline');
    const onlineSports = document.querySelectorAll('.sport-contain.online');

    // 오프라인 종목 클릭 시
    offlineSelection.addEventListener('click', function() {
        offlineSelection.classList.add('selected');
        onlineSelection.classList.remove('selected');
        
        offlineSports.forEach(sport => sport.style.display = 'block');
        onlineSports.forEach(sport => sport.style.display = 'none');
    });

    // 온라인 종목 클릭 시
    onlineSelection.addEventListener('click', function() {
        onlineSelection.classList.add('selected');
        offlineSelection.classList.remove('selected');
        
        onlineSports.forEach(sport => sport.style.display = 'block');
        offlineSports.forEach(sport => sport.style.display = 'none');
    });

    // 페이지 로드 시 기본 오프라인 종목을 표시
    offlineSelection.click();
});
