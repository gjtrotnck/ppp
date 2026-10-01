import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="bg-slate-900/95 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold border border-pink-400/40 backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-pink-400 shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
