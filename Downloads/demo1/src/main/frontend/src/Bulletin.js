import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";

function Bulletin(props){
    const navi = useNavigate();

    const [BoardList, setBoardList] = useState([]);

    useEffect(()=> {
        axios
            .get("/api/boardlist")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);


    return(
        <div>


            <div className="bulletin">
                게시판
                <div><button className="bulletin-write" onClick={()=>{navi('/bulletinform');}}>글쓰기</button></div>

                <div className="bulletin-list">

                </div>
            </div>


        </div>
    )

}

export default Bulletin;