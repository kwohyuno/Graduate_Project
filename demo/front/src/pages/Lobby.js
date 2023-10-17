import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
    const [lst,setLst] = useState([]); //  방목록 저장 


    useEffect(()=>{
        fetch("/lobby/list")
        .then(res=>res.json())
        .then(res=>{
            setLst(res);
        })
    },[])


    
    const RoomCreate=(e)=>{
        let name=prompt('방제 입력').trim(); 
        
        if(name.length===0)
        return;

        //방 생성 소스 들어갈 부분 
        //서버와 fetch 통신함

        fetch("/lobby/create",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name
            })
        })
        .then(res=>res.json())
        .then(res=>{
            setLst([
                res,
                ...lst
            ])
        })
    }

    return (
        <div>
            <button onClick={RoomCreate}>방만들기</button>
            <hr/>
            <ul>
                {
                    lst.map((item,idx)=>{
                        return <Link key={idx} to={"/room/"+item.roomId}> <li>{idx+1}.{item.roomName}</li> </Link>
                    })
                }
            </ul>
        </div>
    );
};

export default Lobby;