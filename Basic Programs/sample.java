//fibonacci series 0,1,1,2,3,5,8

import java.util.*;

class sample{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = 0;
        int num2 = 1;
        int op = 0;
        System.err.println("enter no.of elements in series : ");
        int ele = sc.nextInt();
        System.err.print(num1 + " "+num2+" ");
        for(int i = 1;i<=ele;i++)
        {
            op = num1 + num2;
            num1 = num2;
            num2 = op;
            System.out.print(op+" ");
        }
        
    }
}
