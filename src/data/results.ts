import { TestResultArchetype, UserAnswerRecord } from '../types/test';
import { QUESTIONS } from './questions';

export const RESULT_ARCHETYPES: TestResultArchetype[] = [
  {
    id: 'buddha',
    name: '해탈의 경지! 평화주의 보살형',
    badge: '질투지수 10% · 쿨함의 끝판왕',
    emoji: '🕊️',
    jealousyScoreMin: 0,
    jealousyScoreMax: 30,
    summary: '부처님도 울고 갈 태평양 같은 마음! "내 사람은 결국 내게 온다"는 절대 신뢰의 소유자',
    tagline: '깻잎? 새우? 먹고살자고 하는 짓인데 다 줘라 줘~',
    description: [
      '사소한 이성 친구 문제나 매너 행동에 거의 흔들리지 않는 초강력 멘탈의 소유자입니다.',
      '상대방의 자유와 사생활을 100% 존중하며, 구속이나 집착을 스스로도 제일 싫어합니다.',
      '바람피울 사람은 묶어놔도 피우고, 안 피울 사람은 풀어놔도 안 피운다는 명확한 연애 철학을 지니고 있습니다.'
    ],
    datingStyle: [
      '구속 ZERO, 연락 압박 ZERO! 편안하고 친구 같은 연애를 선호합니다.',
      '갈등이 생겨도 감정적으로 화내기보다 한 발짝 물러서서 평화롭게 해결하려 합니다.',
      '단, 너무 쿨해서 상대방이 "나한테 관심이 없나?" 하고 서운해할 수도 있으니 가끔은 귀여운 질투를 보여주세요!'
    ],
    warningTip: '상대방은 당신의 쿨함이 "사랑이 식은 것"으로 오해할 수 있어요. "너라서 믿는 거야"라는 애정표현을 자주 해주세요.',
    bestMatch: {
      name: '현실주의 칼각형 🌸',
      emoji: '🌸',
      reason: '상호 간의 적정선을 잘 지키며 서로 피곤하지 않은 깔끔하고 안정적인 연애 가능!'
    },
    worstMatch: {
      name: '절대사수 철통방어형 🔥',
      emoji: '🔥',
      reason: '사소한 것도 다 통제하려는 상대방의 집착에 숨이 턱 막힐 수 있습니다.'
    },
    stats: {
      jealousy: 15,
      coolness: 95,
      possessiveness: 10,
      empathy: 85
    }
  },
  {
    id: 'balance_master',
    name: '상식과 매너의 수호자! 현실주의 칼각형',
    badge: '질투지수 45% · 깻잎은 OK 새우는 NO',
    emoji: '🌸',
    jealousyScoreMin: 31,
    jealousyScoreMax: 55,
    summary: '상식의 범주 안에서만 허용! 넘지 말아야 할 선(Line)이 명확한 스마트 연애러',
    tagline: '깻잎 떼주는 건 반찬이지만, 새우 까주는 건 사랑이다!',
    description: [
      '대한민국 평균적인 정서와 상식적인 선을 가장 정확하게 파악하고 있는 균형 감각의 달인입니다.',
      '사소한 식사 배려나 공적인 도움은 쿨하게 넘어가지만, 손길이 직접 닿거나 단둘이 밀폐된 공간은 단호하게 컷합니다.',
      '감정에 휘둘리기보다 합리적인 기준과 신뢰를 바탕으로 건강한 관계를 지향합니다.'
    ],
    datingStyle: [
      '무작정 화내지 않고 "이건 좀 서운해"라고 조리 있게 대화로 조율할 줄 압니다.',
      '상대방에게도 예의를 요구하는 만큼 나 자신도 철저하게 이성 관계 관리를 잘합니다.',
      '선만 넘지 않으면 누구보다 든든하고 편안한 최고의 파트너가 되어줍니다.'
    ],
    warningTip: '가끔 상대방이 지친 날에는 원칙과 상식보다 무조건적인 내 편이 되어주는 따뜻한 감정적 지지가 필요해요.',
    bestMatch: {
      name: '평화주의 보살형 🕊️',
      emoji: '🕊️',
      reason: '서로의 개인 공간을 존중하면서도 불필요한 감정 소모 없이 롱런할 수 있는 조합!'
    },
    worstMatch: {
      name: '겉바속촉 츤데레형 🐱',
      emoji: '🐱',
      reason: '말로는 괜찮다 해놓고 속으로 삐져있는 태도 때문에 답답함을 느낄 수 있습니다.'
    },
    stats: {
      jealousy: 45,
      coolness: 75,
      possessiveness: 40,
      empathy: 80
    }
  },
  {
    id: 'tsundere',
    name: '속으론 데스노트 작성 중! 겉바속촉 츤데레형',
    badge: '질투지수 65% · 쿨한 척 마스터',
    emoji: '🐱',
    jealousyScoreMin: 56,
    jealousyScoreMax: 75,
    summary: '겉으로는 "어~ 재밌게 놀아" 하지만 속으로는 온갖 시나리오 쓰며 부글부글 끓는 중!',
    tagline: '쿨해 보이고 싶어서 참았는데···. 왜 눈치없이 신나게 놀아!',
    description: [
      '속 좁아 보이기 싫어서 표정 관리를 하지만, 마음속에서는 이미 질투의 불꽃놀이가 터지고 있습니다.',
      '쿨한 척 허락해놓고 상대방이 진짜 신나서 연락이 뜸해지면 혼자 서운함 폭발!',
      '하지만 그만큼 상대방을 너무너무 좋아하고 애착이 크기 때문에 생기는 귀여운 투정입니다.'
    ],
    datingStyle: [
      '대놓고 화내기보단 묘하게 말투가 단답형으로 바뀌거나 입이 삐죽 튀어나옵니다.',
      '애인이 먼저 알아채고 "자기야 화났어? 미안해 내가 눈치가 없었네" 하고 안아주면 1초 만에 사르르 녹아내립니다.',
      '관심과 사랑의 확인을 꾸준히 받고 싶어 하는 사랑둥이 스타일입니다.'
    ],
    warningTip: '혼자 끙끙 앓다 보면 사소한 일이 오해로 커질 수 있어요! 솔직하게 "나 사실 좀 질투 났어"라고 예쁘게 털어놓아 보세요.',
    bestMatch: {
      name: '불타는 사랑 직진형 🌶️',
      emoji: '🌶️',
      reason: '표현이 넘치는 직진형의 끊임없는 사랑 고백에 불안함이 싹 사라지고 행복해집니다!'
    },
    worstMatch: {
      name: '평화주의 보살형 🕊️',
      emoji: '🕊️',
      reason: '내가 삐진 걸 상대가 전혀 눈치채지 못하고 꿀잠 자서 분통이 터질 수 있습니다.'
    },
    stats: {
      jealousy: 65,
      coolness: 40,
      possessiveness: 65,
      empathy: 70
    }
  },
  {
    id: 'passionate_lover',
    name: '내 사람은 나만 봐! 솔직당당 직진 사랑꾼',
    badge: '질투지수 80% · 질투도 사랑의 표현',
    emoji: '🌶️',
    jealousyScoreMin: 76,
    jealousyScoreMax: 90,
    summary: '가식 없는 100% 솔직함! "내 애인이 남 챙겨주는 꼴 절대 못 봐!" 귀여운 질투 폭격기',
    tagline: '친구 챙겨줄 시간에 내 손가락 하나 더 잡아줘!',
    description: [
      '질투를 숨기거나 속으로 삭이지 않고, 있는 그대로 사랑스럽고 당당하게 표현하는 스타일입니다.',
      '내 애인의 시선과 관심은 온전히 나에게만 쏠려 있어야 마땅하다는 확고한 로맨티시스트!',
      '그만큼 나 자신도 애인에게 간과 쓸개를 다 내어줄 정도로 헌신적이고 올인하는 타입입니다.'
    ],
    datingStyle: [
      '애정이 넘쳐흘러서 하루 종일 연락하고 붙어있는 꽁냥꽁냥 연애를 가장 좋아합니다.',
      '애인의 이성 친구나 술자리에 대해 확실한 울타리를 치지만, 나 역시 이성 관계를 칼같이 정리합니다.',
      '화끈하고 열정적이며, 연애할 때 세상에서 가장 특별한 사람이 된 기분을 느끼게 해줍니다.'
    ],
    warningTip: '애인의 사회생활이나 오랜 인간관계까지 과도하게 위축되지 않도록 가끔은 숨 쉴 틈을 열어주는 여유가 필요해요.',
    bestMatch: {
      name: '겉바속촉 츤데레형 🐱',
      emoji: '🐱',
      reason: '서로 질투하고 풀어주며 꽁냥거리는 티키타카가 세상에서 제일 잘 맞는 꿀조합!'
    },
    worstMatch: {
      name: '평화주의 보살형 🕊️',
      emoji: '🕊️',
      reason: '너무 방목형인 보살형을 보며 "날 사랑하긴 하는 걸까?" 끊임없이 회의감이 들 수 있습니다.'
    },
    stats: {
      jealousy: 80,
      coolness: 25,
      possessiveness: 85,
      empathy: 75
    }
  },
  {
    id: 'iron_wall',
    name: '휴전선보다 견고한 철벽! 절대사수 철통방어형',
    badge: '질투지수 95% · 질투계의 최종보스',
    emoji: '🔥',
    jealousyScoreMin: 91,
    jealousyScoreMax: 100,
    summary: '눈빛 교환도 사전 결재 필수! 바람의 싹은 틔우기도 전에 뿌리째 뽑아버리는 절대 수호신',
    tagline: '남녀 사이에 친구가 어딨어? 깻잎이든 지퍼든 전부 유죄!',
    description: [
      '깻잎 떼주기? 새우 까주기? 패딩 지퍼? 전부 유죄! 단 1%의 여지도 용납하지 않는 철통 경비형입니다.',
      '남녀 사이에 100% 순수한 친구는 존재하지 않는다고 굳게 믿으며, 사전 예방이 최선이라 생각합니다.',
      '애인을 향한 사랑과 소유욕이 우주 최강이며, 내 울타리 안에 들어온 사람은 세상 끝까지 지켜냅니다.'
    ],
    datingStyle: [
      '위치 공유, 연락 칼답, 투명한 동선 공개를 사랑의 기본 신뢰 증표로 생각합니다.',
      '한 번 마음을 주면 바람피울 생각은 0.001%도 안 하며 오직 애인 한 사람만을 바라보는 일편단심!',
      '서로에게 서로뿐인 밀도 200%의 진한 연애를 꿈꿉니다.'
    ],
    warningTip: '상대방을 너무 사랑해서 생긴 불안감일 수 있어요. 상대를 믿고 통제를 조금만 내려놓으면 훨씬 행복한 연애가 될 거예요.',
    bestMatch: {
      name: '솔직당당 직진 사랑꾼 🌶️',
      emoji: '🌶️',
      reason: '서로 구속하고 집착하는 것을 진정한 사랑의 증거로 여기며 불타는 케미를 자랑합니다!'
    },
    worstMatch: {
      name: '평화주의 보살형 🕊️',
      emoji: '🕊️',
      reason: '자유를 갈망하는 보살과 사방을 둘러막는 철벽의 숨 막히는 전쟁 발발 가능!'
    },
    stats: {
      jealousy: 95,
      coolness: 10,
      possessiveness: 98,
      empathy: 60
    }
  }
];

