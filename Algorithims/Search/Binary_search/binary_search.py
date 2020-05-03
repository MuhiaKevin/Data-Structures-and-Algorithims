#!/usr/bin/env python3 

import random
import time
import math

'''
    Binary search running time complexity  is O(log n)
    It works well with a sorted list
    for a list of 1024 items, worst case binary search checks about 10 numbers 
    for a list of 1024 items, worst case simple search checks about  all 1024 numbers = > cmath.(1024, 2) =  10

    `When you search for an element using
    simple search, in the worst case you might have to look at every single
    element. So for a list of 8 numbers, you’d have to check 8 numbers at most.
    
    For binary search, you have to check log n elements in the worst case. For
    a list of 8 elements, log 8 == 3, because 2 3 == 8
    So for a list of 8 numbers, you would have to check 3 numbers at most    
`
'''

def quicksort(arr):
    if len(arr) < 2:
        return arr

    pivot = arr[0]
    lessarr = [i for i in arr[1:] if i < pivot ]
    greaterarr = [i for i in arr[1:] if i > pivot ]

    return quicksort(lessarr) + [pivot] + quicksort(greaterarr)

def randomItem():
    return  random.randint(0 , 1000)


def randomarr():
    arr = []
    for i in range(0, 200):
        arr.append(random.randint(0 , 1000))
    return arr

def binarySearch(sortedarr, item):
    low = 0
    high = len(sortedarr) - 1
    print(f"Item searching is : {item}\n")
    
    while low <= high:
        mid = math.ceil((low + high) / 2) 
        guess = sortedarr[mid]
        print(f"Current high index is : {high}")
        print(f"Current low index is : {low}")
        print(f"Mid = {low} + {high} : {mid}")
        print(f"Current guessed item : {guess}")

        if guess == item:
            print(f"\nGot it! , guess {guess} == item {item} \n")
            return mid
        if guess > item:
            print("Guess is too high \n")
            high = mid - 1
            time.sleep(2)
        else:
            print("Guess is too low \n")
            low = mid + 1
            time.sleep(2)
    print("Item Not found")
    return None


arr = randomarr()
sortedarr = quicksort(arr)
item = randomItem()
    
binarySearch(sortedarr, item)