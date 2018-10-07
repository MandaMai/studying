var s = buildStack();
//console.log(s);
//console.log('length: ' + s.length());
//console.log(s.dataStore);
//console.log(s.peek());
var popped = s.pop();
//console.log('the popped element is: ' + popped);

//palidrome example
isPalindrome('hello');
isPalindrome('racecA!r');

function isPalindrome(word) {
    word = word.toLowerCase(word.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " "));
    console.log('cleaned word: ' + word);
    var original = new Stack();
    for (var i = 0; i < word.length; i++) {
        original.push(word[i]);
    }
 
    var rword = '';
    while(original.length() > 0) {
        var temp = original.pop();
        rword += temp;
    }

    if(word == rword) {
        console.log(word + ' is a palindrome!');
        //return true;
    } else {
        console.log(word + ' is not a palindrome :(');
        //return false;
    }
}

//factorial example
console.log('factorial example for 4: ' + factorial(4));
console.log('factorial example for 5: ' + factorial(5));
console.log('factorial stack example for 4: ' + factorialStack(4));
console.log('factorial stack example for 5: ' + factorialStack(5));

function factorial(n) {
    if( n === 0) {
        return 1;
    } else {
        console.log('n value: ' + n);
        return n * factorial(n-1);
    }
}

//factorial with stack
function factorialStack(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
        console.log(product);
    }
    return product;
}

function buildStack() {
    var building = new Stack();

    building.push('Sherlock');
    building.push('Amelia');
    building.push('Cartman');
    building.push('Grover');
    building.push('Watson');
    return building;
}

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
    this.dataStore.length = 0;
}
