// 1

console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// console.log(hello);
// hello = 'world';

// 2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// test();
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }

// 3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// function print(){
//     brendan;
//     console.log(brendan);
// }
// console.log(brendan);

// 4

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// console.log(food);
// eat();
// function eat(){
//     food;
//     console.log(food);
//     var food;
// }
// console.log(food);

// 5

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;
// mean();
// console.log(food);
// var food;
// mean = function() {
//     food;
//     console.log(food);
//     var food;
// }
// console.log(food);

// 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
//     genre;
//     console.log(genre);
//     var genre;
// }
// console.log(genre);

// 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo;
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo;
//     console.log(dojo);
//     var dojo;
// }
// console.log(dojo);

// 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}








