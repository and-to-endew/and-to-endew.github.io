import React, { useState } from "react";
import "./App.css";
import './fonts/Font.css';

function App() {
  let [제목, set제목] = useState(["minion 1", "minion 2", "minion 3"]);
  let [모달, setModal] = useState(false);
  let [선택된제목, set선택된제목] = useState(0); //선택된제목의 인덱스를 저장
  let [입력된제목, set입력된제목] = useState(""); //입력된제목 상태 추가

  function 제목추가() {
    let newTitle = [...제목, 입력된제목];   //기존 제목 배열의 모든 요소 뒤에 입력된제목을 추가하여 새로운 배열을 생성
    set제목(newTitle);  //새로운 배열을 제목 상태로 설정


  }

  function 제목삭제(index) {
    let newTitle = [...제목];
    newTitle.splice(index, 1);  //index위치에서 1개의 요소를 제거. 여기서 인자 1은 삭제할 요소 갯수를 의미
    set제목(newTitle);
    //인덱스 하나 줄이고 배열에 요소 삭제
  }

  function 모달열기(index) {
    if (모달 && 선택된제목 === index) {
      // 이미 모달이 열려있고, 현재 클릭된 제목이 이미 선택된 제목과 같다면 모달을 닫습니다.
      setModal(false);
    } else {
      // 그렇지 않은 경우, 새로운 제목을 선택하고 모달을 엽니다.
      set선택된제목(index);
      setModal(true);
    }
  }


  function 제목저장() {
    if (입력된제목.trim() !== "") { // 입력된 제목이 공백이 아닌 경우에만 실행
      let newTitle = [입력된제목, ...제목]; // 입력된 제목을 리스트의 제일 앞에 추가
      set제목(newTitle);
      set입력된제목(""); // 입력된 제목 초기화
    } else {
      alert("제목을 입력해주세요!"); // 입력된 제목이 없을 때 알림창 띄우기
    }
  }

  return (
    <div className="blog">
      <div className="header">
        <h1 className="title">MINIONS MOOD</h1>
      </div>
      <div className="container">
        <div className="left-container">
          {제목.map((제목, index) => (        //map 공부하기
            <List key={index} 제목={제목} index={index} 제목삭제={() => 제목삭제(index)} 제목추가={제목추가} 모달열기={() => 모달열기(index)} />
              )
            )
          }


        </div>
        <div className="right-container">
          <div className="search-box">
            <input value={입력된제목} onChange={(e)=>{set입력된제목(e.target.value)}} className="input-box"></input>
            <button className="confirm-button" onClick={제목저장}>init!</button>
          </div>
          <div className="modal">
            {모달 ? <Modal 제목={제목[선택된제목]} /> : null}
            </div>
          
        </div>

      </div>
    </div>
  );
}
function Modal({ 제목 }) {
  return (
    <div className='modal'>
      <h4>inf: {제목}</h4>
    </div>
  );
}


function List({ 제목, index, 제목삭제, 모달열기 }) {

  let [좋아요, set좋아요] = useState(0);
  let [싫어요, set싫어요] = useState(0);

  function likeClick() {
    set좋아요(좋아요 + 1);
  }
  function dislikeClick() {
    set싫어요(싫어요 + 1);
  }

  return (
    <div className="List">
      <div className="List-top">
        <h2 onClick={() => 모달열기(index)}><span style={{ cursor: 'pointer' }} onClick={모달열기}>{제목}</span>
          like:<span style={{ cursor: "pointer" }} onClick={likeClick}>👍</span>{좋아요} |
          {/* style 속성을 사용하여 커서를 포인터로 바꿈. */}
          dislike:<span style={{ cursor: "pointer" }} onClick={dislikeClick}>👎</span>{싫어요}</h2>
      </div>
      <div className="List-bottom">
        <h3 className="List-date">date</h3>
        <button className="List-delete" onClick={() => { 제목삭제() }}>delete</button>
      </div>
    </div>
  );

}

export default App;