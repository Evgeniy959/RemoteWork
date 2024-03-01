import java.util.*;

enum Color {
    RED(255,0,0),
    GREEN(0,255,0),
    BLUE(0,0,255);
    private final int red;
    private final int green;
    private final int blue;

    Color(int red, int green, int blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    @Override
    public String toString() {
        return  name() + "{" +
                "red=" + red +
                " ,green=" + green +
                " ,blue=" + blue +
                "}";
    }
}

public class Main {
    public static void main(String[] args) {


        //  ArrayList<String> list = new ArrayList<>();
        //   LinkedList<String> list = new LinkedList<>();
        // List<String> list = new ArrayList<>();


//        System.out.println(list.size());
////list.get(0);
//        list.get(0);
//        list.add("A");
//        list.add("B");
//        list.add("C");
//        list.add("D");
//        list.add("E");
//        list.add("F");
//        list.add(0,"Z");
//
//        System.out.println("list => " + list);
//        System.out.println("Size => " + list.size());

//        list.remove("F");
//        list.remove(2);
//
//        System.out.println("list => " + list);
//        System.out.println("Size => " + list.size());


//        list.add("one");
//        list.add("two");
//        list.add("three");
//        list.add("four");
//        Iterator<String> iterator = list.listIterator();
//
//        while (iterator.hasNext()){
//            String item = iterator.next();
//            System.out.println("Item => " + item);
//        }
//
//        for (String item:list) {
//            System.out.println("Item => " + item);
//        }


//        Set<String> list = new TreeSet<>();
//        Set<String> list = new TreeSet<>();
//       Set<String> list = new TreeSet<>();
//       // list.add("one");
//        list.add("one");
//        list.add("two");
//        list.add("three");
//        list.add("four");
//
//     //   list.remove("one");
//
//        for (String item:list) {
//            System.out.println("Item => " + item);
//        }


//        Deque<String> deque = new ArrayDeque<>();
//        deque.push("One");
//        deque.push("Two");
//        deque.push("Three");
//        deque.push("Four");
//        deque.push("Five");
//
//        while (deque.peek() != null) {
//            System.out.println(deque.pop() + " ");
//        }
//
//        System.out.println(deque);

//        Set<Color> yellow = EnumSet.of(Color.RED,Color.GREEN);
//        Set<Color> white = EnumSet.of(Color.RED,Color.GREEN,Color.BLUE);
//
//
//        printColors(yellow);



        //    Map<String,Double> map = new HashMap<>();
//        Map<String,Double> map = new TreeMap<>();
//
//        map.put("Stave Ballmer",888.888);
//        map.put("Mark Zuckerberg",1370.23);
//        map.put("Stave Ballmer",34.54);
//        map.put("Stave Ballmer",999999.99);
//        map.put("Bill Gates",3434.34);
//
//
//        System.out.println(map);


   //     System.out.println( map.get("Stave Ballmer"));


//        Set<String> keys = map.keySet();
//        System.out.println(keys);


 //       Set<Map.Entry<String ,Double>> set = map.entrySet();

//        for (Map.Entry<String,Double> item:set) {
//            System.out.println("Key=> " + item.getKey());
//            System.out.println("Value=> " + item.getValue());
//        }

     //   System.out.println(map.get("Bill Gates"));


        List<Integer> list1 = new ArrayList<>(){};
        list1.add(1);
        list1.add(5);
        list1.add(10);
        list1.add(12);
        list1.add(15);
        list1.add(20);
        list1.add(21);
        list1.add(22);

        List<Integer> list2 = new ArrayList<>(){};
        list2.add(-5);
        list2.add(-1);
        list2.add(9);
        list2.add(15);
        list2.add(100);
//-5,-1,1,5,9,10,12,15,15,20,21,22,100
        System.out.println(list1);
        System.out.println(list2);

    }

//    private static void printColors(Set<Color> colors){
//        System.out.println("Color in set : ");
//        for (Color color:colors) {
//            System.out.print(color + " ");
//        }
//        System.out.println();
//    }
}