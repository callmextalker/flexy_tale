<br><br>
퍼즐들 좌우반전되게 배치
움직이면 row-reverse가 작동하도록
<br><br>
<스크립트>
<br><br>
마법의 거울로부터 공주가 살아있다는 소식을 들은 왕비는 백설공주를 죽이기 위한 독사과를 들고 백설공주를 찾아갔습니다.
왕비가 준 독사과를 먹은 공주는 쓰러지고 말았습니다.
(justify-content와 flex-direction과 align-items 속성을 이용하여 독사과를 든 왕비의 모습을 퍼즐로 완성해주세요.)

<align-items>
flex-start: 요소들을 화면 위쪽에 정렬합니다.
flex-end: 요소들을 화면 아래쪽에 정렬합니다.
center: 요소들을 세로선 상의 가운데로 정렬합니다.
baseline: 요소들을 시작 위치에 정렬합니다.

<br><br>
<코드>
<br><br>
#background {
  display: flex;
  flex-direction: row-reverse;
  justify-content : space-around;
  align-items: flex-start;
}

<br><br>
<버튼>
<br><br>

버튼 옆에 화살표 UI  넣어서 누르면  다음 버튼 들로 넘어갈 수 있게

flex-direction에
row-reverse, column, column-reverse
row

justify-content에
space-between, space-around

align-items 에
flex-start, flex-end, center
