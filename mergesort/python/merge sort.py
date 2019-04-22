# https://en.wikipedia.org/wiki/Merge_sort

def mergSort(array):

    if(len(array) > 1):
            
        mid = len(array) // 2 # find the middle of the Array
        Left = array[:mid] # get elements from the middle to the middle of the list 
        Right = array[mid:] # Get elements from the middle of the array to end of the array
        
        # recursively call the function to further divide the arrays
        mergSort(Left) 
        mergSort(Right)

        # counters that will be used to track of indices of the lists
        leftcounter=rightcounter=sortedcounter=0 


        # check each left array elements against the right array and insert the least value of the two elements into the array first 
        while leftcounter < len(Left) and rightcounter < len(Right):
            if Left[leftcounter] < Right[rightcounter]:
                array[sortedcounter] = Left[leftcounter] 
                leftcounter = 1 + leftcounter
            else:
                array[sortedcounter] = Right[rightcounter]
                rightcounter = 1 + rightcounter

            sortedcounter = 1 + sortedcounter

        # list with one element is sorted so add it to the array
        while leftcounter < len(Left):
            array[sortedcounter] = Left[leftcounter]
            leftcounter = 1 + leftcounter
            sortedcounter = 1 + sortedcounter
        
        while rightcounter < len(Right):
            array[sortedcounter] = Right[rightcounter]
            rightcounter = 1 + rightcounter
            sortedcounter = 1 + sortedcounter   
         

    print("Merging ",array)


mergSort([54,26,93,17,77,31,44,55,20])