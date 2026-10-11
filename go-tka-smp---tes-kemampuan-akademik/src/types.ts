export type SubjectId = 'matematika' | 'bahasa-indonesia';

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: number;
  subject: SubjectId;
  topic: string;
  passage?: string; // Teks bacaan atau deskripsi konteks
  contextData?: {
    type?: 'table' | 'formula' | 'graph_desc';
    title?: string;
    headers?: string[];
    rows?: string[][];
  };
  prompt: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string; // Pembahasan detail langkah demi langkah
  difficulty: 'Sedang' | 'HOTS Tinggi';
}

export interface ExamPackage {
  id: number;
  name: string;
  subjectId: SubjectId;
  subjectName: string;
  totalQuestions: number;
  durationMinutes: number;
  difficulty: string;
  description: string;
}

export interface StudentProfile {
  name: string;
  nisn: string;
  school: string;
  grade: string;
}

export interface ExamAnswer {
  questionId: number;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  isDoubtful: boolean; // Ragu-ragu
}

export interface ViolationRecord {
  timestamp: string;
  type: 'tab_switch' | 'blur_loss' | 'devtools_or_key' | 'context_menu';
  description: string;
}

export interface ExamResult {
  packageId: number;
  packageName: string;
  subjectId: SubjectId;
  subjectName: string;
  student: StudentProfile;
  score: number; // 0 - 100
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  unansweredCount: number;
  timeSpentSeconds: number;
  completedAt: string;
  violationsCount: number;
  topicBreakdown: {
    topic: string;
    total: number;
    correct: number;
    percentage: number;
  }[];
  answers: Record<number, ExamAnswer>;
  questions: Question[];
}
