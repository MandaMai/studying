var q = buildQueue();
var cats = new Queue();
var dogs = new Queue();
var pairs = new Queue();
var file = 'C:/Users/amaif/Desktop/Studying/Queues/items.txt';
getAnimals(cats, dogs, file);
printAnimal(cats);
printAnimal(dogs);
assignPair(cats, dogs, pairs);
assignPair(cats, dogs, pairs);
console.log(pairs.dataStore);

function assignPair(cats, dogs, pairs) {
    var tempCat = cats.dequeue();
    var tempDog = dogs.dequeue();
    var tempPair = new Pair(tempCat, tempDog);
    pairs.enqueue(tempPair);
}

function getAnimals(cats, dogs, file) {
    var tempQueue = new Queue();
    var fs = require("fs");
    var text = fs.readFileSync(file).toString('utf-8');
    var textByLine = text.split("\n");
    for( var i = 0; i < textByLine.length; i++) {
        textByLine[i] = textByLine[i].trim();
        var animalLine = textByLine[i].split(" ");
        var name = animalLine[1];
        var type = animalLine[0];
        if(type == 'D') {
            dogs.enqueue(new Animal(name, type));
        } else {
            cats.enqueue(new Animal(name, type));
        }
    }
}

function Animal(name, type) {
    this.name = name;
    this.type = type;
}

function Pair(cat, dog) {
    this.cat = cat;
    this.dog = dog;
}

function printAnimal(queue) {
    for(var i = 0; i < queue.dataStore.length; i++) {
        console.log (queue.dataStore[i].name + ' | ' + queue.dataStore[i].type);
    }
}

function buildQueue() {
    var q = new Queue();
    q.enqueue('Sherlock');
    q.enqueue('Amelia');
    q.enqueue('Cartman');
    q.enqueue('Watson');
    q.enqueue('Grover');
    q.enqueue('tester');
    console.log(q.toString());
    console.log('front of queue: ' + q.front());
    console.log('back of queue: ' + q.back());
    console.log('DELETING AN ITEM');
    q.dequeue();
    console.log(q.toString());
    console.log('front of queue: ' + q.front());
    console.log('back of queue: ' + q.back());
}

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.patientToString = patientToString;
    this.patientDequeue = patientDequeue;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length -1];
}

function toString() {
    var temp = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        temp += this.dataStore[i] + "\n";
    }
    return temp;
}

function empty() {
    if(this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}

//radix sort
var queues = [];
for (var i = 0; i < 20; i++) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log('Before radix sort');
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('After radix sort');
dispArray(nums);


function distribute(nums, queues, n, digit) {
    for(var i = 0; i < n; i++) {
        if(digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; digit++) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function dispArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i] + ' ');
    }
}

//priority queue
var ed = new Queue();
var p = new Patient("Amanda", 4);
ed.enqueue(p);
p = new Patient("Jones", 8);
ed.enqueue(p);
p = new Patient("Grant", 2);
ed.enqueue(p);
p = new Patient("Hepburn", 7);
ed.enqueue(p);
console.log(ed);

for(var i = 0; i < 3; i++) {
    seen = ed.dequeue();
    console.log('Patient being treated: ' + seen.name);
    console.log('Patients waiting to be seen: ');
    console.log(ed.patientToString());
}


function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function patientDequeue() {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; i++) {
        if(this.dataStore[i].code < this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
}

function patientToString() {
    var retStr = '';
    for(var i = 0; i < this.dataStore.length; i++) {
        var temp = this.dataStore[i].name;
        retStr += this.dataStore[i].name + ' code : ' + this.dataStore[i].code + "\n";
    }
    return retStr;
}
