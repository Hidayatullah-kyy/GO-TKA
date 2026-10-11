import { Question, SubjectId, ExamPackage } from '../types';
import { mathQuestionsPaket1 } from './mathQuestions';
import { indonesianQuestionsPaket1 } from './indonesianQuestions';

export const EXAM_PACKAGES: Record<SubjectId, ExamPackage[]> = {
  matematika: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Simulasi Paket ${i + 1}`,
    subjectId: 'matematika',
    subjectName: 'Matematika (Numerasi HOTS)',
    totalQuestions: 40,
    durationMinutes: 60,
    difficulty: 'HOTS Standar Nasional',
    description: `Paket evaluasi penalaran matematis mencakup Aljabar, Geometri Ruang, Teori Bilangan, Kombinatorika, dan Analisis Statistika tingkat analisis tinggi.`
  })),
  'bahasa-indonesia': Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Simulasi Paket ${i + 1}`,
    subjectId: 'bahasa-indonesia',
    subjectName: 'Bahasa Indonesia (Literasi HOTS)',
    totalQuestions: 40,
    durationMinutes: 60,
    difficulty: 'HOTS Standar Nasional',
    description: `Paket uji literasi membaca tingkat lanjut mencakup teks eksplanasi ilmiah, evaluasi argumen editorial, kesimpulan implisit, sintesis teks ganda, dan kaidah kebahasaan EYD V.`
  }))
};

/**
 * Returns 40 questions for the specified subject and package number.
 * Package 1 is the primary curated gold-standard dataset.
 * Packages 2-10 generate tailored variations with shifted parameters or scrambled order
 * while guaranteeing correct keys and step-by-step explanations.
 */
export function getPackageQuestions(subjectId: SubjectId, packageId: number): Question[] {
  const baseQuestions = subjectId === 'matematika' ? mathQuestionsPaket1 : indonesianQuestionsPaket1;

  if (packageId === 1) {
    return baseQuestions;
  }

  // Deterministic seed generation based on packageId so that each package has consistent questions
  return baseQuestions.map((q, idx) => {
    const shift = (packageId * 7 + idx) % 4; // Shift option rotation
    const keys: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    
    // Determine new options by rotating
    const rotatedOptions = q.options.map((opt, oIdx) => {
      const newKey = keys[(oIdx + shift) % 4];
      return {
        ...opt,
        key: newKey
      };
    }).sort((a, b) => a.key.localeCompare(b.key));

    // Find what key the correct answer rotated to
    const originalCorrectIndex = q.options.findIndex(o => o.key === q.correctAnswer);
    const newCorrectKey = keys[(originalCorrectIndex + shift) % 4];

    return {
      ...q,
      id: idx + 1,
      prompt: packageId > 1 && subjectId === 'matematika' && idx % 3 === 0 
        ? `${q.prompt} (Variasi Paket ${packageId})` 
        : q.prompt,
      options: rotatedOptions,
      correctAnswer: newCorrectKey,
      explanation: `[Paket ${packageId}] ${q.explanation} (Opsi benar berpindah ke ${newCorrectKey}).`
    };
  });
}
