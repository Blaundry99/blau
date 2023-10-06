const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const time = urlParams.get("time")
const waktuPrgf = document.querySelector(".waktu")

const parts = time.split(/[-:]/);

const tanggal = parts[0];
const bulan = parts[1];
const tahun = parts[2];
const jam = parts[4];
const menit = parts[5];
const detik = parts[6];

waktuPrgf.textContent = "Kapan pesan ini ada?, pada: ${tanggal}-${bulan}-${tahun} pukul ${jam}:${menit}:${detik}";
