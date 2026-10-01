import React, { useState } from 'react';
import { Sparkles, Flame, ArrowRight, CheckCircle2, Share2 } from 'lucide-react';

interface StartScreenProps {
  onStart: (nickname: string) => void;
  onShareTest: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  onShareTest
}) => {
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = nickname.trim() || '나';
    onStart(finalName);
  };

  return (
    <div className="w-full px-4 py-6 space-y-5">
      {/* Hero Card */}
      <div className="relative overflow-hidden bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-100/60 p-6 text-center">
        {/* Soft pink ambient background blurs */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Live Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-700 text-xs font-semibold mb-4">
          <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
          <span>실시간 164,280+ 명 참여 중</span>
          <span className="text-pink-300">|</span>
          <span className="flex items-center gap-1 text-rose-600 font-bold">
            <Flame className="w-3.5 h-3.5 fill-rose-500" /> 화제의 테스트
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 leading-snug mb-3">
          깻잎부터 새우까지!
          <br />
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
            연애 10대 논쟁 밸런스 게임
          </span>
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          "내 애인이 내 친구 깻잎을 떼어준다면?"
          <br />
          대한민국을 뜨겁게 달군 10가지 연애 난제로 알아보는
          <br />
          <strong className="text-pink-600 font-semibold">나의 연애 스타일 & 질투 지수 분석</strong>
        </p>

        {/* Nickname Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              테스트에서 사용할 닉네임 <span className="text-slate-500 font-normal">(선택)</span>
            </label>
            <div className="relative">
              <input
                type="text"
                maxLength={10}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임을 입력하세요."
                className="w-full px-4 py-3 rounded-2xl border border-pink-200 bg-pink-50/30 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400 focus:border-rose-400 text-sm transition-all text-slate-800 placeholder-slate-400"
              />
              <span className="absolute right-3.5 top-3.5 text-xs text-slate-400">
                {nickname.length}/10
              </span>
            </div>
          </div>

          {/* Start CTA Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-extrabold text-base shadow-lg shadow-pink-300/60 hover:shadow-pink-400/70 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>테스트 시작하기</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Feature summary */}
        <div className="grid grid-cols-2 gap-2 mt-7 pt-5 border-t border-pink-100 text-center text-xs text-slate-600">
          <div className="flex flex-col items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-rose-500" />
            <span className="font-semibold text-slate-700">총 10문항</span>
            <span className="text-[11px] text-slate-500">소요 시간 약 2분</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="font-semibold text-slate-700">질투 지수 분석</span>
            <span className="text-[11px] text-slate-500">5가지 연애 유형</span>
          </div>
        </div>
      </div>

      {/* Share test bar */}
      <div className="text-center pt-1">
        <button
          onClick={onShareTest}
          className="inline-flex items-center gap-1.5 text-xs text-pink-700 font-semibold hover:text-pink-800 hover:underline transition-colors cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>테스트 링크 복사해서 단톡방에 공유하기</span>
        </button>
      </div>
    </div>
  );
};
