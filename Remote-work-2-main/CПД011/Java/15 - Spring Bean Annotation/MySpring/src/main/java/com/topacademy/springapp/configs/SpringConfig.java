package com.topacademy.springapp.configs;


import com.topacademy.springapp.Music;
import com.topacademy.springapp.MusicPlayer;
import com.topacademy.springapp.RockMusic;
import com.topacademy.springapp.TestBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.*;

@Configuration
@ComponentScan(value = "com.topacademy.springapp")
@PropertySource(value = "MusicPlayer.properties")
public class SpringConfig {


    @Autowired
    public MusicPlayer musicPlayer3;

    @Bean
    @Scope(value = "prototype")
    public TestBean testBean3() {

        TestBean testBean = new TestBean();
        testBean.setName("Farid");
        return testBean;
    }

    @Bean
    @Autowired
    public MusicPlayer musicPlayer3(@Qualifier(value = "popMusic") Music music) {
        MusicPlayer musicPlayer = new MusicPlayer(music);
        musicPlayer.setName("LG");
        musicPlayer.setVolume(100);
        return  musicPlayer;
    }

}
