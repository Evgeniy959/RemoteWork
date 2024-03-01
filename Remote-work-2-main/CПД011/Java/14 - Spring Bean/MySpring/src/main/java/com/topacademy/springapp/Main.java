package com.topacademy.springapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {






    public static void main(String[] args) {
     //   System.out.println("Okey");

        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applocationContext.xml");


        MusicPlayer musicPlayer = context.getBean("musicPlayer",MusicPlayer.class);

        System.out.println(musicPlayer.playMusicList());





//        TestBean testBean = context.getBean("testBean",TestBean.class);
//       // TestBean testBean2 = context.getBean("testBean2",TestBean.class);
//
//        System.out.println(  TestBean.factoryMethod().toString());
//   //     testBean2.setName("Ivan");
//
//        System.out.println(testBean);
//     //   System.out.println(testBean2);
        context.close();
    }
}
