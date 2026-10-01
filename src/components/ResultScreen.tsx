import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { TestResultArchetype, UserAnswerRecord } from '../types/test';
import { QUESTIONS } from '../data/questions';
import { RESULT_ARCHETYPES } from '../data/results';
import {
  Share2,
  RotateCcw,
  Sparkles,
  Copy,
  Flame,
  Award,
  ChevronDown,
  ChevronUp,
  Eye
} from 'lucide-react';

interface ResultScreenProps {
  nickname: string;
  archetype: TestResultArchetype;
  jealousyPercentage: number;
  majorityAgreementCount: number;
  userAnswers: UserAnswerRecord[];
  onRestart: () => void;
  showToast: (msg: string) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  nickname,
  archetype,
  jealousyPercentage,
  majorityAgreementCount,
  userAnswers,
  onRestart,
  showToast
}) => {
  const [showAnswerList, setShowAnswerList] = useState(false);
  const [previewArchetypeId, setPreviewArchetypeId] = useState<string>(archetype.id);
  const [showAllResultsModal, setShowAllResultsModal] = useState(false);

  useEffect(() => {
    setPreviewArchetypeId(archetype.id);
  }, [archetype.id]);

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#fbcfe8', '#fda4af']
      });
    } catch (e) {
      // ignore if canvas context issue
    }
  }, []);

  const displayedArchetype =
    RESULT_ARCHETYPES.find((a) => a.id === previewArchetypeId) || archetype;
  const isPreviewMode = displayedArchetype.id !== archetype.id;
  const displayedJealousy = isPreviewMode
    ? displayedArchetype.stats.jealousy
    : jealousyPercentage;

  const formatArchetypeTitle = (name: string) => {
    const parts = name.split('! ');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}!
          <br />
          {parts[1]}
        </>
      );
    }
    return name;
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + window.location.pathname);
    showToast('링크가 복사되었습니다! 친구나 연인에게 공유해보세요.');
  };

  const handleCopySummary = () => {
    const summaryText = `[연애 10대 논쟁 밸런스 게임 결과]
👤 ${nickname}님의 연애 유형: ${archetype.name}
📊 질투 지수: ${jealousyPercentage}%
💬 "${archetype.tagline}"
✨ 환상의 짝꿍: ${archetype.bestMatch.name}
테스트 해보기: ${window.location.origin}${window.location.pathname}`;
    navigator.clipboard.writeText(summaryText);
    showToast('결과 요약이 클립보드에 복사되었습니다!');
  };

  return (
    <div className="w-full px-4 py-6 space-y-5 animate-fade-in">
      {/* Result Card Hero */}
      <div className="bg-white rounded-3xl border border-pink-200/80 shadow-xl shadow-pink-100/70 p-6 text-center relative overflow-hidden">
        {/* Rosy background accent */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-gradient-to-br from-pink-200/50 to-rose-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-gradient-to-tr from-pink-100/60 to-rose-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* Top badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>
            {isPreviewMode
              ? `다른 결과 미리보기 (${displayedArchetype.badge})`
              : `${nickname} 님의 연애 밸런스 프로필`}
          </span>
        </div>

        {/* Archetype Emoji */}
        <div className="text-6xl mb-3 animate-bounce select-none">
          {displayedArchetype.emoji}
        </div>

        {/* Archetype Name with Line Break */}
        <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
          {formatArchetypeTitle(displayedArchetype.name)}
        </h1>

        {/* Tagline */}
        <p className="text-pink-600 font-extrabold text-sm mb-4 bg-pink-50/70 py-1.5 px-4 rounded-xl inline-block border border-pink-100">
          "{displayedArchetype.tagline}"
        </p>

        {/* Jealousy Gauge Meter */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-b from-pink-50/80 to-rose-50/40 border border-pink-100">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
              나의 연애 질투 지수
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-rose-600">
                {displayedJealousy}
              </span>
              <span className="text-xs font-bold text-rose-400">%</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-pink-100">
            <div
              className="h-full bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${displayedJealousy}%` }}
            />
          </div>
        </div>

        {/* 4 Detail Stat Gauges */}
        <div className="grid grid-cols-2 gap-2.5 text-left my-5">
          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-xs">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>🔥 질투 민감도</span>
              <span className="text-rose-500 font-extrabold">{displayedArchetype.stats.jealousy}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-rose-500 rounded-full transition-all duration-500"
                style={{ width: `${displayedArchetype.stats.jealousy}%` }}
              />
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-xs">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>❄️ 쿨함 & 신뢰</span>
              <span className="text-blue-500 font-extrabold">{displayedArchetype.stats.coolness}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-400 rounded-full transition-all duration-500"
                style={{ width: `${displayedArchetype.stats.coolness}%` }}
              />
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-xs">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>🔒 소유욕</span>
              <span className="text-purple-500 font-extrabold">{displayedArchetype.stats.possessiveness}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-purple-400 rounded-full transition-all duration-500"
                style={{ width: `${displayedArchetype.stats.possessiveness}%` }}
              />
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white border border-pink-100 shadow-xs">
            <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
              <span>🤝 공감 & 배려</span>
              <span className="text-emerald-500 font-extrabold">{displayedArchetype.stats.empathy}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${displayedArchetype.stats.empathy}%` }}
              />
            </div>
          </div>
        </div>

        {/* Trait Descriptions */}
        <div className="text-left space-y-2.5 p-4 rounded-2xl bg-rose-50/50 border border-pink-100 text-xs text-slate-700 leading-relaxed mb-4">
          <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5 mb-2">
            <span>✨</span> <span>주요 연애 성향 분석</span>
          </h4>
          {displayedArchetype.description.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Dating Style & Warning Tip */}
        <div className="text-left space-y-2 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 text-xs text-amber-950 leading-relaxed mb-5">
          <div className="font-bold flex items-center gap-1.5 text-amber-900 text-xs">
            <span>💡</span> <span>연애 솔루션 & 조언</span>
          </div>
          <p>{displayedArchetype.warningTip}</p>
        </div>

        {/* Chemistry Best & Worst Match */}
        <div className="grid grid-cols-1 gap-2.5 text-left pt-3 border-t border-pink-100">
          <div className="p-3.5 rounded-2xl bg-pink-50/70 border border-pink-100">
            <div className="text-xs font-extrabold text-pink-700 flex items-center gap-1 mb-1">
              <span>💖 환상의 짝꿍</span>
            </div>
            <p className="font-black text-slate-900 text-sm mb-1">
              {displayedArchetype.bestMatch.name}
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {displayedArchetype.bestMatch.reason}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-extrabold text-slate-600 flex items-center gap-1 mb-1">
              <span>⚡ 환장의 짝꿍</span>
            </div>
            <p className="font-black text-slate-900 text-sm mb-1">
              {displayedArchetype.worstMatch.name}
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              {displayedArchetype.worstMatch.reason}
            </p>
          </div>
        </div>
      </div>

      {/* All 5 Result Types Explorer Card */}
      <div className="bg-white rounded-3xl border border-pink-100 shadow-sm p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-rose-500" />
            <h3 className="font-black text-slate-900 text-sm">
              전체 연애 결과 유형 둘러보기 (5종)
            </h3>
          </div>
          {isPreviewMode && (
            <button
              onClick={() => setPreviewArchetypeId(archetype.id)}
              className="text-[11px] font-bold text-rose-600 hover:underline cursor-pointer"
            >
              내 결과로 돌아가기
            </button>
          )}
        </div>
        <p className="text-[10.5px] whitespace-nowrap tracking-tight text-slate-500">
          궁금한 유형을 클릭하면 위 결과 카드에서 상세 내용을 바로 확인할 수 있습니다.
        </p>
        <div className="grid grid-cols-1 gap-2">
          {RESULT_ARCHETYPES.map((arch) => {
            const isSelected = displayedArchetype.id === arch.id;
            const isMine = archetype.id === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => {
                  setPreviewArchetypeId(arch.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-pink-50 border-rose-400 ring-1 ring-rose-300'
                    : 'bg-white border-pink-100 hover:bg-pink-50/50'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-2xl shrink-0">{arch.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-xs text-slate-900 truncate">
                        {arch.name}
                      </span>
                      {isMine && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-rose-500 text-white font-bold shrink-0">
                          내 유형
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      {arch.badge}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-pink-600 shrink-0">
                  보기 →
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 10 Questions Answer Review Collapsible */}
      {userAnswers.length > 0 && (
        <div className="bg-white rounded-3xl border border-pink-100 shadow-sm p-5">
          <button
            onClick={() => setShowAnswerList(!showAnswerList)}
            className="w-full flex items-center justify-between text-left group cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-rose-500" />
                <h3 className="font-black text-slate-900 text-sm">
                  내가 고른 10대 논쟁 답변 모아보기
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                전국 다수파와 일치: <strong className="text-pink-600 font-bold">{majorityAgreementCount}개</strong> / 소수파: {10 - majorityAgreementCount}개
              </p>
            </div>
            <div className="p-2 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-100 transition-colors">
              {showAnswerList ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showAnswerList && (
            <div className="mt-4 pt-4 border-t border-pink-100 space-y-3 animate-fade-in">
              {userAnswers.map((answer, index) => {
                const q = QUESTIONS.find((item) => item.id === answer.questionId);
                if (!q) return null;
                const chosen = answer.selectedOption === 'A' ? q.optionA : q.optionB;
                const isMajority = chosen.nationalPercent >= 50;

                return (
                  <div
                    key={q.id}
                    className="p-3.5 rounded-2xl bg-pink-50/40 border border-pink-100/70 text-xs space-y-1.5"
                  >
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-slate-800">
                        Q{index + 1}. {q.title}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          isMajority
                            ? 'bg-rose-100 text-rose-700'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {isMajority ? '다수파' : '소수파'} ({chosen.nationalPercent}%)
                      </span>
                    </div>
                    <p className="font-extrabold text-pink-600">
                      내 선택: [{chosen.id}] {chosen.text}
                    </p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      {chosen.subText}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Bottom Actions */}
      <div className="space-y-2.5 pt-1">
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyLink}
            className="flex-1 py-3.5 px-4 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs transition-all shadow-md shadow-pink-200 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            <span>테스트 링크 공유</span>
          </button>
          <button
            onClick={handleCopySummary}
            className="flex-1 py-3.5 px-4 rounded-2xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>결과 텍스트 복사</span>
          </button>
        </div>

        <button
          onClick={onRestart}
          className="w-full py-3.5 px-4 rounded-2xl bg-white border border-pink-200 text-slate-700 hover:text-pink-600 hover:bg-pink-50 font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>테스트 다시하기</span>
        </button>
      </div>
    </div>
  );
};
