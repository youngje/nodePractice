console.log("출력합니다.");

console.log("숫자 output : %d + %d = %d", 123, 123, 123+123);
console.log("숫자 output : %d + %d = %d", 123, 123, 123+123, 000000);
console.log("변수갯수가 부족할 때 : %d  + %d", 123 );
console.log("문자열 output : %s", "문자열");
console.log("JSON: %j", { name: "무엇일까요"});


console.time('alpha');

var output = 0;
for(var i=0; i <= 100; i++) {
	output += i;
}
console.log('Result:', output);
//시간 측정을 종료합니다.
console.timeEnd('alpha');


console.log("\u001b[30m", "검정");
console.log("\u001b[31m", "빨강");
console.log("계속?");
console.log("\u001b[32m", "초록");
console.log("\u001b[33m", "노랑");
console.log("\u001b[34m", "파랑");
console.log("\u001b[35m", "보라");
console.log("\u001b[36m", "하늘");
console.log("\u001b[37m", "기본 하양");

console.log("\u001b[1m", "밝게");
console.log("\u001b[31m", "빨강");
console.log("\u001b[32m", "초록");
console.log("\u001b[33m", "노랑");
console.log("\u001b[34m", "파랑");
console.log("\u001b[35m", "보라");
console.log("\u001b[36m", "하늘");
console.log("\u001b[37m", "기본 하양");

//초기화
console.log("\u001b[0m", "초기화");

console.log("\u001b[40m", "검정배경");
console.log("\u001b[41m", "빨강배경");
console.log("\u001b[42m", "초록배경");

console.log("\u001b[0m");
