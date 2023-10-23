import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
function Bulletin(props){
    const navi = useNavigate();
    return(
        <div>


            <div className="bulletin">
                게시판
                <div><button className="bulletin-write" onClick={()=>{navi('/bulletinform');}}>글쓰기</button></div>
            </div>
        </div>
    )

}

export default Bulletin;