let nums = [45, 65, 77, 34]
nums.forEach(function (num) {
    console.log(num);
});

myForEach(nums, function (num) {
    console.log(num);
});

function myForEach(arr, func) {
    // loop through array
    for (var i = 0; i < arr.length; i++) {
        // call func for each item in array
        func(arr[i]);
    }
}

var colors = ["red", "orange", "yellow"];
myForEach(colors, alert)

    (function () {
        console.log("IM A FUNCTION!");
    })

    // add parenthesis behind to print the console.log not the whole function
    (function () {
        console.log("IM A FUNCTION!");
    })()

myForEach(colors, function () { alert("HI") })()

myForEach(colors, function (color) {
    console.log(color);
});

Array.prototype.myForEach = function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }` `

}
function (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);

    }
}
let friends = ["charlie", "dave", "maddy", "caitlyn"];

friends.myForEach(alert)

friends.myForEach(function (name) { 
    console.log ( "I love " + name )
})