import {Route, Link, NavLink, useNavigate} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';

function Bulletin(props){

    const [open, setOpen] = React.useState(false);
    const [pw, setPw] = useState("");


    const navi = useNavigate();

    const [BoardList, setBoardList] = useState([]);
    const refreshPage = () => {
        window.location.reload();
    }

    const deletePost = (idx,password) => {
        // console.log(idx);
        // alert(idx);

        console.log(pw);
        console.log(password);

        if(password==pw){
        axios
            .delete(`/api/boarddelete/${idx}`)
            .then((res)=>{
                console.log("삭제완료");
                refreshPage();
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            alert('비밀번호가 틀렸습니다')
        }
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
                                {/*<Button*/}
                                {/*    variant="outlined"*/}
                                {/*    color="neutral"*/}
                                {/*    onClick={() => setOpen(true)}*/}
                                {/*    className="bulletin-list-eachpost-delete"*/}
                                {/*>*/}
                                {/*    삭제*/}
                                {/*</Button>*/}
                                <Modal open={open} onClose={() => setOpen(false)}>
                                    <ModalDialog>
                                        <DialogTitle>삭제하시겠습니까?</DialogTitle>
                                        <DialogContent>삭제하려면 입력시 등록한 비밀번호를 기입하세요.</DialogContent>
                                        <form
                                            onSubmit={(e) => {
                                                // event.preventDefault();
                                                deletePost(board.idx, board.password);
                                                setOpen(false);
                                            }}
                                        >
                                            <Stack spacing={2}>
                                                <FormControl>
                                                    <FormLabel>Password</FormLabel>
                                                    <input
                                                        type="text"
                                                        className="bulletin-list-eachpost-delete-submit"
                                                        required
                                                        onChange={(e) => setPw(e.target.value)}
                                                        value={pw}
                                                    />
                                                </FormControl>

                                                <Button type="submit">Submit</Button>
                                            </Stack>
                                        </form>
                                    </ModalDialog>
                                </Modal>
                                <button className="bulletin-list-eachpost-delete" onClick={() => setOpen(true)}>삭제</button>

                                {/*<Button*/}
                                {/*    variant="outlined"*/}
                                {/*    color="neutral"*/}
                                {/*    className="bulletin-list-eachpost-update"*/}
                                {/*>*/}
                                {/*    수정*/}
                                {/*</Button>*/}
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