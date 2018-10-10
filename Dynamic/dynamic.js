console.log(recurFib(10));
console.log(dynFib(10));
console.log(iterFib(10));
console.log(lcs('sherlock is awesome', 'sherlock may not be as awesome as you think'));
var value = [4,5,10,11,13];
var size = [3,4,7,8,9];
var capacity = 16;
var n = 5;
console.log('knapsack example: ' + knapsack(capacity, size, value, n));
console.log('dKnapsack example: ' + dKnapsack(capacity, size, value, n));

function recurFib(n) {
    if(n < 2) {
        return n;
    } else {
        return recurFib(n-1) + recurFib(n-2);
    }
}

function dynFib(n) {
    var val = [];
    for(var i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if(n == 1 || n == 2) {
        return 1;
    } else {
        val[1] = 1;
        val[2] = 2;
        for(var i = 3; i <= n; ++i) {
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}

function iterFib(n) {
    var last = 1;
    var nextLast = 1;
    var result = 1;
    for(var i = 2; i < n; ++i) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}

function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length+1);
    for(var i = 0; i <= word1.length+1; ++i) {
        lcsarr[i] = new Array(word2.length+1);
        for(var j = 0; j <= word2.length+1; ++j) {
            lcsarr[i][j] = 0;
        }
    }
    for(var i = 0; i <= word1.length; ++i) {
        for(var j = 0; j <= word2.length; ++j) {
            if(i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            }
            else {
                if(word1[i-1] == word2[j-1]) {
                    lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
                }
                else {
                    lcsarr[i][j] = 0;
                }
            }
            if(max < lcsarr[i][j]) {
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    var str = '';
    if(max == 0) {
        return '';
    }
    else {
        for(var i = index-max; i < max; ++i) {
            console.log('str before: ' + str);
            str += word2[i];
            console.log('str after: ' + str);
        }
        return str;
    }
}

function max(a,b) {
    return (a > b) ? a : b;
}

function knapsack(capacity, size, value, n) {
    if(n == 0 || capacity == 0){
        console.log('capacity: ' + capacity + ' size: ' + size + ' value: ' + value + ' n: ' + n);
        return 0;
    }
    if(size[n-1] > capacity) {
        return knapsack(capacity, size, value, n-1);
    } else {
        return max(value[n-1] + knapsack(capacity-size[n-1], size, value, n-1), knapsack(capacity, size, value, n-1));
    }
}

function dKnapsack(capacity, size, value, n) {
    var k = [];
    for(var i = 0; i <= capacity+1; i++) {
        k[i] = [];
    }
    for(var i = 0; i <= n; i++) {
        for(var w = 0; w <= capacity; w++) {
            if( i==0 || w==0) {
                k[i][w] = 0;
            }
            else if(size[i-1] <= w) {
                k[i][w] = max(value[i-1] + k[i-1][w-size[i-1]], k[i-1][w]);
            }
            else {
                k[i][w] = k[i-1][w];
            }
            console.log(k[i][w] + ' ');
        }
    }
    return k[n][capacity];
}