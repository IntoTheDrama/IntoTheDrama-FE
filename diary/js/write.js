document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('writing-box');
    const countDisplay = document.querySelector('.count');

    textarea.addEventListener('input', function () {

        const currentLength = textarea.value.length;
        countDisplay.textContent = `(${currentLength}/200)`;

        //200자 초과 시, 최대 글자 수로 자르기
        if (currentLength > 200) {
            textarea.value = textarea.value.substring(0, 200);
        }
    });
});


// write에서 값을 쓰고 localStorage에 값 저장하기
document.querySelector('.send').addEventListener('click', function (event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const message = document.querySelector('#writing-box').value;

    if (title === "" || message === "") {
        alert("제목과 내용을 입력해 주세요.");
        return;
    }

    const userName = prompt("사용자 이름을 입력해 주세요 : ");

    if (userName) {
        // localStorage에 저장할 객체 생성
        const diaryEntry = {
            title: title,
            message: message,
            user: userName
        };

        // localStorage에 저장, 기존 값도 유지하도록 배열에 추가
        let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        diaryEntries.push(diaryEntry);
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));

        // 작성 완료 메시지
        alert('작성이 완료되었습니다.');
        window.location.href = '/diary/diary.html';
    }
});
// localStorage.clear(); // data 지우기
