/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SubjectId, ExamPackage, StudentProfile, ExamResult, Question } from './types';
import { getPackageQuestions } from './data/questionGenerator';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { PackagesView } from './components/PackagesView';
import { ExamView } from './components/ExamView';
import { ResultView } from './components/ResultView';
import { ProfileModal } from './components/ProfileModal';
import { ShieldCheck, GraduationCap } from 'lucide-react';

const STORAGE_KEY_PROFILE = 'gotka_student_profile';
const STORAGE_KEY_RESULTS = 'gotka_past_results';

const DEFAULT_PROFILE: StudentProfile = {
  name: 'Ahmad Fauzan Pratama',
  nisn: '0087123490',
  school: 'SMP Negeri 1 Surabaya',
  grade: 'Kelas 9 SMP/MTs (Persiapan Masuk SMA Unggulan)'
};

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<'home' | 'packages' | 'exam' | 'result'>('home');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<ExamPackage | null>(null);

  // Profile & History State
  const [student, setStudent] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return DEFAULT_PROFILE;
  });

  const [pastResults, setPastResults] = useState<ExamResult[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESULTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    return [];
  });

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Active Exam & Result State
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [lastExamResult, setLastExamResult] = useState<ExamResult | null>(null);

  // Sync profile to localStorage
  const handleSaveProfile = (updated: StudentProfile) => {
    setStudent(updated);
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  // Select subject from Home
  const handleSelectSubject = (subj: SubjectId) => {
    setSelectedSubject(subj);
    setCurrentView('packages');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start Exam
  const handleStartExam = (pkg: ExamPackage) => {
    const qList = getPackageQuestions(pkg.subjectId, pkg.id);
    setSelectedPackage(pkg);
    setExamQuestions(qList);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Submit Exam
  const handleSubmitExam = (result: ExamResult) => {
    setLastExamResult(result);
    const updatedResults = [result, ...pastResults];
    setPastResults(updatedResults);
    try {
      localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(updatedResults));
    } catch {
      // Ignore
    }
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retry Exam
  const handleRetryExam = () => {
    if (selectedPackage) {
      handleStartExam(selectedPackage);
    } else if (lastExamResult) {
      const qList = getPackageQuestions(lastExamResult.subjectId, lastExamResult.packageId);
      setExamQuestions(qList);
      setCurrentView('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Return to Home
  const handleBackToHome = () => {
    setSelectedSubject(null);
    setSelectedPackage(null);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Universal Top Navigation Header */}
      <Navbar
        currentView={currentView}
        selectedSubject={selectedSubject}
        student={student}
        onNavigateHome={handleBackToHome}
        onEditProfile={() => setIsProfileModalOpen(true)}
        isExamMode={currentView === 'exam'}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            student={student}
            onSelectSubject={handleSelectSubject}
            onEditProfile={() => setIsProfileModalOpen(true)}
            pastResults={pastResults}
          />
        )}

        {currentView === 'packages' && selectedSubject && (
          <PackagesView
            subjectId={selectedSubject}
            student={student}
            onBackToHome={handleBackToHome}
            onStartExam={handleStartExam}
            pastResults={pastResults}
          />
        )}

        {currentView === 'exam' && selectedPackage && (
          <ExamView
            examPackage={selectedPackage}
            questions={examQuestions}
            student={student}
            onSubmitExam={handleSubmitExam}
            onCancelExam={handleBackToHome}
          />
        )}

        {currentView === 'result' && lastExamResult && (
          <ResultView
            result={lastExamResult}
            onRetry={handleRetryExam}
            onBackToHome={handleBackToHome}
          />
        )}
      </main>

      {/* Global Academic Footer (Hidden during CBT exam) */}
      {currentView !== 'exam' && (
        <footer className="bg-white border-t border-slate-200 mt-16 no-print">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-slate-700">GO TKA SMP</span>
              <span>· Tes Kemampuan Akademik Terstandarisasi Jenjang SMP/MTs</span>
            </div>
            <p className="text-center sm:text-right text-slate-600">
              Instrumen Soal Standar HOTS (Numerasi & Literasi) · Hak Cipta © 2026
            </p>
          </div>
        </footer>
      )}

      {/* Student Profile Customizer Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        profile={student}
        onSave={handleSaveProfile}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}
