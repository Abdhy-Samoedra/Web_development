// alert('hello world')
// alert('hello')
// alert('world')

// bisa ada inputtan dari user, dan inputtannya bisa ditampung kedalam variabel
// var nama = prompt('What is your name?');
// alert(nama);

//untuk meminta konfirmasi dari user , biasanya untuk konfirmasi apakah user ingin menghapus data atau tidak
//menngembalikan nilai true atau false(boolean)

// prompt adalah meminta inputan user melalui pop up box, yang ditampung menjadi string
alert('selamat datang');
var tes = confirm('sudah makan?');
while (tes == true) {
    tes = prompt('makan apa?');
    alert('aku makan ' + tes);
    tes = confirm('coba lagi gak?');
}