import React from 'react';
import { AlertTriangle, ShieldX, Flame, BellOff } from 'lucide-react';

interface AntiCheatModalProps {
  isOpen: boolean;
  strikeCount: number;
  reason: string;
  isDisqualified: boolean;
  onAcknowledge: () => void;
}

export const AntiCheatModal: React.FC<AntiCheatModalProps> = ({
  isOpen,
  strikeCount,
  reason,
  isDisqualified,
  onAcknowledge
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-red-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full border-2 border-red-600 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="bg-red-600 text-white px-6 py-4 flex items-center gap-3">
          <div className="p-2 rounded-xl bg-red-700/80">
            <ShieldX className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-base">
              {isDisqualified ? 'Ujian Dihentikan Paksa!' : 'Peringatan Kecurangan Terdeteksi!'}
            </h3>
            <p className="text-xs text-red-100 font-medium">
              Sistem Pengawasan CBT GO TKA SMP
            </p>
          </div>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between text-red-900 font-bold">
              <span>Status Pelanggaran:</span>
              <span className="font-mono text-sm px-2.5 py-0.5 rounded-full bg-red-200 text-red-900">
                {isDisqualified ? 'BATAS MAKSIMAL TERLAMPAUI' : `Teguran ${strikeCount} dari 3`}
              </span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {reason || 'Anda terdeteksi berpindah tab browser, meminimalkan jendela, atau kehilangan fokus dari layar ujian.'}
            </p>
          </div>

          {!isDisqualified ? (
            <div className="space-y-2 text-slate-600">
              <p className="font-semibold text-slate-900">
                Peringatan Keras untuk Peserta:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 leading-normal pl-1">
                <li>Seluruh aktivitas klik di luar lembar ujian tercatat dalam log sistem.</li>
                <li>Jika Anda melakukan pelanggaran lebih dari 3 kali, sesi ujian akan langsung dihentikan secara permanen dan jawaban Anda akan diserahkan paksa apa adanya.</li>
              </ul>
            </div>
          ) : (
            <div className="p-3 bg-slate-900 text-white rounded-xl space-y-1">
              <p className="font-bold text-red-400">Tindakan Sistem:</p>
              <p className="text-[11px] text-slate-300">
                Karena telah mencapai batas toleransi maksimal (lebih dari 3 kali pelanggaran), seluruh jawaban Anda saat ini otomatis dikumpulkan dan dinilai.
              </p>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onAcknowledge}
              className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md focus:outline-hidden"
            >
              {isDisqualified ? 'Lihat Hasil Penilaian' : 'Saya Mengerti, Kembali ke Lembar Ujian'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
