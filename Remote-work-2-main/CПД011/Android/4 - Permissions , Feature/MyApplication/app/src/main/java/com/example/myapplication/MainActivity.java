package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.pm.PackageManager;
import android.content.res.ColorStateList;
import android.graphics.drawable.ColorDrawable;
import android.hardware.Camera;
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
import com.karumi.dexter.Dexter;
import com.karumi.dexter.MultiplePermissionsReport;
import com.karumi.dexter.PermissionToken;
import com.karumi.dexter.listener.PermissionRequest;
import com.karumi.dexter.listener.multi.MultiplePermissionsListener;

import java.security.Policy;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    Button button;
    private Camera camera;
    private boolean isFlashOn;
    private boolean hasFlash;
    Camera.Parameters params;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        button = findViewById(R.id.btn_flash);

        Dexter.withActivity(this)
                .withPermissions(Manifest.permission.CAMERA,
                        Manifest.permission.READ_CONTACTS)
                .withListener(new MultiplePermissionsListener() {
                    @Override
                    public void onPermissionsChecked(MultiplePermissionsReport multiplePermissionsReport) { }

                    @Override
                    public void onPermissionRationaleShouldBeShown(List<PermissionRequest> list, PermissionToken permissionToken) { }
                }).check();


        hasFlash = getApplicationContext().getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA_FLASH);

        if (!hasFlash){

            getSupportActionBar().setTitle("No FLASH");
            getCamera();
           // Toast.makeText(this,"No Camera!" , Toast.LENGTH_LONG).show();
        }else
        {       Toast.makeText(this,"Yes Camera!" , Toast.LENGTH_LONG).show();
            getCamera();
        }


        button.setOnClickListener(View->{
            if (!isFlashOn){
                getSupportActionBar().setTitle("Flash ON!");
                getSupportActionBar().setBackgroundDrawable(new ColorDrawable(0xff00dded));
                turnOnFlash();
            }else{
                getSupportActionBar().setTitle("Flash OFF!");
                getSupportActionBar().setBackgroundDrawable(new ColorDrawable(0xFFDDED00));
                turnOffFlash();
            }
        });
    }

    private void getCamera(){
        if (camera == null){
            try {
                camera = Camera.open();
            } catch (Exception e) {
                getSupportActionBar().setTitle("getCamera ERROR");
            }
        }
    }

    private  void turnOnFlash(){
        if (!isFlashOn){
            if (camera == null || !hasFlash){
                return;
            }else{
                params = camera.getParameters();
                params.setFlashMode(Camera.Parameters.FLASH_MODE_TORCH);
                camera.setParameters(params);
                camera.startPreview();
                isFlashOn = true;
            }
        }
    }

    private  void turnOffFlash(){
        if (isFlashOn){
            if (camera == null || !hasFlash){
                return;
            }else{
                params = camera.getParameters();
                params.setFlashMode(Camera.Parameters.FLASH_MODE_OFF);
                camera.setParameters(params);
                camera.stopPreview();
                isFlashOn = false;
            }
        }
    }



}