// Data Gejala, Aturan, dan Penyakit
const gejala = [
    { kode: "G1", nama: "Ikan sering menggosok-gosokkan tubuhnya ke dinding kolam" },
    { kode: "G2", nama: "Timbul bercak putih di tubuh ikan, terutama pada sirip" },
    { kode: "G3", nama: "Insang terlihat membengkak dan berwarna lebih pucat" },
    { kode: "G4", nama: "Pernafasan cepat atau tidak normal" },
    { kode: "G5", nama: "Nafsu makan menurun atau hilang" },
    { kode: "G6", nama: "ikan tampak lemas di permukaan air" },
    { kode: "G7", nama: "Muncul bintik-bintik putih kecil di tubuh ikan, termasuk sirip dan insang" },
    { kode: "G8", nama: "Sirip ikan terlihat robek atau rusak" },
    { kode: "G9", nama: "Ikan menjadi lebih lamban atau berenang di permukaan" },
    { kode: "G10", nama: "Pendarahan pada kulit, terutama di sekitar sirip, mata, mulut, dan insang" },
    { kode: "G11", nama: "Perut ikan membengkak atau kembung" },
    { kode: "G12", nama: "Warna tubuh ikan menjadi lebih gelap atau kekuningan" },
    { kode: "G13", nama: "Mata ikan menonjol (eksoftalmia) atau terlihat bengkak" },
    { kode: "G14", nama: "Ikan berenang tidak normal, sering kali berputar-putar atau melingkar" },
    { kode: "G15", nama: "Kematian ikan tiba-tiba dan massal" },
    { kode: "G16", nama: "Muncul luka atau borok pada tubuh ikan" },
    { kode: "G17", nama: "Insang tampak memucat atau rusak" },
    { kode: "G18", nama: "Ikan menunjukkan gejala stres, seperti bernafas cepat dan tampak gelisah" },
    { kode: "G19", nama: "Kehilangan keseimbangan, ikan mungkin berenang terbalik atau dalam posisi aneh" },
    { kode: "G20", nama: "Ikan tampak lemas dan sering diam di dasar kolam" },

    // Tambahkan semua gejala sesuai file CSV
];

const rules = [
    { kodePenyakit: "P1", gejala: ["G1", "G2", "G3", "G4", "G5", "G6"] },
    { kodePenyakit: "P2", gejala: ["G1", "G7", "G8", "G4", "G5", "G9"] },
    { kodePenyakit: "P3", gejala: ["G10", "G11", "G12", "G13", "G14", "G15"] },
    { kodePenyakit: "P4", gejala: ["G10", "G16", "G17", "G11", "G8", "G6"] },
    { kodePenyakit: "P5", gejala: ["G12", "G18", "G11",  "G5", "G20"] },
    { kodePenyakit: "P6", gejala: ["G14", "G19", "G18", "G13", "G6", "G15"] },
    // Tambahkan semua aturan
];

