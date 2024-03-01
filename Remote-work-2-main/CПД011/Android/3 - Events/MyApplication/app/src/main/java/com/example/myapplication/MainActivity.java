package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.res.ColorStateList;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.util.Size;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.snackbar.Snackbar;


class MyClickListener implements View.OnClickListener{

    @Override
    public void onClick(View view) {
        Log.i("main_activityyyyy","call onMyClick");
    }
}

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//      Button btn =  findViewById(R.id.btn_one);
//
//        btn.setText("My Text Test");
//        btn.setTextColor(Color.rgb(255,0,255) );
//        //  btn.setBackgroundColor(Color);
//        btn.setTextSize(TypedValue.COMPLEX_UNIT_DIP,35);
//        btn.setPadding(25,25,25,25);
//        btn.setAllCaps(true);

      // btn.setOnClickListener(new MyClickListener());


//        btn.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//         //       Toast.makeText(getApplicationContext(),R.string.hello_world,Toast.LENGTH_LONG).show();
//        Toast.makeText(MainActivity.this,R.string.hello_world,Toast.LENGTH_LONG).show();
//                   }
//        });


//        btn.setOnClickListener(view -> {
//            Toast.makeText(MainActivity.this,"TEEEEEEEEEEEEEEEE",Toast.LENGTH_LONG).show();
//            Toast.makeText(MainActivity.this,R.string.on_click,Toast.LENGTH_LONG).show();
//        });

//        btn.setOnClickListener(view -> {
//            Toast.makeText(MainActivity.this,R.string.on_click,Toast.LENGTH_LONG).show();
//        });

    }

    public void OnMyText(View view) {
        //Length long = 3500ms
        //Short long = 2000ms
     // Toast toast =
              Toast.makeText(this,R.string.hello_world + " = " ,Toast.LENGTH_LONG).show();
//
//        View view1 = toast.getView();
//        view1.setBackgroundColor(getResources().getColor(R.color.purple_200));
//   LinearLayout layout = (LinearLayout) toast.getView();
//
//        for (int i = 0; i <   layout.getChildCount(); i++) {
//
//        }
//
//     TextView textView = (TextView) layout.getChildAt(0);
//     textView.setBackgroundColor(getResources().getColor(R.color.teal_200));
//     textView.setTextSize(35);
//        textView.setTextColor(getResources().getColor(R.color.myColor));
//       // textView.setTextColor(getResources().getColor(R.color.myColor));
////
//     ImageView imageView = new ImageView(getApplicationContext());
//        imageView.setImageResource(R.drawable.ic_baseline_hub_24);
////
//     layout.addView(imageView,0);
//
////      toast.setGravity(Gravity.CENTER,0,70);
//
//       // toast.setGravity(Gravity.BOTTOM | Gravity.RIGHT,60,0);
//
//      //  toast.setGravity(Gravity.CENTER ,60,0);
//           toast.show();
////        Log.i("main_activityyyyy","call onMyClick");
//     //   Toast.makeText(this,R.string.hello_world,Toast.LENGTH_LONG).show();
//         // Snackbar.make(view,R.string.hello_world,Snackbar.LENGTH_SHORT).show();
    }
}