// pengelolaan angkot
// 1. mengetahui siapa supirnya
// 2. mengetahui jalur angkot
// 3. mengetahui uang dari hasil angkot
// 4. mengelola penumpang mengetahui siapa yang naik dan turun

function Angkot(supir, jalur, pendapatan, penumpang) {
    this.supir = supir;
    this.jalur = jalur;
    this.pendapatan = pendapatan;
    this.penumpang = penumpang;

    // untuk memasukkan penumpang baru kedalam array
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // untuk penumpang turun dan bayarnya
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            console.log('penumpang masih kosong');
            return false;
        }
        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                //penumpang turun di set undifined
                penumpang[i] = undefined;
                //lakukan pembayaran
                this.pendapatan += bayar;
                return this.penumpang;
            }

        }

    }
}


var akt1 = new Angkot('abdhy', ['wlingi', 'selopuro'], 0, []);
var akt2 = new Angkot('sulis', ['wlingi', 'talun'], 0, []);