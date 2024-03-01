package com.example.oop.models;


import java.sql.SQLOutput;

public class Person extends Person2 {
    String firstName = "";
    String lastName = " ";
   public static int  Count = 0;
    int age = 0;


//    {
//        firstName = "NoName";
//        lastName = "NoLastName";
//        age=0;
//    }

//    public void init(){
//        firstName = "NoName";
//        lastName = "NoLastName";
//        age=0;
//    }


    static {
        System.out.println("CALL static init BLOC");
        System.out.println("CALL INIT BLOC");

        Count =100;
    }


//    {
//        System.out.println("CALL INIT BLOC");
//        firstName = "NoName";
//        lastName = "NoLastName";
//        age = 0;
//    }

    public Person() {

    }

    public Person(int age) {
        this.age = age;
    }

    public Person(int age, String lastname) {
        System.out.println("Call Constructor");
        this.age = age;
        this.lastName = lastname;
    }

//    public Person() {
//        init();
//    }
//    public Person(int age) {
//        init();
//        this.age = age;
//    }
//    public Person(int age,String lastname) {
//        init();
//        this.age = age;
//        this.lastName = lastname;
//
//    }

//    public Person() {
//        firstName = "NoName";
//        lastName = "NoLastName";
//        age=0;
//    }
//    public Person(int age) {
//        firstName = "NoName";
//        lastName = "NoLastName";
//
//        this.age = age;
//    }
//    public Person(int age,String lastname) {
//        this.age = age;
//        this.lastName = lastname;
//        firstName = "NoName";
//    }


    public Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


//    public Person() {
//        this.firstName = "firstName";
//        this.lastName = "lastName";
//        this.age = 10;
//    }


//    public Person(String firstName, int age) {
//        //this(firstName);
//        System.out.println("1 public Person(String firstName, int age)");
//        this.age = age;
//    }

//    public Person(String firstName) {
//        //  this();
//        this.firstName = firstName;
//        System.out.println("2 public Person(String firstName)");
//    }

//    public Person(String firstName, String lastName, int age) {
//        this(firstName, age);
//        System.out.println("3 public Person(String firstName, String lastName, int age)");
//        this.lastName = lastName;
//    }
//    public Person() {
//      //  super("Privet");
//        System.out.println("4 public Person()");
//    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Person{");
        sb.append("firstName='").append(firstName).append('\'');
        sb.append(", lastName='").append(lastName).append('\'');
        sb.append(", age=").append(age);
        sb.append('}');
        return sb.toString();
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    //    void foo(){
////        Test test =  new Test();
////        test.a = 10;
////        test.b = "10";
////        test.c = 10.1;
////        test.d = 1;
////        test.test();
////
////
////        Test2 test2 = new Test2();
////        test2.a = 10;
////        test2.b = "";
////        test2.c = 5.5;
////        test2.d = 1;
//
//
////        //Test3 test3 = new Test3();
////        //test3.a = 10;
////        test3.c = 5;
////        test2.b = "";
////        test2.d = 1;
//    }
}


class Person2 {
    public double salary;
    public Person2() {
        System.out.println("Test constructor Person2");
    }

    public Person2(String str) {
        this();
        System.out.println(str);
    }
}