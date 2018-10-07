var nums = new BST();
nums.insert(20);
nums.insert(42);
nums.insert(21);
nums.insert(4);
nums.insert(12);
nums.insert(16);
nums.insert(52);
nums.insert(60);
nums.insert(48);
nums.insert(36);

console.log('Inorder traversal: ');
nums.inOrder(nums.root);

console.log('Preorder traversal: ');
nums.preOrder(nums.root);

console.log('Postorder traversal: ');
nums.postOrder(nums.root);

console.log('Min item: ' + nums.getMin())
console.log('Max item: ' + nums.getMax());

var value = [42, 5, 16, 60, 15, 20];
var found;

value.forEach(element => {
    found = nums.find(element);
    if (found !== null) {
        console.log('Found ' + element + ' in the BST.');
    } else {
        console.log(element + ' was not found in the BST.');
    }
});

nums.remove(60);
console.log('Inorder traversal: ');
nums.inOrder(nums.root);

//grade example
var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for(var i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if(grade === null) {
        gradedistro.insert(g);
    } else {
        gradedistro.update(g);
    }
}
console.log('grade list:');
console.log(gradedistro.inOrder(gradedistro.root));

var cont = 'y';
var check = 1;

while(check < 11) {
    var g = check * 10;
    var aGrade = gradedistro.find(g);
    if(aGrade === null) {
        console.log('No occurrences of ' + g);
    } else {
        console.log('Occurrences of ' + g + ': ' + aGrade.count);
    }
    g = g + 10;
    check++;
}


function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right; 
    this.show = show;
    this.count = 1;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
    this.getSmallest = getSmallest;
    this.update = update;
}

function insert(data) {
    var n = new Node(data, null, null);
    if(this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if(current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if(node !== null) {
        inOrder(node.left);
        console.log(node.show() + ' ');
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node !== null) {
        console.log(node.show() + ' ');
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if(node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + ' ');
    }
}

function getMin() {
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

function find(data) {
    var current = this.root;
    while(current && current.data != data) {
        if(data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return current;
}

function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if(node === null) {
        return null;
    }
    if(data == node.data) {
        //node has no children
        if(node.left === null && node.right === null) {
            return null;
        }
        //node has no left child
        if(node.left === null) {
            return node.right;
        }
        //node has no right child
        if(node.right === null) {
            return node.left;
        }
        //node has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

function getSmallest(node) {
    if(node.left == null) {
        return node;
    } else {
        return getSmallest(node.left);
    }
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    console.log(arr[0].toString() + ' ');
    for(var i = 1; i < arr.length; ++i) {
        console.log(arr[i].toString() + ' ');
        if(i % 10 === 0) {
            //console.log('\n');
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}