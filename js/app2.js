//나만의 라면 레시피
//1. 달군 팬에 기름, 파, 스프를 넣고 볶는다.
//2. 스프기름이 만들어지면 물500ml를 넣고 인덕션 터보단계로 끓인다.
//3. 온도100씨에 불을 인덕션 6단계 줄인 후, 면을 넣고 약 3.5분 끓인다.
//4. 날계란을 넣고 면은 날계란 위에 덮는다.
//5. 1분뒤 불을 끄고 면이 퍼지기 전에 먹는다.
//function 함수
function makeRamyun(물양) {
  let wateTemp = 20;
  //배열추가
  let 재료 = ["계란", "파", "양파", "치즈", "마늘", "김치"];
  console.log("달군 팬에 기름, 파, 스프를 넣고 볶는다.");
  console.log(
    `스프기름이 만들어지면 ${물양}를 넣고 인덕션을 9로 올려 물을 끓인다.`,
  );
  //for 반복문: 초기값, 조건문, 증감식
  for (; wateTemp <= 100; wateTemp = wateTemp + 10) {
    console.log(`물온도가 ${wateTemp} 입니다.`);
  }
  //if 조건문: 참,거짓 실행
  if (wateTemp >= 100) {
    //물이 끓으면
    console.log("인덕션 6단계로 줄인 후, 면을 넣는다. 3분간 끓인다.");
  }

  // for (let i = 0; i < 재료.length; i++) {
  //   console.log(`${재료[i]}을/를 넣습니다.(1)`);
  // }
  for (const item of 재료) {
    console.log(`${item}을/를 넣습니다.(2)`);
  }
  console.log("1분뒤 인덕션을 끄고 면이 퍼지기 전에 먹는다.");
}
makeRamyun(800);
