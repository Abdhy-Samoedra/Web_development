var star = '';
var length = 6;
for (let i = length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        star += '*'; 
    }
    star+='\n';
}
console.log(star);