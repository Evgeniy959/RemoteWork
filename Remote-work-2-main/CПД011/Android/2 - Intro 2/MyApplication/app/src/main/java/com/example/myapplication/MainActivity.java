package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private  int count = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void onMyCLick(View view) {
       Toast toast =  Toast.makeText(getApplicationContext(),count++ + ") Test",Toast.LENGTH_LONG);
       toast.show();
    }
}