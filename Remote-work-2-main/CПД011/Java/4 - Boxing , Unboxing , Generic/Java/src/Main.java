import java.io.Serializable;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // interface // not abstract



        //Boxing unboxing
        //Value type => Ref type
        //int a => Object b
        //b => a

//        int a = 5;
//        Integer a1 = new Integer(a); // boxing
//        int b = a1.intValue(); // unboxing
//
//        int a2 = 5;
//        Integer b2 = a2; // autoboxing
//        int c2 = b2; // auto unboxing


//        int a = 10;
//        String b = "Farid";
//        ArrayList arrayList = new ArrayList();
//        arrayList.add(a);
//        arrayList.add(b);
//
//
//
//        int a2 = (int) arrayList.get(0);
//        int a3 = (int) arrayList.get(1);


//        int a = 10;
//        String b = "Farid";
//        ArrayList<Integer> arrayList = new ArrayList();
//        arrayList.add(a);
//        arrayList.add(b);
//
//        int a2 = (int) arrayList.get(0);
//        int a3 = (int) arrayList.get(1);


//        List<Integer> list = new ArrayList<>();


//        int a;
//        String b = "Farid";
//        String c = "Farid";
//      //  b+="d";
//        System.out.println(b);
//        //value
//        //== ref
//        if (c==b){
//            System.out.println("Yes");
//        }else{
//            System.out.println("No");
//        }

        //   String c = new String("Farid");
        //   String d = new String("Farid");

//        String b = "Farid";
//        String c = "Farid";
//
//        if (c==b){
//            System.out.println("Yes");
//        }else{
//            System.out.println("No");
//        }

        //String c = "Farid";
        //   int/ b = 10;
        //   Person person = new Person();


        //   Point<Integer> point = new Point<>(10);
        //   Point<String> point = new Point<>("Hello");
        //   Point<String> point = new Point<>("Hello","World");
        //  Point<String,Integer> point = new Point<>("Hello",10);


//        Scanner scanner = new Scanner(System.in);
//        System.out.print("Enter your name : ");
//        String name = scanner.nextLine();
//        System.out.print("Enter your surname : ");
//        String surname = scanner.nextLine();
//        System.out.print("Enter your age : ");
//        int age = Integer.parseInt(scanner.nextLine());
//
//        System.out.println("Name : " + name);
//        System.out.println("Surname : " + surname);
//        System.out.println("Age : " + age);

//       point.Test(10.4);
        //     point.Test("Hello");


        //  MyInterface<Integer> myInterface = (Integer t)->t+=10;


//        List<Integer> integerList = new ArrayList<>();
        //





//        Dollar one = new Dollar();
//        Dollar two = new Dollar();
//
//        if (two == one) {
//
//        }
//
//
//       // Bankomat<EVRO,Person,Person> personBankomat = new Bankomat<>();
    }
}

//class EVRO {
//
//}
//
//
//class Dollar {
//
//}
//
//
//abstract class Money{
//
//}
//
//class Person{
//
//}



//class Money<T>{
//
//}

//class Rubl{
//
//}
//
//
//class Dollar{
//
//}

//class Bankomat<A,B,C>{//<A extends Money,B extends Money,C extends Money>{
//    List<A> valuta1;
//    List<B> valuta2;
//    List<C> valuta3;
//
//    public Bankomat(List<A> valuta1) {
//        this.valuta1 = valuta1;
//
//
//    }
//
//    public Bankomat(List<A> valuta1, List<B> valuta2) {
//        this.valuta1 = valuta1;
//        this.valuta2 = valuta2;
//    }
//
//    public Bankomat(List<A> valuta1, List<B> valuta2, List<C> valuta3) {
//        this.valuta1 = valuta1;
//        this.valuta2 = valuta2;
//        this.valuta3 = valuta3;
//    }
//
//    //evro
//    //dollar
//    //rubley
//}
//
//interface MyInterface<T extends Number & Comparator & Serializable> {
//    T test(T value);
//}

//class Point<T,R,X> implements MyInterface<T>{
//    private T x;
//    private R y;
//
//
//    public Point() {
//    }
//
//    class InnerClass<T3>{
//        T VALUE2;
//        T3 value3;
//    }
//
//    public <Y> Point(T x, R y,Y a) {
//        this.x = x;
//        this.y = y;
//    }
//
//    public <F,Z,U,Q> void Test(F value){
//        System.out.println(value);
//
//
//        class LocalClass<J>{
//            F VAL;
//            T XXX;
//        }
//    }
//
//    public Point(T x, R y) {
//        this.x = x;
//        this.y = y;
//    }
//
//    @Override
//    public T test(T value) {
//        return null;
//    }
//}

//: where T new
//

//class Point<T>{
//    private T value;
//
//    public Point(T value) {
//        this.value = value;
//    }
//
//    public T getValue() {
//        return value;
//    }
//
//    public void setValue(T value) {
//        this.value = value;
//    }
//}