// membuat object

// object kosong
// var mhs = {};


//1. pembuatan object cara literal
// dengan cara literal apabila kita ingin membuat banyak object dengan properti sama maka kita harus menulis ulang semua propertinya lagi
// var mhs = {
//     nama : 'abdhy samoedra',
//     umur : 29,
//     ipk : [22,33,44,55],
//     // object di dalam object
//     alamat : {
//         jalan :'jalan bandara',
//         kota : 'blitar',
//         provinsi : 'jawa timur'
//     }

// };
// var mhs2 = {
//     nama : 'smasul',
//     umur : 21,
//     ipk : [22,33,44,55],
//     // object di dalam object
//     alamat : {
//         jalan :'wlingi bandara',
//         kota : 'malang',
//         provinsi : 'jawa barat'
//     }

// };

//2. pembuatan object cara function declaration
// denga cara function declaration tidak perlu menulis ulang semua proprtinya apabila ingin menambahkan object baru
// function objectMhs(nama, nrp, email, jurusan) {
//     // deklarasi objek dulu
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;

//     return mhs;
// }
// // mengisi objectnya
// var mhs3 = objectMhs('samudra', '93000398039', 'abdhysamoedra030@gmail.com', 'informatika');
// var mhs4 = objectMhs('samud3r44a', '44434', 'abdhysamoed444ra030@gmail.com', 'inform444atika');

// 3. pembuatan object cara constructor
// merupakan cara yang akan sering digunakan dalam pembuatan object
// merupakan function khusus untuk membuat ObjectF
// misal :
// function Mahasiswa(nama, nrp, email, jurusan) {
//     // untuk nama function biasakan huruf besar untuk huruf pertama pada nama function
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
// }
// var mhs5 = new Mahasiswa('samudra', '93000398039', 'abdhysamoedra030@gmail.com', 'informatika');

