package com.example.myapplication;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.os.Bundle;
import android.speech.RecognizerIntent;
import android.util.Log;
import android.widget.EditText;
import android.widget.Toast;

import java.util.List;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    static final int SECOND_REQUEST_CODE = 1;
    static final int MICRO_REQUEST_CODE = 2;
    int count = 0;

    EditText editText;
    EditText editSubject;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//        Intent returnIntent = getIntent();
//
//        if (returnIntent!=null){
//            count = returnIntent.getIntExtra("count",0);
//        }


        editText = findViewById(R.id.edit_text);
        editSubject = findViewById(R.id.edit_subject);


        getSupportActionBar().setTitle("Count : " + count);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        findViewById(R.id.btn_one).setOnClickListener(view -> {
            count++;
            getSupportActionBar().setTitle("Count : " + count);
            // Toast.makeText(this,Integer.toString(count) , Toast.LENGTH_LONG).show();
        });

        findViewById(R.id.btn_two).setOnClickListener(view -> {
            Intent intent = new Intent(this, SecondActivity.class);
            intent.putExtra("count", count);
            // startActivity(intent);
            startActivityForResult(intent, SECOND_REQUEST_CODE);
        });

        findViewById(R.id.btn_three).setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("text/plain");
            intent.putExtra(Intent.EXTRA_SUBJECT,editSubject.getText().toString());
            intent.putExtra(Intent.EXTRA_TEXT,editText.getText().toString());
            startActivity(intent);


        });


        findViewById(R.id.btn_four).setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("text/plain");
            intent.putExtra(Intent.EXTRA_TEXT,editText.getText().toString());

            List<ResolveInfo> resolveInfosList = getPackageManager().queryIntentActivities(intent,0);

            StringBuilder builder = new StringBuilder(100);

            for (ResolveInfo info: resolveInfosList) {
                String currentApp = info.activityInfo.packageName;
                builder.append(currentApp + "\n");
                if (currentApp.contains("gm")){
                    PackageManager pm = getApplication().getPackageManager();
                    Intent launcIntet = pm.getLaunchIntentForPackage(currentApp);
                    startActivity(launcIntet);
                }
            }

            Log.i("intent_list", builder.toString());


        });

        Log.i("life_cycle", "MainActivity -> onCreate");



        findViewById(R.id.btn_rec).setOnClickListener(view -> {
            Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, Locale.getDefault());
            intent.putExtra(RecognizerIntent.EXTRA_PROMPT,"Говори давай!!Быстрей");
            startActivityForResult(intent,MICRO_REQUEST_CODE);

        });
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == SECOND_REQUEST_CODE && resultCode == 200 && data != null) {
            count = data.getIntExtra("count", 0);
            getSupportActionBar().setTitle("Main count : " + count);
        }else if (requestCode == MICRO_REQUEST_CODE && resultCode == RESULT_OK && data!=null){
            List<String> result = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
            Log.i("micro", result.get(0));
            String text = editText.getText() + result.get(0);
            editText.setText(text);

        }

    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.i("life_cycle", "MainActivity -> OnStart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("life_cycle", "MainActivity -> onResume");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("life_cycle", "MainActivity -> onPause");
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        super.onSaveInstanceState(outState);
        Log.i("life_cycle", "MainActivity -> onSaveInstanceState");
        outState.putInt("count", count);
    }


    @Override
    protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        Log.i("life_cycle", "MainActivity -> onRestoreInstanceState");
        count = savedInstanceState.getInt("count", 0);
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("life_cycle", "MainActivity -> onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("life_cycle", "MainActivity -> onRestart");
    }


    @Override
    protected void onDestroy() {
        //
        super.onDestroy();
        Log.i("life_cycle", "MainActivity -> onDestroy");
    }
}