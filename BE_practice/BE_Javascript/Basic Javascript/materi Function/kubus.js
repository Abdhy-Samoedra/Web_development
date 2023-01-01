function jmlVolume(a, b) {
    var volumeA;
    var volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;

    hasil = volumeA + volumeB;
    return hasil;

}
alert(jmlVolume(5,5));