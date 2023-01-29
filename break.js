/* 8. Run a Loop From 30 To 86. 
This Loop Will Stop If The Values Get Higher Than 44 */

var numbers = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,46, 47, 48, 49, 50, 
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
    74, 75, 76, 77, 78, 79, 80];

var i = 0;

while (i < numbers.length){
    var number = numbers[i];
    if (number == 45){
        break;
    }
    console.log(number);
    i++;
}