export function calculateTestResult(answers: UserAnswerRecord[]): {
  archetype: TestResultArchetype;
  totalJealousyScore: number;
  maxPossibleScore: number;
  jealousyPercentage: number;
  majorityAgreementCount: number;
} {
  let score = 0;
  let majorityCount = 0;

  answers.forEach((record) => {
    const question = QUESTIONS.find((q) => q.id === record.questionId);
    if (!question) return;

    const chosenOption = record.selectedOption === 'A' ? question.optionA : question.optionB;
    score += chosenOption.jealousyPoints;

    // Check if user picked the majority choice nationally
    if (
      (record.selectedOption === 'A' && question.optionA.nationalPercent >= 50) ||
      (record.selectedOption === 'B' && question.optionB.nationalPercent >= 50)
    ) {
      majorityCount++;
    }
  });

  const maxPossible = QUESTIONS.reduce((sum, q) => sum + Math.max(q.optionA.jealousyPoints, q.optionB.jealousyPoints), 0);
  const minPossible = QUESTIONS.reduce((sum, q) => sum + Math.min(q.optionA.jealousyPoints, q.optionB.jealousyPoints), 0);
  
  // Normalized 0 to 100 percentage
  const rawPercentage = Math.round(((score - minPossible) / (maxPossible - minPossible)) * 100);
  const jealousyPercentage = Math.max(5, Math.min(98, rawPercentage));

  // Find matching archetype based on jealousyPercentage
  let selected = RESULT_ARCHETYPES[RESULT_ARCHETYPES.length - 1];
  for (const arch of RESULT_ARCHETYPES) {
    if (jealousyPercentage >= arch.jealousyScoreMin && jealousyPercentage <= arch.jealousyScoreMax) {
      selected = arch;
      break;
    }
  }

  return {
    archetype: selected,
    totalJealousyScore: score,
    maxPossibleScore: maxPossible,
    jealousyPercentage,
    majorityAgreementCount: majorityCount
  };
}

// Encode/decode answers for sharing with couple/friends: e.g. "AABBAABBAB"
export function encodeAnswers(answers: UserAnswerRecord[]): string {
  return answers.map((a) => a.selectedOption).join('');
}

export function decodeAnswers(code: string): UserAnswerRecord[] {
  const letters = code.toUpperCase().split('');
  return letters.slice(0, 10).map((char, index) => ({
    questionId: index + 1,
    selectedOption: char === 'B' ? 'B' : 'A'
  }));
}
