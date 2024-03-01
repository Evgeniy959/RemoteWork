package com.example.myapplication2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;

import com.example.myapplication2.models.Student;
import com.example.myapplication2.models.Tag;
import com.example.myapplication2.models.ToDo;
import com.example.myapplication2.utils.DBHelper;
import com.example.myapplication2.utils.DbHelper2;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        DBHelper dbHelper = new DBHelper(this);
//        Log.i("test","24");
//        dbHelper.addStudent(new Student("Ivan","Ivanov",23));
//        Log.i("test","26");
//        dbHelper.addStudent(new Student("Farid","Abdullayev",27));
//        dbHelper.addStudent(new Student("Sawa","Sawov",26));
//
//
//        List<Student> list =  dbHelper.getAll();
//        List<String> listStr = new ArrayList<>();
//        list.stream().forEach(item->listStr.add(item.toString()));
//
//
//        ListView listView = findViewById(R.id.list_view);
//        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1,listStr);
//        listView.setAdapter(adapter);


        TextView textView = findViewById(R.id.text_view);
        StringBuilder stringBuilder = new StringBuilder(100);

        DbHelper2 dbHelper2 = new DbHelper2(this);

        Tag tag1 =new Tag("Покупки");
        Tag tag2 =new Tag("Важно");
        Tag tag3 =new Tag("Помотреть");
        Tag tag4 =new Tag("Работа");


       int tagId1 =  dbHelper2.createTag(tag1);
        int tagId2 =   dbHelper2.createTag(tag2);
        int tagId3 =   dbHelper2.createTag(tag3);
        int tagId4 =   dbHelper2.createTag(tag4);


        ToDo toDo1 = new ToDo("notebook",0);
        ToDo toDo2 = new ToDo("tv",0);
        ToDo toDo3 = new ToDo("mobile",0);
        ToDo toDo4 = new ToDo("call parent",0);
        ToDo toDo5 = new ToDo("drive",0);
        ToDo toDo6 = new ToDo("programming",0);


        int toDoId1 = dbHelper2.createTodo(toDo1,new int[]{tagId1});
        int toDoId2 = dbHelper2.createTodo(toDo2,new int[]{tagId1,tagId3});
        int toDoId3 = dbHelper2.createTodo(toDo3,new int[]{tagId1});
        int toDoId4 = dbHelper2.createTodo(toDo4,new int[]{tagId2});
        int toDoId5 = dbHelper2.createTodo(toDo5,new int[]{tagId4,tagId2});
        int toDoId6 = dbHelper2.createTodo(toDo6,new int[]{tagId4});


        List<Tag> tagList = dbHelper2.getAll();

        for (Tag tag:tagList) {
            stringBuilder.append(tag.getName() + " : ");
            List<ToDo> list = dbHelper2.getAllToDoByTag(tag.getName());
            int count = 1;
            for (ToDo todo:list) {
                stringBuilder.append("\n " + count++ + ") " +  todo.getNote() + " \n ");
            }
        }


        textView.setText(stringBuilder.toString());



    }
}