<br><br>
퍼즐들 상하반전되게 배치
플레이어가 움직이면 column-reverse가 작동하도록
<br><br>
<스크립트>
<br><br>
독사과를 먹고 쓰러진 백설 공주를 발견한 난쟁이들은 꺼이꺼이 구슬프게 울었습니다. 그 소리를 듣고 근처를 지나가던 이웃 나라 왕자가 난쟁이들에게 이유를 묻자 난쟁이들은 나쁜 마녀에 의해 백설공주가 쓰러지게 되었다며 왕자님이 키스만이 이 저주를 풀 수 있다고 했습니다. 왕자님은 망설임없이 백설공주에게 입을 맞추었고 백설공주는 깊은 잠에서 깨어나 왕자님을 보고 사랑에 빠졌습니다. 둘은 영원토록 행복하게 살았답니다.
(왕자님이 백설공주에게 키스할 수 있도록 퍼즐을 완성해주세요.)

<br><br>
<코드>
<br><br>
#background {
  display: flex;
  flex-direction: column-reverse;
  justify-content : space-evenly;
  align-items: center;
}

<br><br>
<버튼>
<br><br>

버튼 옆에 화살표 UI  넣어서 누르면  다음 버튼 들로 넘어갈 수 있게

flex-direction에
row-reverse, column, column-reverse
row

justify-content에
space-between, space-around, space-evenly

align-items 에
flex-start, flex-end, center