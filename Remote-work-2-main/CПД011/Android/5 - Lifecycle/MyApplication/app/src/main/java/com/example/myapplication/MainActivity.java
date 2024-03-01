package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Log.i("life_cycle","MainActivity -> OnCreate");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.i("life_cycle","MainActivity -> OnStart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("life_cycle","MainActivity -> onResume");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("life_cycle","MainActivity -> onPause");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("life_cycle","MainActivity -> onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("life_cycle","MainActivity -> onRestart");
    }


    @Override
    protected void onDestroy() {
        //
        super.onDestroy();
        Log.i("life_cycle","MainActivity -> onDestroy");
    }
}