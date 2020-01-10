class Linkedlist{
    constructor(value){
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    
    }

    // add node 
    addToHead(value){
        const newNode = {value}; // create a new node with a property value 
        newNode.next = this.head; // make the next property of the node as the head property of the linkdelist
        this.head = newNode; // make the new node as the head of the linkedlist
        this.length++; // increment each time a value is added
        return this; // return the linkedlist
    }

    // remove head 
    removeHead(){
        // check if the linkedlist has any node
        if(this.length === 0){
            return undefined;
        }

        const value = this.head.value; // get the head node
        this.head = this.head.next; // set the head property of the linkedlist as the next property of the head  
        this.length--;

        return value + ' removed from linkedlist';

    }

    find(value){
        let thisNode = this.head; // get the node 

        while(thisNode){
            if(thisNode.value === value){
                // if value found then return it
                return thisNode; 
            }
            // set the node to be searched as the next property of the node
            thisNode = thisNode.next
        }

        return thisNode;
    }

    

    remove(value){
        // check if linkedlist has any node

        if(this.length === 0) {
            return undefined;
        }

        // if the value to be removed is the head then remove head
        if (this.head.value === value) {
            this.removeFromHead();
            return this;
        }
        // create a reference to head and a reference to the item after head
        let previousNode = this.head;
        let thisNode = previousNode.next;

        // Go through the list until the item is found
        
        // TODO use the find method 
        while(thisNode){
            
            if(thisNode.value === value){
                break;
            }

            // update references to the head and the item after head 
            previousNode = thisNode;
            thisNode = thisNode.next;

        }

        // if at the end of the linkedlist and value not found then return undefined
        if (thisNode === null) {
            return undefined;
        }
        
        // set the next property of the previous node as the next property of the node that has been removed

        previousNode.next = thisNode.next;
        this.length--;

        return this;

    }
    
}


let linkedlist = new Linkedlist('first').addToHead('second').addToHead('third').addToHead('five');
console.log(linkedlist.remove('first'))

