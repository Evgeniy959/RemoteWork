import java.io.*;
import java.util.ArrayList;
import java.util.List;


class MakuUpperCase extends  FilterReader{

    protected MakuUpperCase(Reader in) {
        super(in);
    }

    @Override
    public int read() throws IOException {
        int c = super.read();
        return (c==-1? c : Character.toUpperCase((char)c));
    }

    @Override
    public int read(char[] cbuf, int off, int len) throws IOException {
       int nread = super.read(cbuf, off, len);
       int last = off+nread;
        for (int i = 0; i < last; i++) {
            cbuf[i] = Character.toUpperCase(cbuf[i]);
        }

        return nread;
    }
}


public class Main {
    public static void main(String[] args) {

        try {
            File folder = new File("test");

            if (!folder.exists()) folder.mkdir();

            if (folder.isDirectory()) {
                System.out.println(folder.getName() + " is directory");

                File file = new File(folder.getAbsolutePath() + "/data.txt");

                if (!file.exists()) {
                    file.createNewFile();
                }

                if (file.isFile()) {

//                    FileWriter fileWriter = new FileWriter(file);
//                    fileWriter.write("Text1\n");
//                    fileWriter.write("Text2\n");
//                    fileWriter.write("Text3\n");
//                    fileWriter.write("Text4\n");
//                   // fileWriter.flush();
//                    //System.in.read();
//                    fileWriter.write("Text5\n");
//                    fileWriter.write("Text6\n");
//                   // fileWriter.flush();
//                    fileWriter.close();
//
//
//                    FileReader fileReader = new FileReader(file);
//                    char[] text = new char[50];
//                    while (fileReader.read(text)!=-1){
//                        String str = new String(text);
//                        System.out.println(str);
//                        text = new char[50];
//                    }
//                    fileReader.close();







                    // char[] text = new char[50];
                    // for (int i = 0; i < text.length; i++) {
                    //     System.out.println(text[10]);
                    // }


//                   System.out.println(file.getName() + " is file");
//
//                   File[] files = folder.listFiles();
//
//                   for (File item:files) {
//                       if (item.isDirectory()){
//                           System.out.println(item.getName() + " is directory!");
//                       }else if (item.isFile()){
//                           System.out.println(item.getName() + " is file");
//                       }
//                   }
                }

            }
            folder.delete();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        //File
//        File folder = new File("test");
//        if (!folder.exists()) {
//          //  try {
//             //   folder.createNewFile();
//                folder.mkdir();
//           // } catch (IOException e) {
//          ////      throw new RuntimeException(e);
//          //  }
//        }

        //   File file = new File("data.txt");
        //   try {
//  file.createNewFile();
//            FileWriter fileWriter = new FileWriter(file);
//            fileWriter.write("test1\n");
//            fileWriter.write("test1\n");
//            fileWriter.write("test1\n");
//            fileWriter.write("test1");
//            fileWriter.flush();
//            fileWriter.close();


//            FileReader fileReader = new FileReader(file);
//            char[] text = new char[50];
//
//            while (fileReader.read(text)!=-1){
//                String str = new String(text);
//                System.out.println(str);
//                text = new char[50];
//            }
//            fileReader.close();
//
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }

       try {
           StringBuilder stringBuilder = new StringBuilder();
           String text = "Hello World";
           StringReader sr = new StringReader(text);
           FilterReader filterReader = new MakuUpperCase(sr);
           int c;
           while ((c= filterReader.read())!=-1){
               stringBuilder.append((char) c);
           }

           System.out.println(stringBuilder);
       } catch (IOException e) {
           throw new RuntimeException(e);
       }

    }
}