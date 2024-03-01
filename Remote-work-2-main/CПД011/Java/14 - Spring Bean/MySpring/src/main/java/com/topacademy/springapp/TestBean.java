package com.topacademy.springapp;

import javax.print.attribute.standard.MediaSize;

public class TestBean {
    private String name;
    private String surname;
    private int age;

    public TestBean(String name, String surname, int age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public TestBean() {
    }

    public TestBean(String name) {
        this.name = name;
    }

    public static TestBean factoryMethod(){
        return new TestBean("Oleq");
    }

    public  void InitMethod(){
        System.out.println("Call InitMethod!!!");
    }

    public  void DestroyMethod(){
        System.out.println("Call DestroyMethod!!!");
    }

    @Override
    public String toString() {
        return this.name + " " + this.surname + " " + this.age;
    }
}
