import React,{useEffect,useState,useRef} from 'react';   
import {useParams} from 'react-router-dom';
import * as StompJS from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

function Room(props) {
    const { roomId } = useParams(); 
    const [ roomName, setRoomName ] = useState('');

    const client = useRef(); 
    const userNameRef = useRef();
    const msgRef = useRef(); 
    const [msg,setMsg] = useState([]); 


    useEffect(()=>{
        fetch("/room/info/"+roomId)
        .then(res=>res.json())
        .then(res=>{
            setRoomName(res.roomName);
            connect();
        });
    },[roomId])

    const connect = () =>{
        let sock = new SockJS("http://localhost:8080/ws");
        client.current = StompJS.Stomp.over(sock);
        let ws = client.current; 
        ws.connect({},(e)=>{
            //연결 성공시 실행할 코드 

            ws.subscribe("/sub/room/"+roomId,data=>{
                //구독 후 신규내용이 들어오면 실행될 코드 
                AddChat(data.body);
            });

        });
    }

    const AddChat = (data) =>{
        setMsg(msg=>[
            ...msg,
            data
        ]);
    }



    const publish = (type,userName,msg) => {
        client.current.send("/pub/msg",{},JSON.stringify({
            type,
            roomId,
            userName,
            msg
        }))
    }


    return (
        <div>
            <h1>
                {roomName}
            </h1>
            <div id="thats" style={{
                width:'500px',
                height:'400px',
                border:'1px solid',
                overflowY:'auto'
            }}>
                {
                    msg.map((item,idx)=>{
                        return(
                            <div>
                                <b>{JSON.parse(item).userName}</b>  {JSON.parse(item).msg}
                            </div>
                        )
                    })
                }
            </div>
            <div id="toolbox">
                <input placeholder='대화명' ref={userNameRef}/>
                <input placeholder='보낼메세지' ref={msgRef}/>
                <button onClick={(e)=>{
                    publish("CHAT",userNameRef.current.value,msgRef.current.value);
                }}>전송</button>
            </div>
        </div>
    );
}

export default Room;



