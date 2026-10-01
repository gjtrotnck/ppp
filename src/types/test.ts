export interface Option {
  id: 'A' | 'B';
  text: string;
  subText: string;
  jealousyPoints: number; // Higher means more jealous / strictly bound
  nationalPercent: number; // Based on viral Korean survey data
  tag: string;
}

export interface Question {
  id: number;
  title: string;
  category: string;
  icon: string;
  scenario: string;
  description: string;
  optionA: Option;
  optionB: Option;
  hotTopicPoint: string;
}

export interface TestResultArchetype {
  id: string;
  name: string;
  badge: string;
  emoji: string;
  jealousyScoreMin: number;
  jealousyScoreMax: number;
  summary: string;
  tagline: string;
  description: string[];
  datingStyle: string[];
  warningTip: string;
  bestMatch: {
    name: string;
    emoji: string;
    reason: string;
  };
  worstMatch: {
    name: string;
    emoji: string;
    reason: string;
  };
  stats: {
    jealousy: number; // 0 - 100
    coolness: number;
    possessiveness: number;
    empathy: number;
  };
}

export interface UserAnswerRecord {
  questionId: number;
  selectedOption: 'A' | 'B';
}

export interface CommentItem {
  id: string;
  questionId: number;
  author: string;
  choice: 'A' | 'B';
  content: string;
  likes: number;
  timestamp: string;
}
