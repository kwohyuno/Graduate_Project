package com.example.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.msgDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class msgController {
    

    private final SimpMessageSendingOperations sendingOperations;


    @MessageMapping("/msg")
    public void msg(msgDto msg){
        switch(msg.getType()){
            case "ENTER":
                msg.setMsg(msg.getUserName()+"님이 접속하였습니다.");
                 break; 
            case "CHAT":
                break;
            default:
                break;
        }
        sendingOperations.convertAndSend("/sub/room/"+msg.getRoomId(),msg);  
    }

}


