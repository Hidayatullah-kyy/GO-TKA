import React from 'react';
import { SubjectId, StudentProfile, ExamResult } from '../types';
import { 
  Calculator, 
  BookMarked, 
  ArrowRight, 
  ShieldAlert, 
  Timer, 
  CheckCircle2, 
  GraduationCap, 
  FileText, 
  Sparkles,
  Award,
  BarChart3
} from 'lucide-react';

interface HomeViewProps {
  student: StudentProfile;
  onSelectSubject: (subject: SubjectId) => void;
  onEditProfile: () => void;
  pastResults: ExamResult[];
}

export const HomeView: React.FC<HomeViewProps> = ({
  student,
  onSelectSubject,
  onEditProfile,
  pastResults
}) => {
  const mathResults = pastResults.filter(r => r.subjectId === 'matematika');
  const indoResults = pastResults.filter(r => r.subjectId === 'bahasa-indonesia');

  const latestMathScore = mathResults.length > 0 ? mathResults[0].score : null;
  const latestIndoScore = indoResults.length > 0 ? indoResults[0].score : null;

  return (
    <div className="space-y-10 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
        {/* Subtle geometric background accents */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
        <div className="absolute right-1/4 -top-20 w-60 h-60 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            <span>Simulasi CBT Terstandarisasi SMP / MTs Nasional</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white font-sans">
            Uji & Asah Kemampuan Akademik Terbaik Menuju Jenjang Prestasi
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Selamat datang, <span className="font-semibold text-white">{student.name}</span> ({student.school}). 
            Platform <span className="font-semibold text-blue-300">GO TKA SMP</span> menyajikan simulasi ujian berbasis komputer 
            (Computer Based Test) dengan instrumen soal terstandarisasi <span className="text-white font-medium">HOTS (Higher Order Thinking Skills)</span> 
            untuk persiapan seleksi SMA Unggulan, Asesmen Bakat Skolastik, dan evaluasi capaian kurikulum nasional.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Timer className="w-4 h-4 text-cyan-400" />
              <span>40 Soal · 60 Menit per Paket</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Sistem Proteksi Anti-Cheat Terintegrasi</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Analisis Kompetensi & Pembahasan Solutif</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Subject Selection Section */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Pilihan Mata Pelajaran Ujian
          </h2>
          <p className="text-sm text-slate-500">
            Pilih mata pelajaran yang ingin disimulasikan. Setiap mata pelajaran menyediakan 10 paket soal komprehensif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Matematika */}
          <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Calculator className="w-7 h-7" />
                </div>
                {latestMathScore !== null ? (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    Skor Terakhir: {latestMathScore}/100
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-600">
                    10 Paket Tersedia
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  Matematika
                </h3>
                <p className="text-xs text-blue-600 font-semibold mt-0.5">
                  Penalaran Matematis & Numerasi Berstandar HOTS
                </p>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Cakupan topik mendalam: Aljabar Linier & Kuadrat, Geometri Bidang & Ruang, Teori Bilangan, Aritmetika Sosial, Kombinatorika, dan Analisis Data Statistika/Peluang.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Format Soal:</span>
                  <span className="font-semibold text-slate-800">40 Butir Pilihan Ganda (A-D)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Alokasi Waktu:</span>
                  <span className="font-semibold text-slate-800">60 Menit (1 Jam)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Level Kognitif:</span>
                  <span className="font-semibold text-blue-700">Analisis & Pemecahan Masalah (L3)</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onSelectSubject('matematika')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <span>Pilih Matematika & Lihat 10 Paket</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Bahasa Indonesia */}
          <div className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <BookMarked className="w-7 h-7" />
                </div>
                {latestIndoScore !== null ? (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
                    Skor Terakhir: {latestIndoScore}/100
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-600">
                    10 Paket Tersedia
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  Bahasa Indonesia
                </h3>
                <p className="text-xs text-indigo-600 font-semibold mt-0.5">
                  Literasi Membaca Kritis & Penalaran Kebahasaan HOTS
                </p>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Cakupan topik mendalam: Literasi Teks Naratif & Informasi Kompleks, Ide Pokok Bertingkat, Evaluasi Validitas Argumen, Kesimpulan Implisit, Struktur Kalimat Efektif, dan Kaidah EYD V.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Format Soal:</span>
                  <span className="font-semibold text-slate-800">40 Butir Pilihan Ganda (A-D)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Alokasi Waktu:</span>
                  <span className="font-semibold text-slate-800">60 Menit (1 Jam)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Level Kognitif:</span>
                  <span className="font-semibold text-indigo-700">Evaluasi & Refleksi Teks (L3)</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onSelectSubject('bahasa-indonesia')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 group-hover:bg-indigo-600 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <span>Pilih Bahasa Indonesia & Lihat 10 Paket</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Anti-Cheat Mechanism Section */}
      <section className="bg-slate-100/80 rounded-2xl p-6 sm:p-8 border border-slate-200">
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-2.5 text-slate-900">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-base">
              Protokol Ketertiban & Mekanisme Pengawasan Ujian (Anti-Cheat)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Untuk menjaga integritas dan validitas evaluasi, sistem CBT GO TKA SMP dilengkapi dengan pengawasan otomatis selama durasi ujian:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5 shadow-2xs">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[11px]">1</span>
                Deteksi Pindah Tab
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                Membuka tab baru, meminimalkan jendela, atau beralih aplikasi akan memicu peringatan keras pelanggaran.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5 shadow-2xs">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[11px]">2</span>
                Maksimal 3 Teguran
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                Pelanggaran tercatat otomatis. Apabila melanggar lebih dari 3 kali, ujian akan dihentikan dan jawaban otomatis terkirim.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5 shadow-2xs">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[11px]">3</span>
                Proteksi Konten
              </span>
              <p className="text-xs text-slate-500 leading-normal">
                Klik kanan, salin teks (Copy-Paste), dan pintasan inspect element dinonaktifkan demi keaslian pengerjaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Results Quick History (if any) */}
      {pastResults.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Riwayat Hasil Simulasi Terkini
            </h3>
            <span className="text-xs text-slate-500">
              {pastResults.length} simulasi terselesaikan
            </span>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-2xs">
            {pastResults.slice(0, 4).map((res, i) => (
              <div key={i} className="p-4 flex items-center justify-between gap-4 text-xs">
                <div className="space-y-0.5">
                  <p className="font-semibold text-slate-900">{res.packageName} - {res.subjectName}</p>
                  <p className="text-slate-600">Diselesaikan pada {res.completedAt} · Benar {res.correctCount}/40</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`font-bold text-sm px-3 py-1 rounded-lg ${
                    res.score >= 75 ? 'bg-emerald-50 text-emerald-700' : res.score >= 60 ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {res.score} / 100
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
