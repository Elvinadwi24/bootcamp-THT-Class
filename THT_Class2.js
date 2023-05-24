/* 2. Buat sebuah class dengan nama Student. Class ini akan menyimpan nama, 
NIM dan daftar nilai (disimpan dalam array) dari seorang mahasiswa. 
Di class ini juga dapat melakukan penambahaan data nilai baru ke dalam daftar nilai, 
mengambil nilai rata rata dari daftar nilai, 
dan menentukan predikat (A, B+, B, C+, C, D, E). */

class student {
    nama = 'elvina';
    nim = '210987**';
    daftarNilai = [90, 85, 80, 96];

    getdataStudent() {
        const s = {
            namaMahasiswa : this.nama,
            nimDariMahasiswa : this.nim,
            daftarNilaiMahasiswa : this.daftarNilai,
        };
        return s;
    }

    setDataStudent(nama,nim,daftarNilai){
        this.nama = nama;
        this.nim = nim;
        this.daftarNilai = daftarNilai;
    }
}

const m = new student();
let dataStudent = m.getdataStudent();
console.log(dataStudent);
m.setDataStudent('elvinaa', '210987**', [90, 85, 80, 96, 98, 100,'A', 'B+', 'B', 'C+', 'C', 'D', 'E'] )
dataStudent = m.getdataStudent();
console.log(dataStudent);
