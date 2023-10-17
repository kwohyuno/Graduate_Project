package com.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.roomDto;
import com.example.services.roomService;


@RestController
@RequestMapping("/lobby")
public class lobbyController {
    @Autowired
    roomService roomService;

    @GetMapping("/list")
    public List<roomDto> getList(){
        return roomService.getAll();
    }

    @PostMapping("/create")
    public roomDto postCreate(@RequestBody Map<String,Object> data){
        return roomService.createRoom(data.get("name").toString());
    }

}
