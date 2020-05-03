const RandArrayModule = require('../../RandArrayModule/randArray.js')

function randomIntFromInterval(min=1, max=1000) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function binary_search(sorted_array, item) {
    let low = 0;
    let high = sorted_array.length - 1
    console.log(`Item seaching is : ${item}\n`)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = sorted_array[mid]
        console.log(`Current high value  -> ${sorted_array[high]}`)
        console.log(`Current low value  -> ${sorted_array[low]}`)
        console.log(`Current Mid -> ${mid}`)
        console.log(`Current guessed item -> ${guess} \n`)


        if (guess === item) {
            console.log(`Found item : ${guess}`)
            return guess
        }
        else if (guess > item) {
            high = mid - 1
        }
        else if (guess < item) {
            low = mid + 1
            
        }
    }

    return "Item is not avaialable"
}

console.log(binary_search(RandArrayModule.randomArray(),randomIntFromInterval()))
