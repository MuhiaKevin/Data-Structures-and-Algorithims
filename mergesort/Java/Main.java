/*
    https://en.wikipedia.org/wiki/Merge_sort
    https://www.geeksforgeeks.org/merge-sort/
    https://springframework.guru/merge-sort-in-java/

*/

import java.util.Arrays;

class MergeSort{

    int[] mergeSort(int [] array){

        // if array has one element then it is sorted
        if(array.length == 1){
            return array;
        }

        int arraylen = array.length;
        int mid = arraylen / 2;
        int [] leftArray = Arrays.copyOfRange(array, 0, mid);
        int [] rightArray = Arrays.copyOfRange(array, mid, arraylen);
        // System.out.println(Arrays.toString(rightArray));

         // recursively call mergesort to divide the array until there is only one element left in
        mergeSort(leftArray);
        mergeSort(rightArray);
        
        merge(leftArray,rightArray);

        return array;
    }
    
    // unfinished
    
    void merge(int [] leftArray, int [] rightArray){
        int indexofleftarray = 0;
        int indexofrightarray = 0;
        int indexOfMergedList = 0;
        int [] sortedArray = {};
        
        while(indexofleftarray < leftArray.length && indexofrightarray < rightArray.length){
            
            if(leftArray[indexofleftarray] < rightArray[indexofrightarray]){
                sortedArray[indexOfMergedList] = leftArray[indexofleftarray];
                indexofleftarray++;
            }
            else{
                sortedArray[indexOfMergedList] = rightArray[indexofrightarray];
                indexofrightarray++;
            }
            
        }
    
        System.out.println(Arrays.toString(sortedArray));    
    }

}



public class Main {
    public static void main(String[] args) {
        int [] array = {12,45,6,5,6,8};
        MergeSort mrgsort = new MergeSort();
        mrgsort.mergeSort(array);

    }


}



