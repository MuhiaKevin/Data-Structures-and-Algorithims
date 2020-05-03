
# Quicksort: This is considered one of the fastest sorting algorithms. The
# average time that quicksort takes to sort its data is O (n log n), but this
# can grow up to O(n 2 ) in the worst-case scenario, which mainly has to do
# with the way the data is presented for processing.


def quicksort(arr):
    if len(arr) < 2:
        return arr

    pivot = arr[0]
    lessarr = [i for i in arr[1:] if i < pivot ]
    greaterarr = [i for i in arr[1:] if i > pivot ]

    return quicksort(lessarr) + [pivot] + quicksort(greaterarr)

import random

def randomarr():
    arr = []
    for i in range(0, 150):
        arr.append(random.randint(0 , 1000))
    return arr


arr = randomarr()

print(quicksort(arr))