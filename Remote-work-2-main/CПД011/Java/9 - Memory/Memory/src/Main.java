class MyClass{
    int data;
}

public class Main {
    public static void main(String[] args) {
        System.out.println("================Start Program=========================");
        System.out.println("=================PRINT====================");
       printMemory();
        System.out.println("=================Fill Heap====================");
       fillHeap();
        System.out.println("=================PRINT====================");
       printMemory();
        System.out.println("==================Calll GC===================");
       System.gc();
        System.out.println("=====================================");
        System.out.println("=================PRINT====================");
       printMemory();


    }

    public static void printMemory(){
        System.out.println("Max memory => " + Runtime.getRuntime().maxMemory());
        System.out.println("Total memory => " + Runtime.getRuntime().totalMemory());
        System.out.println("Free memory => " + Runtime.getRuntime().freeMemory());
        Long used = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
        System.out.println("Used memory => " + used);
    }

    public static void fillHeap(){

        int count = 2_500_000;
        MyClass[] arr = new MyClass[count];
        for (int i = 0; i < count; i++) {
            arr[i] = new MyClass();
            arr[i].data = i;
        }
    }
}