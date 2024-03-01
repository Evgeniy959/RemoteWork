import java.lang.annotation.Documented;
import java.lang.annotation.Retention;

//@Documented()
//class Test{
//   // @Deprecated
//    public  void test() {
//        System.out.println("Run func");
//    }
//
//
//    public  void test2() {
//        System.out.println("Run func");
//    }
//}




//@ClassPreamble(
//        author = "Farid",
//        date = "2022.12.10",
//        reviewrs = {"Iqor","Oleq"})
//class Test{
//
//
//}


//@Retention(Re)
@interface Mammal{
    String sound();
    int color() default 0Xffffff;
}

class Giraffe{

}




//@FunctionalInterface
//interface testable{
//    public void test();
//}

public class Main {

    public static void main(String[] args) {
      //  Test test = new Test();

    }
}