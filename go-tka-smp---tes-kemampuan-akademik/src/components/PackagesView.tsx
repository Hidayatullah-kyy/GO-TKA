import React, { useState } from 'react';
import { SubjectId, ExamPackage, StudentProfile, ExamResult } from '../types';
import { EXAM_PACKAGES } from '../data/questionGenerator';
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  FileCheck, 
  Award, 
  ShieldAlert, 
  CheckCircle2, 
  BookOpen, 
  Calculator,
  Flame,
  Info
} from 'lucide-react';

interface PackagesViewProps {
  subjectId: SubjectId;
  student: StudentProfile;
  onBackToHome: () => void;
  onStartExam: (pkg: ExamPackage) => void;
  pastResults: ExamResult[];
}

export const PackagesView: React.FC<PackagesViewProps> = ({
  subjectId,
  student,
  onBackToHome,
  onStartExam,
  pastResults
}) => {
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<ExamPackage | null>(null);
  const [acceptedIntegrity, setAcceptedIntegrity] = useState(false);

  const packages = EXAM_PACKAGES[subjectId];
  const subjectTitle = subjectId === 'matematika' ? 'Matematika (Numerasi)' : 'Bahasa Indonesia (Literasi)';
  const SubjectIcon = subjectId === 'matematika' ? Calculator : BookOpen;

  const handleOpenConfirm = (pkg: ExamPackage) => {
    setSelectedPackageForModal(pkg);
    setAcceptedIntegrity(false);
  };

  const handleConfirmStart = () => {
    if (selectedPackageForModal && acceptedIntegrity) {
      const pkg = selectedPackageForModal;
      setSelectedPackageForModal(null);
      onStartExam(pkg);
    }
  };

  return (
    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Breadcrumb & Subject Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Menu Utama</span>
          </button>
          <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <SubjectIcon className="w-5 h-5 text-blue-600" />
            <span>Pilihan Paket: <span className="text-blue-700 font-bold">{subjectTitle}</span></span>
          </div>
        </div>

        <div className="text-xs text-slate-500">
          Format Soal: <span className="font-semibold text-slate-700">40 Butir Pilihan Ganda</span> · Alokasi: <span className="font-semibold text-slate-700">60 Menit</span>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-5 flex items-start gap-4">
        <div className="p-2 bg-blue-100 text-blue-800 rounded-xl shrink-0">
          <Info className="w-5 h-5" />
        </div>
        <div className="text-xs text-blue-950 space-y-1">
          <h4 className="font-bold text-sm">Petunjuk Pemilihan Paket Simulasi</h4>
          <p className="leading-relaxed">
            Tersedia 10 paket simulasi dengan tingkat kesulitan setara HOTS (Higher Order Thinking Skills). 
            Anda dapat memilih paket mana pun untuk berlatih. Paket 1 merupakan kurasi baku utama dengan pembahasan terlengkap.
            Setiap jawaban yang Anda kirim akan dianalisis secara otomatis di lembar hasil.
          </p>
        </div>
      </div>

      {/* Grid of 10 Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {packages.map((pkg) => {
          const past = pastResults.find(r => r.subjectId === subjectId && r.packageId === pkg.id);

          return (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl border p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group ${
                past ? 'border-emerald-200 bg-gradient-to-b from-white to-emerald-50/20' : 'border-slate-200 hover:border-blue-400'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center font-mono">
                      #{pkg.id}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-[11px] text-slate-600 font-medium">SMP / MTs</p>
                    </div>
                  </div>

                  {past ? (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Skor: {past.score}/100
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700">
                      <Flame className="w-3.5 h-3.5" />
                      <span>HOTS</span>
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Meta Items (No pills) */}
                <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Jumlah: <strong className="text-slate-800">{pkg.totalQuestions} Soal</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Waktu: <strong className="text-slate-800">{pkg.durationMinutes} Menit</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-2">
                <button
                  onClick={() => handleOpenConfirm(pkg)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{past ? 'Uji Ulang Paket Ini' : 'Mulai Simulasi'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pre-Exam Confirmation Modal */}
      {selectedPackageForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SubjectIcon className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-base">Konfirmasi Memulai Ujian</h3>
              </div>
              <button
                onClick={() => setSelectedPackageForModal(null)}
                className="text-slate-400 hover:text-white p-1 text-sm font-semibold"
              >
                Tutup
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama Peserta:</span>
                  <span className="font-bold text-slate-900">{student.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">NISN / Sekolah:</span>
                  <span className="font-medium text-slate-800">{student.nisn} · {student.school}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Paket Simulasi:</span>
                  <span className="font-bold text-blue-700">{selectedPackageForModal.name} - {subjectTitle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Alokasi Waktu:</span>
                  <span className="font-bold text-slate-900">60 Menit (Hitung Mundur)</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-amber-900 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5 text-amber-950">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Peringatan Anti-Kecurangan (Anti-Cheat):</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-900 pl-1 leading-normal">
                  <li>Jangan berpindah tab atau meminimalkan jendela selama ujian berlangsung.</li>
                  <li>Sistem mencatat maksimal 3 teguran sebelum auto-submit paksa.</li>
                  <li>Timer otomatis mengirimkan lembar jawaban jika waktu habis.</li>
                </ul>
              </div>

              <label className="flex items-start gap-2.5 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={acceptedIntegrity}
                  onChange={(e) => setAcceptedIntegrity(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-700 font-medium text-[11px] leading-relaxed">
                  Saya menyatakan siap mengerjakan ujian ini secara jujur, mandiri, dan mematuhi seluruh protokol ujian CBT GO TKA SMP.
                </span>
              </label>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPackageForModal(null)}
                  className="px-4 py-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="button"
                  disabled={!acceptedIntegrity}
                  onClick={handleConfirmStart}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-white rounded-xl shadow-xs transition-all ${
                    acceptedIntegrity ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' : 'bg-slate-300 cursor-not-allowed'
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Mulai Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
