import { Question } from '../types';

export const indonesianQuestionsPaket1: Question[] = [
  {
    id: 1,
    subject: 'bahasa-indonesia',
    topic: 'Ide Pokok & Literasi Membaca',
    passage: 'Perubahan iklim global bukan lagi sekadar isu ekologis di masa depan, melainkan realitas krisis yang tengah berlangsung. Peningkatan frekuensi anomali cuaca seperti El Niño ekstrem telah mendisrupsi kalender tanam tradisional petani di berbagai wilayah kepulauan Indonesia. Ketidakpastian curah hujan mengakibatkan gagal panen berulang pada komoditas pangan pokok seperti padi dan jagung. Tanpa mitigasi berbasis kearifan lokal yang dipadukan dengan adopsi teknologi agroklimatologi presisi, ketahanan pangan nasional akan menghadapi kerentanan sistemik yang berimbas pada lonjakan inflasi bahan pokok.',
    prompt: 'Ide pokok yang terkandung dalam paragraf tersebut adalah...',
    options: [
      { key: 'A', text: 'Pentingnya kalender tanam tradisional bagi petani kepulauan' },
      { key: 'B', text: 'Disrupsi iklim global yang mengancam ketahanan pangan nasional' },
      { key: 'C', text: 'Pengaruh fenomena El Niño ekstrem terhadap kenaikan harga padi' },
      { key: 'D', text: 'Perlunya penggunaan teknologi agroklimatologi presisi di desa' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf di atas diawali dengan premis perubahan iklim global yang telah mendisrupsi rantai produksi pangan (pertanian) dan diakhiri dengan peringatan ancaman terhadap ketahanan pangan nasional. Ide pokok mencakup keseluruhan inti gagasan yaitu ancaman disrupsi iklim global terhadap ketahanan pangan nasional (Opsi B). Opsi A, C, dan D merupakan gagasan penjelas pendukung.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 2,
    subject: 'bahasa-indonesia',
    topic: 'Kesimpulan Implisit & Inferensi',
    passage: 'Sebuah penelitian longitudinal selama lima tahun terhadap 1.200 remaja perkotaan menunjukkan korelasi positif antara durasi waktu layar (screen time) pasif sebelum tidur dengan penurunan kualitas fase tidur gelombang lambat (deep sleep). Remaja yang terpapar cahaya biru gawai lebih dari dua jam sebelum istirahat malam rata-rata mengalami penurunan daya konsentrasi sebesar 28% saat mengikuti pembelajaran matematika di pagi hari berikutnya, meskipun durasi total mereka berada di tempat tidur mencapai 8 jam.',
    prompt: 'Berdasarkan teks di atas, simpulan implisit yang paling tepat dan logis adalah...',
    options: [
      { key: 'A', text: 'Total durasi waktu di tempat tidur tidak serta-merta menjamin tercapainya kualitas tidur yang memulihkan fungsi kognitif.' },
      { key: 'B', text: 'Pelajaran matematika adalah mata pelajaran tersulit bagi remaja yang kerap menggunakan telepon pintar.' },
      { key: 'C', text: 'Semua jenis paparan gawai menyebabkan insomnia kronis tanpa memedulikan waktu penggunaannya.' },
      { key: 'D', text: 'Remaja perkotaan sebaiknya tidak menggunakan gawai sama sekali pada malam hari agar cerdas.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan bahwa meski durasi di tempat tidur 8 jam, penurunan fase tidur gelombang lambat akibat cahaya gawai tetap menurunkan daya konsentrasi. Simpulan implisitnya adalah kuantitas waktu tidur (8 jam di ranjang) tidak menjamin kualitas tidur restoratif yang memulihkan fungsi kognitif otak (Opsi A).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 3,
    subject: 'bahasa-indonesia',
    topic: 'Evaluasi Argumen & Sikap Penulis',
    passage: 'Gagasan digitalisasi menyeluruh buku teks sekolah menjadi buku elektronik (e-book) sering digadang-gadang sebagai langkah revolusioner hemat biaya. Namun, para pengambil kebijakan kerap abai terhadap kesenjangan infrastruktur digital antara sekolah di kota metropolitan dan sekolah di daerah 3T (terdepan, terluar, tertinggal). Memaksakan transisi digital serempak tanpa pemerataan elektrifikasi dan jaringan serat optik justru akan memperlebar jurang disparitas mutu pendidikan, bukan menghapusnya.',
    prompt: 'Sikap atau pandangan penulis terhadap digitalisasi buku teks dalam bacaan tersebut adalah...',
    options: [
      { key: 'A', text: 'Mendukung penuh transisi buku elektronik karena revolusioner dan efisien anggaran' },
      { key: 'B', text: 'Kritis dan mengingatkan risiko ketimpangan bila digitalisasi dipaksakan tanpa kesiapan infrastruktur 3T' },
      { key: 'C', text: 'Menolak secara mutlak penggunaan perangkat digital dalam proses belajar-mengajar' },
      { key: 'D', text: 'Netral tanpa memberikan kecenderungan opini terhadap disparitas mutu pendidikan' }
    ],
    correctAnswer: 'B',
    explanation: 'Penulis menunjukkan sikap skeptis-kritis yang berdasar. Penulis tidak menolak teknologi secara apriori, namun mengingatkan bahwa kebijakan digitalisasi tanpa kesiapan sarana di kawasan 3T akan memperparah jurang ketimpangan pendidikan (Opsi B).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 4,
    subject: 'bahasa-indonesia',
    topic: 'Kalimat Efektif & Struktur Tata Bahasa',
    passage: 'Perhatikan kalimat-kalimat berikut:\n(1) Kepada seluruh para peserta upacara dimohon untuk berdiri dengan tertib.\n(2) Pemerintah berupaya meningkatkan mutu pendidikan demi untuk mencerdaskan generasi penerus bangsa.\n(3) Menurut penelitian para ilmuwan membuktikan bahwa hutan mangrove mampu menyerap emisi karbon empat kali lebih tinggi.\n(4) Hasil penelitian membuktikan bahwa hutan bakau mampu menyerap karbon empat kali lebih besar daripada hutan tropis daratan.',
    prompt: 'Kalimat yang memenuhi kaidah kalimat efektif, tidak rancu, dan bebas dari pemborosan kata (pleonasme) adalah kalimat nomor...',
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'D',
    explanation: 'Kalimat (1) rancu dan boros: "seluruh para" (pleonasme) serta diawali preposisi subjek "kepada". Kalimat (2) memuat pleonasme "demi untuk". Kalimat (3) kehilangan subjek karena penggunaan "menurut" di depan predikat "membuktikan". Kalimat (4) memiliki struktur subjek-predikat-objek yang gramatikal, hemat, lugas, dan efektif.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 5,
    subject: 'bahasa-indonesia',
    topic: 'Ejaan & Tanda Baca (EYD V)',
    passage: 'Perhatikan penulisan kalimat kutipan langsung dan gelar berikut:\n(1) Dr. Ir. H. Sudirman, M. Sc. dilantik menjadi dekan baru kemarin.\n(2) "Kapan naskah proposal ini harus kami serahkan, Bu?" tanya ketua panitia.\n(3) Ibu menasehati kami agar jangan mudah tergiur oleh harga yang murah tetapi tidak berkualitas.\n(4) Kita harus meng-Indonesia-kan istilah-istilah asing yang belum lazim di dengar.',
    prompt: 'Kalimat yang penulisan ejaan dan tanda bacanya tepat sesuai Pedoman Ejaan Bahasa Indonesia yang Disempurnakan (EYD V) adalah...',
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat (2) benar: tanda petik mengapit kutipan, koma sebelum sapaan "Bu", huruf kapital pada sapaan, tanda tanya sebelum tanda petik penutup. Kalimat (1) salah pada spasi gelar "M. Sc." (seharusnya "M.Sc."). Kalimat (3) memuat kata tidak baku "menasehati" (baku: "menasihati"). Kalimat (4) salah penulisan "di dengar" (seharusnya dirangkai sebagai awalan "didengar").',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 6,
    subject: 'bahasa-indonesia',
    topic: 'Makna Kata Kontekstual & Diksi',
    passage: 'Restorasi terumbu karang di kawasan perairan Raja Ampat memerlukan pendekatan simbiotik antara lembaga konservasi dan masyarakat adat setempat. Kearifan sasi laut yang dihidupkan kembali berfungsi sebagai instrumen proteksi alami dari eksploitasi berlebih.',
    prompt: 'Makna kontekstual kata "simbiotik" dalam kutipan teks tersebut adalah...',
    options: [
      { key: 'A', text: 'Bersifat sepihak demi keuntungan komersial' },
      { key: 'B', text: 'Saling bergantung dan memberi manfaat bersama secara harmonis' },
      { key: 'C', text: 'Bersifat berlawanan arah namun saling menetralkan pengaruh' },
      { key: 'D', text: 'Didasarkan pada persaingan ketat dalam pemanfaatan sumber daya' }
    ],
    correctAnswer: 'B',
    explanation: 'Secara etimologi dan kontekstual dalam biologi maupun sosiologi, istilah "simbiotik" merujuk pada relasi timbal balik yang saling mendukung dan memberikan kemanfaatan mutualistis antara dua pihak yang berinteraksi (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 7,
    subject: 'bahasa-indonesia',
    topic: 'Fakta vs Opini',
    passage: 'Perhatikan kalimat-kalimat berikut:\n(1) Candi Borobudur dibangun pada abad ke-8 masehi oleh wangsa Syailendra di Kabupaten Magelang, Jawa Tengah.\n(2) Kemegahan relief dinding Candi Borobudur merupakan mahakarya seni terhebat yang tiada tandingannya di seluruh dunia.\n(3) Pada tahun 1991, UNESCO menetapkan kompleks Candi Borobudur sebagai Situs Warisan Dunia.\n(4) Berkunjung ke situs bersejarah tersebut diperkirakan mampu membangkitkan rasa nasionalisme pada setiap pengunjung.',
    prompt: 'Pasangan kalimat yang memuat fakta objektif adalah...',
    options: [
      { key: 'A', text: '(1) dan (2)' },
      { key: 'B', text: '(1) dan (3)' },
      { key: 'C', text: '(2) dan (4)' },
      { key: 'D', text: '(3) dan (4)' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat (1) dan (3) menyajikan data historis dan ketetapan resmi UNESCO yang dapat diverifikasi kebenarannya secara empiris (fakta). Kalimat (2) memuat kata emotif subjektif "terhebat yang tiada tandingannya" (opini). Kalimat (4) memuat modalitas dugaan "diperkirakan" (opini).',
    difficulty: 'Sedang'
  },
  {
    id: 8,
    subject: 'bahasa-indonesia',
    topic: 'Hubungan Kausalitas / Sebab-Akibat',
    passage: 'Penimbunan sampah plastik di saluran pembuangan kota memicu pendangkalan volume drainase primer. Akibatnya, saat intensitas hujan monsun meningkat drastis, debit air meluap ke badan jalan raya dan permukiman warga hingga menimbulkan kerugian material miliaran rupiah.',
    prompt: 'Hubungan sebab-akibat langsung yang dijelaskan dalam cuplikan teks di atas adalah...',
    options: [
      { key: 'A', text: 'Hujan monsun menyebabkan bertambahnya volume timbunan plastik di sungai.' },
      { key: 'B', text: 'Pendangkalan drainase akibat sampah plastik menyebabkan ketidakmampuan menampung debit air hujan sehingga timbul luapan banjir.' },
      { key: 'C', text: 'Kerugian material miliaran rupiah menyebabkan pendangkalan saluran air kota.' },
      { key: 'D', text: 'Badan jalan raya yang rusak mempercepat akumulasi sampah di permukiman.' }
    ],
    correctAnswer: 'B',
    explanation: 'Rantai kausalitas teks: Sampah plastik -> pendangkalan drainase -> air tidak tertampung saat hujan lebat -> banjir luapan yang merugikan warga (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 9,
    subject: 'bahasa-indonesia',
    topic: 'Konjungsi Antarkalimat',
    passage: 'Pengembangan kendaraan listrik nasional terus didorong guna menekan jejak karbon sektor transportasi. [...], adopsi massal kendaraan listrik masih terkendala oleh minimnya ketersediaan stasiun pengisian kendaraan listrik umum (SPKLU) di luar kota-kota besar Pulau Jawa.',
    prompt: 'Konjungsi antarkalimat yang paling tepat dan logis untuk mengisi bagian rumpang tersebut adalah...',
    options: [
      { key: 'A', text: 'Oleh sebab itu' },
      { key: 'B', text: 'Akan tetapi' },
      { key: 'C', text: 'Selain itu' },
      { key: 'D', text: 'Dengan demikian' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat pertama menyampaikan upaya positif pendorongan kendaraan listrik, sedangkan kalimat kedua menyampaikan rintangan/kendala yang dihadapi di lapangan. Hubungan kedua kalimat bersifat pertentangan/kontrastif, sehingga konjungsi yang tepat adalah "Akan tetapi" (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Majas & Unsur Intrinsik Cerita',
    passage: 'Malam itu, angin pegunungan bertiup kencang, mengetuk-ngetuk jendela kayu tua rumah kami seolah hendak mengabarkan firasat buruk yang belum terucap. Kakek duduk diam di sudut perapian; tatapan matanya mengembara menembus kegelapan lembah yang pekat.',
    prompt: 'Majas yang dominan digunakan pada klausa "angin pegunungan bertiup kencang, mengetuk-ngetuk jendela kayu tua rumah kami seolah hendak mengabarkan firasat buruk" adalah...',
    options: [
      { key: 'A', text: 'Hiperbola' },
      { key: 'B', text: 'Personifikasi' },
      { key: 'C', text: 'Metafora' },
      { key: 'D', text: 'Litotes' }
    ],
    correctAnswer: 'B',
    explanation: 'Personifikasi adalah gaya bahasa yang melekatkan sifat, perilaku, atau tindakan insan manusia (seperti "mengetuk jendela", "mengabarkan firasat") pada benda mati atau gejala alam seperti angin (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 11,
    subject: 'bahasa-indonesia',
    topic: 'Evaluasi Teks Resensi & Kritik Buku',
    passage: 'Novel "Laskar Pelangi" karya Andrea Hirata berhasil melukiskan keteguhan anak-anak Belitong dalam memperjuangkan hak belajar di tengah keterbatasan fasilitas sekolah. Kekuatan novel ini bertumpu pada diksi puitis dan metafora lokal yang kaya. Kendati demikian, deskripsi beberapa teori ilmiah yang disisipkan narator terasa agak berlebihan dan sesekali memperlambat tempo narasi utama.',
    prompt: 'Pernyataan yang memuat kelemahan buku dalam teks resensi di atas adalah...',
    options: [
      { key: 'A', text: 'Kisah keteguhan anak-anak Belitong terasa klise dan membosankan.' },
      { key: 'B', text: 'Penggunaan diksi lokal menyulitkan pembaca awam memahami cerita.' },
      { key: 'C', text: 'Sisipan deskripsi teori ilmiah terasa berlebihan dan sesekali memperlambat laju tempo cerita.' },
      { key: 'D', text: 'Latar tempat sekolah yang serba terbatas tidak digambarkan secara realistis.' }
    ],
    correctAnswer: 'C',
    explanation: 'Bagian kelemahan dalam resensi ditandai oleh frasa kontrastif "Kendati demikian...": deskripsi teori ilmiah yang disisipkan narator terasa agak berlebihan dan memperlambat tempo narasi (Opsi C).',
    difficulty: 'Sedang'
  },
  {
    id: 12,
    subject: 'bahasa-indonesia',
    topic: 'Kepaduan Paragraf & Kalimat Sumbang',
    passage: 'Perhatikan paragraf berikut:\n(1) Museum Fatahillah di Jakarta menyajikan rekaman visual perjalanan sejarah Batavia dari masa kolonial hingga pascakemerdekaan.\n(2) Berbagai artefak seperti meriam kuno, prasasti, dan replika kamar tahanan bawah tanah dirawat secara berkala.\n(3) Tiket penerbangan rute domestik mengalami kenaikan signifikan menjelang musim liburan akhir tahun.\n(4) Koleksi tersebut menjadi magnet edukasi bagi para pelajar dan pelancong mancanegara yang ingin menelusuri akar sejarah kota.',
    prompt: 'Kalimat sumbang (tidak padu) yang merusak koherensi paragraf di atas adalah kalimat nomor...',
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'C',
    explanation: 'Paragraf membahas Museum Fatahillah dan artefak sejarahnya. Kalimat (3) tiba-tiba membahas harga tiket pesawat terbang menjelang libur akhir tahun, yang sama sekali tidak relevan dengan tema koleksi sejarah museum.',
    difficulty: 'Sedang'
  },
  {
    id: 13,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Teks Eksplanasi',
    passage: 'Tsunami terpicu ketika lempeng tektonik di dasar laut mengalami pergeseran vertikal mendadak akibat patahan sesar. Patahan tersebut menggeser volume air laut dalam skala gigantik dari posisi ekuilibriumnya. Gelombang yang tercipta melaju di samudra terbuka dengan kecepatan ratusan kilometer per jam, sebelum akhirnya memampat dan membubung tinggi ketika memasuki perairan dangkal di dekat garis pantai.',
    prompt: 'Pertanyaan yang jawabannya TIDAK termuat dalam teks eksplanasi tersebut adalah...',
    options: [
      { key: 'A', text: 'Apa pemicu utama pergeseran air laut yang melahirkan gelombang tsunami?' },
      { key: 'B', text: 'Mengapa gelombang tsunami membubung tinggi saat mencapai pesisir dangkal?' },
      { key: 'C', text: 'Berapa jumlah korban jiwa rata-rata pada setiap peristiwa tsunami di Asia?' },
      { key: 'D', text: 'Bagaimana pergerakan gelombang tsunami saat berada di samudra lepas?' }
    ],
    correctAnswer: 'C',
    explanation: 'Teks menjelaskan mekanisme fisik geologis timbulnya tsunami, pergerakan di samudra, dan pembubungannya di perairan dangkal. Teks sama sekali tidak menyebutkan data statistik jumlah korban jiwa di Asia (Opsi C).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 14,
    subject: 'bahasa-indonesia',
    topic: 'Pola Pengembangan Paragraf',
    passage: 'Kota Yogyakarta dan Kota Surakarta memiliki jejak kultural Dinasti Mataram Islam yang sama-sama kuat. Keduanya mewarisi tradisi tari keraton, arsitektur joglo keraton, dan sentra kerajinan batik klasik bernilai tinggi. Perbedaannya, gaya motif batik Yogyakarta cenderung dominan dengan latar putih (putihan) yang tegas, sedangkan motif batik Surakarta lebih banyak mengadopsi latar cokelat keemasan (sogan) yang anggun dan luwes.',
    prompt: 'Pola pengembangan paragraf yang digunakan penulis dalam teks tersebut adalah...',
    options: [
      { key: 'A', text: 'Komparasi dan kontras (perbandingan dan pertentangan)' },
      { key: 'B', text: 'Kronologis / urutan waktu' },
      { key: 'C', text: 'Generalisasi induktif' },
      { key: 'D', text: 'Definisi nominal' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf tersebut memaparkan persamaan (keduanya mewarisi tradisi Mataram) sekaligus perbedaan (warna latar motif batik), yang merupakan ciri khas pola komparasi dan kontras (perbandingan-pertentangan) (Opsi A).',
    difficulty: 'Sedang'
  },
  {
    id: 15,
    subject: 'bahasa-indonesia',
    topic: 'Struktur Teks Pidato Persuasif',
    passage: '"Saudara-saudara sebangsa dan setanah air, pelestarian lingkungan hidup bukanlah beban yang diwariskan generasi tua, melainkan investasi masa depan bagi anak cucu kita. Mari kita mulai dari langkah kecil: memilah sampah dari dapur rumah sendiri, menolak kantong plastik sekali pakai, dan menanam pohon di pekarangan. Masa depan bumi kita ditentukan oleh tindakan nyata kita hari ini!"',
    prompt: 'Bagian kutipan teks pidato di atas termasuk dalam struktur...',
    options: [
      { key: 'A', text: 'Pernyataan posisi / isu' },
      { key: 'B', text: 'Argumen logis pendukung' },
      { key: 'C', text: 'Penguatan pernyataan posisi / ajakan bertindak (pesan persuasif)' },
      { key: 'D', text: 'Salam pembuka formal' }
    ],
    correctAnswer: 'C',
    explanation: 'Kutipan memuat kalimat seruan persuasif ("Mari kita mulai...", "Masa depan bumi ditentukan...") yang merupakan bagian penutup orasi berupa penguatan komitmen dan ajakan nyata bertindak (call to action).',
    difficulty: 'Sedang'
  },
  {
    id: 16,
    subject: 'bahasa-indonesia',
    topic: 'Literasi Kritis & Validitas Informasi',
    passage: 'Sebuah pesan berantai di media sosial mengklaim bahwa meminum air rebusan daun tanaman herbal tertentu mampu menyembuhkan segala jenis penyakit infeksi virus secara instan dalam 24 jam. Namun, juru bicara Ikatan Dokter Indonesia (IDI) menegaskan bahwa uji klinis fase III belum pernah dilakukan terhadap tanaman tersebut, dan dosis tak terukur berisiko membebani fungsi ginjal.',
    prompt: 'Tindakan paling bijak dan kritis yang patut diambil seorang pelajar setelah membaca pesan berantai tersebut adalah...',
    options: [
      { key: 'A', text: 'Langsung menyebarkan pesan ke grup keluarga agar semua orang terhindar dari penyakit' },
      { key: 'B', text: 'Melakukan verifikasi silang (cross-check) informasi ke portal resmi otoritas kesehatan atau rujukan ilmiah sebelum mempercayai atau membagikannya' },
      { key: 'C', text: 'Segera meminum rebusan daun tersebut dalam jumlah banyak sebagai langkah pencegahan' },
      { key: 'D', text: 'Menghapus aplikasi media sosial secara permanen dari telepon genggamnya' }
    ],
    correctAnswer: 'B',
    explanation: 'Sikap literasi digital kritis dalam menghadapi informasi kesehatan yang belum teruji secara klinis adalah memverifikasi silang (cross-check) klaim melalui otoritas ilmiah medis terpercaya (Opsi B).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 17,
    subject: 'bahasa-indonesia',
    topic: 'Kata Baku & Penyerapan Bahasa Asing',
    passage: 'Perhatikan kalimat: "Para atlit nasional wajib mematuhi jadual latihan intensif di pusat latihan terpadu agar dapat meningkatkan kwalitas performa fisiknya."',
    prompt: 'Perbaikan kata-kata yang tidak baku pada kalimat tersebut agar sesuai dengan KBBI adalah...',
    options: [
      { key: 'A', text: 'atlit -> atlet, jadual -> jadwal, kwalitas -> kualitas' },
      { key: 'B', text: 'atlit -> athlet, jadual -> jadual, kwalitas -> kualitet' },
      { key: 'C', text: 'atlit -> atlet, jadual -> jadwal, kwalitas -> kwalitet' },
      { key: 'D', text: 'atlit -> atlit, jadual -> skedul, kwalitas -> kualitas' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk baku menurut KBBI adalah: atlet (bukan atlit), jadwal (bukan jadual), kualitas (bukan kwalitas).',
    difficulty: 'Sedang'
  },
  {
    id: 18,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Karakter & Sudut Pandang',
    passage: 'Sejak fajar menyingsing, Pak Salim telah mengayuh sepedanya menyusuri jalan berbatu. Senyum ramahnya tak pernah pudar meski keranjang rotan di boncengannya hanya memuat beberapa ikat kangkung dan bayam liar. Baginya, setiap rupiah yang halal adalah berkah tak terhingga yang harus disyukuri, bukan diratapi karena jumlahnya yang sedikit.',
    prompt: 'Nilai moral luhur yang diteladankan oleh tokoh Pak Salim dalam kutipan fiksi di atas adalah...',
    options: [
      { key: 'A', text: 'Ambisi pantang menyerah untuk mengumpulkan kekayaan duniawi sebanyak-banyaknya' },
      { key: 'B', text: 'Keikhlasan, integritas dalam mencari rezeki halal, dan rasa syukur atas apa yang diperoleh' },
      { key: 'C', text: 'Kebanggaan diri atas ketahanan fisiknya mengayuh sepeda di jalanan berbatu' },
      { key: 'D', text: 'Keterpaksaan menjalani hidup karena tidak memiliki pilihan pekerjaan yang lain' }
    ],
    correctAnswer: 'B',
    explanation: 'Karakter Pak Salim mencerminkan nilai etis rasa syukur, keikhlasan, dan integritas kerja keras mencari nafkah halal tanpa mengeluh (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 19,
    subject: 'bahasa-indonesia',
    topic: 'Ide Penjelas & Hubungan Gagasan',
    passage: 'Konsumsi gula harian yang melampaui batas rekomendasi Organisasi Kesehatan Dunia (WHO) memicu resistensi insulin pada jaringan tubuh. Resistensi ini memaksa pankreas bekerja lebih keras memproduksi hormon pengatur kadar glukosa. Jika kondisi ini berlangsung kronis dalam hitungan tahun, sel beta pankreas akan mengalami kelelahan struktural yang berujung pada timbulnya diabetes melitus tipe 2.',
    prompt: 'Gagasan pokok pada paragraf di atas dikembangkan dengan cara memaparkan...',
    options: [
      { key: 'A', text: 'Rantai proses fisiologis dari sebab (konsumsi gula berlebih) menuju akibat akhir (diabetes melitus tipe 2)' },
      { key: 'B', text: 'Daftar makanan manis tradisional yang harus dihindari oleh pasien rumah sakit' },
      { key: 'C', text: 'Sejarah penemuan hormon insulin oleh para peneliti kesehatan modern' },
      { key: 'D', text: 'Perbandingan angka penderita diabetes di berbagai negara berkembang' }
    ],
    correctAnswer: 'A',
    explanation: 'Penulis menyusun paragraf dengan tahapan kausal fisiologis: konsumsi gula berlebih -> resistensi insulin -> kerja pankreas berlebih -> kelelahan sel beta -> diabetes melitus tipe 2 (Opsi A).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 20,
    subject: 'bahasa-indonesia',
    topic: 'Ringkasan & Rangkuman Teks',
    passage: 'Kendaraan berbahan bakar fosil menyumbang sekitar 60% emisi karbon monoksida di koridor perkotaan. Untuk mengatasinya, pemerintah kota memperluas jaringan jalur sepeda, mengintegrasikan transportasi publik massal, dan memberlakukan tarif parkir disinsentif bagi mobil pribadi di pusat kota.',
    prompt: 'Ringkasan yang paling tepat dari isi teks tersebut adalah...',
    options: [
      { key: 'A', text: 'Pemerintah kota melarang peredaran semua mobil berbahan bakar bensin di jalan raya.' },
      { key: 'B', text: 'Tingginya emisi kendaraan fosil perkotaan direspons dengan integrasi transportasi publik dan disinsentif kendaraan pribadi.' },
      { key: 'C', text: 'Tarif parkir yang mahal adalah satu-satunya solusi ampuh menghapus polusi udara di ibu kota.' },
      { key: 'D', text: 'Sepeda kayuh menggantikan seluruh fungsi kendaraan bermotor di area pusat kota.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ringkasan yang baik memuat inti masalah (tingginya emisi kendaraan fosil) dan esensi solusi kebijakan (integrasi transportasi umum dan disinsentif mobil pribadi) secara akurat dan proporsional (Opsi B).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 21,
    subject: 'bahasa-indonesia',
    topic: 'Evaluasi Teks Editorial',
    passage: 'Penetapan tarif royalti musik di ruang publik komersial perlu mengedepankan asas keadilan berimbang. Di satu sisi, hak ekonomi para pencipta lagu wajib dilindungi undang-undang sebagai apresiasi karya intelektual. Namun di sisi lain, mekanisme penarikan dan akuntabilitas Lembaga Manajemen Kolektif Nasional (LMKN) harus transparan agar pelaku usaha mikro tidak terbebani secara memberatkan.',
    prompt: 'Isu sentral yang dibahas dalam kutipan teks editorial tersebut adalah...',
    options: [
      { key: 'A', text: 'Larangan memutar musik pop di kafe dan pusat perbelanjaan' },
      { key: 'B', text: 'Keseimbangan perlindungan royalti musisi dan transparansi tata kelola penarikan bagi pelaku usaha' },
      { key: 'C', text: 'Penolakan terhadap berdirinya Lembaga Manajemen Kolektif Nasional' },
      { key: 'D', text: 'Penurunan kualitas karya musik pop Indonesia dalam dekade terakhir' }
    ],
    correctAnswer: 'B',
    explanation: 'Editorial tersebut membahas dilema penarikan royalti musik yang menuntut titik temu adil antara perlindungan hak cipta musisi dan transparansi pemungutan yang tidak merugikan UMKM (Opsi B).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 22,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Ungkapan & Peribahasa',
    passage: 'Setelah usahanya bangkrut, Rudi tidak patah arang. Ia justru bekerja siang malam membersihkan gudang tua warisan ayahnya dan merintis kembali toko suku cadang dari nol hingga kini memiliki tiga cabang besar.',
    prompt: 'Ungkapan "tidak patah arang" dalam konteks teks tersebut bermakna...',
    options: [
      { key: 'A', text: 'Tidak pernah mengeluh kepada orang tuanya' },
      { key: 'B', text: 'Tidak berputus asa atau tetap memiliki semangat juang tinggi' },
      { key: 'C', text: 'Tidak mengeluarkan biaya sepeser pun' },
      { key: 'D', text: 'Selalu berhati-hati dalam mengelola keuangan' }
    ],
    correctAnswer: 'B',
    explanation: 'Idiom / ungkapan "patah arang" berarti putus harapan / putus asa secara mutlak. Dengan demikian, "tidak patah arang" bermakna tidak berputus asa dan tetap bersemangat bangkit melanjutkan ikhtiar (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 23,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Teks Laporan Hasil Observasi',
    passage: 'Bunga Rafflesia arnoldii merupakan tumbuhan holoparasit tanpa daun, batang, dan akar sejati. Tumbuhan ini menyerap nutrisi sepenuhnya dari inangnya, yaitu liana merambat dari genus Tetrastigma. Saat mekar penuh, bunga ini mengeluarkan aroma bangkai yang menyengat untuk menarik serangga penyerbuk seperti lalat bangkai (Lucilia).',
    prompt: 'Informasi yang sesuai dengan kutipan teks laporan hasil observasi di atas adalah...',
    options: [
      { key: 'A', text: 'Rafflesia arnoldii melakukan fotosintesis melalui batang hijaunya yang kokoh.' },
      { key: 'B', text: 'Aroma busuk bunga berfungsi sebagai strategi adaptasi biologis untuk memikat serangga penyerbuk.' },
      { key: 'C', text: 'Bunga Rafflesia arnoldii hidup mandiri di tanah gambut tanpa membutuhkan tanaman inang.' },
      { key: 'D', text: 'Lalat bangkai adalah hama yang merusak kelopak bunga saat mekar penuh.' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menyatakan secara eksplisit: "mengeluarkan aroma bangkai yang menyengat untuk menarik serangga penyerbuk seperti lalat bangkai". Maka aroma tersebut adalah adaptasi biologis untuk penyerbukan (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 24,
    subject: 'bahasa-indonesia',
    topic: 'Kalimat Majemuk Bertingkat',
    passage: 'Perhatikan kalimat: "Meskipun hujan badai mengguyur kawasan lereng Gunung Merapi sejak sore, para relawan mitigasi bencana tetap bersiaga di posko pemantauan."',
    prompt: 'Klausa anak dalam kalimat majemuk bertingkat tersebut menyatakan hubungan makna...',
    options: [
      { key: 'A', text: 'Konsesif / perlawanan tak bersyarat' },
      { key: 'B', text: 'Tujuan dan harapan' },
      { key: 'C', text: 'Kondisional / syarat wajib' },
      { key: 'D', text: 'Kausalitas / sebab-musabab' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata hubung "meskipun / kendatipun / walaupun" menandai hubungan anak kalimat konsesif (pengakuan keadaan yang berlawanan atau tidak menghalangi terlaksananya klausa utama).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 25,
    subject: 'bahasa-indonesia',
    topic: 'Teks Berita & Unsur 5W+1H',
    passage: 'Badan Penanggulangan Bencana Daerah (BPBD) Kabupaten Malang mendistribusikan 50.000 liter air bersih ke tiga desa di Kecamatan Donomulyo kemarin pagi guna menanggulangi dampak kemarau panjang yang mengeringkan sumur-sumur warga.',
    prompt: 'Unsur "mengapa" (why) dalam cuplikan teks berita di atas adalah...',
    options: [
      { key: 'A', text: 'Kemarin pagi di Kecamatan Donomulyo' },
      { key: 'B', text: 'BPBD Kabupaten Malang mendistribusikan air bersih' },
      { key: 'C', text: 'Guna menanggulangi dampak kemarau panjang yang mengeringkan sumur warga' },
      { key: 'D', text: 'Sebanyak 50.000 liter air bersih' }
    ],
    correctAnswer: 'C',
    explanation: 'Unsur "mengapa" menjelaskan latar belakang atau alasan dilakukannya tindakan: untuk menanggulangi dampak kemarau panjang yang mengakibatkan sumur warga mengering (Opsi C).',
    difficulty: 'Sedang'
  },
  {
    id: 26,
    subject: 'bahasa-indonesia',
    topic: 'Penalaran Silogisme / Logika Bahasa',
    passage: 'Premis Umum: Semua siswa yang berpartisipasi dalam Olimpiade Sains Nasional (OSN) memiliki komitmen belajar tinggi.\nPremis Khusus: Sebagian pengurus OSIS SMP Harapan Bangsa berpartisipasi dalam Olimpiade Sains Nasional (OSN).',
    prompt: 'Kesimpulan logis yang sah dari kedua premis di atas adalah...',
    options: [
      { key: 'A', text: 'Semua pengurus OSIS SMP Harapan Bangsa memiliki komitmen belajar tinggi.' },
      { key: 'B', text: 'Sebagian pengurus OSIS SMP Harapan Bangsa memiliki komitmen belajar tinggi.' },
      { key: 'C', text: 'Siswa yang tidak menjadi pengurus OSIS tidak memiliki komitmen belajar tinggi.' },
      { key: 'D', text: 'Tidak ada pengurus OSIS yang memiliki komitmen belajar tinggi.' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan kaidah silogisme partikular: jika salah satu premis partikular ("sebagian"), maka kesimpulan harus partikular: "Sebagian pengurus OSIS SMP Harapan Bangsa memiliki komitmen belajar tinggi" (Opsi B).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 27,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Sudut Pandang Pengarang',
    passage: '"Aku menatap bayanganku di cermin lemari yang sudah retak seribu. Ada kilat tekad yang belum padam di kedua bola mataku, meski surat penolakan beasiswa itu tergeletak dingin di atas meja belajarku."',
    prompt: 'Sudut pandang (point of view) yang digunakan pengarang dalam kutipan cerpen di atas adalah...',
    options: [
      { key: 'A', text: 'Sudut pandang orang pertama sebagai tokoh utama' },
      { key: 'B', text: 'Sudut pandang orang pertama sebagai tokoh sampingan' },
      { key: 'C', text: 'Sudut pandang orang ketiga serbatahu' },
      { key: 'D', text: 'Sudut pandang orang ketiga pengamat' }
    ],
    correctAnswer: 'A',
    explanation: 'Penggunaan kata ganti "Aku" yang memaparkan pergulatan batin, pikiran, dan tindakan dirinya sendiri secara langsung mencirikan sudut pandang orang pertama tokoh utama (first person central) (Opsi A).',
    difficulty: 'Sedang'
  },
  {
    id: 28,
    subject: 'bahasa-indonesia',
    topic: 'Perbaikan Kalimat Rancu',
    passage: 'Perhatikan kalimat: "Bagi siswa yang membawa sepeda motor ke sekolah dilarang tidak mengenakan helm pengaman."',
    prompt: 'Perbaikan yang paling tepat agar kalimat tersebut logis, tidak ambigu, dan efektif adalah...',
    options: [
      { key: 'A', text: 'Siswa yang membawa sepeda motor ke sekolah wajib mengenakan helm pengaman.' },
      { key: 'B', text: 'Bagi para siswa dilarang tidak boleh mengenakan helm di sepeda motornya.' },
      { key: 'C', text: 'Untuk siswa pengendara motor dilarang jangan pakai helm pengaman.' },
      { key: 'D', text: 'Siswa membawa motor ke sekolah tidak boleh tidak memakai helm.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat awal memuat negasi ganda yang membingungkan ("dilarang tidak mengenakan") serta didahului preposisi perusak subjek ("Bagi siswa... dilarang"). Perbaikan efektif dan positif lugas adalah: "Siswa yang membawa sepeda motor ke sekolah wajib mengenakan helm pengaman" (Opsi A).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 29,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Nilai Budaya dalam Teks',
    passage: 'Tradisi gotong royong sambatan di pedesaan Jawa masih terus lestari. Ketika salah seorang warga hendak mendirikan rumah atau memperbaiki genting, para tetangga datang berbondong-bondong membawa perkakas sendiri tanpa mengharapkan upah materi selain secangkir kopi dan sebungkus nasi pecel hangat.',
    prompt: 'Nilai sosial-kultural yang paling menonjol dalam tradisi tersebut adalah...',
    options: [
      { key: 'A', text: 'Konsumerisme modern' },
      { key: 'B', text: 'Solidaritas komunal dan ketulusan tolong-menolong' },
      { key: 'C', text: 'Ketergantungan ekonomi antargenerasi' },
      { key: 'D', text: 'Formalitas adat yang mengikat kebebasan individu' }
    ],
    correctAnswer: 'B',
    explanation: 'Deskripsi warga membantu sesama tanpa mengharap bayaran selain kebersamaan mencerminkan nilai luhur solidaritas komunal (kebersamaan sosial) dan ketulusan tolong-menolong (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 30,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Teks Prosedur Kompleks',
    passage: 'Dalam prosedur perpanjangan kartu tanda pelajar elektronik, setelah mengisi formulir daring, pemohon wajib mencetak bukti registrasi berkode batang. Langkah ini krusial sebelum mendatangi loket verifikasi biometrik di ruang tata usaha.',
    prompt: 'Mengapa pencetakan bukti registrasi berkode batang disebut krusial?',
    options: [
      { key: 'A', text: 'Karena merupakan syarat administratif wajib untuk memverifikasi data sebelum rekam biometrik di loket' },
      { key: 'B', text: 'Karena kode batang digunakan untuk membayar biaya cetak kartu' },
      { key: 'C', text: 'Karena tanpa kertas pemohon tidak diizinkan masuk ke lingkungan sekolah' },
      { key: 'D', text: 'Karena kode batang berfungsi sebagai pengganti tanda tangan kepala sekolah' }
    ],
    correctAnswer: 'A',
    explanation: 'Konteks teks menunjukkan bahwa cetak bukti berkode batang adalah tahapan validasi yang menjadi prasyarat sebelum dilakukan verifikasi biometrik di loket (Opsi A).',
    difficulty: 'Sedang'
  },
  {
    id: 31,
    subject: 'bahasa-indonesia',
    topic: 'Sinonim dan Antonim Kontekstual',
    passage: 'Penelitian tersebut menunjukkan bahwa ekosistem hutan hujan tropis bersifat sangat rentan terhadap fragmentasi habitat akibat pembukaan jalan tambang.',
    prompt: 'Antonim (lawan kata) yang paling tepat untuk kata "rentan" dalam konteks kalimat tersebut adalah...',
    options: [
      { key: 'A', text: 'Peka' },
      { key: 'B', text: 'Tangguh / resistan' },
      { key: 'C', text: 'Rapuh' },
      { key: 'D', text: 'Labil' },
    ],
    correctAnswer: 'B',
    explanation: 'Kata "rentan" bermakna mudah terkena dampak/gangguan atau rapuh. Lawan kata yang paling tepat dalam konteks daya tahan lingkungan adalah "tangguh" atau "resistan" (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 32,
    subject: 'bahasa-indonesia',
    topic: 'Identifikasi Kalimat Definisi',
    passage: 'Perhatikan kalimat-kalimat berikut:\n(1) Biopori adalah lubang silindris yang dibuat secara vertikal ke dalam tanah sebagai metode resapan air dan pengomposan sampah organik.\n(2) Sampah dedaunan kering yang dimasukkan ke dalam lubang biopori akan terurai secara alami oleh fauna tanah.\n(3) Pembuatan lubang biopori di pekarangan sekolah terbukti efektif mengurangi genangan air hujan saat musim basah.\n(4) Setiap siswa kelas VII diimbau membawa pipa paralon berdiameter 10 sentimeter.',
    prompt: 'Kalimat yang berfungsi sebagai kalimat definisi adalah kalimat nomor...',
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat definisi dicirikan oleh kopula/predikatif "adalah / merupakan / yaitu" yang menjelaskan batasan konsep atau hakikat istilah "biopori" secara menyeluruh (Kalimat 1).',
    difficulty: 'Sedang'
  },
  {
    id: 33,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Kohesi & Referensi Gramatikal',
    passage: 'Kecerdasan buatan generatif telah diadopsi di berbagai bidang kreatif. Teknologi mutakhir ini mampu menyusun kode program dan menghasilkan ilustrasi visual dalam hitungan detik.',
    prompt: 'Frasa "Teknologi mutakhir ini" pada kalimat kedua mengacu (merujuk) kepada...',
    options: [
      { key: 'A', text: 'Bidang kreatif' },
      { key: 'B', text: 'Kecerdasan buatan generatif' },
      { key: 'C', text: 'Ilustrasi visual' },
      { key: 'D', text: 'Kode program komputer' }
    ],
    correctAnswer: 'B',
    explanation: 'Frasa nomina "Teknologi mutakhir ini" berfungsi sebagai pemarkah kohesi anaforis yang mengulang rujukan pada anteseden subjek kalimat sebelumnya, yaitu "Kecerdasan buatan generatif" (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 34,
    subject: 'bahasa-indonesia',
    topic: 'Struktur Teks Cerita Fabel',
    passage: 'Kelinci akhirnya menyadari kesombongannya saat melihat Kura-kura telah menyentuh garis akhir terlebih dahulu. Sejak peristiwa perlombaan lari itu, Kelinci tidak pernah lagi memandang rendah hewan lain di dalam hutan belantara.',
    prompt: 'Bagian kutipan teks fabel di atas menduduki tahapan struktur...',
    options: [
      { key: 'A', text: 'Orientasi' },
      { key: 'B', text: 'Komplikasi' },
      { key: 'C', text: 'Resolusi dan Koda (amanat penutup)' },
      { key: 'D', text: 'Klimaks ketegangan' }
    ],
    correctAnswer: 'C',
    explanation: 'Kutipan memuat penyelesaian akhir perlombaan (resolusi) serta perubahan sikap dan pesan moral dari tokoh Kelinci (koda) (Opsi C).',
    difficulty: 'Sedang'
  },
  {
    id: 35,
    subject: 'bahasa-indonesia',
    topic: 'Kritik Sastra & Unsur Ekstrinsik',
    passage: 'Karya sastra angkatan Balai Pustaka umumnya merefleksikan benturan nilai-nilai tradisi adat perjodohan dengan aspirasi pemikiran modern kaum muda terpelajar yang menuntut kebebasan menentukan pilihan hidup.',
    prompt: 'Faktor ekstrinsik yang paling dominan mempengaruhi tema sastra pada periode tersebut adalah...',
    options: [
      { key: 'A', text: 'Perubahan teknologi kecerdasan buatan' },
      { key: 'B', text: 'Kondisi sosial budaya transisi antara adat kedaerahan dan modernisasi pendidikan kolonial' },
      { key: 'C', text: 'Persaingan ekonomi industri manufaktur global' },
      { key: 'D', text: 'Krisis moneter pascaperang dunia kedua' }
    ],
    correctAnswer: 'B',
    explanation: 'Unsur ekstrinsik karya Balai Pustaka berakar kuat pada latar sosiokultural awal abad ke-20 di Hindia Belanda: transisi dari tatanan adat feodal menuju kesadaran modernitas terpelajar (Opsi B).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 36,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Pesan Tersirat Puisi',
    passage: 'Deru ombak mengikis karang perlahan / Namun karang tak pernah beranjak dari bibir lautan / Menantang badai yang datang bertubi-tubi / Berdiri kokoh dalam senyap abadi.',
    prompt: 'Pesan filosofis yang tersirat dari bait puisi di atas adalah...',
    options: [
      { key: 'A', text: 'Keteguhan hati dan ketabahan prinsip menghadapi cobaan hidup yang datang silih berganti' },
      { key: 'B', text: 'Kepasrahan tanpa perlawanan terhadap kehancuran alam' },
      { key: 'C', text: 'Ketakutan terhadap kekuatan ombak laut yang ganas' },
      { key: 'D', text: 'Keinginan untuk melarikan diri dari kesunyian' }
    ],
    correctAnswer: 'A',
    explanation: 'Simbol "karang tak beranjak menantang badai berdiri kokoh" melambangkan watak teguh, tabah, dan tidak goyah dalam mempertahankan prinsip meski diterpa kesulitan hidup (Opsi A).',
    difficulty: 'Sedang'
  },
  {
    id: 37,
    subject: 'bahasa-indonesia',
    topic: 'Analisis Validitas Sumber & Kredibilitas',
    passage: 'Dalam menyusun karya ilmiah remaja mengenai dampak konsumsi mi instan, seorang siswa mengutip opini dari sebuah blog pribadi anonim yang tidak mencantumkan daftar pustaka atau kredensial penulis.',
    prompt: 'Evaluasi kritis terhadap keabsahan sumber kutipan tersebut adalah...',
    options: [
      { key: 'A', text: 'Sumber tersebut sangat kredibel karena ditulis dengan bahasa santai dan mudah dipahami.' },
      { key: 'B', text: 'Sumber tersebut memiliki reliabilitas rendah karena tidak dapat diverifikasi otoritas keilmuan dan data faktualnya.' },
      { key: 'C', text: 'Sumber tersebut lebih akurat daripada jurnal medis internasional.' },
      { key: 'D', text: 'Sumber tersebut sudah mencukupi standar karya tulis ilmiah nasional.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tulisan di blog anonim tanpa rujukan pustaka dan tanpa kredensial pakar tergolong sumber berkeabsahan rendah (tidak memenuhi standar validitas ilmiah) (Opsi B).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 38,
    subject: 'bahasa-indonesia',
    topic: 'Kalimat Tanya Retoris',
    passage: 'Perhatikan kalimat-kalimat berikut:\n(1) Siapakah yang tidak ingin melihat tanah airnya maju, makmur, dan disegani bangsa lain?\n(2) Berapa harga satu kilogram beras premium di pasar induk hari ini?\n(3) Kapan kereta api jurusan Yogyakarta akan tiba di peron tiga?\n(4) Di mana letak ruang laboratorium komputer SMP Negeri 1?',
    prompt: 'Kalimat yang merupakan contoh kalimat tanya retoris (pertanyaan yang tidak memerlukan jawaban langsung karena maknanya sudah jelas) adalah...',
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat (1) adalah kalimat tanya retoris: berfungsi menegaskan gagasan bahwa setiap insan tentu ingin melihat tanah airnya maju, sehingga tidak memerlukan jawaban informasi faktual.',
    difficulty: 'Sedang'
  },
  {
    id: 39,
    subject: 'bahasa-indonesia',
    topic: 'Variasi Kata / Diksi Pengganti',
    passage: 'Pemerintah daerah mengupayakan mitigasi komprehensif guna mengurangi dampak bencana tanah longsor di perbukitan.',
    prompt: 'Kata yang bersinonim dan tepat menggantikan kata "komprehensif" tanpa mengubah makna kalimat adalah...',
    options: [
      { key: 'A', text: 'Parsial' },
      { key: 'B', text: 'Menyeluruh dan luas' },
      { key: 'C', text: 'Tergesa-gesa' },
      { key: 'D', text: 'Sekilas' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata serapan "komprehensif" bermakna mencakup banyak aspek, luas, tuntas, dan menyeluruh (Opsi B).',
    difficulty: 'Sedang'
  },
  {
    id: 40,
    subject: 'bahasa-indonesia',
    topic: 'Sintesis Dua Teks Bacaan Berbeda',
    passage: 'Teks A: Urban farming di lahan sempit perkotaan mampu menyuplai 15% kebutuhan sayuran segar keluarga serta mengedukasi anak-anak tentang asal-usul bahan pangan nabati.\nTeks B: Budidaya hidroponik di perumahan kota memerlukan ketelitian dalam menjaga pH nutrisi air dan pasokan sinar matahari agar tanaman tidak mengalami defisiensi klorofil.',
    prompt: 'Sintesis (keterpaduan ide) yang tepat dari kedua teks di atas adalah...',
    options: [
      { key: 'A', text: 'Pertanian perkotaan tidak layak dikembangkan karena biaya instalasi nutrisi air terlalu mahal.' },
      { key: 'B', text: 'Pertanian di perkotaan memberikan manfaat ketahanan pangan keluarga, tetapi membutuhkan ketelitian teknik budidaya agar hasil panen optimal.' },
      { key: 'C', text: 'Anak-anak perkotaan dilarang menyentuh instalasi hidroponik demi keamanan.' },
      { key: 'D', text: 'Sayuran segar di kota hanya bisa dihasilkan oleh teknologi pertanian skala industri besar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Sintesis menggabungkan gagasan positif Teks A (manfaat suplai pangan keluarga & edukasi) dengan catatan teknis Teks B (kebutuhan ketelitian perawatan pH dan nutrisi) menjadi proposisi terpadu yang utuh (Opsi B).',
    difficulty: 'HOTS Tinggi'
  }
];
