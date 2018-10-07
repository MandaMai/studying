var cis = new Set();
var it = new Set();
cis.add('Sherlock');
cis.add('Grover');
cis.add('Ellie');
cis.add('Motley');
it.add('Amelia');
it.add('Cartman');
it.add('Watson');
it.add('Sherlock');
it.add('Grover');
it.add('Ellie');
it.add('Motley');
// cis.add('Clayton');
// cis.add('Jennifer');
// cis.add('Danny');
// it.add('Bryan');
// it.add('Clayton');
// it.add('Jennifer');

var diff = new Set();
diff = it.difference(cis);
console.log('[' + it.show() + '] difference [' + cis.show() + '] -> [' + diff.show() + ']');

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

function add(data) {
    if(this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if(pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contains(data) {
    if(this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for(var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for(var i = 0; i < set.dataStore.length; ++i) {
        if(!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if(set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if(this.size() > set.size()) {
        return false;
    } else {
        this.dataStore.forEach(member => {
            if(!set.contains(member)) {
                return false;
            }
            });
        }
    return true;
}

function size() {
    return this.dataStore.length;
}

function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if(!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}