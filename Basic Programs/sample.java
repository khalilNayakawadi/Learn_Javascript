
public class sample {
public static void main(String[] args) {
    int count = 0;
    for(int num = 1;num<=100;num++)
    {
        for(int i = 1;i<=100/2;i++){
            if(num % i == 0){
                count++;
            }
        }
        if(count == 0){
            System.out.println(num+" ");
        }
    }
}
}