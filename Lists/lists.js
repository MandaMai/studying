var test = buildManualList();

console.log('print toString: ' + test.toString());
test.remove('Grover');
console.log('after removing item: ' + test.toString());
test.front();
console.log('front: ' + test.getElement());
test.next();
console.log('after moving next: ' + test.getElement());
test.previous();
console.log('after moving to previous: ' + test.getElement());

console.log('print toString: ' + test.toString());
printAll(test);

console.log('HARRY POTTER LIST');
var harrypList = new List();
harrypList = createArr('C:/Users/amaif/Desktop/Studying/Lists/items.txt');
printAll(harrypList);

getListOfFunctions('next', 'items.txt');

function getListOfFunctions(option, file) {
    console.log('remove, front, next');
    switch (option) {
        case 'remove': 
            console.log('made it to remove');
            break;
        case 'front': 
            console.log('made it to front');
            break; 
        case 'next': 
            console.log('made it to next');
            break;
        default:
            console.log('nothing was selected');
    }
}
function buildManualList() {
var test = new List();
test.append('Sherlock');
test.append('Amelia');
test.append('Cartman');
test.append('Grover');

return test;
}

function printAll(list) {
console.log('Printing List: ');
for(list.front(); list.hasNext();) {
    var item = list.next();
    if(item instanceof Movie) {
        console.log(item.name + ', ' + item.number);
    } else {
        console.log(item);
        }
    }
}

function createArr(file) {
    var fs = require("fs");
    var text = fs.readFileSync(file).toString('utf-8');
    var tempList = new List();
    var textByLine = text.split("\r\n");
    for(var i = 0; i < textByLine.length; i++) {
        var temp = textByLine[i].split(", ");
        var tempMovie = new Movie(temp[0], temp[1]);
        tempList.append(tempMovie);
    }
    return tempList;
}

function Movie(name, number) {
    this.name = name;
    this.number = number;
}

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.previous = previous;
    this.next = next;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if(foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function previous() {
    return this.dataStore[this.pos--];
}

function next() {
    return this.dataStore[this.pos++];
}

function hasNext() {
    if(this.pos > this.listSize -1) {
        return false;
    } else {
        return true;
    }
}

function hasPrevious() {
    if(this.pos <= 0) {
        return false;
    } else {
        return true;
    }
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize -1;
}

function currPos() {
    return pos;
}



