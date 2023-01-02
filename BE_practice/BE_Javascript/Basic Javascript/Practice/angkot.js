// note : disini saya sudah mencoba antar menggunakan undefined dan 0 ternyata so far sama dan tidak ada perbedaan
var penumpang = [];
// var cari = penumpang.find(function (nama,penumpang) {
//     return nama == penumpang
// });
var tambahPenumpang = function (nama, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambah penumpang diawal array, menggunakan push karena jika kosong walaupun diisi dari belakang akan menjadi paling depan 
        penumpang.push(nama);
        // kembalikan isi array dan keluar function
        return penumpang;
    }
    // jika penumpang nya ada, maka telusuri semua dari awal
    else {
        for (let i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // tambah penumpang di kursi tsb
                penumpang[i] = nama;
                // kembalikan isi array dan keluar function
                return penumpang;
            }
            else if (penumpang[i] == nama) {
                // jika ada penumpang dengan nama sama maka munculkan pesan
                console.log(nama + 'penumpang sudah didalam angkot');
                // kembalikan isi array dan keluar function
                return penumpang;
            }
            else if (i == penumpang.length - 1) {
                // jika seluruh kursi terisi
                // tambah penumpang diakhir array
                penumpang.push(nama);
                // kembalikan isi array dan keluar function
                return penumpang;
            }
        }
    }
}


var hapusPenumpang = function (nama, penumpang) {
    // jika angkot kosong keluarkan pesan
    if (penumpang.length == 0) {
        console.log('angkot masih kosong');
    }
    // jika ada isinya
    else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == nama) {
                // mencari nama penumopang yang akan dihapus, jika sudah ketemu hapus dengan isi undidfined
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                // jika sudajh di cek sampai kursi terakhir tapi nama tidak ditemukan, keluarkn pesan
                console.log('penumpang tidak ditemukan');
                return penumpang;
            }

        }
    }

}