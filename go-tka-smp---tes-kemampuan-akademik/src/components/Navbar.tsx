import React from 'react';
import { SubjectId, StudentProfile } from '../types';
import { ShieldCheck, BookOpen, Clock, User, Award } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'packages' | 'exam' | 'result';
  selectedSubject: SubjectId | null;
  student: StudentProfile;
  onNavigateHome: () => void;
  onEditProfile: () => void;
  isExamMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  selectedSubject,
  student,
  onNavigateHome,
  onEditProfile,
  isExamMode = false
}) => {
  const currentDate = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date());

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (isExamMode) {
                if (window.confirm('Ujian sedang berlangsung! Apakah Anda yakin ingin membatalkan dan keluar? Semua progres akan hilang.')) {
                  onNavigateHome();
                }
              } else {
                onNavigateHome();
              }
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-600 transition-colors">
              <ShieldCheck className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-lg tracking-tight font-sans">
                  GO TKA <span className="text-blue-600">SMP</span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600">
                  CBT Resmi
                </span>
              </div>
              <p className="text-xs text-slate-600 hidden sm:block">
                Simulasi Tes Kemampuan Akademik SMP/MTs
              </p>
            </div>
          </button>
        </div>

        {/* Center / Navigation Zone */}
        {!isExamMode && (
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={onNavigateHome}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap ${currentView === 'home' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Beranda
            </button>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Clock className="w-3.5 h-3.5 text-slate-600" />
              <span>{currentDate}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700">
              <Award className="w-3.5 h-3.5" />
              <span>Standar HOTS Nasional</span>
            </div>
          </nav>
        )}

        {/* User / Action Zone */}
        <div className="flex items-center gap-3 shrink-0">
          {!isExamMode ? (
            <button
              onClick={onEditProfile}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-blue-50/50 transition-all text-xs text-slate-700"
              title="Ubah profil peserta"
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                {student.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-left hidden sm:block">
                <p className="font-semibold text-slate-800 leading-tight max-w-[130px] truncate">{student.name}</p>
                <p className="text-[10px] text-slate-600 leading-tight truncate">{student.school}</p>
              </div>
            </button>
          ) : (
            <div className="flex items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Sesi Ujian Aktif
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
