import React from 'react';
import { Question } from '../types/test';
import { Heart, ChevronLeft, BarChart2 } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: 'A' | 'B' | null;
  onSelectOption: (optionId: 'A' | 'B') => void;
  onPrevious: () => void;
  canGoPrevious: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onPrevious,
  canGoPrevious
}) => {
  const progressPercent = Math.round(((questionIndex + 1) / totalQuestions) * 100);

  const handleChoice = (choice: 'A' | 'B') => {
    onSelectOption(choice);
  };

  return (
    <div className="w-full px-4 py-6 space-y-5 animate-fade-in">
      {/* Progress & Top Navigation */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-extrabold text-pink-700">
            <span>QUESTION {String(questionIndex + 1).padStart(2, '0')}</span>
            <span className="text-slate-600 font-normal">/ {totalQuestions}</span>
          </div>
          <span className="font-bold text-rose-500 bg-pink-100/70 px-2 py-0.5 rounded-full text-[11px]">
            {progressPercent}% 완료
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-3 bg-pink-100/80 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progressPercent}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-xs" />
          </div>
        </div>
      </div>

      {/* Main Question Scenario Card */}
      <div className="bg-white rounded-3xl border border-pink-100 shadow-lg shadow-pink-100/60 p-6 relative overflow-hidden">
        {/* Soft top-right gradient bubble */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100/50 rounded-full blur-2xl pointer-events-none" />

        <h2 className="text-[17px] font-bold text-slate-800 tracking-tight mb-3 flex items-center gap-2">
          <span className="w-1 h-4 rounded-full bg-rose-400 shrink-0" />
          <span>{question.title}</span>
        </h2>

        {/* Scenario Box */}
        <div className="bg-rose-50/60 border border-rose-100/80 rounded-2xl p-4 relative mb-4">
          <p className="text-slate-800 text-sm font-semibold leading-relaxed text-justify">
            {question.scenario}
          </p>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          {question.description}
        </p>
      </div>

      {/* A vs B Options */}
      <div className="space-y-3">
        {/* Option A */}
        <button
          onClick={() => handleChoice('A')}
          className={`w-full text-left p-5 rounded-3xl border-2 transition-all duration-200 relative group cursor-pointer ${
            selectedOption === 'A'
              ? 'bg-gradient-to-br from-pink-50 to-rose-50/80 border-rose-500 shadow-md shadow-rose-100 ring-2 ring-rose-200/50'
              : 'bg-white border-pink-100 hover:border-pink-300 hover:shadow-md hover:shadow-pink-50'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div
              className={`w-8 h-8 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 transition-colors ${
                selectedOption === 'A'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-pink-100 text-pink-600 group-hover:bg-pink-200'
              }`}
            >
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <h3 className="font-extrabold text-slate-900 text-sm leading-snug">
                  {question.optionA.text}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {question.optionA.subText}
              </p>

              {/* National Percentage Bar shown after selection */}
              {selectedOption && (
                <div className="mt-3 pt-3 border-t border-pink-100/70 animate-fade-in">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-bold text-slate-600 flex items-center gap-1">
                      <BarChart2 className="w-3.5 h-3.5 text-pink-500" />
                      전국 유저 선택률
                    </span>
                    <span className="font-black text-rose-600 text-sm">
                      {question.optionA.nationalPercent}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full transition-all duration-500"
                      style={{ width: `${question.optionA.nationalPercent}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </button>

        {/* VS Badge */}
        <div className="flex items-center justify-center">
          <span className="px-3 py-1 rounded-full bg-white border border-pink-200 text-pink-600 font-black text-xs shadow-xs tracking-wider">
            VS
          </span>
        </div>

        {/* Option B */}
        <button
          onClick={() => handleChoice('B')}
          className={`w-full text-left p-5 rounded-3xl border-2 transition-all duration-200 relative group cursor-pointer ${
            selectedOption === 'B'
              ? 'bg-gradient-to-br from-pink-50 to-rose-50/80 border-rose-500 shadow-md shadow-rose-100 ring-2 ring-rose-200/50'
              : 'bg-white border-pink-100 hover:border-pink-300 hover:shadow-md hover:shadow-pink-50'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div
              className={`w-8 h-8 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 transition-colors ${
                selectedOption === 'B'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-pink-100 text-pink-600 group-hover:bg-pink-200'
              }`}
            >
              B
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-1">
                <h3 className="font-extrabold text-slate-900 text-sm leading-snug">
                  {question.optionB.text}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {question.optionB.subText}
              </p>

              {/* National Percentage Bar shown after selection */}
              {selectedOption && (
                <div className="mt-3 pt-3 border-t border-pink-100/70 animate-fade-in">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="font-bold text-slate-600 flex items-center gap-1">
                      <BarChart2 className="w-3.5 h-3.5 text-pink-500" />
                      전국 유저 선택률
                    </span>
                    <span className="font-black text-rose-600 text-sm">
                      {question.optionB.nationalPercent}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full transition-all duration-500"
                      style={{ width: `${question.optionB.nationalPercent}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
            canGoPrevious
              ? 'text-slate-600 hover:text-pink-600 hover:bg-pink-50 border border-pink-100 bg-white'
              : 'text-slate-600 border border-transparent cursor-not-allowed opacity-0 pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>이전 질문</span>
        </button>

        {selectedOption && (
          <div className="text-xs font-semibold text-rose-600 animate-pulse flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 fill-rose-500" />
            <span>선택 완료! 다음 문항으로 이동합니다</span>
          </div>
        )}
      </div>
    </div>
  );
};
