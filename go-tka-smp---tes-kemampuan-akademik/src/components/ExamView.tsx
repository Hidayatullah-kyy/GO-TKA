import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Question, 
  ExamPackage, 
  StudentProfile, 
  ExamAnswer, 
  ExamResult, 
  ViolationRecord 
} from '../types';
import { AntiCheatModal } from './AntiCheatModal';
import { 
  Clock, 
  ShieldAlert, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  HelpCircle, 
  Maximize2, 
  Minimize2, 
  Type, 
  AlertTriangle,
  Menu,
  X,
  Send,
  Flag,
  FileText
} from 'lucide-react';

interface ExamViewProps {
  examPackage: ExamPackage;
  questions: Question[];
  student: StudentProfile;
  onSubmitExam: (result: ExamResult) => void;
  onCancelExam: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  examPackage,
  questions,
  student,
  onSubmitExam,
  onCancelExam
}) => {
  // Navigation & Answers State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, ExamAnswer>>(() => {
    const initial: Record<number, ExamAnswer> = {};
    questions.forEach((q) => {
      initial[q.id] = {
        questionId: q.id,
        selectedOption: null,
        isDoubtful: false
      };
    });
    return initial;
  });

  // Timer State (60 minutes = 3600 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(examPackage.durationMinutes * 60);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Anti-Cheat State
  const [violations, setViolations] = useState<ViolationRecord[]>([]);
  const [strikeModalOpen, setStrikeModalOpen] = useState(false);
  const [currentViolationReason, setCurrentViolationReason] = useState('');
  const [isDisqualified, setIsDisqualified] = useState(false);
  const strikeCountRef = useRef(0);

  // UI Preferences
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Question references
  const currentQuestion = questions[currentIndex] || questions[0];
  const currentAnswer = answers[currentQuestion.id] || {
    questionId: currentQuestion.id,
    selectedOption: null,
    isDoubtful: false
  };

  // Compile Result Helper
  const compileFinalResult = useCallback((forcedDisqualification = false): ExamResult => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    // Topic map for breakdown
    const topicStats: Record<string, { total: number; correct: number }> = {};

    questions.forEach((q) => {
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = { total: 0, correct: 0 };
      }
      topicStats[q.topic].total += 1;

      const userAns = answers[q.id]?.selectedOption;
      if (!userAns) {
        unanswered += 1;
      } else if (userAns === q.correctAnswer) {
        correct += 1;
        topicStats[q.topic].correct += 1;
      } else {
        wrong += 1;
      }
    });

    // Score calculation (0 - 100)
    const rawScore = (correct / questions.length) * 100;
    const finalScore = Math.round(rawScore * 10) / 10;

    const topicBreakdown = Object.entries(topicStats).map(([topic, stat]) => ({
      topic,
      total: stat.total,
      correct: stat.correct,
      percentage: Math.round((stat.correct / stat.total) * 100)
    }));

    const timeSpent = examPackage.durationMinutes * 60 - timeLeft;

    return {
      packageId: examPackage.id,
      packageName: examPackage.name,
      subjectId: examPackage.subjectId,
      subjectName: examPackage.subjectName,
      student,
      score: finalScore,
      totalQuestions: questions.length,
      correctCount: correct,
      wrongCount: wrong,
      unansweredCount: unanswered,
      timeSpentSeconds: Math.max(0, timeSpent),
      completedAt: new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date()),
      violationsCount: strikeCountRef.current,
      topicBreakdown,
      answers,
      questions
    };
  }, [answers, examPackage, questions, student, timeLeft]);

  // Handle Forced Submit (violations or time expired)
  const triggerSubmit = useCallback((disqualified = false) => {
    const result = compileFinalResult(disqualified);
    onSubmitExam(result);
  }, [compileFinalResult, onSubmitExam]);

  // Record a violation strike
  const handleRegisterViolation = useCallback((type: ViolationRecord['type'], desc: string) => {
    if (isDisqualified) return;

    strikeCountRef.current += 1;
    const newStrike = strikeCountRef.current;

    const record: ViolationRecord = {
      timestamp: new Date().toLocaleTimeString('id-ID'),
      type,
      description: desc
    };

    setViolations(prev => [...prev, record]);
    setCurrentViolationReason(desc);

    if (newStrike > 3) {
      setIsDisqualified(true);
      setStrikeModalOpen(true);
    } else {
      setStrikeModalOpen(true);
    }
  }, [isDisqualified]);

  // Anti-Cheat Listeners
  useEffect(() => {
    // 1. Visibility change (tab switch, minimize)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleRegisterViolation(
          'tab_switch',
          'Terdeteksi meninggalkan tab halaman ujian atau meminimalkan jendela peramban.'
        );
      }
    };

    // 2. Window Blur (clicking outside, inspect popup)
    const handleWindowBlur = () => {
      handleRegisterViolation(
        'blur_loss',
        'Jendela peramban kehilangan fokus utama (klik di luar atau membuka jendela lain).'
      );
    };

    // 3. Prevent Context Menu (Right Click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 4. Prevent Copy, Cut, Paste
    const handleClipboard = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // 5. Block Key Combinations (Ctrl+C, Ctrl+V, F12, Ctrl+U, Ctrl+Shift+I)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 's' || e.key === 'p')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        handleRegisterViolation('devtools_or_key', 'Pintasan keyboard terlarang terdeteksi.');
        return false;
      }

      // Keyboard navigation for exam choices: keys 1/2/3/4 or A/B/C/D
      if (!strikeModalOpen && !isSubmitModalOpen) {
        const key = e.key.toUpperCase();
        if (key === 'A' || key === 'B' || key === 'C' || key === 'D') {
          handleSelectOption(key as 'A' | 'B' | 'C' | 'D');
        } else if (e.key === 'ArrowRight' && currentIndex < questions.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
        } else if (key === 'R') {
          handleToggleDoubtful();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleClipboard);
    document.addEventListener('cut', handleClipboard);
    document.addEventListener('paste', handleClipboard);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleClipboard);
      document.removeEventListener('cut', handleClipboard);
      document.removeEventListener('paste', handleClipboard);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleRegisterViolation, strikeModalOpen, isSubmitModalOpen, currentIndex, questions.length]);

  // Countdown Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsTimeUp(true);
      triggerSubmit(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          triggerSubmit(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, triggerSubmit]);

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
      }
    }
  };

  // Option selection
  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        selectedOption: key
      }
    }));
  };

  // Doubtful toggle (Ragu-ragu)
  const handleToggleDoubtful = () => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        ...prev[currentQuestion.id],
        isDoubtful: !prev[currentQuestion.id]?.isDoubtful
      }
    }));
  };

  // Format time MM:SS
  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Summary counts for navigation & submit dialog
  const answeredCount = Object.values(answers).filter(a => a.selectedOption !== null).length;
  const doubtfulCount = Object.values(answers).filter(a => a.isDoubtful).length;
  const unansweredCount = questions.length - answeredCount;

  // Font size class mapping
  const fontSizeClasses = {
    sm: 'text-xs sm:text-sm leading-relaxed',
    base: 'text-sm sm:text-base leading-relaxed',
    lg: 'text-base sm:text-lg leading-relaxed'
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans select-none">
      {/* Top Exam Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-30 shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Exam & Candidate Metadata */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 font-extrabold text-xs px-2.5 py-1 rounded-md text-white tracking-wider uppercase">
              CBT TKA
            </div>
            <div>
              <h2 className="font-bold text-sm sm:text-base text-white truncate max-w-[200px] sm:max-w-xs">
                {examPackage.subjectName} · {examPackage.name}
              </h2>
              <p className="text-[11px] text-slate-400 truncate hidden sm:block">
                Peserta: <span className="text-slate-200 font-medium">{student.name}</span> ({student.school})
              </p>
            </div>
          </div>

          {/* Center: Countdown Timer */}
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl font-mono text-base sm:text-lg font-bold tracking-wider transition-all shadow-inner ${
              timeLeft < 300 
                ? 'bg-red-600/90 text-white animate-pulse border border-red-400' 
                : 'bg-slate-800 text-blue-400 border border-slate-700'
            }`}>
              <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'text-white' : 'text-blue-400'}`} />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          </div>

          {/* Controls: Anti-Cheat Badge, Font Adjuster, Fullscreen, Drawer Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Anti-cheat status badge */}
            <div className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${
              strikeCountRef.current === 0 
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800' 
                : strikeCountRef.current <= 2 
                ? 'bg-amber-950/60 text-amber-300 border-amber-800' 
                : 'bg-red-950/80 text-red-300 border-red-800'
            }`}>
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Teguran: {strikeCountRef.current}/3</span>
            </div>

            {/* Font size cycler */}
            <div className="hidden md:flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-1 text-xs rounded font-medium ${fontSize === 'sm' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                title="Ukuran font kecil"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-1 text-xs rounded font-medium ${fontSize === 'base' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                title="Ukuran font normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-1 text-xs rounded font-medium ${fontSize === 'lg' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
                title="Ukuran font besar"
              >
                A+
              </button>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors hidden sm:block"
              title="Layar Penuh"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Mobile Drawer Toggle */}
            <button
              onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
              title="Daftar Nomor Soal"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Exam Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
        {/* Left Column: Question Card & Navigation Actions */}
        <div className="flex-1 flex flex-col justify-between space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            {/* Question Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 font-sans">
                  Soal No. {currentIndex + 1}
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  dari {questions.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                  {currentQuestion.topic}
                </span>
                {currentAnswer.isDoubtful && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                    <Flag className="w-3 h-3 fill-current" />
                    <span>Ragu-Ragu</span>
                  </span>
                )}
              </div>
            </div>

            {/* Reading Passage / Context Box (if available) */}
            {currentQuestion.passage && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Konteks / Teks Bacaan:</span>
                </div>
                <div className={`text-slate-800 ${fontSizeClasses[fontSize]} whitespace-pre-line leading-relaxed font-serif`}>
                  {currentQuestion.passage}
                </div>
              </div>
            )}

            {/* Main Question Prompt */}
            <div className={`text-slate-900 font-semibold ${fontSizeClasses[fontSize]} leading-relaxed`}>
              {currentQuestion.prompt}
            </div>

            {/* Options List (A, B, C, D) */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((opt) => {
                const isSelected = currentAnswer.selectedOption === opt.key;

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 group focus:outline-hidden ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/80 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 bg-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                    }`}>
                      {opt.key}
                    </div>
                    <div className={`flex-1 pt-1 ${fontSizeClasses[fontSize]} ${isSelected ? 'text-blue-950 font-semibold' : 'text-slate-800'}`}>
                      {opt.text}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Bar: Prev, Doubtful, Next, Submit */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs transition-all ${
                  currentIndex === 0
                    ? 'text-slate-300 bg-slate-50 cursor-not-allowed border border-slate-100'
                    : 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <button
                onClick={handleToggleDoubtful}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs border transition-all ${
                  currentAnswer.isDoubtful
                    ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                    : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-200'
                }`}
              >
                <Flag className={`w-4 h-4 ${currentAnswer.isDoubtful ? 'fill-current' : ''}`} />
                <span>Ragu-Ragu (R)</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              {currentIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Selesai & Kumpulkan</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Question Number Grid (Desktop & Drawer for Mobile) */}
        <aside className={`
          lg:w-80 shrink-0 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between
          fixed lg:static inset-y-0 right-0 z-40 max-w-sm w-full lg:max-w-none transition-transform duration-200 ease-in-out
          ${isNavDrawerOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Nomor Soal</h3>
                <p className="text-xs text-slate-600">Klik angka untuk melompat</p>
              </div>
              <button
                onClick={() => setIsNavDrawerOpen(false)}
                className="lg:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-600 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-600 shrink-0"></span>
                <span>Dijawab ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-400 shrink-0"></span>
                <span>Ragu ({doubtfulCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded border border-slate-300 bg-white shrink-0"></span>
                <span>Kosong ({unansweredCount})</span>
              </div>
            </div>

            {/* 40 Numbers Grid */}
            <div className="grid grid-cols-5 gap-2 max-h-[460px] overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const ans = answers[q.id];
                const isCurrent = idx === currentIndex;
                const isAnswered = ans?.selectedOption !== null;
                const isDoubtful = ans?.isDoubtful;

                let colorStyle = 'bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-slate-50';
                if (isDoubtful) {
                  colorStyle = 'bg-amber-400 border-amber-500 text-amber-950 font-bold';
                } else if (isAnswered) {
                  colorStyle = 'bg-blue-600 border-blue-600 text-white font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsNavDrawerOpen(false);
                    }}
                    className={`h-10 rounded-xl border text-xs font-mono transition-all flex flex-col items-center justify-center relative ${colorStyle} ${
                      isCurrent ? 'ring-2 ring-slate-900 ring-offset-2 scale-105 z-10' : ''
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {ans?.selectedOption && (
                      <span className="text-[9px] leading-none opacity-80">{ans.selectedOption}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Exam Button */}
          <div className="pt-4 border-t border-slate-100 mt-4">
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Selesai & Kumpulkan Jawaban</span>
            </button>
          </div>
        </aside>
      </main>

      {/* Confirmation Modal Before Final Submission */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base">Konfirmasi Pengumpulan Ujian</h3>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 text-sm font-semibold"
              >
                Tutup
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <p className="text-slate-700 leading-relaxed">
                Pastikan Anda telah memeriksa seluruh jawaban dengan teliti. Berikut adalah ringkasan progres lembar jawaban Anda:
              </p>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                  <div className="font-mono text-xl font-bold text-blue-700">{answeredCount}</div>
                  <div className="text-[11px] text-blue-900 mt-0.5">Sudah Dijawab</div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="font-mono text-xl font-bold text-amber-700">{doubtfulCount}</div>
                  <div className="text-[11px] text-amber-900 mt-0.5">Ragu-Ragu</div>
                </div>

                <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl">
                  <div className="font-mono text-xl font-bold text-slate-700">{unansweredCount}</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">Belum Dijawab</div>
                </div>
              </div>

              {(unansweredCount > 0 || doubtfulCount > 0) && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed">
                    Masih ada <strong>{unansweredCount} soal belum dijawab</strong> dan <strong>{doubtfulCount} soal ditandai ragu-ragu</strong>. Waktu ujian tersisa masih dapat dimanfaatkan untuk memeriksa kembali.
                  </span>
                </div>
              )}

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="px-4 py-2 font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Periksa Kembali
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitModalOpen(false);
                    triggerSubmit(false);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Ya, Kumpulkan Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Anti-Cheat Violation Modal */}
      <AntiCheatModal
        isOpen={strikeModalOpen}
        strikeCount={strikeCountRef.current}
        reason={currentViolationReason}
        isDisqualified={isDisqualified}
        onAcknowledge={() => {
          setStrikeModalOpen(false);
          if (isDisqualified) {
            triggerSubmit(true);
          }
        }}
      />
    </div>
  );
};
