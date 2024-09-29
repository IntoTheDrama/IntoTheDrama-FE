document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('writing-box');
    const countDisplay = document.querySelector('.count');

    textarea.addEventListener('input', function() {
       
        const currentLength = textarea.value.length;
        countDisplay.textContent = `(${currentLength}/200)`;

         //200자 초과 시, 최대 글자 수로 자르기
        if (currentLength > 200) {
            textarea.value = textarea.value.substring(0, 200);
        }
    });
});
