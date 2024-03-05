/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let subject = '서면 맛집 추천';
    let data = 'red';


    let [sub, setSub] = useState(['남자 헤어 추천', '여자 헤어추천', '맛집 추천']);
    let [like, setLike] = useState(new Array(sub.length).fill(0));
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [inputVal, setInputVal] = useState('');
    // 반복문 map 예시
    // let array = [2, 3, 4]
    //
    // array.map(function (item, index){
    //     console.log(item)
    // })

    return (
        <div className="App">

            <div className="black-nav">
                <h4>블로그</h4>
            </div>
            <button onClick={() => {
                console.log('정렬 버튼 클릭')
                let copy = [...sub];
                copy.sort();
                setSub(copy);
            }}>정렬 버튼
            </button>
            {/*<div className="list">*/}
            {/*    <h4 onClick={() =>{setModal(!modal)}}>{sub[0]}*/}
            {/*        <span onClick={() => {likeFun(like + 1)}}>👍 </span>*/}
            {/*        {like}*/}
            {/*    </h4>*/}
            {/*    <p>3월 4일 발행</p>*/}
            {/*    <button onClick={() => {*/}
            {/*        let copy = [...sub];*/}
            {/*        console.log(copy === sub);*/}
            {/*        copy[0] = '코디 추천';*/}
            {/*        console.log(copy === sub);*/}
            {/*        setSub(copy);*/}
            {/*    }}>버튼*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{sub[1]}</h4>*/}
            {/*    <p>3월 5일 발행</p>*/}
            {/*</div>*/}
            {/*<div className="list">*/}
            {/*    <h4>{sub[2]}</h4>*/}
            {/*    <p>3월 6일 발행</p>*/}
            {/*</div>*/}
            {
                sub.map(function (item, index){
                    return (
                        <div className="list" key={index}>
                            <h4 onClick={() =>{
                                setTitle(index);
                                setModal(!modal)}}>{item}
                                <span onClick={(e) => {
                                    let copy = [...like];
                                    copy[index] = copy[index] + 1;
                                    setLike(copy);
                                    e.stopPropagation();

                                }}>👍 </span>
                                {like[index]}
                            </h4>
                            <p>3월 4일 발행</p>
                            <button onClick={()=>{
                                let copy = [...sub];
                                copy.splice(index, 1);
                                setSub(copy);
                                let copylike = [...like];
                                copylike.splice(index, 1);
                                setLike(copylike);
                            }}>삭제</button>
                        </div>
                    )
                })
            }
            {/*input 값이 변경 됐을 때 동작할 함수*/}
            <input type="text" value={inputVal} onChange={(e) => {
                setInputVal(e.target.value);
                console.log(inputVal);
            }}/>
            <button onClick={() => {
                setSub([...sub, inputVal]); // 새로운 글 추가
                setLike([...like, 0]); // 글에 해당하는 좋아요 상태 추가
                setInputVal(''); // 입력 필드 초기화

            }}>발행</button>
            {/*if state가 true면 modal 보여주고
            false 면 modal 안보여주고
            */}
            {modal == true ? <Modal sub={sub} setSub={setSub} title={title}></Modal> : null}
            {/*<div>*/}
            {/*    {array.map(function () {*/}
            {/*        return (*/}
            {/*            <div>hello</div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
}

cl

function Modal(props) {
    return (
        <div className="modal">
            <h4>
                {/*만약 title값이 0이면 0번째 글제목*/}
                {props.sub[props.title]}
            </h4>
            <p>날짜</p>
            <p>상세내용</p>
        {/*    여기에 버튼을 하나 추가하고 버튼을 누르면 첫번째 글 제목이 바뀌는 기능*/}
            <button onClick={() => {
                props.setSub(['점메추', '여자 헤어 추천', '맛집 추천']);
            }}>버튼</button>
        </div>
    )
}

export default App;