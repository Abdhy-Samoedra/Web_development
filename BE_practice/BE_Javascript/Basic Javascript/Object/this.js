// this
// setiap membuiat function ataupun object dengan cara apapun, system pada JS akan otomatis menambhakna keyword this pada function/object tsb
// penerpana this pada tiap tiap cara membuat objek memiliki perbedaan seperti berikut :
// konteks 1
// apabila kita membuat this pada scope global, this merupakan window
// konteks 2 : penggunaan this pada 3 cara pembuatan objek:
// 1. funtion declaration
// dalam function declaration this mengembalikan Object global
// misal
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();

// 2.object literal
// dengan cara object literal, this mengembalikan object itu sendiri/object yang bersangkutan
// misal
// var obj = {umur : 22,nama:'abdhy'};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();

// 3. Constructor
function Halo () {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// pada contructor ini this juga mengembalikan Object, namun yang dikembalikan merupakan object yang
// baru dibuat. dalam kasus diatas this akan mengembalikan object obj1 dan obj2
