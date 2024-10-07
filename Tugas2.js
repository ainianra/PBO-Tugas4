class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun) {
        this.nama = nama,
        this.jenis = jenis,
        this.kapasitas = kapasitas,
        this.panjang = panjang,
        this.lebar = lebar,
        this.tahun = tahun;
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama} yang berjenis kapal ${this.jenis} dengan kapasitas ${this.kapasitas} orang, memiliki dimensi ${this.panjang} x ${this.lebar} dan dibuat tahun ${this.tahun}.`;
    }
}

let kapalPenumpang = new Kapal("Ferry Nusantara", "Ferry", 500, 200, 100, 2005);
console.log(kapalPenumpang.infoKapal());
document.getElementById("object").innerHTML = kapalPenumpang.infoKapal();

class InfoTiket extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun, hargaTiket) {
        super(nama, jenis, kapasitas, panjang, lebar, tahun);
        this.hargaTiket = hargaTiket;
        this._status = "Tersedia";
    }

    getStatusTiket() {
        return this._status;
    }

    setStatusTiket() {
        if (this._status === "Tersedia") {
            return `Tiket kapal ${this.nama} dengan harga Rp${this.hargaTiket} masih tersedia di loket.`;
        } else {
            return `Tiket kapal ${this.nama} dengan harga Rp${this.hargaTiket} sudah habis terjual.`;
        }
    }

    infoHargaTiket() {
        return `Harga tiket kapal ${this.nama} adalah Rp${this.hargaTiket}.`;
    }

    infoKapal() {
        return super.infoKapal() + ` ${this.setStatusTiket()}`;
    }
}

let tiketKapal = new InfoTiket("Ferry Nusantara", "Feri", 500, 100, 25, 2015, 300000);
console.log(tiketKapal.infoHargaTiket());
console.log(tiketKapal.getStatusTiket());
document.getElementById("object1").innerHTML = tiketKapal.setStatusTiket();
console.log(tiketKapal.infoKapal());

class JadwalKeberangkatan extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun, jadwal) {
        super(nama, jenis, kapasitas, panjang, lebar, tahun);
        this.jadwal = jadwal;
    }

    infoJadwal() {
        return `Jadwal keberangkatan kapal ${this.nama} pada pukul ${this.jadwal} WIB.`;
    }

    infoKapal() {
        return super.infoKapal() + ` ${this.infoJadwal()}`;
    }
}

let jadwalBerlayar = new JadwalKeberangkatan("Ferry Nusantara", "Feri", 500, 100, 25, 2015, "09:30");
console.log(jadwalBerlayar.infoJadwal());
document.getElementById("object2").innerHTML = jadwalBerlayar.infoJadwal();
console.log(jadwalBerlayar.infoKapal());

class RuteKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun, rute) {
        super(nama, jenis, kapasitas, panjang, lebar, tahun);
        this._rute = rute;
    }

    infoRute() {
        return `Kapal ${this.nama} berlayar melalui rute ${this._rute}.`;
    }

    infoKapal() {
        return super.infoKapal() + ` ${this.infoRute()}`;
    }
}

let ruteBerlayar = new RuteKapal("Ferry Nusantara", "Feri", 500, 100, 25, 2015, "Labuan Bajo-Ancol");
console.log(ruteBerlayar.infoRute());
document.getElementById("object3").innerHTML = ruteBerlayar.infoRute();
console.log(ruteBerlayar.infoKapal());

class CrewKapal extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, tahun, nahkoda, jumlahCrew) {
        super(nama, jenis, kapasitas, panjang, lebar, tahun);
        this.namaNahkoda = nahkoda;
        this.jumlahCrew = jumlahCrew;
    }

    infoCrew() {
        return `Kapal ${this.nama} dinahkodai oleh Sir ${this.namaNahkoda} dan diawaki oleh ${this.jumlahCrew} orang kru.`;
    }

    infoKapal() {
        return super.infoKapal() + ` ${this.infoCrew()}`;
    }
}

let Crew = new CrewKapal("Ferry Nusantara", "Feri", 500, 100, 25, 2015, "Maxwell", 30);
console.log(Crew.infoCrew());
document.getElementById("object4").innerHTML = Crew.infoCrew();
console.log(Crew.infoKapal()); 