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
