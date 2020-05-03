const array_items = 1000

function mergeSort (arr) {
    if (arr.length < 2) {
        return arr
    } else {
        const mid = Math.floor(arr.length / 2)
        const left = arr.slice(0, mid)
        const right = arr.slice(mid)
        return merge(mergeSort(left), mergeSort(right))
    }

    function merge(arr1, arr2) {
        const merged = []
        let i = 0
        let j = 0
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i])
                i++
            } else {
                merged.push(arr2[j])
                j++
            }
        }
        return merged.concat(arr1.slice(i)).concat(arr2.slice(j))
    }
}

function randomIntFromInterval (min=1, max=899) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


module.exports.randomArray = (min_val=1, max_val=899) => {
    let random_array = []
    for (let i = 0; i < array_items; i++) {
        random_array.push(randomIntFromInterval(min_val, max_val))
    }
    return mergeSort(random_array)
}