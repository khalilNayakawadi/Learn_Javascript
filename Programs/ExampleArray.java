package Learn_Javascript.Programs;

import java.util.Arrays;
import java.util.Scanner;

public class ExampleArray {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int [] arr = new int[50];
    int ele = 0;
    System.out.println("enter no of elements you want to insert");
    int eleNumber = sc.nextInt();
    for(int i = 0; i<eleNumber;i++)
    {
        System.out.println("elenter element "+ i+1);
        ele = sc.nextInt();
        arr[i] = ele;
    }
        System.out.println(Arrays.toString(arr));
    }
}
