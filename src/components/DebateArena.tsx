import React, { useState } from 'react';
import { QUESTIONS, INITIAL_COMMENTS } from '../data/questions';
import { CommentItem } from '../types/test';
import { Flame, MessageCircle, ThumbsUp, Send, Check } from 'lucide-react';

interface DebateArenaProps {
  onBackToTest: () => void;
  showToast: (msg: string) => void;
}

export const DebateArena: React.FC<DebateArenaProps> = ({
  onBackToTest,
  showToast
}) => {
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [comments, setComments] = useState<CommentItem[]>(INITIAL_COMMENTS);
  const [userVotes, setUserVotes] = useState<Record<number, 'A' | 'B'>>({});
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [selectedSide, setSelectedSide] = useState<'A' | 'B'>('A');

  const activeQuestion = QUESTIONS.find((q) => q.id === activeQuestionId) || QUESTIONS[0];
  const questionComments = comments.filter((c) => c.questionId === activeQuestionId);

  const handleVote = (choice: 'A' | 'B') => {
    setUserVotes((prev) => ({ ...prev, [activeQuestionId]: choice }));
    showToast(`${choice} 선택지에 한 표를 행사하셨습니다!`);
  };

  const handleLike = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const item: CommentItem = {
      id: 'c_' + Date.now(),
      questionId: activeQuestionId,
      author: authorName.trim() || '익명의 사랑꾼',
      choice: selectedSide,
      content: newComment.trim(),
      likes: 1,
      timestamp: '방금 전'
    };

    setComments([item, ...comments]);
    setNewComment('');
    showToast('의견이 등록되었습니다! 많은 분들과 공감을 나눠보세요.');
  };

  return (
    <div className="w-full px-4 py-6 space-y-5 animate-fade-in">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-pink-100 shadow-xl shadow-pink-100/60 p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>대한민국 10대 연애 난제 토론 광장</span>
          </div>
          <button
            onClick={onBackToTest}
            className="text-xs text-rose-600 hover:underline font-bold cursor-pointer"
          >
            ← 테스트로 가기
          </button>
        </div>

        <h1 className="text-xl font-black text-slate-900 tracking-tight mb-2">
          연애 밸런스 토론 & 실시간 여론조사
        </h1>
        <p className="text-xs text-slate-600 mb-4">
          10가지 난제를 자유롭게 둘러보고, 투표와 댓글로 당신의 연애 철학을 당당하게 주장해보세요!
        </p>

        {/* 10 Debate Tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
          {QUESTIONS.map((q) => (
            <button
              key={q.id}
              onClick={() => setActiveQuestionId(q.id)}
              className={`px-3 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                activeQuestionId === q.id
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-pink-50/70 text-slate-700 hover:bg-pink-100 border border-pink-100'
              }`}
            >
              <span>{q.title.replace(' 논쟁', '')}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Debate Detail Card */}
      <div className="bg-white rounded-3xl border border-pink-100 shadow-lg shadow-pink-100/50 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
            {activeQuestion.category}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            전국 누적 투표 10,000+
          </span>
        </div>

        <h2 className="text-xl font-black text-slate-900">
          {activeQuestion.title}
        </h2>

        <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 text-slate-800 text-sm font-semibold leading-relaxed text-justify">
          "{activeQuestion.scenario}"
        </div>

        {/* Live Vote Comparison Buttons */}
        <div className="grid grid-cols-1 gap-3 pt-1">
          {/* A */}
          <button
            onClick={() => handleVote('A')}
            className={`p-4 rounded-2xl border-2 text-left transition-all relative cursor-pointer ${
              userVotes[activeQuestionId] === 'A'
                ? 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-200 shadow-xs'
                : 'border-pink-100 bg-white hover:border-pink-300'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-black text-xs text-pink-600 bg-pink-100 px-2 py-0.5 rounded-md">
                선택 A
              </span>
              {userVotes[activeQuestionId] === 'A' && (
                <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 내 투표
                </span>
              )}
            </div>
            <p className="font-extrabold text-slate-900 text-sm mb-1">
              {activeQuestion.optionA.text}
            </p>
            <p className="text-xs text-slate-600 mb-3">
              {activeQuestion.optionA.subText}
            </p>

            <div className="pt-2 border-t border-pink-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">전국 지지율</span>
              <span className="text-base font-black text-rose-600">
                {activeQuestion.optionA.nationalPercent}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-rose-500 rounded-full"
                style={{ width: `${activeQuestion.optionA.nationalPercent}%` }}
              />
            </div>
          </button>

          {/* B */}
          <button
            onClick={() => handleVote('B')}
            className={`p-4 rounded-2xl border-2 text-left transition-all relative cursor-pointer ${
              userVotes[activeQuestionId] === 'B'
                ? 'border-rose-500 bg-rose-50/50 ring-2 ring-rose-200 shadow-xs'
                : 'border-pink-100 bg-white hover:border-pink-300'
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-black text-xs text-pink-600 bg-pink-100 px-2 py-0.5 rounded-md">
                선택 B
              </span>
              {userVotes[activeQuestionId] === 'B' && (
                <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 내 투표
                </span>
              )}
            </div>
            <p className="font-extrabold text-slate-900 text-sm mb-1">
              {activeQuestion.optionB.text}
            </p>
            <p className="text-xs text-slate-600 mb-3">
              {activeQuestion.optionB.subText}
            </p>

            <div className="pt-2 border-t border-pink-100 flex items-center justify-between text-xs">
              <span className="text-slate-600">전국 지지율</span>
              <span className="text-base font-black text-rose-600">
                {activeQuestion.optionB.nationalPercent}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-rose-500 rounded-full"
                style={{ width: `${activeQuestion.optionB.nationalPercent}%` }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-3xl border border-pink-100 shadow-sm p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-rose-500" />
            <h3 className="font-black text-slate-900 text-sm">
              네티즌 한줄평 ({questionComments.length})
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            실시간 반응
          </span>
        </div>

        {/* Comment input form */}
        <form onSubmit={handleAddComment} className="p-3.5 rounded-2xl bg-pink-50/40 border border-pink-100 space-y-2.5">
          <div className="flex gap-2">
            <input
              type="text"
              maxLength={12}
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="닉네임 (기본: 익명)"
              className="flex-1 px-3 py-2 rounded-xl border border-pink-200 text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400"
            />
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedSide('A')}
                className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedSide === 'A'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'bg-white border border-pink-200 text-slate-600 hover:bg-pink-50'
                }`}
              >
                A 지지
              </button>
              <button
                type="button"
                onClick={() => setSelectedSide('B')}
                className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedSide === 'B'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'bg-white border border-pink-200 text-slate-600 hover:bg-pink-50'
                }`}
              >
                B 지지
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              maxLength={100}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="당신의 명쾌한 한마디를 남겨주세요!"
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-pink-200 text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400 text-slate-800"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <span>등록</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        {/* Comment list */}
        <div className="space-y-3">
          {questionComments.length === 0 ? (
            <p className="text-center text-xs text-slate-600 py-6">
              아직 등록된 의견이 없습니다. 첫 번째로 명쾌한 생각을 남겨보세요!
            </p>
          ) : (
            questionComments.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-white border border-pink-100 hover:border-pink-200 transition-all text-xs space-y-1.5 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-slate-900">
                      {item.author}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                        item.choice === 'A'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-pink-100 text-pink-700'
                      }`}
                    >
                      {item.choice} 입장
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {item.timestamp}
                    </span>
                  </div>
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-rose-600 p-1 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer"
                  >
                    <ThumbsUp className="w-3 h-3 text-rose-500" />
                    <span>{item.likes}</span>
                  </button>
                </div>
                <p className="text-slate-800 font-medium leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
