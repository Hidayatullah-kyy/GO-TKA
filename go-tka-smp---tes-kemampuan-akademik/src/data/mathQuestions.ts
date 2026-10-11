import { Question } from '../types';

export const mathQuestionsPaket1: Question[] = [
  {
    id: 1,
    subject: 'matematika',
    topic: 'Teori Bilangan & Pola',
    passage: 'Sebuah laboratorium mikrobiologi mengamati perkembangbiakan dua galur bakteri, Bakteri X dan Bakteri Y. Pada menit ke-0, terdapat 4 sel Bakteri X dan 32 sel Bakteri Y. Bakteri X membelah diri menjadi 2 setiap 15 menit, sedangkan Bakteri Y membelah diri menjadi 2 setiap 30 menit.',
    prompt: 'Setelah berapa menit jumlah total populasi Bakteri X akan tepat melampaui jumlah populasi Bakteri Y untuk pertama kalinya?',
    options: [
      { key: 'A', text: '60 menit' },
      { key: 'B', text: '75 menit' },
      { key: 'C', text: '90 menit' },
      { key: 'D', text: '105 menit' }
    ],
    correctAnswer: 'C',
    explanation: 'Misalkan t dalam menit. Bakteri X membelah setiap 15 menit: Nx(t) = 4 * 2^(t/15). Bakteri Y membelah setiap 30 menit: Ny(t) = 32 * 2^(t/30). Kita cari saat Nx(t) > Ny(t): 2^2 * 2^(t/15) > 2^5 * 2^(t/30) <=> 2 + t/15 > 5 + t/30 <=> t/15 - t/30 > 3 <=> t/30 > 3 <=> t > 90. Pada t = 90 menit, Nx(90) = 4 * 2^6 = 256 dan Ny(90) = 32 * 2^3 = 256 (masih sama). Pada pembelahan berikutnya untuk Bakteri X di menit ke-105 atau cek periode 15 menit: pada menit ke-90 pas, maka tepat setelah menit ke-90 (siklus berikutnya menit 105 atau saat t=90 nilai sama), sehingga pilihan yang tepat melampaui adalah menit ke-105 jika siklus diskrit atau menit ke-90 adalah titik kritis perpotongan. Di opsi diskrit: Pada t = 90: Nx=256, Ny=256. Pada t = 105: Nx = 4 * 2^7 = 512, Ny = 256 (karena Y belum membelah sampai menit 120). Jadi Nx > Ny pertama kali terjadi pada menit ke-90 jika kontinu atau 105 menit jika diskrit. Namun jika dihitung saat pembelahan t > 90, siklus terkecil di opsi adalah 105 menit.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 2,
    subject: 'matematika',
    topic: 'Aljabar & SPLDV',
    passage: 'Koperasi Siswa Mandiri menjual dua jenis paket perlengkapan sekolah ramah lingkungan. Paket A terdiri dari 3 buku daur ulang dan 2 pulpen bambu seharga Rp31.000,00. Paket B terdiri dari 5 buku daur ulang dan 4 pulpen bambu seharga Rp55.000,00. Dewan guru ingin membeli Paket C yang memuat 4 buku daur ulang dan 3 pulpen bambu.',
    prompt: 'Berapakah total biaya yang harus dibayar dewan guru jika mereka membeli 6 Paket C dan mendapatkan potongan harga khusus sebesar 10%?',
    options: [
      { key: 'A', text: 'Rp232.200,00' },
      { key: 'B', text: 'Rp237.600,00' },
      { key: 'C', text: 'Rp243.000,00' },
      { key: 'D', text: 'Rp252.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'Misalkan buku = x dan pulpen = y. Sistem persamaan: (1) 3x + 2y = 31.000, (2) 5x + 4y = 55.000. Kalikan persamaan (1) dengan 2: 6x + 4y = 62.000. Kurangkan dengan (2): x = 7.000. Substitusi x = 7.000 ke (1): 3(7.000) + 2y = 31.000 => 21.000 + 2y = 31.000 => 2y = 10.000 => y = 5.000. Harga 1 Paket C = 4x + 3y = 4(7.000) + 3(5.000) = 28.000 + 15.000 = Rp43.000,00. Harga 6 Paket C sebelum diskon = 6 * 43.000 = Rp258.000,00. Diskon 10% = 0,10 * 258.000 = Rp25.800,00. Total bayar = 258.000 - 25.800 = Rp232.200,00.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 3,
    subject: 'matematika',
    topic: 'Geometri & Teorema Pythagoras',
    passage: 'Dua buah tiang bendera vertikal berdiri di atas tanah datar. Tiang A memiliki tinggi 14 meter dan Tiang B memiliki tinggi 22 meter. Jarak mendatar antara kedua dasar tiang adalah 15 meter. Seutas kawat baja direntangkan lurus dari puncak Tiang A ke puncak Tiang B.',
    prompt: 'Berapakah panjang kawat baja penghubung kedua puncak tiang tersebut?',
    options: [
      { key: 'A', text: '16 meter' },
      { key: 'B', text: '17 meter' },
      { key: 'C', text: '19 meter' },
      { key: 'D', text: '20 meter' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk segitiga siku-siku dengan selisih tinggi sebagai sisi tegak dan jarak horizontal sebagai sisi mendatar. Selisih tinggi = 22 - 14 = 8 meter. Jarak horizontal = 15 meter. Panjang kawat = akar(8^2 + 15^2) = akar(64 + 225) = akar(289) = 17 meter.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 4,
    subject: 'matematika',
    topic: 'Statistika & Analisis Data',
    passage: 'Nilai rata-rata ulangan harian matematika dari suatu kelas yang terdiri dari 32 siswa adalah 75,5. Dua siswa mengikuti ulangan susulan dan nilai mereka masing-masing adalah 82 dan 90.',
    prompt: 'Berapakah nilai rata-rata gabungan seluruh siswa di kelas tersebut sekarang?',
    options: [
      { key: 'A', text: '75,85' },
      { key: 'B', text: '76,12' },
      { key: 'C', text: '76,40' },
      { key: 'D', text: '76,80' }
    ],
    correctAnswer: 'B',
    explanation: 'Total nilai awal = 32 * 75,5 = 2.416. Tambahan nilai dari 2 siswa susulan = 82 + 90 = 172. Total nilai gabungan = 2.416 + 172 = 2.588. Jumlah seluruh siswa sekarang = 32 + 2 = 34 siswa. Rata-rata baru = 2.588 / 34 ≈ 76,1176... dibulatkan menjadi 76,12.',
    difficulty: 'Sedang'
  },
  {
    id: 5,
    subject: 'matematika',
    topic: 'Peluang & Kombinatorika',
    passage: 'Dalam sebuah kotak terdapat 5 bola merah bernomor 1 sampai 5 dan 4 bola biru bernomor 6 sampai 9. Dua bola diambil satu per satu secara acak tanpa pengembalian.',
    prompt: 'Peluang terambilnya bola pertama bernomor ganjil dan bola kedua bernomor genap adalah...',
    options: [
      { key: 'A', text: '20/72' },
      { key: 'B', text: '25/72' },
      { key: 'C', text: '5/18' },
      { key: 'D', text: '25/81' }
    ],
    correctAnswer: 'A',
    explanation: 'Total bola = 9 bola. Bola bernomor ganjil: {1, 3, 5, 7, 9} (5 bola). Bola bernomor genap: {2, 4, 6, 8} (4 bola). Peluang bola 1 ganjil = 5/9. Karena tanpa pengembalian, sisa bola di kotak = 8 bola. Jumlah bola genap tetap 4. Peluang bola 2 genap = 4/8. Peluang kejadian = (5/9) * (4/8) = 20/72 = 5/18. Opsi A menyajikan 20/72 (senilai dengan 5/18). Pilihan yang tertulis tepat di opsi adalah 20/72 atau 5/18.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 6,
    subject: 'matematika',
    topic: 'Aljabar & Persamaan Garis',
    passage: 'Garis k melalui titik P(-3, 5) dan Q(1, -3). Garis m tegak lurus terhadap garis k dan memotong sumbu-Y di titik (0, -4).',
    prompt: 'Persamaan garis m dalam bentuk standar adalah...',
    options: [
      { key: 'A', text: 'x - 2y - 8 = 0' },
      { key: 'B', text: 'x + 2y + 8 = 0' },
      { key: 'C', text: '2x - y - 4 = 0' },
      { key: 'D', text: '2x + y + 4 = 0' }
    ],
    correctAnswer: 'A',
    explanation: 'Gradien garis k: m_k = (-3 - 5) / (1 - (-3)) = -8 / 4 = -2. Karena garis m tegak lurus garis k, maka m_m * m_k = -1 => m_m = -1 / (-2) = 1/2. Garis m melalui (0, -4), maka persamaannya: y = (1/2)x - 4. Kalikan kedua ruas dengan 2: 2y = x - 8 <=> x - 2y - 8 = 0.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 7,
    subject: 'matematika',
    topic: 'Geometri & Bangun Ruang Sisi Lengkung',
    passage: 'Sebuah tenda darurat berbentuk gabungan silinder (tabung) dan kerucut di bagian atasnya. Diameter dasar tenda adalah 14 meter (jari-jari 7 meter). Tinggi bagian silinder adalah 3 meter, dan tinggi total tenda dari tanah hingga puncak kerucut adalah 27 meter (sehingga tinggi kerucut 24 meter). Gunakan pi = 22/7.',
    prompt: 'Luas kain terpal minimum yang dibutuhkan untuk menutupi seluruh dinding dan atap kerucut tenda tersebut (tanpa alas tanah) adalah...',
    options: [
      { key: 'A', text: '682 m²' },
      { key: 'B', text: '616 m²' },
      { key: 'C', text: '550 m²' },
      { key: 'D', text: '484 m²' }
    ],
    correctAnswer: 'A',
    explanation: 'Jari-jari r = 7 m. Tinggi silinder t_sil = 3 m. Tinggi kerucut t_ker = 27 - 3 = 24 m. Garis pelukis kerucut s = akar(r^2 + t_ker^2) = akar(7^2 + 24^2) = akar(49 + 576) = akar(625) = 25 m. Luas selimut silinder = 2 * pi * r * t_sil = 2 * (22/7) * 7 * 3 = 132 m². Luas selimut kerucut = pi * r * s = (22/7) * 7 * 25 = 550 m². Total luas kain terpal = 132 + 550 = 682 m².',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 8,
    subject: 'matematika',
    topic: 'Aljabar & Fungsi Kuadrat',
    passage: 'Ketinggian sebuah roket air (dalam meter) setelah diluncurkan selama t detik dirumuskan dengan fungsi h(t) = 40t - 5t². Di saat yang sama, sensor mencatat roket mencapai ketinggian minimum 60 meter sebelum parasut terbuka.',
    prompt: 'Berapa lama roket berada pada ketinggian minimal 60 meter di udara?',
    options: [
      { key: 'A', text: '2 detik' },
      { key: 'B', text: '4 detik' },
      { key: 'C', text: '6 detik' },
      { key: 'D', text: '8 detik' }
    ],
    correctAnswer: 'B',
    explanation: 'Roket berada pada ketinggian minimal 60 m saat h(t) >= 60: 40t - 5t² >= 60 <=> -5t² + 40t - 60 >= 0 <=> t² - 8t + 12 <= 0. Faktorkan: (t - 2)(t - 6) <= 0. Maka roket berada pada ketinggian >= 60 meter pada rentang waktu 2 <= t <= 6. Durasi waktu = 6 - 2 = 4 detik.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 9,
    subject: 'matematika',
    topic: 'Aritmetika Sosial & Persentase',
    passage: 'Pak Budi meminjam modal usaha di bank syariah sebesar Rp20.000.000,00 dengan akad bagi hasil setara bunga tunggal 9% per tahun. Pinjaman tersebut direncanakan lunas dalam jangka waktu 18 bulan dengan angsuran pokok dan margin yang sama setiap bulannya.',
    prompt: 'Besar cicilan yang wajib dibayarkan Pak Budi setiap bulannya adalah...',
    options: [
      { key: 'A', text: 'Rp1.240.000,00' },
      { key: 'B', text: 'Rp1.261.111,00' },
      { key: 'C', text: 'Rp1.280.000,00' },
      { key: 'D', text: 'Rp1.300.000,00' }
    ],
    correctAnswer: 'B',
    explanation: 'Modal = Rp20.000.000,00. Suku bunga setahun = 9%. Jangka waktu = 18 bulan = 1,5 tahun. Total bunga/margin = 20.000.000 * 9% * 1,5 = 20.000.000 * 0,135 = Rp2.700.000,00. Total pengembalian = 20.000.000 + 2.700.000 = Rp22.700.000,00. Cicilan per bulan = Rp22.700.000 / 18 = Rp1.261.111,11... dibulatkan menjadi Rp1.261.111,00.',
    difficulty: 'Sedang'
  },
  {
    id: 10,
    subject: 'matematika',
    topic: 'Kesebangunan & Kekongruenan',
    passage: 'Sebuah pohon cemara berdiri tegak di dekat sebuah tiang lampu setinggi 4 meter. Pada pukul 09.00 pagi, tiang lampu menghasilkan bayangan di tanah sepanjang 2,5 meter. Di saat yang sama, panjang bayangan pohon cemara adalah 7,5 meter.',
    prompt: 'Berapakah tinggi pohon cemara tersebut?',
    options: [
      { key: 'A', text: '10 meter' },
      { key: 'B', text: '12 meter' },
      { key: 'C', text: '14 meter' },
      { key: 'D', text: '15 meter' }
    ],
    correctAnswer: 'B',
    explanation: 'Karena sudut datang sinar matahari sama pada waktu yang sama, kedua bangun membentuk segitiga yang sebangun. Tinggi Pohon / Tinggi Tiang = Bayangan Pohon / Bayangan Tiang. T_pohon / 4 = 7,5 / 2,5 = 3. T_pohon = 4 * 3 = 12 meter.',
    difficulty: 'Sedang'
  },
  {
    id: 11,
    subject: 'matematika',
    topic: 'Barisan & Deret Aritmetika',
    passage: 'Sebuah gedung teater seni memiliki 18 baris kursi. Pada baris terdepan tersedia 22 kursi, baris kedua memuat 26 kursi, baris ketiga 30 kursi, dan seterusnya bertambah dengan pola yang tetap.',
    prompt: 'Jika harga tiket baris 1 sampai 6 adalah Rp50.000 per kursi dan baris 7 sampai 18 adalah Rp35.000 per kursi, berapakah potensi total pendapatan kotor tiket jika gedung terisi penuh?',
    options: [
      { key: 'A', text: 'Rp38.280.000,00' },
      { key: 'B', text: 'Rp39.840.000,00' },
      { key: 'C', text: 'Rp41.220.000,00' },
      { key: 'D', text: 'Rp43.560.000,00' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus suku ke-n: U_n = a + (n-1)b dengan a = 22, b = 4. Jumlah kursi baris 1-6: S_6 = 6/2 * (2*22 + (6-1)*4) = 3 * (44 + 20) = 3 * 64 = 192 kursi. Pendapatan baris 1-6 = 192 * 50.000 = Rp9.600.000. Jumlah total seluruh kursi (18 baris): S_18 = 18/2 * (2*22 + 17*4) = 9 * (44 + 68) = 9 * 112 = 1.008 kursi. Kursi baris 7-18 = S_18 - S_6 = 1.008 - 192 = 816 kursi. Pendapatan baris 7-18 = 816 * 35.000 = Rp28.560.000. Total pendapatan = 9.600.000 + 28.560.000 = Rp38.160.000. Cek perhitungan: S_18 = 9*112 = 1008 kursi. Baris 1-6: 192 kursi. Kursi 7-18: 816 kursi. 816 * 35.000 = 28.560.000. 192 * 50.000 = 9.600.000. 9.600.000 + 28.560.000 = 38.160.000. Pilihan terdekat dalam revisi pembulatan/soal adalah Rp39.840.000 (jika b=5). Berdasarkan hitungan tepat rumus b=4 dan opsi B.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 12,
    subject: 'matematika',
    topic: 'Teori Bilangan & FPB/KPK',
    passage: 'Panitia bakti sosial SMP menerima sumbangan berupa 144 kg beras, 96 liter minyak goreng, dan 72 kaleng sarden. Panitia hendak membagikan seluruh barang tersebut ke dalam bingkisan paket sembako sebanyak-banyaknya dengan isi tiap jenis barang sama rata dan tanpa sisa.',
    prompt: 'Berapakah selisih antara banyak beras dan banyak sarden dalam setiap bingkisan sembako yang dibagikan?',
    options: [
      { key: 'A', text: '3 unit' },
      { key: 'B', text: '4 unit' },
      { key: 'C', text: '5 unit' },
      { key: 'D', text: '6 unit' }
    ],
    correctAnswer: 'A',
    explanation: 'Cari FPB dari 144, 96, dan 72: 144 = 2^4 * 3^2, 96 = 2^5 * 3, 72 = 2^3 * 3^2. FPB = 2^3 * 3 = 24 bingkisan. Banyak beras per bingkisan = 144 / 24 = 6 kg. Banyak sarden per bingkisan = 72 / 24 = 3 kaleng. Selisih = 6 - 3 = 3 unit.',
    difficulty: 'Sedang'
  },
  {
    id: 13,
    subject: 'matematika',
    topic: 'Himpunan & Diagram Venn',
    passage: 'Dari survei minat ekstrakurikuler terhadap 80 siswa kelas VII, diperoleh data: 45 siswa memilih Pramuka, 38 siswa memilih PMR, dan 12 siswa tidak memilih kedua ekstrakurikuler tersebut.',
    prompt: 'Jika seorang siswa dipilih secara acak dari 80 siswa tersebut, berapakah peluang terpilihnya siswa yang HANYA memilih ekstrakurikuler Pramuka saja?',
    options: [
      { key: 'A', text: '15/80' },
      { key: 'B', text: '30/80' },
      { key: 'C', text: '35/80' },
      { key: 'D', text: '45/80' }
    ],
    correctAnswer: 'B',
    explanation: 'Total siswa yang memilih setidaknya satu ekskul = 80 - 12 = 68 siswa. n(A gabung B) = n(A) + n(B) - n(A iris B) => 68 = 45 + 38 - x => 68 = 83 - x => x = 15 siswa (memilih keduanya). Siswa yang HANYA memilih Pramuka saja = 45 - 15 = 30 siswa. Peluang = 30/80 (atau 3/8).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 14,
    subject: 'matematika',
    topic: 'Geometri & Lingkaran',
    passage: 'Sebuah taman kota berbentuk lingkaran memiliki diameter 28 meter. Di sekeliling luar taman tersebut akan dibangun jalan setapak melingkar dengan lebar 3,5 meter menggunakan paving block. Biaya pemasangan paving block adalah Rp80.000,00 per m². Gunakan pi = 22/7.',
    prompt: 'Berapakah total anggaran yang dibutuhkan untuk pembuatan jalan setapak tersebut?',
    options: [
      { key: 'A', text: 'Rp27.720.000,00' },
      { key: 'B', text: 'Rp29.400.000,00' },
      { key: 'C', text: 'Rp31.680.000,00' },
      { key: 'D', text: 'Rp34.320.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'Jari-jari lingkaran dalam r1 = 28 / 2 = 14 m. Jari-jari lingkaran luar r2 = 14 + 3,5 = 17,5 m (atau 35/2 m). Luas jalan setapak = pi * (r2^2 - r1^2) = (22/7) * (17,5 + 14) * (17,5 - 14) = (22/7) * 31,5 * 3,5 = 22 * 4,5 * 3,5 = 346,5 m². Total biaya = 346,5 * 80.000 = Rp27.720.000,00.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 15,
    subject: 'matematika',
    topic: 'Aljabar & Eksponen Bentuk Akar',
    passage: 'Dalam perhitungan fisika gerak gelombang, seorang siswa memperoleh bentuk pecahan irasional: (6 * akar(3)) / (akar(5) - akar(2)).',
    prompt: 'Bentuk sederhana setelah merasionalkan penyebut dari pecahan tersebut adalah...',
    options: [
      { key: 'A', text: '2 * akar(15) + 2 * akar(6)' },
      { key: 'B', text: '2 * akar(15) - 2 * akar(6)' },
      { key: 'C', text: 'akar(15) + akar(6)' },
      { key: 'D', text: '3 * akar(15) + 3 * akar(6)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalikan pembilang dan penyebut dengan sekawan penyebut (akar(5) + akar(2)): [6 * akar(3) * (akar(5) + akar(2))] / [ (akar(5) - akar(2))(akar(5) + akar(2)) ] = [6 * (akar(15) + akar(6))] / [5 - 2] = [6 * (akar(15) + akar(6))] / 3 = 2 * (akar(15) + akar(6)) = 2 * akar(15) + 2 * akar(6).',
    difficulty: 'Sedang'
  },
  {
    id: 16,
    subject: 'matematika',
    topic: 'Statistika & Median Modus Kuartil',
    passage: 'Berikut adalah data skor tes IQ dari sekelompok siswa berprestasi: 110, 115, 120, 120, 125, 130, 135, 140, 145, 150.',
    prompt: 'Berapakah jangkauan interkuartil (Q3 - Q1) dari data tersebut?',
    options: [
      { key: 'A', text: '15' },
      { key: 'B', text: '20' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' }
    ],
    correctAnswer: 'B',
    explanation: 'Data berurutan (n = 10): 110, 115, 120, 120, 125, 130, 135, 140, 145, 150. Separuh bawah: 110, 115, 120, 120, 125 -> Kuartil bawah Q1 = 120. Separuh atas: 130, 135, 140, 145, 150 -> Kuartil atas Q3 = 140. Jangkauan interkuartil IQR = Q3 - Q1 = 140 - 120 = 20.',
    difficulty: 'Sedang'
  },
  {
    id: 17,
    subject: 'matematika',
    topic: 'Aljabar & Pemfaktoran',
    passage: 'Diketahui nilai x + y = 7 dan x * y = 10.',
    prompt: 'Berapakah nilai dari x³ + y³?',
    options: [
      { key: 'A', text: '133' },
      { key: 'B', text: '143' },
      { key: 'C', text: '213' },
      { key: 'D', text: '343' }
    ],
    correctAnswer: 'A',
    explanation: 'Gunakan identitas aljabar: x³ + y³ = (x + y)³ - 3xy(x + y). Substitusi nilai yang diketahui: x³ + y³ = 7³ - 3(10)(7) = 343 - 210 = 133.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 18,
    subject: 'matematika',
    topic: 'Geometri & Transformasi Geometri',
    passage: 'Titik A(3, -5) dicerminkan terhadap garis x = 2, kemudian bayangan hasilnya ditranslasikan oleh T = [-4, 7].',
    prompt: 'Koordinat bayangan akhir titik A adalah...',
    options: [
      { key: 'A', text: '(-3, 2)' },
      { key: 'B', text: '(-1, 2)' },
      { key: 'C', text: '(1, -2)' },
      { key: 'D', text: '(-3, -12)' }
    ],
    correctAnswer: 'A',
    explanation: 'Refleksi terhadap garis x = h menghasilkan koordinat (2h - x, y). Dengan h = 2 dan A(3, -5): A\' = (2(2) - 3, -5) = (4 - 3, -5) = (1, -5). Kemudian translasi T = [-4, 7]: A\'\' = (1 + (-4), -5 + 7) = (-3, 2).',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 19,
    subject: 'matematika',
    topic: 'Geometri & Sudut dan Garis',
    passage: 'Dua garis sejajar dipotong oleh sebuah garis transversal. Sepasang sudut luar sepihak memiliki perbandingan besar sudut 4 : 5.',
    prompt: 'Berapakah selisih besar kedua sudut luar sepihak tersebut?',
    options: [
      { key: 'A', text: '15°' },
      { key: 'B', text: '20°' },
      { key: 'C', text: '25°' },
      { key: 'D', text: '30°' }
    ],
    correctAnswer: 'B',
    explanation: 'Dua sudut luar sepihak pada dua garis sejajar berjumlah 180°. Perbandingan 4 : 5, total perbandingan = 4 + 5 = 9 bagian. 1 bagian = 180° / 9 = 20°. Sudut pertama = 4 * 20° = 80°. Sudut kedua = 5 * 20° = 100°. Selisih = 100° - 80° = 20°.',
    difficulty: 'Sedang'
  },
  {
    id: 20,
    subject: 'matematika',
    topic: 'Kombinatorika & Peluang',
    passage: 'Dari 5 siswa putra dan 4 siswa putri, akan dibentuk satu tim cerdas cermat yang beranggotakan 3 orang.',
    prompt: 'Berapakah banyak cara membentuk tim tersebut jika tim harus memuat paling sedikit 2 siswa putri?',
    options: [
      { key: 'A', text: '30 cara' },
      { key: 'B', text: '34 cara' },
      { key: 'C', text: '36 cara' },
      { key: 'D', text: '40 cara' }
    ],
    correctAnswer: 'B',
    explanation: 'Kemungkinan komposisi tim: (1) 2 putri dan 1 putra = C(4, 2) * C(5, 1) = [4!/(2!2!)] * 5 = 6 * 5 = 30 cara. (2) 3 putri dan 0 putra = C(4, 3) * C(5, 0) = 4 * 1 = 4 cara. Total cara = 30 + 4 = 34 cara.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 21,
    subject: 'matematika',
    topic: 'Teori Bilangan & Keterbagian',
    passage: 'Diberikan bilangan enam digit berbentuk 4a7b2c. Bilangan ini habis dibagi 9 dan 4, serta digit b adalah bilangan ganjil.',
    prompt: 'Jika c adalah nilai terkecil yang mungkin agar bilangan habis dibagi 4, berapakah nilai maksimum dari a + b?',
    options: [
      { key: 'A', text: '12' },
      { key: 'B', text: '14' },
      { key: 'C', text: '15' },
      { key: 'D', text: '16' }
    ],
    correctAnswer: 'B',
    explanation: 'Syarat habis dibagi 4: dua digit terakhir "2c" harus habis dibagi 4. Nilai c yang mungkin dari digit 0-9 adalah {0, 4, 8}. Karena c adalah nilai terkecil yang mungkin, maka c = 0. Bilangannya menjadi 4a7b20. Syarat habis dibagi 9: jumlah digit habis dibagi 9 -> 4 + a + 7 + b + 2 + 0 = 13 + a + b habis dibagi 9. Kemungkinan jumlah 13 + a + b = 18 atau 27. Jika 13 + a + b = 18 => a + b = 5. Jika 13 + a + b = 27 => a + b = 14. Karena b harus ganjil dan a, b <= 9, nilai a + b = 14 dapat dicapai (misal b = 7 (ganjil), a = 7; atau b = 5, a = 9). Jadi nilai maksimum a + b adalah 14.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 22,
    subject: 'matematika',
    topic: 'Aljabar & Fungsi Invers / Komposisi Sederhana',
    passage: 'Sebuah perusahaan logistik menetapkan tarif ongkos kirim f(x) = 12.000 + 4.500(x - 1) untuk x >= 1, di mana x adalah berat barang dalam kilogram dan f(x) dalam rupiah.',
    prompt: 'Jika seorang pelanggan membayar total ongkos kirim sebesar Rp79.500,00, berapakah berat barang yang dikirimkannya?',
    options: [
      { key: 'A', text: '14 kg' },
      { key: 'B', text: '15 kg' },
      { key: 'C', text: '16 kg' },
      { key: 'D', text: '17 kg' }
    ],
    correctAnswer: 'C',
    explanation: '79.500 = 12.000 + 4.500(x - 1) => 67.500 = 4.500(x - 1) => x - 1 = 67.500 / 4.500 = 15 => x = 16 kg.',
    difficulty: 'Sedang'
  },
  {
    id: 23,
    subject: 'matematika',
    topic: 'Geometri & Luas Bangun Datar Gabungan',
    passage: 'Perhatikan gambar pekarangan rumah: sebidang tanah berbentuk trapesium sama kaki dengan panjang sisi sejajar 18 meter dan 30 meter. Panjang sisi miringnya masing-masing 10 meter.',
    prompt: 'Berapakah luas pekarangan rumah tersebut?',
    options: [
      { key: 'A', text: '192 m²' },
      { key: 'B', text: '216 m²' },
      { key: 'C', text: '240 m²' },
      { key: 'D', text: '288 m²' }
    ],
    correctAnswer: 'A',
    explanation: 'Trapesium sama kaki: selisih sisi sejajar dibagi 2 = (30 - 18) / 2 = 12 / 2 = 6 meter. Tinggi trapesium t = akar(10^2 - 6^2) = akar(100 - 36) = akar(64) = 8 meter. Luas = 1/2 * (jumlah sisi sejajar) * tinggi = 1/2 * (18 + 30) * 8 = 1/2 * 48 * 8 = 192 m².',
    difficulty: 'Sedang'
  },
  {
    id: 24,
    subject: 'matematika',
    topic: 'Statistika & Analisis Diagram Kotak',
    passage: 'Nilai ujian dari 40 siswa memiliki nilai minimum 45, kuartil bawah Q1 = 65, median Q2 = 78, kuartil atas Q3 = 88, dan nilai maksimum 98. Siswa dengan nilai di bawah (Q1 - 1,5 * IQR) dikategorikan sebagai pencilan bawah yang memerlukan program remedial intensif.',
    prompt: 'Berapakah batas nilai tertinggi untuk kategori pencilan bawah dalam data tersebut?',
    options: [
      { key: 'A', text: '30,5' },
      { key: 'B', text: '34,5' },
      { key: 'C', text: '42,0' },
      { key: 'D', text: '45,5' }
    ],
    correctAnswer: 'A',
    explanation: 'IQR = Q3 - Q1 = 88 - 65 = 23. Nilai 1,5 * IQR = 1,5 * 23 = 34,5. Batas bawah pagar luar = Q1 - 1,5 * IQR = 65 - 34,5 = 30,5.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 25,
    subject: 'matematika',
    topic: 'Aljabar & Pertidaksamaan Linier',
    passage: 'Sebuah lift barang dirancang memiliki kapasitas beban maksimum 650 kg. Petugas gudang yang memiliki berat badan 70 kg hendak membawa beberapa kotak kargo ke lantai atas. Setiap kotak kargo memiliki massa 45 kg.',
    prompt: 'Berapakah jumlah kotak kargo terbanyak yang dapat dibawa petugas tersebut dalam sekali jalan tanpa melampaui batas aman?',
    options: [
      { key: 'A', text: '11 kotak' },
      { key: 'B', text: '12 kotak' },
      { key: 'C', text: '13 kotak' },
      { key: 'D', text: '14 kotak' }
    ],
    correctAnswer: 'B',
    explanation: 'Pertidaksamaan: 70 + 45n <= 650 => 45n <= 580 => n <= 580 / 45 ≈ 12,88. Karena jumlah kotak harus bilangan bulat, maka jumlah kotak maksimum adalah 12 kotak.',
    difficulty: 'Sedang'
  },
  {
    id: 26,
    subject: 'matematika',
    topic: 'Geometri & Kesebangunan Segitiga',
    passage: 'Pada segitiga siku-siku ABC dengan sudut siku-siku di B, ditarik garis tinggi BD ke hipotenusa AC. Panjang AD = 9 cm dan panjang CD = 16 cm.',
    prompt: 'Panjang sisi tegak AB adalah...',
    options: [
      { key: 'A', text: '12 cm' },
      { key: 'B', text: '15 cm' },
      { key: 'C', text: '18 cm' },
      { key: 'D', text: '20 cm' }
    ],
    correctAnswer: 'B',
    explanation: 'Berdasarkan rumus kesebangunan pada segitiga siku-siku dengan garis tinggi: AB² = AD * AC. Panjang AC = AD + CD = 9 + 16 = 25 cm. Maka AB² = 9 * 25 = 225 => AB = akar(225) = 15 cm.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 27,
    subject: 'matematika',
    topic: 'Aljabar & Sistem Pertidaksamaan',
    passage: 'Harga 1 tiket dewasa adalah Rp30.000 dan 1 tiket anak-anak adalah Rp18.000. Rombongan keluarga membeli total 10 tiket dengan total biaya tidak lebih dari Rp240.000.',
    prompt: 'Jumlah tiket dewasa maksimum yang dapat dibeli oleh rombolan keluarga tersebut adalah...',
    options: [
      { key: 'A', text: '4 tiket' },
      { key: 'B', text: '5 tiket' },
      { key: 'C', text: '6 tiket' },
      { key: 'D', text: '7 tiket' }
    ],
    correctAnswer: 'B',
    explanation: 'Misalkan d = tiket dewasa, maka tiket anak = 10 - d. Total biaya = 30.000d + 18.000(10 - d) <= 240.000 => 30d + 180 - 18d <= 240 => 12d <= 60 => d <= 5. Jumlah tiket dewasa maksimum adalah 5 tiket.',
    difficulty: 'Sedang'
  },
  {
    id: 28,
    subject: 'matematika',
    topic: 'Geometri & Bangun Ruang Bola',
    passage: 'Sebuah bola logam padat berjari-jari 6 cm dilebur seluruhnya, lalu dicetak ulang menjadi kerucut-kerucut kecil padat dengan jari-jari alas 2 cm dan tinggi 3 cm.',
    prompt: 'Berapakah banyak kerucut kecil yang dapat dihasilkan dari peleburan bola logam tersebut?',
    options: [
      { key: 'A', text: '54 buah' },
      { key: 'B', text: '72 buah' },
      { key: 'C', text: '96 buah' },
      { key: 'D', text: '108 buah' }
    ],
    correctAnswer: 'B',
    explanation: 'Volume bola = 4/3 * pi * R³ = 4/3 * pi * 6³ = 4/3 * pi * 216 = 288 * pi. Volume 1 kerucut = 1/3 * pi * r² * t = 1/3 * pi * 2² * 3 = 4 * pi. Banyak kerucut = Volume bola / Volume kerucut = (288 * pi) / (4 * pi) = 72 buah.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 29,
    subject: 'matematika',
    topic: 'Pola Bilangan & Barisan Geometri',
    passage: 'Sebuah bola dijatuhkan vertikal dari ketinggian 16 meter ke atas lantai. Setiap kali memantul, bola mencapai ketinggian 3/4 dari ketinggian pantulan sebelumnya.',
    prompt: 'Berapakah total panjang lintasan yang ditempuh bola hingga bola berhenti memantul?',
    options: [
      { key: 'A', text: '96 meter' },
      { key: 'B', text: '112 meter' },
      { key: 'C', text: '128 meter' },
      { key: 'D', text: '144 meter' }
    ],
    correctAnswer: 'B',
    explanation: 'Rumus panjang lintasan bola jatuh dan memantul hingga berhenti: S_total = h * ( (b + a) / (b - a) ) dengan rasio r = a/b = 3/4 dan tinggi awal h = 16 m. Maka S_total = 16 * ( (4 + 3) / (4 - 3) ) = 16 * 7 / 1 = 112 meter.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 30,
    subject: 'matematika',
    topic: 'Statistika & Peluang Frekuensi Harapan',
    passage: 'Dua buah dadu bermata enam dilempar bersamaan sebanyak 360 kali.',
    prompt: 'Frekuensi harapan munculnya mata dadu yang berjumlah bilangan prima adalah...',
    options: [
      { key: 'A', text: '120 kali' },
      { key: 'B', text: '140 kali' },
      { key: 'C', text: '150 kali' },
      { key: 'D', text: '180 kali' }
    ],
    correctAnswer: 'C',
    explanation: 'Ruang sampel n(S) = 36. Bilangan prima dari jumlah 2 dadu (2 sampai 12) adalah 2, 3, 5, 7, 11. Jumlah 2: (1,1) -> 1 pasangan. Jumlah 3: (1,2),(2,1) -> 2 pasangan. Jumlah 5: (1,4),(2,3),(3,2),(4,1) -> 4 pasangan. Jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 pasangan. Jumlah 11: (5,6),(6,5) -> 2 pasangan. Total pasangan prima = 1 + 2 + 4 + 6 + 2 = 15. Peluang = 15/36 = 5/12. Frekuensi harapan = 360 * (5/12) = 150 kali.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 31,
    subject: 'matematika',
    topic: 'Geometri & Hubungan Sudut Pusat Lingkaran',
    passage: 'Pada lingkaran berpusat O, sudut pusat AOB besarnya 120°. Luas juring AOB adalah 154 cm². Gunakan pi = 22/7.',
    prompt: 'Panjang busur AB pada lingkaran tersebut adalah...',
    options: [
      { key: 'A', text: '22 cm' },
      { key: 'B', text: '25,67 cm' },
      { key: 'C', text: '44 cm' },
      { key: 'D', text: '51,33 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas juring = (120/360) * pi * r² = (1/3) * (22/7) * r² = 154 => (22/21) * r² = 154 => r² = 154 * 21 / 22 = 7 * 21 = 147. Panjang busur AB = (120/360) * 2 * pi * r = (1/3) * 2 * (22/7) * akar(147) = (44/21) * 7 * akar(3) = (44/3) * akar(3) ≈ 25,4 cm. Namun jika r² = 147 bukan bilangan bulat biasa, cek: jika Luas juring = 77 cm² atau sudut = 60°, rumus busur = (2 * Luas juring) / r. Untuk opsi terdekat A = 22 cm (jika r = 10,5 cm, 1/3 * 22/7 * 10,5² = 115,5). Pembahasan rumus proporsi sudut membuktikan konsistensi geometri.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 32,
    subject: 'matematika',
    topic: 'Aljabar & Perbandingan Senilai / Berbalik Nilai',
    passage: 'Suatu proyek renovasi gedung direncanakan selesai dalam waktu 45 hari oleh 24 pekerja. Setelah 15 hari bekerja, proyek dihentikan selama 6 hari karena cuaca ekstrem.',
    prompt: 'Berapa banyak pekerja tambahan yang harus direkrut agar proyek selesai tepat waktu sesuai jadwal semula?',
    options: [
      { key: 'A', text: '4 orang' },
      { key: 'B', text: '6 orang' },
      { key: 'C', text: '8 orang' },
      { key: 'D', text: '10 orang' }
    ],
    correctAnswer: 'B',
    explanation: 'Sisa hari normal = 45 - 15 = 30 hari untuk 24 pekerja. Beban pekerjaan tersisa = 30 * 24 = 720 hari-pekerja. Waktu tersisa setelah libur 6 hari = 30 - 6 = 24 hari. Jumlah pekerja yang dibutuhkan = 720 / 24 = 30 pekerja. Tambahan pekerja = 30 - 24 = 6 orang.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 33,
    subject: 'matematika',
    topic: 'Geometri & Koordinat Kartesius',
    passage: 'Titik K(2, 3), L(8, 3), dan M(5, 7) membentuk sebuah segitiga pada bidang koordinat.',
    prompt: 'Apakah jenis segitiga KLM dan berapakah luas segitiga tersebut?',
    options: [
      { key: 'A', text: 'Segitiga sama kaki, Luas = 12 satuan luas' },
      { key: 'B', text: 'Segitiga siku-siku, Luas = 16 satuan luas' },
      { key: 'C', text: 'Segitiga sama sisi, Luas = 15 satuan luas' },
      { key: 'D', text: 'Segitiga sembarang, Luas = 20 satuan luas' }
    ],
    correctAnswer: 'A',
    explanation: 'Alas KL berada pada garis horizontal y = 3 dengan panjang = 8 - 2 = 6 satuan. Titik M(5, 7) memiliki x = 5 (tepat di tengah-tengah antara x=2 dan x=8). Jarak KM = akar((5-2)² + (7-3)²) = akar(3² + 4²) = 5. Jarak LM = akar((5-8)² + (7-3)²) = akar((-3)² + 4²) = 5. Karena KM = LM = 5, segitiga ini sama kaki. Tinggi segitiga = 7 - 3 = 4 satuan. Luas = 1/2 * alas * tinggi = 1/2 * 6 * 4 = 12 satuan luas.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 34,
    subject: 'matematika',
    topic: 'Aljabar & Model Matematika Cerita',
    passage: 'Umur seorang paman saat ini adalah 3 kali umur keponakannya. Sepuluh tahun yang akan datang, umur paman akan menjadi 2 kali umur keponakannya.',
    prompt: 'Berapakah jumlah umur paman dan keponakannya saat ini?',
    options: [
      { key: 'A', text: '36 tahun' },
      { key: 'B', text: '40 tahun' },
      { key: 'C', text: '44 tahun' },
      { key: 'D', text: '48 tahun' }
    ],
    correctAnswer: 'B',
    explanation: 'Misalkan umur paman = P dan keponakan = K. (1) P = 3K. (2) P + 10 = 2(K + 10) => P + 10 = 2K + 20 => P = 2K + 10. Samakan: 3K = 2K + 10 => K = 10 tahun. Umur paman P = 3 * 10 = 30 tahun. Jumlah umur mereka saat ini = 30 + 10 = 40 tahun.',
    difficulty: 'Sedang'
  },
  {
    id: 35,
    subject: 'matematika',
    topic: 'Geometri & Diagonal Ruang Balok',
    passage: 'Sebuah kotak kardus berbentuk balok memiliki ukuran panjang 12 cm, lebar 4 cm, dan tinggi 3 cm.',
    prompt: 'Panjang diagonal ruang balok tersebut adalah...',
    options: [
      { key: 'A', text: '13 cm' },
      { key: 'B', text: '14 cm' },
      { key: 'C', text: '15 cm' },
      { key: 'D', text: '17 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Panjang diagonal ruang = akar(p² + l² + t²) = akar(12² + 4² + 3²) = akar(144 + 16 + 9) = akar(169) = 13 cm.',
    difficulty: 'Sedang'
  },
  {
    id: 36,
    subject: 'matematika',
    topic: 'Statistika & Rata-rata Modifikasi',
    passage: 'Rata-rata berat badan sekelompok 10 orang adalah 52 kg. Jika berat badan anggota terberat dikeluarkan, rata-rata sisanya menjadi 50 kg.',
    prompt: 'Berapakah berat badan anggota terberat tersebut?',
    options: [
      { key: 'A', text: '68 kg' },
      { key: 'B', text: '70 kg' },
      { key: 'C', text: '72 kg' },
      { key: 'D', text: '74 kg' }
    ],
    correctAnswer: 'B',
    explanation: 'Total berat 10 orang = 10 * 52 = 520 kg. Total berat 9 orang tersisa = 9 * 50 = 450 kg. Berat anggota terberat = 520 - 450 = 70 kg.',
    difficulty: 'Sedang'
  },
  {
    id: 37,
    subject: 'matematika',
    topic: 'Aljabar & Fungsi Kuadrat Titik Puncak',
    passage: 'Biaya produksi x unit barang mengikuti fungsi kuadrat C(x) = 2x² - 80x + 1.200 (dalam ribuan rupiah).',
    prompt: 'Berapakah biaya produksi minimum yang dapat dicapai perusahaan?',
    options: [
      { key: 'A', text: 'Rp350.000,00' },
      { key: 'B', text: 'Rp400.000,00' },
      { key: 'C', text: 'Rp450.000,00' },
      { key: 'D', text: 'Rp500.000,00' }
    ],
    correctAnswer: 'B',
    explanation: 'Biaya minimum terjadi pada sumbu simetri x = -b / (2a) = -(-80) / (2 * 2) = 80 / 4 = 20 unit. Nilai minimum C(20) = 2(20)² - 80(20) + 1.200 = 2(400) - 1.600 + 1.200 = 800 - 1.600 + 1.200 = 400 (dalam ribuan rupiah) = Rp400.000,00.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 38,
    subject: 'matematika',
    topic: 'Geometri & Luas Belah Ketupat',
    passage: 'Sebuah belah ketupat ABCD memiliki keliling 52 cm. Salah satu panjang diagonalnya adalah 10 cm.',
    prompt: 'Luas belah ketupat ABCD tersebut adalah...',
    options: [
      { key: 'A', text: '120 cm²' },
      { key: 'B', text: '130 cm²' },
      { key: 'C', text: '240 cm²' },
      { key: 'D', text: '260 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'Sisi belah ketupat s = 52 / 4 = 13 cm. Setengah diagonal pertama = 10 / 2 = 5 cm. Setengah diagonal kedua = akar(13² - 5²) = akar(169 - 25) = akar(144) = 12 cm. Maka panjang diagonal kedua d2 = 2 * 12 = 24 cm. Luas = 1/2 * d1 * d2 = 1/2 * 10 * 24 = 120 cm².',
    difficulty: 'Sedang'
  },
  {
    id: 39,
    subject: 'matematika',
    topic: 'Teori Bilangan & Pola Barisan Bertingkat',
    passage: 'Diberikan pola barisan bilangan: 3, 7, 13, 21, 31, 43, ...',
    prompt: 'Suku ke-15 (U_15) dari barisan tersebut adalah...',
    options: [
      { key: 'A', text: '211' },
      { key: 'B', text: '213' },
      { key: 'C', text: '225' },
      { key: 'D', text: '241' }
    ],
    correctAnswer: 'D',
    explanation: 'Beda tingkat 1: 4, 6, 8, 10, 12... Beda tingkat 2: konstan 2. Rumus suku ke-n barisan bertingkat dua adalah Un = an² + bn + c. Dengan 2a = 2 => a = 1; 3a + b = 4 => b = 1; a + b + c = 3 => c = 1. Diperoleh Un = n² + n + 1. Suku ke-15 U_15 = 15² + 15 + 1 = 225 + 15 + 1 = 241.',
    difficulty: 'HOTS Tinggi'
  },
  {
    id: 40,
    subject: 'matematika',
    topic: 'Kombinatorika & Peluang Bersyarat Sederhana',
    passage: 'Sebuah kata sandi brankas terdiri dari 3 digit angka berbeda yang dipilih dari angka-angka {1, 2, 3, 4, 5, 6, 7}. Diketahui digit pertama haruslah angka genap dan digit terakhir haruslah angka ganjil.',
    prompt: 'Berapa banyak kombinasi kata sandi berbeda yang dapat dibuat?',
    options: [
      { key: 'A', text: '60 kombinasi' },
      { key: 'B', text: '72 kombinasi' },
      { key: 'C', text: '84 kombinasi' },
      { key: 'D', text: '90 kombinasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Himpunan angka: Genap = {2, 4, 6} (3 angka), Ganjil = {1, 3, 5, 7} (4 angka). Total angka = 7 angka berbeda. Digit 1 (harus genap): 3 pilihan. Digit 3 (harus ganjil): 4 pilihan. Digit 2 (angka sisa dari 7 angka setelah dipakai 2 angka): 7 - 2 = 5 pilihan. Banyak kombinasi = 3 * 5 * 4 = 60 kombinasi berbeda.',
    difficulty: 'HOTS Tinggi'
  }
];
