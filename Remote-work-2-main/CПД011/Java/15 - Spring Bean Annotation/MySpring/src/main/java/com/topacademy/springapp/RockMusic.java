package com.topacademy.springapp;


import org.springframework.stereotype.Component;

@Component
public class RockMusic implements Music {

    public String getSong() {
      return "This is a rock music";
    }
}
