function bubbleSort(arr){
    let arralen = arr.length; // array length
    let swapped; 

    do{
        swapped = false;
        
        for( let i = 0; i < arralen; i++){ // loop through the array

            if(arr[i] > arr[i+1]){ // if the current element in the array is greater than the next element then do the following 
                let temp = arr[i]; // set the temp value as  the current element
                arr[i] = arr[i + 1]; // switch the current element position with the next element
                arr[i + 1] = temp; // set the next element as the current element which was stored in the temp folder 
                swapped = true; 
                console.log(swapped)
            }
        }

    }while(swapped)

    return arr;
}

console.log(bubbleSort([1,34,5,6,45,23,67,878,2234,5,2,4,11,3]))

// NOTES
/* 
    The algorithim is ineffcient since as the input increases more space and time will be required to sort the array
*/