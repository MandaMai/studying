var cities = new LinkedList();
cities.insert('Conway', 'head');
cities.display();
cities.insert('Russellville', 'Conway');
cities.display();
cities.insert('Carlisle', 'Russellville');
cities.display();
cities.insert('Alma', 'Carlisle');
cities.display();
cities.insert('Seattle', 'Carlisle');
cities.display();

cities.insert('Orlando', 'Seattle');
cities.display();
cities.dispReverse();
cities.remove('Alma');
cities.display();
cities.dispReverse();

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
    this.printNode = printNode;
}

function printNode(item) {
    if(item.previous === null) {
        return ('element: ' + item.element + ' next: ' + item.next.element);
    }
    if(item.next === null) {
        return ('element: ' + item.element + ' previous: ' + item.previous.element);
    }
    if(item.previous.previous === null) {
        return ('element: ' + item.element + ' next: ' + item.next.element + ' previous: ' + item.previous.element);
    }
    return ('element: ' + item.element + ' next: ' + item.next.element + ' previous: ' + item.previous.element + ' previous-previous: ' + item.previous.previous.element);
}

function LinkedList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    console.log('current item: ' + current.element);
    console.log('new item: ' + newNode.element);
    
    newNode.next = current.next;
    newNode.previous = current;
    console.log('new item after assignment: ' + newNode.printNode(newNode));
    current.next = newNode;
}

function remove(item) {
    var currNode = this.find(item);
    if(!(currNode.next === null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function findLast() {
    var currNode = this.head;
    while(!(currNode.next === null)) {
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse() {
    console.log('-------- CURRENT LIST BACKWARDS --------');
    var currNode = this.head;
    currNode = this.findLast();
    console.log('final node: ' + currNode.element);
    while(!(currNode.previous === null)) {
        console.log('current node: ' + currNode.element);
        //console.log('next node: ' + currNode.next.element);
        console.log('previous node: ' + currNode.previous.element);
        currNode = currNode.previous;
    }
}

function display() {
    console.log('-------- CURRENT LIST --------')
    var currNode = this.head;
    while(!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}
