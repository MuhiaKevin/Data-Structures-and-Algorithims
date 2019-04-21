// https://www.geeksforgeeks.org/merge-sort/


function mergesort(array) {

    let arraylen = array.length // get length of the array

    // if the array has only one element then array is sorted
    if (arraylen === 1) {
        return;
    }

    let midpoint = Math.floor(arraylen / 2) // get middle of array
    let leftArray = array.slice(0, midpoint); // create a new array by splitting from the first element to the midpoint 
    let rightArray = array.slice(midpoint); // create another array by splitting from the midpoint to the end of the array

    // recursively call mergesort until there is only one element in the array
    mergesort(leftArray);
    mergesort(rightArray);

    merge(leftArray, rightArray, array)

    console.log('Final Sorted Array',array);
    return array;
}

function merge(leftArray, rightArray,array) {
    let index = 0; // counter
    // while there is an element in each array
    // check index element of the leftarray against the right array and add the element to the array is lesser than the later and vice versa

    while(leftArray.length && rightArray.length){
        if(rightArray[0] < leftArray[0]){
            array[index++] = rightArray.shift();
        }
        else{
            array[index++] = leftArray.shift();
        }
       // console.log(array);
    }

    // if there is stll an element left in the array
    while(leftArray.length){
        // console.log('left array is: ', leftArray);
        array[index++] = leftArray.shift();

    }

    // if there is stll an element left in the array
    while(rightArray.length){
        // console.log('right array is: ', rightArray);
        array[index++] = rightArray.shift();

    }
}


mergesort([56,1,67,45,45,6,5,4,89,89,21,68,48,34,64234,4649])
