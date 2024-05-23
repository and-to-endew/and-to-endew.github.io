import React, { useState } from "react";
import "./App.css";
import './fonts/Font.css';

function App() {
  let[제목, setTitle] = useState(["1번째 글", "2번째 글", "3번째 글"]);
  let[modal, setModal] = useState(false);
  let[선택된제목, setClickIndex] = useState(0);
  let[입력된제목, setClickTitle] = useState("");

  function 제목추가(){
    let newTitle=[...제목, 입력된제목];
    setTitle(newTitle);
    //인덱스 하나 늘리고 배열에 요소 추가

  }
  
  function 제목삭제(index){
    let newTitle=[...제목];
    newTitle.splice(index, 1);
    setTitle(newTitle);
    //인덱스 하나 줄이고 배열에 요소 삭제
  }

  return (
    <div className="blog">
      <div className="header">
        <h1 className="title">MINIONS MOOD</h1>
      </div>
      <div className="container">
        <div className="left-container">
          <List title={title} index={index} />
          <List />
          <List />

        </div>
        <div className="right-container">
          <div className="search-box">
            <input className="input-box"></input>
            <button className="confirm-button">init!</button>
            <div className="modal"></div>
          </div>
        </div>

      </div>
    </div>
  );
}

function List(props) {

  let {title, index} = props;
  let [like, setlike] = useState(0);
  let [dislike, setdislike] = useState(0);

  function likeClick(){
    setlike(like + 1);
  }
  function dislikeClick(){
    setdislike(dislike + 1);
  }

  function Modal({title}){
    <div className="modal">
      <h4>제목: {title}</h4>
      <p>날짜</p>
    </div>

  }

  return (
    <div className="List">
      <div className="List-top">
        <h2><span style={{cursor:'pointer'}} onClick={모달열기}>title</span>
           like:<span style={{cursor:"pointer"}} onClick={likeClick}>👍</span>{like} |
           {/* style 속성을 사용하여 커서를 포인터로 바꿈. */}
           dislike:<span style={{cursor:"pointer"}} onClick={dislikeClick}>👎</span>{dislike}</h2>
      </div>
      <div className="List-bottom">
        <h3 className="List-date">date</h3>
        <button className="List-delete">delete</button>
      </div>
    </div>
  );

}

export default App;