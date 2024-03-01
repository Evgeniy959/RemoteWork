package com.example.myapplication;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

public class SecondActivity extends AppCompatActivity {


    int count = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        count =  getIntent().getIntExtra("count",0);
        getSupportActionBar().setTitle("Second Count : " + count);


        findViewById(R.id.btn_one).setOnClickListener(view -> {
//            Intent intent = new Intent(this,MainActivity.class);
//            intent.putExtra("count",count * 10);
//            startActivity(intent);


            Intent intent = new Intent();
            intent.putExtra("count",count * 10);
            setResult(200,intent);
            finish();
        });
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.i("life_cycle","SecondActivity -> OnStart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("life_cycle","SecondActivity -> onResume");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("life_cycle","SecondActivity -> onPause");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("life_cycle","SecondActivity -> onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("life_cycle","SecondActivity -> onRestart");
    }


    @Override
    protected void onDestroy() {
        //
        super.onDestroy();
        Log.i("life_cycle","SecondActivity -> onDestroy");
    }
}