import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";

function Bulletin(props){
    const navi = useNavigate();

    const [BoardList, setBoardList] = useState([]);
    const refreshPage = () => {
        window.location.reload();
    }

    const deletePost = (idx) => {
        // console.log(idx);
        // alert(idx);
        axios
            .delete(`/api/boarddelete/${idx}`)
            .then((res)=>{
                console.log("삭제완료");
                refreshPage();
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    useEffect(()=> {
        axios
            .get("/api/boardlist")
            .then((response) => {
                console.log(response.data);
                setBoardList(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);


    return(
        <div>

            <div className="bulletin">

                <div><button className="bulletin-write" onClick={()=>{navi('/bulletinform');}}>글쓰기</button></div>

                <div className="bulletin-list">
                    {BoardList.map((board)=>{
                        return(
                            <div className="bulletin-list-eachpost">
                                이름 : {board.name} <br/><br/>
                                작성시간 : {board.time} <br/><br/>
                                내용 : {board.content} <br/><br/>
                                <button className="bulletin-list-eachpost-delete" onClick={()=>deletePost(board.idx)}>삭제</button>
                                <button className="bulletin-list-eachpost-update">수정</button>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    )

}

export default Bulletin;