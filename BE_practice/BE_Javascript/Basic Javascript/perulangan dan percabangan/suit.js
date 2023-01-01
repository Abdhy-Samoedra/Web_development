var p = prompt('pilih : gajah,semut,orang');


//akan merandom urutan angka antara 0-1
var comp = Math.random();

var komputer = '';
if (comp < 4) {
    komputer = 'gajah';
} else if (comp > 4 && comp < 7) {
    komputer = 'semut';
} else {
    komputer = 'orang';
}

var hasil = '';

if (komputer == p) {
    hasil = 'seri';
} else if (komputer == 'semut') {
    if (p == 'orang') {
        hasil = 'menang'
    } else {
        hasil = 'kalah';
    }
} else if (komputer == 'gajah') {
    if (p == 'semut') {
        hasil = 'menang'
    } else {
        hasil = 'kalah';
    }
} else if (komputer == 'orang') {
    if (p == 'gajah') {
        hasil = 'menang'
    } else {
        hasil = 'kalah';
    }
}

alert('kamu memilih ' + p + 'dan komputer memilih ' + komputer+'hasilnya adalah'+hasil);
