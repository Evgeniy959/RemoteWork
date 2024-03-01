import java.lang.annotation.*;


@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Repeatable(Mammals.class)
@interface Mammal{
    String sound();
    int color() default 0Xffffff;
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@interface Mammals{
    Mammal[] value();
}

@Mammal(sound = "Meuw",color = 0x551155)
@Mammal(sound = "mmeeeuuuwww",color = 0x441165)
@Deprecated
class Cat{

}


class Giraffe{

}


public class Main {

    public static void main(String[] args) {
        Cat cat = new Cat();
        Class catClass =cat.getClass(); // Cat.class;
        System.out.println("Name => " + catClass.getName());

        Annotation[] annotations = catClass.getAnnotations();

        for (Annotation annotation:annotations) {
            System.out.println(annotation.annotationType().getSimpleName());

            // is as
//           if (annotation instanceof Mammal){
//               Mammal mammal = (Mammal) annotation;
//               System.out.println("Color => " + mammal.color());
//               System.out.println("Sound => " + mammal.sound());
//           }else{
//               System.out.println("Sorry");
//           }

            if (annotation instanceof Mammals){
                Mammals mammals = (Mammals) annotation;
                for (Mammal mammal: mammals.value()) {
                    System.out.println("Color => " + mammal.color());
                    System.out.println("Sound => " + mammal.sound());
                }

            }else{
                System.out.println("Sorry");
            }

        }
        //int a;
        //@23455yhgf

        //cat dog
    }
}