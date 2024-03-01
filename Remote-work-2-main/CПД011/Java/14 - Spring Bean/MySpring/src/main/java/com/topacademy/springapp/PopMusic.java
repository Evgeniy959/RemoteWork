package com.topacademy.springapp;

import org.springframework.context.annotation.Bean;

public class PopMusic implements Music {
    public String getSong() {
        return "This is a Pop music";
    }
}