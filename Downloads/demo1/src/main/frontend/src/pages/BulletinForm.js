import React, {useEffect, useState} from 'react';
import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import {Profile,Project,Bulletin,Banner} from "../index";


function BulletinForm() {
    const navi = useNavigate();
    const [hello,setHello]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [content, setContent]=useState("");

    // useEffect(() => {
    //     axios.get('/api/hello')
    //         .then(response => console.log(response))
    //         .catch(error => console.log(error))
    // }, []);

    // const route = ()=> {navi('/bulletinboard')}
    const onSubmitEvent = (e) =>{
        e.preventDefault();
        const dto = {
            'name' : name,
            'password' : password,
            'content' : content
        }
        console.log(name);
        console.log(password);
        console.log(content);
        console.log(dto);

        axios
            .post("/api/insertbulletin",dto)
            .then((res)=>{
             navi("/bulletinboard");
            })
            .catch((error)=>{
            console.log(error);
        });
    };

    // useEffect(() => {
    //     axios.get('/api/insertbulletin')
    //         .catch(error => console.log(error))
    // }, []);

    return (
        <div>
            <div style={{fontSize:20,fontWeight:'bold',marginTop:'20px',marginLeft:'20px'}}>
                Hyunoh's IT Blog
                <button className="projectBtn" onClick={()=>{navi('/');}}>프로젝트</button>
                <button className="bulletinBtn" onClick={()=>{navi('/bulletinboard');}}>방명록</button>
                <button className="galleryBtn" onClick={()=>{navi('/gallery');}}>사진첩</button>
            </div>
            <div className="box">
                <Profile/>
                <form className="box-form" onSubmit={onSubmitEvent}>
                    <div className="box-form-bulletinform">
                        <div className="box-form-bullentinform-header">방명록 작성</div>
                        <div className="box-form-bulletinform-name">
                            Name : &nbsp;&nbsp;
                            <input
                            type="text"
                            className="box-form-bulletinform-name-rec"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                        </div>
                        <div className="box-form-bulletinform-password">
                            Password : &nbsp;&nbsp;
                            <input
                                type="text"
                                className="box-form-bulletinform-password-rec"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="box-form-bulletinform-content">
                            Content : &nbsp;&nbsp;
                            <input
                                type="text"
                                className="box-form-bulletinform-content-rec"
                                required
                                onChange={(e) => setContent(e.target.value)}
                                value={content}
                            />
                        </div>
                        <button className="box-form-bulletinform-cancel"onClick={()=>{navi('/bulletinboard');}}>취소</button>
                        <button type="submit" className="box-form-bulletinform-btn">업로드</button>
                    </div>


                </form>

                <Banner/>
            </div>
        </div>


    );
}

export default BulletinForm;