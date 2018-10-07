var passwordBook = new Dictionary();
passwordBook.add('Hotmail', 'Sherlock1!');
passwordBook.add('iTunes', 'Cartman4!');
passwordBook.add('Amazon', 'Hampton1437');
passwordBook.showAll();

console.log('iTunes password: ' + passwordBook.find('iTunes'));
passwordBook.remove('Amazon');
passwordBook.showAll();

function Dictionary() {
    this.dataStore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    console.log('Total items in this book: ' + this.count());
    for(var key in this.dataStore) {
        console.log(key + ' -> ' + this.dataStore[key]);
    }
    var keys = Object.keys(this.dataStore);
    keys.sort();
    console.log('-------- Sorted List --------')
    for(var i = 0; i < keys.length; i ++) {
        console.log(keys[i] + ' -> ' + this.dataStore[keys[i]]);
    }
}

function count() {
    var n = 0;
    for(var key in this.dataStore) {
        ++n;
    }
    return n;
}

function clear() {
    for(var key in this.dataStore) {
        delete this.dataStore[key];
    }
}