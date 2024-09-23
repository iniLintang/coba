// script.js

// Fungsi untuk menghitung denda berdasarkan tanggal kembali
document.getElementById('tglKembali').addEventListener('change', function() {
    const tglPinjam = new Date(document.getElementById('tglPinjam').value);
    const tglKembali = new Date(document.getElementById('tglKembali').value);
    const maxPinjam = 3; // Batas maksimal peminjaman adalah 3 hari
    const dendaPerHari = 1500; // Denda per hari adalah 1500

    const selisihWaktu = tglKembali - tglPinjam;
    const selisihHari = selisihWaktu / (1000 * 3600 * 24); // Menghitung selisih hari

    let denda = 0;
    if (selisihHari > maxPinjam) {
        denda = (selisihHari - maxPinjam) * dendaPerHari;
    }

    document.getElementById('denda').value = denda;
});

// Fungsi untuk memproses pembayaran dan menghitung kembalian
function prosesPembayaran() {
    const denda = parseInt(document.getElementById('denda').value) || 0;
    const dibayarkan = parseInt(document.getElementById('dibayarkan').value) || 0;

    if (dibayarkan >= denda) {
        const kembalian = dibayarkan - denda;
        document.getElementById('kembalian').value = kembalian;
        alert('Pembayaran Berhasil');
    } else {
        alert('Jumlah yang dibayarkan kurang');
    }
}