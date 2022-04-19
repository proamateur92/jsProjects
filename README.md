# 30Days JavaScript Project

##### 바닐라 자바 스크립트를 활용하여 만든 프로젝트들입니다.

### 1. 타이핑 게임

<br>

### 2. 드럼 게임

- Audio 객체의 사용법
  <br>

  - Audio객체 실행: Audio.play()
    <br>

  - 재생지점 지정(x=0이라면 0초부터): Audio.currentTime = x
    <br>

- 이벤트 사용법
  <br>

  - transitionend: 객체의 transtion이 종료되는 시점에 부여받은 객체 및 부여되어진 property 반환.
    <br>
  - keypress, keyup, keydown: 키보드 타이핑 관련 이벤트.
    <br>

- 문제점
  <br>

  - js파일 line 16: 키를 연속적으로 빠르게 입력하면 transition의 지연 시간이 따라잡지 못해 transitionend 이벤트가 실행되지 않는 현상 발생

    <br>

### 3. 시계 만들기

- CSS Property
  <br>

  - transform-origin: 대상 Element의 기준점 조정 (퍼센티지%, top left 등의 값이 들어갈 수 있다.)
    <br>

- 문제점
  <br>

  - Date객체의 시간을 받아 transform의 각도를 계산하기 때문에 450도(한바퀴 도는 시점)에서 90도(기준)가 될 때 시계 방향으로 한바퀴를 돌던 초침이 반시계 방향으로 되돌아 가는 현상. (시침, 분침 동일)

    <br>

### 4. JS로 CSS 값 조작하기

- CSS Property
  <br>

  - filter: blur(Xpx); 뿌옇기의 정도
    <br>

- JS
  <br>

  - document.querySelectorAll(''); Node List 배열 반환
    <br>

  - x || ''; x의 값이 false이면 ''를 반환
    <br>

  - document.documentElement.style.setProperty(--key, value); --key : value 값으로 CSS property 지정

<br>

### 5. JS 배열 갖고 놀기1

- 1. filter
     배열의 메서드 중 하나인 filter는 배열의 요소마다 루프를 돌려 참인지 거짓인지 조건을 걸어 참일 경우에 해당 요소를 배열 형태로 return한다.

<br>

- 2. map
     map은 배열의 요소를 다른 형태(다른 타입)나 값을 변경하여 배열 형태로 값을 return 시킨다.

<br>

- 3. sort
     sort는 배열의 요소들의 값을 비교하여 정렬하는 메서드이다. 다른 메서드와 다르게 두개의 파라미터(첫번째 요소, 두번째 요소)를 받고 루프를 돌며 그 다음 요소를 비교한다. return 값이 양수라면 내림차순, 음수라면 오름차순으로 정렬된다.

<br>

- 4. reduce
     앞에 언급한 메서드들과는 다르게 reduce메서드는 연산을 한다. 콜백 함수는 두개의 파라미터를 받고 첫번째 파라미터는 연산의 수행 결과가 반환되어지고, 두번째 파라미터는 배열의 요소를 받아 온다. 또한 Array((result, element) => {}, initialValue);의 형태로 초기값(initialValue)을 받는다. 초기값은 연산 결과를 받을 result에 처음 할당 되는 값이 된다.

<br>
