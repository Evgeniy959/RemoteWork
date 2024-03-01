package com.topacademy.springapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.List;


@Component
public class MusicPlayer {


    private Music music1;
    private Music music2;
    private Music music3;
    private List<Music> musicList;
    private Person person;



    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public MusicPlayer(Person person) {
        this.person = person;
    }




  //  @Value(value = "${musicPlayer.name}")
    private String name;

 //   @Value(value = "${musicPlayer.volume}")
    private int volume;

    //   @Autowired
    private ClassMusic classMusic;
//    @Autowired
    private RockMusic rockMusic;



   // @Autowired
    public void setClassMusicRockMusic(
            ClassMusic classMusic,
            RockMusic rockMusic){
        this.classMusic = classMusic;
        this.rockMusic = rockMusic;
    }


    public ClassMusic getClassMusic() {
        return classMusic;
    }

    public RockMusic getRockMusic() {
        return rockMusic;
    }

    public List<Music> getMusicList() {
        return musicList;
    }


    public void setMusicList(List<Music> musicList) {
        this.musicList = musicList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }


    @Autowired
    public MusicPlayer(@Qualifier(value="rockMusic") Music music,@Qualifier(value="popMusic") Music music2,@Qualifier(value="classMusic") Music music3) {
        this.music1 = music;
        this.music2 = music2;
        this.music3 = music3;

//        System.out.println(this.music1.getSong());
//        System.out.println(this.music2.getSong());
//        System.out.println(this.music3.getSong());
    }

//    @Autowired
//    public MusicPlayer(@Qualifier(value="rockMusic") Music music) {
//        this.music1 = music;
//    }


    public MusicPlayer(Music music) {
        this.music1 = music;
    }


    public Music getMusic() {
        return music1;
    }
    public Music getMusic2() {
        return music2;
    }
    public Music getMusic3() {
        return music3;
    }


    public void setMusic(Music music) {
        this.music1 = music;
    }




    public String playMusic(){
        return " Music " + name + " , volume = "+ this.volume + " , play music : " +   this.music1.getSong() ;
    }



    public String playMusicList(){
        StringBuilder stringBuilder = new StringBuilder(500);

        stringBuilder.append("Music " + name + " , volume = "+ this.volume + " , play music : ");
        if (musicList!=null && musicList.size()>0) stringBuilder.append("\n");

        int count = 1;

        for (Music m:this.musicList) {
            stringBuilder.append(count++ + ") " + m.getSong()+"\n");
        }

        return  stringBuilder.toString() ;
    }
}

