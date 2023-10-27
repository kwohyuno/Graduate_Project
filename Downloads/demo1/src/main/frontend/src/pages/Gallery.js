// src/main/frontend/src/App.js
import React, {useEffect, useState} from 'react';
import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import {Profile,Project,Bulletin,Banner} from "../index";
import testphoto from "../assets/mcsalogo.jpeg";
import photo1 from "../assets/gallery1.jpeg";
import photo2 from "../assets/gallery2.jpeg";
import photo3 from "../assets/gallery3.jpeg";
import photo4 from "../assets/gallery4.jpeg";
import photo5 from "../assets/gallery5.jpeg";
import photo6 from "../assets/gallery6.jpeg";
import photo7 from "../assets/gallery7.jpeg";
import photo8 from "../assets/gallery8.jpeg";
import photo9 from "../assets/gallery9.jpeg";



function Gallery() {
    const [hello, setHello] = useState('')
    const [currentPage,setCurrentPage] = useState();
    const navi = useNavigate();
    // const [projectToggle, setProjectToggle] = useState();
    // const [bulletinToggle, setBulletinToggle] = useState();
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
            <div style={{fontSize:20,fontWeight:'bold',marginTop:'20px',marginLeft:'20px'}} >
                Hyunoh's IT Blog
                <button className="projectBtn" onClick={()=>{navi('/')}}>프로젝트</button>
                <button className="bulletinBtn" onClick={()=>{navi('/bulletinboard');}}>방명록</button>
                <button className="galleryBtn" onClick={refreshPage}>사진첩</button>
            </div>
            <div className="box">
                <Profile/>
                <div className="box-galleryboard">
                    <img src={photo1} className="box-galleryboard-photo"></img>
                    <img src={photo2} className="box-galleryboard-photo"></img>
                    <img src={photo3} className="box-galleryboard-photo"></img>
                    <img src={photo4} className="box-galleryboard-photo"></img>
                    <img src={photo5} className="box-galleryboard-photo"></img>
                    <img src={photo6} className="box-galleryboard-photo"></img>
                    <img src={photo7} className="box-galleryboard-photo"></img>
                    <img src={photo8} className="box-galleryboard-photo"></img>
                    <img src={photo9} className="box-galleryboard-photo"></img>
                </div>
                <Banner/>
            </div>
        </div>


    );
}

export default Gallery;