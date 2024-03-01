package com.topacademy.springapp;

import com.topacademy.springapp.configs.SpringConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {



    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);


       TestBean testBean =  context.getBean("testBean3",TestBean.class);
        System.out.println(testBean.getName());
        System.out.println(testBean.musicPlayer3.getName());




        /////////////////////////////////////////////////////

//        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
//
//
//        TestBean testBean =  context.getBean("testBean3",TestBean.class);
//        MusicPlayer musicPlayer =  context.getBean("musicPlayer3",MusicPlayer.class);
//
//        System.out.println(testBean.getName());
//
//        System.out.println("-------------------------------------------");
//
//        System.out.println(musicPlayer.getName());
//        System.out.println(musicPlayer.getVolume());
//        System.out.println(musicPlayer.getMusic().getSong());





     //   System.out.println("Okey");

//        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applocationContext.xml");
//
//          MusicPlayer musicPlayer = context.getBean("musicPlayer",MusicPlayer.class);
//        System.out.println(musicPlayer.getMusic().getSong());
//
//        System.out.println(musicPlayer.getName());
//        System.out.println(musicPlayer.getVolume());
//        System.out.println(musicPlayer.getPerson());
//        System.out.println(musicPlayer.getMusic2().getSong());
//        System.out.println(musicPlayer.getMusic3().getSong());



//        MusicPlayer musicPlayer = context.getBean("musicPlayer",MusicPlayer.class);
//        System.out.println(musicPlayer.getClassMusic().getSong());
//        System.out.println(musicPlayer.getRockMusic().getSong());




//        TestBean testBean = context.getBean("testBean",TestBean.class);
//        TestBean testBean2 = context.getBean("testBean",TestBean.class);
//
//        testBean.setName("Ivan");
//        testBean2.setName("Oleq");
//
//        System.out.println(testBean);
//        System.out.println(testBean2);






//        MusicPlayer musicPlayer = context.getBean("musicPlayer",MusicPlayer.class);
//
//        System.out.println(musicPlayer.playMusicList());





//        TestBean testBean = context.getBean("testBean",TestBean.class);
//       // TestBean testBean2 = context.getBean("testBean2",TestBean.class);
//
//        System.out.println(  TestBean.factoryMethod().toString());
//   //     testBean2.setName("Ivan");
//
//        System.out.println(testBean);
//     //   System.out.println(testBean2);
     //   context.close();
    }
}
