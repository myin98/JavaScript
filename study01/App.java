package study01;

public class App {
    int b;
    public App(){}    // = constructor
    public App(int b){
        this.b = b;
    }

    public static void main(String[] a) {
        System.out.println("Study01 JAVA 시작!");

        int 정수 = 1;
        final int 상수 = 2;
        print();
        System.out.println(print(정수)); // 결과 : 1
    }
    
    static void print(){
        System.out.println("출력");
    }

    static int print(int a){
        return a;
    }
    
}