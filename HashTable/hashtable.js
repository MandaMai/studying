var someNames = ['Sherlock', 'Amelia', 'Cartman', 'Watson', 'Grover', 'Bolt'];
var hTable = new HashTable();
var bTable = new HashTable();
hTable.buildChains();
bTable.buildChains();

for(var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();

for(var i = 0; i < someNames.length; ++i) {
    bTable.put(someNames[i]);
}
bTable.showDistro();
console.log(bTable.get('Amelia'));

//Student example
var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log('Student data: \n');
for(var i = 0; i < students.length; ++i) {
    console.log(students[i].substring(0,8) + ' ' + students[i].substring(9));
}
console.log('\n\nData Distribution: \n');
var numTable = new HashTable();
for(var i = 0; i < students.length; ++i) {
    numTable.put(students[i]);
}
numTable.showDistro();

//collission sample


function HashTable() {
    this.table = new Array(200);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.putBetter = putBetter;
    this.get = get;
    this.buildChains = buildChains;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(data) {
    var key = this.betterHash(data);
    var index = 0;
    if(this.table[key][index] == undefined) {
        this.table[key][index] = data;
    } else {
        while(this.table[key][index] !== undefined) {
            ++index;
        }
        this.table[key][index] = data;
    }
}

function get(key) {
    var index = 0;
    var pos = this.betterHash(key);
    if(this.table[pos][index] == key) {
        return this.table[pos][index+1]
    } else {
        while (this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index+1];
    }
    return undefined;
}

function putBetter(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if(this.table[i][0] != undefined) {
            console.log(i + ': ' + this.table[i]);
        }
    }
}

function betterHash(string) {
    var H = 31;
    var total = 0;
    for(var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0) {
        total += this.table.length -1;
    }
    return parseInt(total);
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for(var i = 0; i < arr.length; ++i) {
        var num = '';
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

function buildChains() {
    for(var i = 0; i < this.table.length; ++i) {
        this.table[i] = [];
    }
}