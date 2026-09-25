import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#394634] text-[#faf6f0] shadow-xl border border-[#eedecf]/30 transition-all animate-fade-in text-xs font-medium tracking-wide">
      <span className="material-symbols-outlined text-base text-[#c1664e]">check_circle</span>
      <span>{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 text-[#eedecf] hover:text-white transition-colors"
        aria-label="닫기"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>
    </div>
  );
};
