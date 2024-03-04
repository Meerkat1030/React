/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let subject = '서면 맛집 추천';
    let data = 'red';
    // state를 만들어서 데이터를 저장할 수 있다.
    let [sub, setSub] = useState(['남자 헤어 추천', '여자 헤어 추천', '맛집 추천']);
    let [like, likeFun] = useState(0);
    let [modal, setModal] = useState(false);
    //state를 사용하는 이유
    // state는 변동사항이 생기면 해당 state를 사용하는 html도 자동으로 렌더링 해준다.

    // ['남자 헤어 추천', '여자 헤어 추천', '맛집 추천']
    // setSub('남자 코디 추천'); -> 제대로 동작 X
    // setSub(['남자 코디 추천', '여자 헤어 추천', '맛집 추천']); -> 제대로 동작 O
    return (
        <div className="App">
            {/*jsx 문법
        1. html class 넣을 때에는 className
        2. 변수를 html에 넣을때에는 {변수명}
        3. html에 style 속성을 넣을때에는 { } object 형식으로 넣는다
           기존 css에서 사용하던 ‘-’ 대신 camelCase 형식으로 작성한다.*/}
            <div className="black-nav">
                <h4>블로그</h4>
            </div>
            <button onClick={() => {
                console.log('정렬 버튼 클릭');
                let sortedSub = [...sub];
                sortedSub.sort(); // 문자열 정렬
                setSub(sortedSub);
            }}>정렬
            </button>
            <div className="list">
                <h4>{sub[0]} <span onClick={() => {setModal(true)}}>👍</span>{like}</h4>
                <p>3월 4일 발행</p>
                <button onClick={() => {
                    let copy = [...sub];
                    // let copy = [sub];는 sub의 주소값만 복사해오기 때문에 state변경을 감지 못한다
                    // let copy = [...sub]; [...sub]를 해야 배열 자체를 복사해옴
                    copy[0] = '남자 코디 추천';
                    setSub(copy)
                }}>눌러봐
                </button>
            </div>
            <div className="list">
                <h4>{sub[1]}</h4>
                <p>3월 4일 발행</p>
            </div>
            <div className="list">
                <h4>{sub[2]}</h4>
                <p>3월 4일 발행</p>
            </div>
            {/*if state가 true면 modal 보여주고
            false면 modal 안보여주고*/}
            {!modal == true ? <Modal></Modal> : null}
            {/*<Modal></Modal>*/}
        </div>
    );
}

function Modal(){
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
