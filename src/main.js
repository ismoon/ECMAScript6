// ES6(ECMAScript2015) 문법 테스트

window.onload = function() {
    document.getElementById('variable').addEventListener('click', variables);
    document.getElementById('strings').addEventListener('click', stringMethods);
    document.getElementById('arrays').addEventListener('click', arrayIterator);
    document.getElementById('spread').addEventListener('click', spreadOperator);
    document.getElementById('arguments').addEventListener('click', function() {
        argumentsTest(1, 2, 3, 4, 5, 6);
    });
}

function variables() {          
    let str = '';
    const constStr = 'es6';
    const list = ['a','b','c'];    

    for(let i = 0; i < 5; i++ ) {
        str += i + ' ';
    }

    // console.log(i); 호출 불가능
    // constStr = 1; 재 할당 불가
    list.push('d'); 
    
    console.log(`let str > ${str}`);    
    console.log(`const str > ${constStr}`);
    console.log(`list > ${list}, list2 > ${list2}`);
    console.log(`list == list2 > ${list == list2}`);
}

function stringMethods() {
    let str = 'hello world!';
    let matchstr = 'hello';

    console.log(`str.startsWith(matchstr) > ${str.startsWith(matchstr)}`);
    console.log(`str.endsWith(matchstr) > ${str.endsWith(matchstr)}`);
    console.log(`str.includes('world') > ${str.includes('world')}`);
}

function arrayIterator() {
    let data = [1, 2, undefined, NaN, null, ''];

    for(let i = 0 ; i < data.length; i++) {
        console.log(`for data[${i}] > ${data[i]}`);
    }
  
    Array.prototype.getIndex = function() {};
    for(let idx in data) {
        console.log(`for in data[${idx}] > ${data[idx]}`);
    }

    for(let value of data) {
        console.log(`for of data > ${value}`);
    }

    data.forEach(function(value) {
        console.log(`forEach Method data > ${value}`);
    }); 
}

function spreadOperator() {
    let pre = ['apple', 'orange', 100, 200];
    let newData = [1, 2, 3, 4, ...pre, 5];

    console.log(`preData > ${pre}`);
    console.log(`newData > ${newData}`);
    console.log(`pre == newData > ${pre == newData}`);
    console.log(`sum(newData[0], newData[1], newData[2]) > ${sum(newData[0], newData[1], newData[2])}`);
    console.log(`sum.apply(null, newData) > ${sum.apply(null, newData)}`);
    console.log(`sum(...newData) > ${sum(...newData)}`);
}

function sum(a, b, c) {
    return a + b + c;
}

function argumentsTest() {
    let newArray = Array.from(arguments);
    let newData = newArray.map(value => value + '!');

    console.log(`argumentsTest(1, 2, 3, 4, 5, 6) > ${newData}`);
}