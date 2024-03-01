//import com.example.test.Person;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        //   OuterClass outerClass = new OuterClass();

//        Person person = new Person();
//        person.fathername ="Hello";


        //  OuterClass.InnerClass innerClass = new OuterClass.InnerClass();  // Error
        //   OuterClass outerClass = new OuterClass(new OuterClass.InnerClass()); // Error

        //    OuterClass.InnerClass outerClass = new OuterClass.InnerClass();


        //   OuterClass outerClass = new OuterClass();

        //   OuterClass.InnerClass innerClass = outerClass.createInnerClasssInstance();


        // NestedClass nestedClass = new OuterClass.NestedClass(); //error

        // OuterClass.NestedClass nestedClass = new OuterClass.NestedClass();


        //   LocalClass localClass = new LocalClass();


        //    AbstractClass abstractClass = new AbstractClass();


//        AbstractClass abstractClass = new AbstractClass() {
//            int b;
//            public  void test3(){
//
//            }
//            @Override
//            void test() {
//                System.out.println("Test call");
//            }
//
//            @Override
//            void test2() {
//                System.out.println("Test 2 call");
//            }
//
//        };
//
//        AbstractClass abstractClass2 = new AbstractClass() {
//         //   int a;
//
//            @Override
//            void test() {
//               // super.a=10;
//              //  this.a = 10;
//                System.out.println("Test call");
//            }
//
//            @Override
//            void test2() {
//                System.out.println("Test 2 call");
//            }
//
//        };
//
//
//        abstractClass.test();
//        abstractClass.test2();
//        abstractClass.a = 10;
//
//        abstractClass.b=10;
//        abstractClass.test3();

//        Testable testable = new Testable() {
//            int a;
//            @Override
//            public void test() {
//                System.out.println("Test");
//            }
//        };


        // foo(testable);

//        foo(new Testable() {
//            @Override
//            public void test() {
//                System.out.println("Hello world");
//            }
//        });

        // testable.test();


        //foo(new MyClass());

//        Testable testable = ()->{
//            System.out.println("Lyambda");
//        };
//
//
//
//        foo(testable);

//        foo(()->{
//            System.out.println("Mini code");
//        });


//        Comparable comparable = new Comparable() {
//            @Override
//            public boolean compare(String a, String b) {
//                return false;
//            }
//        };


//        Comparable comparable2 = (String a1 , String b1)->{
//            return a1.compareTo(b1);
//        };


        // Comparable comparable2 = (String a1 , String b1) -> a1.compareTo(b1);


//        String a = "b";
//        String b = "a";
//
//        Comparable comparable2 = (a1, b1) -> a1.compareTo(b1);
//
//        System.out.println(comparable2.compare(a, b));
//
//
//
//        Button button = new Button();
//        button.text = "Click me!";
//        button.clickListener = ()->{
//            System.out.println("Reaction on button click!");
//        };
//
//
//
//        button.MouseClick();





            List<Integer> list = new ArrayList<>();
            list.add(1);
            list.add(2);
            list.add(3);
            list.add(4);
            list.add(5);
            list.add(6);
            list.add(-6);
            list.add(-1);


        //System.out.println(sumNumCet(list));
        //System.out.println(sumNumNotCet(list));
       // System.out.println(sumNumNeqativ(list));

        System.out.println(sumAll(list,n->n%2==0));
        System.out.println(sumAll(list,n->n%2!=0));
        System.out.println(sumAll(list,n->n<0));

    }

    public static int sumAll(List<Integer> list, Predicate<Integer> predicate){
        int count = 0;
        for (int number:list) {
            if (predicate.test(number)) count+=number;
        }
        return count;
    }


    public static int sumNumCet(List<Integer> list){
        int count = 0;
        for (int number:list) {
            if (number%2==0) count+=number;
        }
        return count;
    }
    public static int sumNumNotCet(List<Integer> list){
        int count = 0;
        for (int number:list) {
            if (number%2!=0) count+=number;
        }
        return count;
    }
    public static int sumNumNeqativ(List<Integer> list){
        int count = 0;
        for (int number:list) {
            if (number<0) count+=number;
        }
        return count;
    }

    public static void foo(Testable test) {
        test.test();
    }

}




class Button{
    String text;

    onClickListener clickListener;

    void MouseClick(){
        if (clickListener!=null){
            clickListener.onClick();
        }
    }
    @FunctionalInterface
    interface onClickListener{
        void onClick();
    }
}








class MyClass implements Testable {

    @Override
    public void test() {
        System.out.println("My class");
    }
}

@FunctionalInterface
interface Comparable {
    int compare(String a, String b);
}

interface Testable {
    int b = 0;

    void test();
}


abstract class AbstractClass {
    int a;

    abstract void test();

  //  abstract void test2();
}


//Outer class
//Inner class
//Nested class
//Local class


//default
//protected
//private
//public

//Outer class
class OuterClass {  //Tree
    int a;
    public int b;
    protected int c;
    private int d;
    static int e;
    InnerClass innerClass;

//    public OuterClass(InnerClass innerClass) {
//        this.innerClass = innerClass;
//    }


    public InnerClass createInnerClasssInstance() {
        return new InnerClass();
    }

    public void test() {
        InnerClass innerClass = new InnerClass();
        innerClass.a2 = 1;
        innerClass.b2 = 1;
        innerClass.c2 = 1;
        innerClass.d2 = 1;
        innerClass.e2 = 1;


        NestedClass NestedClass = new NestedClass();
        NestedClass.a3 = 1;
        NestedClass.b3 = 1;
        NestedClass.c3 = 1;
        NestedClass.d3 = 1;
        NestedClass.e3 = 1;

        class LocalClass {
            public void test2() {
                a = 1;
                b = 1;
                c = 1;
                d = 1;
                e = 1;
                test();
                InnerClass innerClass = new InnerClass();
                NestedClass nestedClass = new NestedClass();
                innerClass.d2 = 1;
            }
        }
        LocalClass localClass = new LocalClass();

        // ()->{name,surname,age}

    }

    public void test2() {
        // LocalClass localClass = new LocalClass();
    }

    //Inner class
    class InnerClass {  // Node
        int a2;
        public int b2;
        protected int c2;
        private int d2;
        static int e2;

        public void testOuterClass() {
            //inner class param
            this.a2 = 1;
            this.b2 = 1;
            this.c2 = 1;
            this.d2 = 1;
            this.e2 = 1;

            //outer class param
            a = 1;
            b = 1;
            c = 1;
            d = 1;
            e = 1;

            test();

        }
    }

    static class NestedTest {

    }

    //Nested Class
    static class NestedClass {
        int a3;
        public int b3;
        protected int c3;
        private int d3;
        static int e3;

        public void testOuterClass() {
            //nested class
            this.a3 = 1;
            this.b3 = 1;
            this.c3 = 1;
            this.d3 = 1;
            this.e3 = 1;

            //outer class
//            a = 1;
//            b = 1;
//            c = 1;
//            d = 1;
            e = 1;

            //test();
        }

    }
}


