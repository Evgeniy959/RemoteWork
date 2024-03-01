package com.topacademy.springapp;


import org.springframework.stereotype.Component;

@Component
public class ClassMusic implements Music {
    public String getSong() {

        return "This is a classic music";
    }
}

