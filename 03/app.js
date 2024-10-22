var sum = 0
var number = 4
var add = (function (number){
 for (var i = 1; i<=number; i++) {
    sum = sum + i;
}
    return sum
}) (number)

console.log(add)



