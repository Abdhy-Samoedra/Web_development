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
// var arr = ['samu',3,4,"samudra",6];
// arr.shift();
// arr.shift();
// console.log(arr.join(' '));
// 4. slice and splice
// a. splice : untuk memasukkan elemen array ditengah tengah elemen
// rumus : 
// splice(indexAwal(mau memasukkan elemen yg berada disebeelah elemen apa), mauDihapusBerapa, elemen baru1,elemen baru 2,dst...);
// var arr = [1,2,3,4,5,6];
// var arr2 = [1,2,3,4,5,6];
// arr.splice(3,0,88,99,11);
// arr2.splice(2,2,66,77,54);
// console.log(arr);
// console.log(arr2);
// b. slice : untuk mengiris sebuah array menjadi array yang baru
// rumus
// slice(index awal,index akhir);
// note : index awal akan terbawa di array baru tapi index akhir tidak
// var arr = [1,2,3,4,5,6];
// var arr2 = arr.slice(0,2);
// console.log(arr);
// console.log(arr2)
// 5. foreach dan map
// a. forEeach : hampir sama seperti for l0op tapi lebih singkat
// misal :
// var angka = [1,2,3,4,5,6,7,8];
// // jika for loop biasa :
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
    
// }
// // jika pakai forEach:
// angka.forEach(function (e) {
//     console.log(e);
// });
// b. map : sama seperti forEach namun lebih baik karena mengembalikan nilai array
// misal : 
// var angka = [1,2,3,4,5,6,7,8];
// var angka2 = angka.map(function(e) {
//     return e*2;
// })
// console.log(angka2.join('-'));
// hal ini bisa dilakukan karena map mengembalikan nilai array yang dituju sedngkan foreach tidak mengembalikan nilai
// 6. sort : untuk mengurutkan Array
// var angka = [4,6,8,2,4,7,0,4,2];
// console.log(angka);
// angka.sort();
// console.log(angka);
// // pada fungsi sort ini akan diurutkan berdasarkan karakter pertama, misal
// var angka = [4,6,10,20,60,8,2,4,7,0,4,2];
// console.log(angka);
// // angka.sort();
// // agar urut secara benar maka menjadi :
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka);

// // sort array string
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);
// 7. filter and find : find(mengembalikan 1 nilai),filter(mengembalikan banyak nilai)
// a. filter : semacam search yang bisa mengembalikan banyak nilai, contoh:
var angka = [4,6,10,20,60,8,2,4,7,0,4,2];
var angka2 = angka.filter(function (a) {
    // return a == 7;
    return a >=4
})
console.log(angka2);
