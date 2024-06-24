import React, { useState } from "react";
import "./blog.css";
import '../../fonts/Font.css';

function Blog() {

  let [제목, set제목] = useState(["minion 1", "minion 2", "minion 3"]);
  let [작성자, set작성자] = useState("");
  let [작성일자, set작성일자] = useState("");
  let [내용, set내용] = useState("");

  let [모달, setModal] = useState(false);

  let [선택된제목, set선택된제목] = useState(0); //선택된제목의 인덱스를 저장

  let [입력된제목, set입력된제목] = useState(""); //입력된제목 상태 추가
  let [입력된작성자, set입력된작성자] = useState("");
  let [입력된작성일자, set입력된작성일자] = useState("");
  let [입력된내용, set입력된내용] = useState("");

  function 제목삭제(index) {
    let newTitle = [...제목];
    let newwriter = [...작성자];
    let newdate = [...작성일자];
    let newcontent = [...내용];

    newTitle.splice(index, 1);  //index위치에서 1개의 요소를 제거. 여기서 인자 1은 삭제할 요소 갯수를 의미
    newwriter.splice(index, 1);
    newdate.splice(index, 1);
    newcontent.splice(index, 1);

    set제목(newTitle);
    set작성자(newwriter);
    set작성일자(newdate);
    set내용(newcontent);
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
      let newcontent = [입력된내용, ...내용];
      let newwriter = [입력된작성자, ...작성자];
      let newdate = [입력된작성일자, ...작성일자];

      set내용(newcontent);
      set작성자(newwriter);
      set작성일자(newdate);
      set제목(newTitle);
      set입력된제목(""); // 입력된 제목 초기화
      set입력된작성자("");
      set입력된작성일자("");
      set입력된내용("");

    } else {
      alert("공백없이 입력해주세요!"); //공백이 있을 때 알림창 띄우기
    }
  }

  return (
    <div className="blog">
      <div className="container">
        <div className="left-container">
          <div className="search-box">
            <input value={입력된제목} onChange={(e) => { set입력된제목(e.target.value) }} className="input-box"></input>
            <button className="confirm-button" onClick={제목저장}>init!</button>
          </div>
          <div className="modal">
            {모달 ? <Modal 제목={제목[선택된제목]} /> : null}
          </div>

        </div>
        <div className="right-container">
          {제목.map((제목, index) => (        //map 공부하기
            <List key={index} 제목={제목} index={index} 제목삭제={() => 제목삭제(index)} 모달열기={() => 모달열기(index)} />
          )
          )
          }
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
        <h2  className="List-h2" onClick={() => 모달열기(index)}><span style={{ cursor: 'pointer' }} onClick={모달열기}>{제목}</span>
          like:<span style={{ cursor: "pointer" }} onClick={likeClick}>👍</span>{좋아요} |
          dislike:<span style={{ cursor: "pointer" }} onClick={dislikeClick}>👎</span>{싫어요}</h2>
      </div>
      <div className="List-bottom">
        <h3 className="List-date">date</h3>
        <button className="List-delete" onClick={() => { 제목삭제() }}>delete</button>
      </div>
    </div>
  );

}

export default Blog;