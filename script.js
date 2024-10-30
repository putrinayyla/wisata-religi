// JavaScript untuk validasi form Kontak
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Pesan berhasil dikirim!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Mohon isi semua kolom!");
    }
});

// Mapbox untuk Peta di bagian Alamat
mapboxgl.accessToken = '-6.67240, 108.54083'; // Ganti dengan API Key Mapbox kamu
const map = new mapboxgl.Map({
    container: 'map', // id elemen HTML untuk peta
    style: https://wego.here.com/p/eJyNkEFLxDAUhP9KyEkhLWmbZktvsgdZF0FQvL8kb7vRbFLaFCnL%2FnfTUm8iXuYw37x5MFcKWuM40vZKHUTaZjKXu1Iw6nxH24I3eS14U90YBWOGNUlf8AKfcAFPXief9HHyk%2B%2FIE0TLyMMYwQM5osvZRj5WsLcDquDJEdTUQ0TPiKilqBg5eBM8jhYoozqRLgzzwaRHDedZs0vCCykXGCYfh3kfDCaaDLukzjhg25ux7R1obCvJAZQpslNZnKqyUBWmjlJIzZXSUhoppBI1Lt%2FWi7e53%2Br64Gy0Gty7xa8fa0xW8P8YKNro8O95yN3zgn4B2zr39PYNzJt86A%3D%3D?map=-6.6724,108.54083,16,
    center: [-6.67240, 108.54083], // Koordinat Demak sebagai contoh
    zoom: 14
});

const marker = new mapboxgl.Marker()
    .setLngLat([-6.67240, 108.54083]) // Koordinat yang sama untuk penanda lokasi
    .addTo(map);
