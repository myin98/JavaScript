package study04;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class App {
    public static void main(String[] args){

        int a = 1;
        int b = 5;

 /*        if(a > 5) {
            System.out.println("참");
        } else if (a == b){
            System.out.println("같다");
        } else {
            System.out.println("거짓");
        } */

        String c = "1";
        if (a == Integer.parseInt(c)){
            System.out.println("참");
        } else {
            System.out.println("거짓");
        }


        switch (c) {
            case "1":
                System.out.println("참");
                break;
        
            default:
                System.out.println("거짓");
                break;
        }

        for(int i = 0; i < 10; i++){
            //System.out.println(i);
        }

        List<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);

        for(int d : list){
            System.out.println(d);
        }

        List<Map> list2 = new ArrayList<Map>();
        Map map = new HashMap<>();
        map.put("k1", 1);
        map.put("k2", 2);
        list2.add(map);

        map = new HashMap<>();
        map.put("k1", 3);
        map.put("k2", 4);
        list2.add(map);

        for(Map i : list2){
            System.out.println(i);
            System.out.println(i.get("k1"));
        }
    }

}