def bubblesort(array): 
        listlen = len(array)    
        swapped = True

        while swapped:
                swapped = False
                for i in range(listlen - 1):
                        if array[i] > array[i + 1]:
                                temp = array[i] # save the current element of the array in a temporary element
                                array[i] = array[i + 1] # replace the position of the element with the next element of the list  
                                array[i + 1] = temp # set the next element as the element of the current position
                                swapped = True

        return array



array = [23,34,1,267,23,189,13,3,2,136,5,23]
print(bubblesort(array))