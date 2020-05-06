function quicksort(array) {
    if (array.length < 2) {
        return array
        process.exit(1)
    }
    else {
        let pivot = array[0]
        let lessthanpivot = array.filter(function (value) {
            return value < pivot
        })
        let greaterthanpivot = array.filter(function (value) {
            return value > pivot
        })
        return quicksort(lessthanpivot).concat(pivot).concat(quicksort(greaterthanpivot))
    }
}
