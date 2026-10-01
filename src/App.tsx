import React, { useState } from 'react';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';
import { Toast } from './components/Toast';
import { QUESTIONS } from './data/questions';
import { calculateTestResult } from './data/results';
import { UserAnswerRecord } from './types/test';

export default function App() {
  const [testPhase, setTestPhase] = useState<'intro' | 'testing' | 'result'>('intro');
  const [nickname, setNickname] = useState<string>('나');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswerRecord[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  const handleStartTest = (name: string) => {
    setNickname(name);
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setTestPhase('testing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (choice: 'A' | 'B') => {
    const currentQ = QUESTIONS[currentQuestionIndex];
    const newAnswers = [
      ...userAnswers.filter((a) => a.questionId !== currentQ.id),
      { questionId: currentQ.id, selectedOption: choice }
    ];
    setUserAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTestPhase('result');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 700);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setTestPhase('intro');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShareGeneral = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('링크가 복사되었습니다! 친구나 단톡방에 공유해보세요 💕');
  };

  const resultData =
    userAnswers.length === QUESTIONS.length
      ? calculateTestResult(userAnswers)
      : null;

  const currentQAnswer =
    userAnswers.find((a) => a.questionId === QUESTIONS[currentQuestionIndex]?.id)
      ?.selectedOption || null;

  return (
    <div className="min-h-screen bg-pink-50/60 flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen flex flex-col bg-gradient-to-b from-rose-50/70 via-pink-50/40 to-rose-100/30 text-slate-800 border-x border-pink-100/80 shadow-xl shadow-pink-200/30">
        {/* App Header */}
        <Header
          onReset={handleReset}
          isTestActive={testPhase === 'testing'}
        />

        {/* Main Content Area */}
        <main className="flex-1 pb-12">
          {testPhase === 'intro' && (
            <StartScreen
              onStart={handleStartTest}
              onShareTest={handleShareGeneral}
            />
          )}

          {testPhase === 'testing' && (
            <QuestionCard
              question={QUESTIONS[currentQuestionIndex]}
              questionIndex={currentQuestionIndex}
              totalQuestions={QUESTIONS.length}
              selectedOption={currentQAnswer}
              onSelectOption={handleSelectOption}
              onPrevious={handlePreviousQuestion}
              canGoPrevious={currentQuestionIndex > 0}
            />
          )}

          {testPhase === 'result' && resultData && (
            <ResultScreen
              nickname={nickname}
              archetype={resultData.archetype}
              jealousyPercentage={resultData.jealousyPercentage}
              majorityAgreementCount={resultData.majorityAgreementCount}
              userAnswers={userAnswers}
              onRestart={handleReset}
              showToast={showToast}
            />
          )}
        </main>

        {/* Toast popup */}
        <Toast message={toastMessage} />

        {/* Footer */}
        <footer className="py-5 px-4 border-t border-pink-100 text-center text-xs text-slate-600 space-y-1">
          <p className="font-semibold text-pink-600/90">
            연애 10대 논쟁 밸런스 게임 테스트
          </p>
          <p className="text-[11px]">
            연인과의 건강하고 즐거운 대화를 위한 심리 성향 테스트입니다.
          </p>
        </footer>
      </div>
    </div>
  );
}
