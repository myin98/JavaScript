package study05;

public class App {
    /**
     * @param args
     */
    public static void main(String[] args) {
        
   /*      while (true) {
            System.out.println(1);
            break;
        } */

       /*  int a = 1;
        do{
            if (a > 1){break;} 
                System.out.println(a);
                a++;
            } while (true);  */
            int a = 1;

            for(;a < 10; a++){
                for(int b = 1; b < 10; b++){
            //        System.out.println(a + " * " + b + " = " + (a * b));
                }
            }
            //1차원 배열
            String[] c = new String[]{"가","나","다"};
            for(int i = 0; i < c.length; i++){
                //System.out.println(c[i]);
            }
            //2차원 배열
            String[][] d = new String[][]{
                {"가","나"},
                {"다","라"}
            };
            for (int i = 0; i < d.length; i++){
                for(int j = 0; j < d[i].length; j++){
                   System.out.println(d[i][j]);
                }
                System.out.println("");
            }
            

            
    }   

}
