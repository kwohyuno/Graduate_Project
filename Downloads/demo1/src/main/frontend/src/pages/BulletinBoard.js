// src/main/frontend/src/App.js
import React, {useEffect, useState} from 'react';
import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import {Profile,Project,Bulletin,Banner} from "../index";


function BulletinBoard() {

    const navi = useNavigate();
    const refreshPage = () => {
        window.location.reload();
    }


    // useEffect(() => {
    //     axios.get('/api/hello')
    //         .then(response => setHello(response.data))
    //         .catch(error => console.log(error))
    // }, []);

    return (
        <div>
            <div style={{fontSize:20,fontWeight:'bold',marginTop:'20px',marginLeft:'20px'}}>
                Hyunoh's IT Blog
                <button className="projectBtn" onClick={()=>{navi('/');}}>프로젝트</button>
                <button className="bulletinBtn" onClick={refreshPage}>방명록</button>
                <button className="galleryBtn" onClick={()=>{navi('/gallery');}}>사진첩</button>
            </div>
            <div className="box">
                <Profile/>
                <Bulletin/>
                <Banner/>
            </div>
        </div>


    );
}

export default BulletinBoard;