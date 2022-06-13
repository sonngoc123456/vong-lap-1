let number = +prompt('enter your number');
let total = number;
while (number != -1) {
    number = +prompt('enter your number');
    total += number;
}
alert(total);