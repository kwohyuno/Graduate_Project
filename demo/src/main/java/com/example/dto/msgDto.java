package com.example.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class msgDto {
    private String type;  //메세지 타입 
    private String roomId;   //메세지가 보내질 방 ID
    private String userName;   //메세지 보낸 사람 
    private String msg;    //메세지 내용 
}



