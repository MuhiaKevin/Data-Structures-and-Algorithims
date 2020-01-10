class Linkedlist{
    constructor(value){
        this.head = null;
        this.length = 0;
        this.addToHead(value);

    }

    addToHead(value){
        const newNode = {value};
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    find(value){
        let thisNode = this.head;

        while(thisNode){
            if(thisNode.value === value){
                return thisNode;
            }

            thisNode = thisNode.next
        }
        
        return thisNode;
    }


    removeHead(){
        if(this.length === 0 ){
            return undefinded;
        }

        const value = this.head.value;
        this.head  = this.head.next;
        this.length--;
        return value + ' removed';
    }

    remove(value){
        
        if(this.length === 0){
            return undefined;
        }

        if(this.head.value === value){
            removeHead()
            return this;
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode){
            if(thisNode.value === value){
                break;
            }
            // if value found then set the current node as the previous node and the next node as the next node
            previousNode = thisNode;
            thisNode = thisNode.next
        }

        

    }



}

let linkedlist = new Linkedlist('sonnie').addToHead('muthoni').addToHead('mwangi');

console.log(linkedlist.removeHead());