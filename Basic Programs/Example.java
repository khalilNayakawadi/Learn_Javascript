import java.util.Arrays;

public class Example {
    public static void main(String[] args) {
       int[] arr = new int[100/4];
       int indx = 0;
        for(int num = 2;num<=100;num++){
            int count = 0;
            for(int i = 2;i<num;i++){
                if(num % i == 0){
                    count++;
                    break;
                }
            }
            if(count == 0){
                
                arr[indx] = num;
                indx++;
            }
        }
        System.out.println(Arrays.toString(arr));
        for(int i = 0;i < arr.length;i+=2){
            System.out.print(arr[i]+" ");
        }
    }
    
}