import React from 'react';
import { Heart, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  isTestActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onReset,
  isTestActive
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-100">
      <div className="w-full px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            if (isTestActive) {
              if (window.confirm('진행 중인 테스트를 중단하고 처음으로 돌아가시겠습니까?')) {
                onReset();
              }
            } else {
              onReset();
            }
          }}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-95 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-pink-500 via-rose-400 to-pink-300 flex items-center justify-center text-white shadow-sm shadow-pink-200">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                연애 밸런스 게임
              </span>
            </div>
            <p className="text-[11px] text-slate-600">
              내 연애 질투 유형은?
            </p>
          </div>
        </button>

        {/* Reset Action when testing */}
        {isTestActive && (
          <button
            onClick={() => {
              if (window.confirm('처음부터 다시 시작하시겠습니까?')) {
                onReset();
              }
            }}
            title="처음으로"
            className="p-1.5 rounded-full text-slate-600 hover:text-pink-600 hover:bg-pink-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  );
};
