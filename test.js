let message = "숫자를 입력하고 버튼을 클릭하세요.";
function checkNumber(number) {
    if (number > 0) {
        message = "입력한 숫자는 양수입니다.";
    } else if (number < 0) {
        message = "입력한 숫자는 음수입니다.";
    } else if (number == 0) {
        message = "입력한 숫자는 0입니다.";
    } else {
        message = "유효한 숫자가 아닙니다.";
    }

    return message;
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(checkNumber(3));  
console.log(checkNumber(-5));  
console.log(checkNumber(0));  

