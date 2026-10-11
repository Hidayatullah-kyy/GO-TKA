import React, { useState } from 'react';
import { ExamResult } from '../types';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  ShieldAlert, 
  Printer, 
  RotateCcw, 
  Home, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  BarChart2, 
  Filter,
  Check,
  X,
  GraduationCap
} from 'lucide-react';

interface ResultViewProps {
  result: ExamResult;
  onRetry: () => void;
  onBackToHome: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetry,
  onBackToHome
}) => {
  const [filterType, setFilterType] = useState<'all' | 'wrong' | 'correct' | 'doubtful'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  // Qualitative Assessment Calculation
  const getPerformanceRemark = (score: number) => {
    if (score >= 85) {
      return {
        title: 'Istimewa / Sangat Baik',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        badge: 'Tingkat Penguasaan Sangat Tinggi (L3+)',
        recommendation: 'Kemampuan penalaran analitis dan literasi HOTS Anda sangat kuat. Pertahankan konsistensi latihan dan lanjutkan persiapan menuju kompetisi atau tes seleksi sekolah unggulan.'
      };
    }
    if (score >= 70) {
      return {
        title: 'Baik / Kompeten',
        color: 'text-blue-700 bg-blue-50 border-blue-200',
        badge: 'Tingkat Penguasaan Standar Nasional (L3)',
        recommendation: 'Anda telah menguasai sebagian besar materi dan konsep HOTS dengan baik. Perbanyak latihan pada butir soal yang keliru untuk memantapkan presisi pemecahan masalah.'
      };
    }
    if (score >= 55) {
      return {
        title: 'Cukup / Perlu Pemantapan',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        badge: 'Tingkat Penguasaan Menengah',
        recommendation: 'Konsep dasar sudah dipahami, namun masih diperlukan ketelitian dalam membaca konteks soal literasi panjang dan perhitungan matematika bertingkat.'
      };
    }
    return {
      title: 'Perlu Bimbingan Khusus',
      color: 'text-rose-800 bg-rose-50 border-rose-200',
      badge: 'Perlu Penguatan Konseptual',
      recommendation: 'Disarankan untuk meninjau kembali konsep fundamental materi dan mempelajari pembahasan detail setiap nomor yang salah secara bertahap.'
    };
  };

  const remark = getPerformanceRemark(result.score);

  // Format time spent
  const formatTimeSpent = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins} menit ${remainderSecs} detik`;
  };

  // Filter questions for the review section
  const filteredQuestions = result.questions.filter((q) => {
    const ans = result.answers[q.id];
    const isCorrect = ans?.selectedOption === q.correctAnswer;
    const isDoubtful = ans?.isDoubtful;

    if (filterType === 'wrong') return !isCorrect;
    if (filterType === 'correct') return isCorrect;
    if (filterType === 'doubtful') return isDoubtful;
    return true;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
      {/* Printable Report Header (Visible on print & web) */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              Laporan Hasil Asesmen Akademik
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Hasil Simulasi: {result.subjectName}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {result.packageName} · Diselesaikan pada {result.completedAt}
            </p>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all shadow-2xs"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onRetry}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Uji Ulang</span>
            </button>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-2xs"
            >
              <Home className="w-4 h-4" />
              <span>Menu Utama</span>
            </button>
          </div>
        </div>

        {/* Candidate Info Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
          <div>
            <span className="text-slate-600 block">Nama Peserta</span>
            <span className="font-bold text-slate-900 truncate block">{result.student.name}</span>
          </div>
          <div>
            <span className="text-slate-600 block">NISN</span>
            <span className="font-mono font-medium text-slate-900 block">{result.student.nisn}</span>
          </div>
          <div>
            <span className="text-slate-600 block">Asal Sekolah</span>
            <span className="font-medium text-slate-900 truncate block">{result.student.school}</span>
          </div>
          <div>
            <span className="text-slate-600 block">Tingkat Kelas</span>
            <span className="font-medium text-slate-900 truncate block">{result.student.grade}</span>
          </div>
        </div>

        {/* Score & Qualitative Assessment Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Main Score Box */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-md relative overflow-hidden">
            <div className="w-full flex justify-between items-center text-xs text-blue-300">
              <span className="uppercase tracking-wider font-semibold">Skor Akhir CBT</span>
              <Award className="w-4 h-4 text-amber-400" />
            </div>

            <div className="my-4">
              <span className="text-6xl sm:text-7xl font-extrabold tracking-tight font-sans text-white">
                {result.score}
              </span>
              <span className="text-lg text-blue-300 font-bold"> / 100</span>
            </div>

            <div className="w-full pt-3 border-t border-blue-800/60 flex justify-between text-xs text-slate-300">
              <span>Akurasi: <strong>{Math.round((result.correctCount / result.totalQuestions) * 100)}%</strong></span>
              <span>Waktu: <strong>{formatTimeSpent(result.timeSpentSeconds)}</strong></span>
            </div>
          </div>

          {/* Qualitative Performance Card */}
          <div className="md:col-span-2 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 bg-white">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Evaluasi Kualitatif
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${remark.color}`}>
                  {remark.title}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-lg mt-2">
                {remark.badge}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {remark.recommendation}
              </p>
            </div>

            {/* Anti-cheat log summary */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldAlert className={`w-4 h-4 ${result.violationsCount > 0 ? 'text-amber-600' : 'text-emerald-600'}`} />
                <span>
                  Integritas Pengerjaan: {result.violationsCount === 0 ? 'Tertib (0 Pelanggaran)' : `${result.violationsCount} Teguran Tercatat`}
                </span>
              </div>
              <span className="text-slate-600 font-medium">Standar Evaluasi Puspresnas/ANBK</span>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xl font-bold">{result.correctCount} Soal</div>
              <div className="text-[11px] text-emerald-900">Jawaban Benar</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-rose-950 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
              <XCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xl font-bold">{result.wrongCount} Soal</div>
              <div className="text-[11px] text-rose-900">Jawaban Salah</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-700">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xl font-bold">{result.unansweredCount} Soal</div>
              <div className="text-[11px] text-slate-600">Dikosongkan</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-950 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-lg font-bold truncate">{formatTimeSpent(result.timeSpentSeconds)}</div>
              <div className="text-[11px] text-blue-900">Durasi Pengerjaan</div>
            </div>
          </div>
        </div>

        {/* Competency / Topic Mastery Breakdown */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-sm text-slate-900">
              Penguasaan Per Topik / Domain Kompetensi
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {result.topicBreakdown.map((item, idx) => (
              <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800 truncate">{item.topic}</span>
                  <span className="font-mono font-bold text-slate-900">
                    {item.correct}/{item.total} ({item.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.percentage >= 75 ? 'bg-emerald-500' : item.percentage >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review & Pembahasan Soal Section (Interactive Solution Walkthrough) */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Pembahasan Lengkap & Kunci Jawaban
            </h2>
            <p className="text-xs text-slate-500">
              Pelajari analisis langkah demi langkah untuk setiap nomor soal guna memperdalam pemahaman konsep.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold no-print">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Semua ({result.questions.length})
            </button>
            <button
              onClick={() => setFilterType('wrong')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === 'wrong' ? 'bg-white text-rose-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Salah ({result.wrongCount})
            </button>
            <button
              onClick={() => setFilterType('correct')}
              className={`px-3 py-1.5 rounded-lg transition-all ${filterType === 'correct' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Benar ({result.correctCount})
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              Tidak ada butir soal pada filter ini.
            </div>
          ) : (
            filteredQuestions.map((q) => {
              const ans = result.answers[q.id];
              const userOpt = ans?.selectedOption;
              const isCorrect = userOpt === q.correctAnswer;
              const isExpanded = expandedQuestionId === q.id;

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isCorrect
                      ? 'border-slate-200 bg-white'
                      : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  {/* Question Summary Bar */}
                  <div
                    onClick={() => setExpandedQuestionId(isExpanded ? null : q.id)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : userOpt === null
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {q.id}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">
                            Soal No. {q.id}
                          </span>
                          <span className="text-[11px] text-slate-500">· {q.topic}</span>
                        </div>
                        <p className="text-xs text-slate-700 line-clamp-1">
                          {q.prompt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right text-xs">
                        <span className="text-slate-600 text-[11px] block">Jawaban Anda:</span>
                        <span className={`font-mono font-bold ${
                          isCorrect ? 'text-emerald-700' : 'text-rose-700'
                        }`}>
                          {userOpt || '(Kosong)'}
                        </span>
                      </div>

                      <div className="text-right text-xs pl-2 border-l border-slate-200">
                        <span className="text-slate-600 text-[11px] block">Kunci:</span>
                        <span className="font-mono font-bold text-blue-700">
                          {q.correctAnswer}
                        </span>
                      </div>

                      <button className="text-slate-400 p-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail (Always show in print or when expanded) */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-4 text-xs animate-in fade-in duration-150">
                      {/* Reading Passage if available */}
                      {q.passage && (
                        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-serif leading-relaxed text-xs">
                          {q.passage}
                        </div>
                      )}

                      {/* Question Prompt */}
                      <p className="font-semibold text-slate-900 text-sm leading-relaxed">
                        {q.prompt}
                      </p>

                      {/* Options List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt) => {
                          const isKeyCorrect = opt.key === q.correctAnswer;
                          const isUserPicked = opt.key === userOpt;

                          let optStyle = 'border-slate-200 bg-white text-slate-700';
                          if (isKeyCorrect) {
                            optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                          } else if (isUserPicked && !isKeyCorrect) {
                            optStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                          }

                          return (
                            <div
                              key={opt.key}
                              className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${optStyle}`}
                            >
                              <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                                isKeyCorrect ? 'bg-emerald-600 text-white' : isUserPicked ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600'
                              }`}>
                                {opt.key}
                              </span>
                              <span className="flex-1 leading-normal">{opt.text}</span>
                              {isKeyCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                              {isUserPicked && !isKeyCorrect && <X className="w-4 h-4 text-rose-600 shrink-0" />}
                            </div>
                          );
                        })}
                      </div>

                      {/* Comprehensive Step-by-Step Educational Explanation */}
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-slate-800 space-y-1.5">
                        <div className="font-bold text-blue-950 flex items-center gap-1.5 text-xs">
                          <FileText className="w-3.5 h-3.5 text-blue-600" />
                          <span>Pembahasan & Analisis Solusi:</span>
                        </div>
                        <p className="leading-relaxed text-slate-700 text-xs">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Footer Navigation CTA */}
      <div className="flex items-center justify-between pt-4 pb-12 no-print">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-2xs"
        >
          <Home className="w-4 h-4" />
          <span>Kembali ke Beranda Utama</span>
        </button>

        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Kerjakan Ulang Simulasi Ini</span>
        </button>
      </div>
    </div>
  );
};
