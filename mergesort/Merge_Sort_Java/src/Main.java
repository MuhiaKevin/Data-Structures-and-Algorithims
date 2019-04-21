
// https://en.wikipedia.org/wiki/Merge_sort
// https://www.geeksforgeeks.org/merge-sort/

import java.util.Arrays;

class MergeSort{

    int[] mergeSort(int [] array){

        // if array has one element then it is sorted
        if(array.length < 2){
            return array;
        }

        int arraylen = array.length;
        int mid = arraylen / 2;
        int [] leftArray = Arrays.copyOfRange(array, 0, mid);
        int [] rightArray = Arrays.copyOfRange(array, mid, arraylen);
        System.out.println(Arrays.toString(rightArray));

        mergeSort(leftArray);
        mergeSort(rightArray);


        return array;
    }


}





public class Main {

    public static void main(String[] args) {
        int [] array = {12,45,6,5,6,8};
        MergeSort mrgsort = new MergeSort();
        mrgsort.mergeSort(array);

    }


}



