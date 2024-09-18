// 1. 변수 선언
let message = "숫자를 입력하고 버튼을 클릭하세요.";

// 2. 함수 정의
function checkNumber(number) {
    // 3. 조건문: 숫자가 양수, 음수, 또는 0인지 확인
    if (number > 0) {
        message = "입력한 숫자는 양수입니다.";
    } else if (number < 0) {
        message = "입력한 숫자는 음수입니다.";
    } else if (number == 0) {
        message = "입력한 숫자는 0입니다.";
    } else {
        message = "유효한 숫자가 아닙니다.";
    }

    // 4. 결과를 반환
    return message;
}

// 5. 반복문: 1부터 5까지 콘솔에 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 6. 함수 호출 예시
console.log(checkNumber(3));   // 양수
console.log(checkNumber(-5));  // 음수
console.log(checkNumber(0));   // 0

