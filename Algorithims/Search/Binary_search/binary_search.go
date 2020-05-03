package main

import (
	"fmt"
	"math/rand"
	"time"
)

// TODO: Create a package for the random array stuff

const arraySize int = 150
const maximumNum int = 650

func createRandomArray() [arraySize]int {
	var unsortedarr [arraySize]int

	for i := 0; i < len(unsortedarr); i++ {
		unsortedarr[i] = random(maximumNum)
	}
	return unsortedarr
}

func random(max int) int {
	t := time.Now().UnixNano()
	rand.Seed(t)
	return rand.Intn(max)
}

func binarySearch(sortedArray [arraySize]int, item int) (guesseditem int) {
	var low int = 0
	var high int = len(sortedArray) - 1
	fmt.Printf("Item searching is %d \n \n", item)

	for low <= high {
		mid := (low + high) / 2
		guess := sortedArray[mid]
		fmt.Printf("Current HIGH is %d \n", sortedArray[high])
		fmt.Printf("Current LOW  is %d \n", sortedArray[low])
		fmt.Printf("Current GUESS is %d \n \n", guess)

		if guess == item {
			fmt.Println("Found the item ", guess)

			return guess
		} else if guess > item {
			high = mid - 1
		} else if guess < item {
			low = mid + 1
		}

	}

	return guesseditem
}

func bubblesort(array [arraySize]int) [arraySize]int {
	var swapped bool = true

	for swapped {
		swapped = false
		for i := 0; i < len(array)-1; i++ {
			if array[i] > array[i+1] {
				temp := array[i]
				array[i] = array[i+1]
				array[i+1] = temp
				swapped = true
			}
		}
	}
	return array
}

func main() {

	binarySearch(bubblesort(createRandomArray()), random(maximumNum))

}
