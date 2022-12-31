// var angkot = 1;
// while (angkot <=10) {
//     console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
//     angkot++;
// }


// for (let angkot =1; angkot <= 10; angkot++) {
//     if (angkot <= 6) {
//         console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
//     }else{
//         console.log('Angkot No. ' + angkot + ' sedang lembur.');
//     }

// }

// for (let angkot = 1; angkot <= 10; angkot++) {
//     if (angkot <= 6) {
//         console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
//     } else if (angkot == 8 || angkot == 10){
//         console.log('Angkot No. ' + angkot + ' sedang lembur.');
//     } else {
//         console.log('Angkot No. ' + angkot + ' sedang tidak beroperasi.');
//     }
// }

// perbedaan antara == dan === dalam javascript
// == adalah perbandingan tanpa memperhatikan tipe data/hanya membandingkan nilainya saja
// === adalah perbandingan dengan memperhatikan tipe data/membandingkan nilai dan tipe datanya juga


var angka = parseInt(prompt('masukkan angka:'));
if (angka === 1) {
    alert('anda memasukkan angka 1');
} else if (angka === 2) {
    alert('anda memasukkan angka 2');
} else if (angka === 3) {
    alert('anda memasukkan angka 3');
} else {
    alert('anda memasukkan angka selain 1,2,3');
}