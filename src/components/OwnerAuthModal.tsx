import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, X, KeyRound, AlertCircle, Check } from 'lucide-react';

interface OwnerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

// Passcode rahasia default untuk Gladys (bisa disesuaikan kapan saja)
const OWNER_PASSCODE = 'adys27918';

export const OwnerAuthModal: React.FC<OwnerAuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === OWNER_PASSCODE.toLowerCase()) {
      setError(false);
      setPasscode('');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#050B18]/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          className="relative w-full max-w-sm bg-[#0E1B38] border border-white/10 rounded-3xl p-6 shadow-2xl text-white overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">Owner Access</h3>
                <p className="text-[10px] text-slate-400 font-mono">Verifikasi Pemilik Portofolio</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] text-slate-300 font-mono uppercase block mb-1.5">
                Masukkan Kata Kunci Pemilik
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Ketik kata sandi..."
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setError(false);
                  }}
                  autoFocus
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    error ? 'border-rose-500 text-rose-300' : 'border-white/15 focus:border-sky-400'
                  }`}
                />
                <KeyRound className="absolute right-3 top-3 w-4 h-4 text-slate-500" />
              </div>
              {error && (
                <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Kata sandi salah.</span>
                </p>
              )}
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed font-light">
              Mode ini khusus untuk pemilik portofolio (<strong>through.adys</strong>). Pengunjung umum
              tidak memiliki akses ke halaman ini.
            </p>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-[0.98] text-[#0B1630] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Buka Content Studio</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
