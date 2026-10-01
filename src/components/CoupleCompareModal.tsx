import React, { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { decodeAnswers, calculateTestResult } from '../data/results';
import { UserAnswerRecord } from '../types/test';
import { Heart, Sparkles, AlertCircle, CheckCircle2, XCircle, ArrowRight, Copy } from 'lucide-react';

interface CoupleCompareModalProps {
  myAnswers: UserAnswerRecord[] | null;
  myNickname: string;
  initialPartnerCode?: string;
  initialPartnerName?: string;
  onClose: () => void;
  onGoToTest: () => void;
  showToast: (msg: string) => void;
}

export const CoupleCompareModal: React.FC<CoupleCompareModalProps> = ({
  myAnswers,
  myNickname,
  initialPartnerCode = '',
  initialPartnerName = '상대방',
  onClose,
  onGoToTest,
  showToast
}) => {
  const [partnerInput, setPartnerInput] = useState(initialPartnerCode);
  const [partnerName, setPartnerName] = useState(initialPartnerName);

  // Parse partner answers if valid 10-char code or url
  let cleanPartnerCode = partnerInput.trim();
  if (cleanPartnerCode.includes('partner=')) {
    try {
      const parsedUrl = new URL(cleanPartnerCode);
      cleanPartnerCode = parsedUrl.searchParams.get('partner') || '';
      const nameParam = parsedUrl.searchParams.get('name');
      if (nameParam && partnerName === '상대방') {
        setPartnerName(nameParam);
      }
    } catch {
      // not a full url, keep searching
      const match = cleanPartnerCode.match(/partner=([A-Ba-b]{10})/);
      if (match) cleanPartnerCode = match[1];
    }
  }

  const isValidPartner = cleanPartnerCode.length >= 10 && /^[a-zA-Z]+$/.test(cleanPartnerCode.slice(0, 10));
  const partnerAnswers = isValidPartner ? decodeAnswers(cleanPartnerCode) : null;

  // Comparison logic
  let matchCount = 0;
  let matchPercent = 0;
  let matches: Array<{ qId: number; title: string; choice: string }> = [];
  let clashes: Array<{ qId: number; title: string; myChoice: string; partnerChoice: string }> = [];

  if (myAnswers && partnerAnswers) {
    QUESTIONS.forEach((q, idx) => {
      const my = myAnswers[idx]?.selectedOption;
      const partner = partnerAnswers[idx]?.selectedOption;

      if (my === partner) {
        matchCount++;
        const opt = my === 'A' ? q.optionA : q.optionB;
        matches.push({ qId: q.id, title: q.title, choice: `[${my}] ${opt.text}` });
      } else {
        const myOpt = my === 'A' ? q.optionA : q.optionB;
        const partnerOpt = partner === 'A' ? q.optionA : q.optionB;
        clashes.push({
          qId: q.id,
          title: q.title,
          myChoice: `[${my}] ${myOpt.text}`,
          partnerChoice: `[${partner}] ${partnerOpt.text}`
        });
      }
    });

    matchPercent = Math.round((matchCount / QUESTIONS.length) * 100);
  }

  const getChemistryComment = (percent: number) => {
    if (percent >= 90) {
      return {
        tag: '소름 돋는 영혼의 단짝 💖',
        color: 'text-rose-600',
        bg: 'bg-rose-50 border-rose-200',
        desc: '깻잎부터 놀이공원까지 연애 가치관이 99.9% 판박이! 싸울 일 없이 물 흐르듯 평화로운 천생연분입니다.'
      };
    } else if (percent >= 70) {
      return {
        tag: '꿀케미 찰떡궁합 🌸',
        color: 'text-pink-600',
        bg: 'bg-pink-50 border-pink-200',
        desc: '서로의 연애 선과 매너를 매우 잘 이해하고 배려해주는 이상적인 커플! 몇 가지 사소한 차이는 귀여운 애교로 조율 가능해요.'
      };
    } else if (percent >= 50) {
      return {
        tag: '흥미진진 티키타카 커플 🐱',
        color: 'text-amber-600',
        bg: 'bg-amber-50 border-amber-200',
        desc: '반은 맞고 반은 갈리는 아슬아슬한 케미! 연애 논쟁으로 밤새 토론하며 서로를 맞춰가는 재미가 쏠쏠합니다.'
      };
    } else {
      return {
        tag: '극과 극 자석 같은 매력 ⚡',
        color: 'text-purple-600',
        bg: 'bg-purple-50 border-purple-200',
        desc: '한 사람은 태평양 쿨가이인데 한 사람은 철벽 수호신?! 서로 다른 매력에 끌렸지만 사소한 선을 명확히 대화로 합의해두는 것이 중요해요!'
      };
    }
  };

  const chemistry = getChemistryComment(matchPercent);

  return (
    <div className="max-w-xl mx-auto px-4 py-8 space-y-6 animate-fade-in">
      {/* Header Card */}
      <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-100/70 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold">
            <Heart className="w-3.5 h-3.5 fill-pink-500" />
            <span>커플 & 친구 연애 밸런스 궁합 대조소</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-slate-600 hover:text-slate-800 font-bold px-2 py-1"
          >
            닫기
          </button>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          두 사람의 밸런스 성향 매칭
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          상대방이 공유해준 링크나 10자리 답변 코드(ex: AABBAABBAB)를 입력하면 10대 논쟁 일치율을 즉시 확인합니다.
        </p>

        {/* Input Form */}
        <div className="space-y-3 bg-pink-50/50 p-4 rounded-2xl border border-pink-100 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                상대방 이름/애칭
              </label>
              <input
                type="text"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                placeholder="예: 지민, 내 애인"
                className="w-full px-3 py-2 text-xs rounded-xl border border-pink-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                상대방 답변 코드 또는 링크
              </label>
              <input
                type="text"
                value={partnerInput}
                onChange={(e) => setPartnerInput(e.target.value)}
                placeholder="예: AABBAABBAB 또는 링크 붙여넣기"
                className="w-full px-3 py-2 text-xs rounded-xl border border-pink-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400"
              />
            </div>
          </div>

          {/* Quick preset samples for testing */}
          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            <span className="text-[11px] text-slate-600">예시 코드 넣어보기:</span>
            <button
              onClick={() => {
                setPartnerInput('BBBBBBBBBB');
                setPartnerName('초쿨 보살친구');
              }}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-pink-200 text-pink-600 hover:bg-pink-100"
            >
              완전 쿨가이 (All B)
            </button>
            <button
              onClick={() => {
                setPartnerInput('AAAAAAAAAA');
                setPartnerName('철통 방어 연인');
              }}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-pink-200 text-rose-600 hover:bg-pink-100"
            >
              철통 사수 (All A)
            </button>
            <button
              onClick={() => {
                setPartnerInput('ABABABABAB');
                setPartnerName('현실주의 짝꿍');
              }}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-pink-200 text-purple-600 hover:bg-pink-100"
            >
              반반 현실파
            </button>
          </div>
        </div>

        {/* If user hasn't tested yet */}
        {!myAnswers && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center space-y-3">
            <p className="text-xs sm:text-sm font-bold text-rose-900">
              아직 {myNickname} 님의 테스트 답변이 없습니다!
            </p>
            <p className="text-xs text-rose-700">
              먼저 10문항 테스트를 진행하셔야 상대방과의 궁합을 정확하게 비교할 수 있습니다.
            </p>
            <button
              onClick={onGoToTest}
              className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 mx-auto"
            >
              <span>테스트 시작하러 가기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* If valid comparison data ready */}
        {myAnswers && partnerAnswers && (
          <div className="space-y-6 animate-fade-in">
            {/* Score Banner */}
            <div className={`p-5 rounded-2xl border text-center ${chemistry.bg}`}>
              <span className="text-xs font-bold text-slate-600 mb-1 block">
                {myNickname} & {partnerName} 님의 연애 밸런스 일치율
              </span>
              <div className="text-4xl font-black text-rose-600 my-1">
                {matchPercent}%
              </div>
              <span className={`text-sm font-extrabold block mb-2 ${chemistry.color}`}>
                {chemistry.tag}
              </span>
              <p className="text-xs text-slate-700 leading-relaxed max-w-md mx-auto">
                {chemistry.desc}
              </p>
            </div>

            {/* Clashing points vs Matches */}
            <div className="space-y-4 text-left">
              {/* Clashing debates */}
              <div>
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>의견이 격돌한 논쟁 ({clashes.length}개)</span>
                </h4>
                {clashes.length === 0 ? (
                  <p className="text-xs text-slate-600 p-3 bg-pink-50/50 rounded-xl">
                    놀랍게도 10가지 모든 논쟁에서 두 사람의 의견이 100% 일치합니다! 👏
                  </p>
                ) : (
                  <div className="space-y-2">
                    {clashes.map((c) => (
                      <div
                        key={c.qId}
                        className="p-3 rounded-xl bg-amber-50/40 border border-amber-200/60 text-xs space-y-1"
                      >
                        <p className="font-bold text-amber-900">
                          🔥 {c.title}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-amber-200/50">
                          <div>
                            <span className="font-bold text-slate-600">{myNickname}:</span>{' '}
                            <span className="text-slate-800">{c.myChoice}</span>
                          </div>
                          <div>
                            <span className="font-bold text-slate-600">{partnerName}:</span>{' '}
                            <span className="text-slate-800">{c.partnerChoice}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Matched debates */}
              <div>
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>완벽하게 통했던 논쟁 ({matches.length}개)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {matches.map((m) => (
                    <div
                      key={m.qId}
                      className="p-2.5 rounded-xl bg-emerald-50/40 border border-emerald-100 text-xs"
                    >
                      <p className="font-bold text-emerald-900">{m.title}</p>
                      <p className="text-[11px] text-emerald-700 truncate">
                        둘 다 {m.choice}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
