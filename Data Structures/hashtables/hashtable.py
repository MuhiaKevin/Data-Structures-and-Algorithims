import math

class Hashtable():
    def __init__(self, size):
        self.size = size
        self.hashtable = {}

    def getHashtableSize(self):
        print(f"Hashtable size is :", self.size)
    
    def hashfunction(self, element):
        if len(self.hashtable) <= self.size:
            self.hashtable[len(element) % self.size] = str(element)
        else:
            print("Hash table is full")
        
    def getHashtable(self):
        return self.hashtable




hashtable = Hashtable(5)
hashtable.hashfunction("Kevin Muhia")
hashtable.hashfunction("Allan Muhia")
# hashtable.getSize()
print(hashtable.getHashtable())