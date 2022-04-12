# 30Days JavaScript Project

##### 바닐라 자바 스크립트를 활용하여 만든 프로젝트들입니다.

### 1. 타이핑 게임

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
