// function angka(a) {
//     if (a ==0) {
//         return
//     }
//     console.log(a);
//     angka(a-1);
// }
// angka(10);

// faktorial

function faktorial(a) {
    if (a == 0) {
        return 1;
    }    
    return a * faktorial(a-1);
}
console.log(faktorial(5));