const penyakit = [
    { kode: "P1", nama: "Trichodiniasis", solusi:  "Jaga kualitas air kolam tetap bersih dan hindari penumpukan bahan organik yang dapat menjadi tempat berkembang biaknya parasit. Lakukan filtrasi dan aerasi air secara teratur. Karantina ikan baru sebelum dimasukkan ke dalam kolam utama untuk menghindari penyebaran parasit.", obat: "Formalin: Digunakan dengan dosis 25–30 ppm (miligram per liter) selama 1 jam, atau mandi singkat dengan dosis 150–200 ppm selama 30–60 menit untuk membunuh parasit. Malachite Green: Larutan 0,1 mg/L efektif digunakan untuk mengobati infeksi parasit ini. Garam (NaCl): Dosis 0,5–1% selama 24–48 jam dapat membantu mengurangi jumlah parasit pada ikan." },
    { kode: "P2", nama: "White Spot (Ichthyophthirius)", solusi: "Pertahankan suhu air di atas 25°C untuk menghambat perkembangan parasit. Lakukan karantina ikan baru selama 2 minggu sebelum dimasukkan ke dalam kolam utama. Jaga kebersihan kolam dan lakukan pergantian air secara berkala.", obat: "Malachite Green dan Formalin: Kombinasi kedua bahan ini efektif melawan protozoa penyebab white spot. Larutan 0,1 mg/L malachite green atau formalin 25 mg/L digunakan selama beberapa hari. Copper Sulfate (CuSO4): Dosis 0,1–0,2 mg/L dapat digunakan sebagai pengobatan untuk infeksi white spot. Garam (NaCl): Mandi singkat dalam larutan garam 3% selama beberapa menit membantu menghilangkan parasit." },
    { kode: "P3", nama: "Viral Hemorrhagic Septicemia (VHS)", solusi: "Lakukan karantina ikan baru sebelum dimasukkan ke dalam kolam utama. Jaga kualitas air tetap bersih dengan kontrol parameter air secara rutin. Hindari stres pada ikan, karena stres dapat menurunkan sistem imun mereka. Gunakan ikan dari sumber yang terpercaya dan bebas penyakit.", obat: "Tidak ada obat spesifik untuk VHS karena ini adalah penyakit virus. Pencegahan lebih ditekankan melalui manajemen kesehatan ikan dan lingkungan. Penggunaan antibiotik dapat membantu mencegah infeksi sekunder, namun tidak efektif melawan virus itu sendiri. Vaksinasi: Pada beberapa jenis ikan, vaksin khusus dapat tersedia untuk mencegah infeksi VHS." },
    { kode: "P4", nama: "Aeromonas (Aeromoniasis)", solusi: "Jaga kualitas air kolam dengan filtrasi dan aerasi yang baik. Hindari penumpukan bahan organik yang dapat menjadi tempat berkembang biaknya bakteri. Lakukan karantina ikan baru dan berikan pakan bergizi untuk meningkatkan sistem imun ikan. Kurangi stres pada ikan dengan menjaga kondisi lingkungan yang stabil.", obat: "Antibiotik: Penggunaan antibiotik seperti Oxytetracycline, Kanamycin, atau Enrofloxacin dapat efektif dalam mengatasi infeksi bakteri Aeromonas. Penggunaan antibiotik ini sebaiknya sesuai resep dokter hewan atau ahli perikanan. Kalium Permanganat (KMnO4): Dosis 2–4 mg/L dalam air kolam dapat membantu mengendalikan populasi bakteri. Garam (NaCl): Digunakan sebagai pengobatan tambahan dengan dosis 0,5–1% untuk mengurangi stres pada ikan dan memperbaiki insang."  },
    { kode: "P5", nama: "Jaundice ", solusi: "Pastikan kualitas air yang baik dengan pergantian air rutin dan pengelolaan limbah yang baik. Hindari penggunaan bahan kimia berbahaya atau polutan yang dapat merusak organ hati ikan. Berikan pakan yang bergizi dan seimbang serta hindari overfeeding. Jaga suhu air tetap stabil untuk mengurangi stres pada ikan.", obat:"Tidak ada obat khusus untuk Jaundice, tetapi pengelolaan lingkungan dan pemberian makanan yang baik bisa membantu memulihkan ikan. Antibiotik ringan mungkin diresepkan oleh dokter hewan untuk mencegah infeksi sekunder. Probiotik atau suplemen makanan dapat diberikan untuk meningkatkan kesehatan ikan." },
    { kode: "P6", nama: "Viral Nervous Necrosis (VNN)", solusi: "Karantina ikan baru selama 2–4 minggu sebelum dimasukkan ke dalam kolam utama. Gunakan induk dan benih dari sumber terpercaya yang bebas penyakit. Jaga kebersihan kolam dan hindari kondisi stres yang dapat memicu penularan virus. Hindari kepadatan ikan yang berlebihan dalam kolam.", obat: "Tidak ada pengobatan khusus untuk VNN, karena ini adalah infeksi virus. Fokus utama adalah pencegahan. Vaksinasi: Vaksinasi terhadap Nodavirus dapat diterapkan pada beberapa jenis ikan, namun ketersediaan vaksin tergantung pada spesies. Manajemen kualitas air dan pengendalian kondisi lingkungan yang optimal sangat penting untuk mencegah penyebaran virus ini." },
    // Tambahkan semua penyakit
];

// Menampilkan gejala di form
const gejalaList = document.getElementById("gejala-list");
gejala.forEach(item => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.kode;
    checkbox.value = item.kode;

    const label = document.createElement("label");
    label.htmlFor = item.kode;
    label.textContent = item.nama;

    const div = document.createElement("div");
    div.appendChild(checkbox);
    div.appendChild(label);

    gejalaList.appendChild(div);
});

// Proses diagnosa menggunakan forward chaining
document.getElementById("diagnose-button").addEventListener("click", () => {
    const selectedGejala = Array.from(document.querySelectorAll("#gejala-list input:checked"))
        .map(input => input.value);

    let diagnosis = null;

    rules.forEach(rule => {
        if (rule.gejala.every(gejala => selectedGejala.includes(gejala))) {
            diagnosis = penyakit.find(p => p.kode === rule.kodePenyakit);
        }
    });

    const result = document.getElementById("result");
    if (diagnosis) {
        document.getElementById("disease-name").textContent = `Penyakit: ${diagnosis.nama}`;
        document.getElementById("solution").textContent = `Solusi: ${diagnosis.solusi}`;
        document.getElementById("obat").textContent = `obat: ${diagnosis.obat}`;
    } else {
        document.getElementById("disease-name").textContent = "Penyakit tidak ditemukan.";
        document.getElementById("solution").textContent = "";
        document.getElementById("obat").textContent = "";
    }
    result.style.display = "block";
});
