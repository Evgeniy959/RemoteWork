import jdk.jfr.Unsigned;

import java.awt.*;

enum Season {
    WINTER, SPRING, SUMMER, AUTUMN
}

//class SeasonClass { // extends java.lang.Enum  //{
//    public static final SeasonClass WINTER =new SeasonClass("WINTER");
//    public static final SeasonClass SPRING =new SeasonClass("SPRING");
//    public static final SeasonClass SUMMER =new SeasonClass("SUMMER");
//    public static final SeasonClass AUTUMN =new SeasonClass("AUTUMN");
//
//
//    private final String name;
//
//    private SeasonClass(String name) {
//        this.name = name;
//    }
//
//    @Override
//    public String toString() {
//        return this.name;
//    }
//
//
//    //    List<String> Season = new ArrayList<>();
//
////    String WINTER ="Winter";
////    String SPRING ="Spring";
////    String SUMMER ="Summer";
////    String AUTUMN ="Autumn";
//}


enum Direction implements Moveable {
    Up(0, -1) {
        @Override
        public Direction opposite() {
            return Direction.Down;
        }
    },
    Down(0, 1) {
        @Override
        public Direction opposite() {
            return Direction.Up;
        }
    },
    Left(-1, 0){
        @Override
        public Direction opposite() {
            return Direction.Right;
        }
    },
    Right(1, 0){
        @Override
        public void speed() {
            super.speed();
        }

        @Override
        public Direction opposite() {
            return Direction.Left;
        }
    };

    public void step(Point point) {
        point.x += xStep * stepLength;
        point.y += yStep * stepLength;
    }


    public static void setStepLength(int stepLength) {
        if (stepLength > 0 && stepLength <= 100) {
            Direction.stepLength = stepLength;
        }
    }


    private final int xStep, yStep;
    static int stepLength = 1;

    Direction(int xStep, int yStep) {
        this.xStep = xStep;
        this.yStep = yStep;
    }

    @Override
    public void speed() {
        System.out.println("Call speed");
    }

    public abstract Direction opposite();
}


class Player {
    private Point curPosition;
    private Direction curDirection;


    public Point getCurPosition() {
        return curPosition;
    }

    public void setCurPosition(Point curPosition) {
        this.curPosition = curPosition;
    }

    public Direction getCurDirection() {
        return curDirection;
    }

    public void setCurDirection(Direction curDirection) {
        this.curDirection = curDirection;
    }

    public Player(Point curPosition) {
        this.curPosition = curPosition;
    }

    public void opposite(){
        curDirection = curDirection.opposite();
    }

    public void move() {
        curDirection.step(curPosition);
    }

    @Override
    public String toString() {
        return "Player {" +
                "curPosition = " + curPosition +
                "curDirection = " + curDirection + "}";
    }

    //    public void move(int direct) {
//        switch (direct) {
//            case 0:
//                curPosition.y--;
//            case 1:
//                curPosition.y++;
//            case 2:
//                curPosition.x--;
//            case 3:
//                curPosition.x++;
//        }
//    }


//    public void move(Direction direct) {
//        switch (direct) {
//            case Up:
//                curPosition.y--;
//            case Down:
//                curPosition.y++;
//            case Left:
//                curPosition.x--;
//            case Right:
//                curPosition.x++;
//        }
//    }


//    public void move() {
//        switch (curDirection) {
//            case Up:
//                curPosition.y--;
//            case Down:
//                curPosition.y++;
//            case Left:
//                curPosition.x--;
//            case Right:
//                curPosition.x++;
//        }
//    }


}

//1
//2
//


interface Moveable {
    void speed();
}

public class Main {
    public static void main(String[] args) {


      //  Player player1 = new Player(new Point(100, 100));//5,40

//        System.out.println(player1);
//        player1.setCurDirection(Direction.Up);
//        Direction.stepLength = 10;
//        player1.move();
//        System.out.println(player1);
//        player1.opposite();
//        player1.move();
//        System.out.println(player1);
//        player1.setCurDirection(Direction.Left);
//        player1.move();
//        System.out.println(player1);

//        player1.setCurDirection(Direction.Left);
//        player1.move();
//        player1.move();
//        player1.move();
//        player1.move();
//        player1.move();
//
//        player1.setCurDirection(Direction.Left);


//        player1.move(Direction.Left);
//        player1.move(Direction.Left);
//        player1.move(Direction.Left);
//        player1.move(Direction.Left);
//        player1.move(Direction.Left);
//        player1.move(Direction.Left);
//        player1.move(Direction.Left);
//        player1.move(Direction.Left);
//        player1.move(Direction.Left);


        //   SeasonClass seasonClass = SeasonClass.AUTUMN;


//        switch (seasonClass){
//            //case W
//        }

//        if (seasonClass == SeasonClass.AUTUMN) {
//            seasonClass = SeasonClass.WINTER;
//        }
//
//        System.out.println(seasonClass);
//
//
//        if (seasonClass == SeasonClass.WINTER) {
//            seasonClass = SeasonClass.SPRING;
//        }

        //      System.out.println(seasonClass);


//        SeasonClass seasonClass = new SeasonClass();
//        seasonClass.Season.


//        int exit = 0;
//        if (exit==0)

//        String col = "red";
//        if (col=="red")

        Color color = Color.Black;
//        System.out.println(color);
//
//        if (color == Color.Black) color = Color.White;
//
//        switch (color){
//            case White : System.out.println("Color is " + color) ; break;
//            case Black: System.out.println("Color is " + color);  break;
//            case Blue: System.out.println("Color is " + color); break;
//            case Red: System.out.println("Color is " + color); break;
//            default: System.out.println("Color is any color");
//
//        }
    }
}