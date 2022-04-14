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
