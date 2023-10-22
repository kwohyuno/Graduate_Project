// src/main/frontend/src/App.js
import React, {useEffect, useState} from 'react';
import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import {Profile,Project,Bulletin,Banner} from "../index";


function Main() {
    const [hello, setHello] = useState('')
    const [currentPage,setCurrentPage] = useState();
    const navi = useNavigate();
    // const [projectToggle, setProjectToggle] = useState();
    // const [bulletinToggle, setBulletinToggle] = useState();

    const projectClick = () => {
        alert('프로젝트 버튼이 클릭되었습니다');
        // setProjectToggle();
    }
    const bulletinClick = () => {
        alert('게시판 버튼이 클릭되었습니다');
        // setBulletinToggle();
    }

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <div style={{fontSize:20,fontWeight:'bold',marginTop:'20px',marginLeft:'20px'}}>
                Hyunoh's IT Blog
                <button className="projectBtn" onClick={projectClick}>프로젝트</button>
                <button className="bulletinBtn" onClick={()=>{navi('/bulletinboard');}}>방명록</button>
            </div>
            <div className="box">
                <Profile/>
                <Project/>
                <Banner/>
            </div>
        </div>


    );
}

export default Main;