package main

// package bubblesort

import (
	"fmt"
	"math/rand"
	"time"
)

const arraySize int = 10

func random(max int) int {
	t := time.Now().UnixNano()
	rand.Seed(t)
	return rand.Intn(max)
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

func createRandomArray() [arraySize]int {
	var unsortedarr [arraySize]int

	for i := 0; i < len(unsortedarr); i++ {
		unsortedarr[i] = random(1000)
	}
	return unsortedarr
}

func main() {
	fmt.Println(bubblesort(createRandomArray()))
}
