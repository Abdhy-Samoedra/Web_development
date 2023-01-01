// menghapus isi array 
// var arr = [1,2,3,4];
// arr[2] = undefined;
// menampilkan isi array
// var arr = [1,3,4,5,6];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
    
// }

// method array pada JS
// 1. length: untuk mengetahui ukuran array
// 2. join : untuk menggabungkan seluruh isi array dan mengubah menjadi string. contoh:
// var arr = ['samu',3,4,"samudra",6];
// console.log(arr.join(' '));
// 3. push,pop,shift,unshift : untuk menambah/menghapus elemen array
// a. push: untuk menambah elemen array diakhir indexnya,memasukkan elemen baru diakhir arraynya
// contoh :
// var arr = ['samu',3,4,"samudra",6];
// arr.push('akuuu',1,4);
// console.log(arr.join(' '));
// a. pop: untuk  menghapus elemen array diakhir indexnya,menghilangkan elemen yang ada diakhir arraynya
// contoh :
// var arr = ['samu',3,4,"samudra",6];
// arr.pop();
// arr.pop();
// console.log(arr.join(' '));
// c. unshift: untuk menambah elemen array diawal indexnya,memasukkan elemen baru diawal arraynya
// contoh :
// var arr = ['samu',3,4,"samudra",6];
// arr.unshift('akuuu',1,4);
// console.log(arr.join(' '));
// a. pop: untuk  menghapus elemen array diawal indexnya,menghilangkan elemen yang ada diawal arraynya
// contoh :
var arr = ['samu',3,4,"samudra",6];
arr.shift();
arr.shift();
console.log(arr.join(' '));