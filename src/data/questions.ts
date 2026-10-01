import { Question } from '../types/test';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: '깻잎 논쟁',
    category: '깻잎 논쟁',
    icon: '🍃',
    scenario: '애인, 나, 내 친구 셋이 밥을 먹는 중! 친구가 깻잎 2장을 못 떼서 쩔쩔매자, 내 애인이 젓가락으로 깻잎을 꾹 눌러서 떼어줬다.',
    description: '젓가락이 닿고 눈이 마주치는 이 순간, 당신의 반응은?',
    optionA: {
      id: 'A',
      text: '절대 안 됨! 당장 젓가락 치워!',
      subText: '깻잎 2장을 먹든 10장을 먹든 냅둬! 왜 내 애인이 친구 깻잎에 젓가락을 보태?',
      jealousyPoints: 10,
      nationalPercent: 57,
      tag: '철벽사수형'
    },
    optionB: {
      id: 'B',
      text: '완전 상관없음! 그저 밥 먹는 배려일 뿐',
      subText: '반찬 떼기 힘들어하는데 도와줄 수도 있지~ 음식 앞에서 쿨하게 식사나 맛있게 하자!',
      jealousyPoints: 1,
      nationalPercent: 43,
      tag: '쿨가이·쿨걸형'
    },
    hotTopicPoint: '핵심: 시선 교환과 젓가락 접촉을 감정의 시작으로 볼 것인가 vs 단순 편의 배려인가'
  },
  {
    id: 2,
    title: '새우 껍질 논쟁',
    category: '새우 껍질 논쟁',
    icon: '🦐',
    scenario: '셋이 대하구이를 먹으러 갔다. 내 애인이 정성스레 손으로 새우 껍질을 까더니 내 친구 앞접시에 쏙 올려줬다.',
    description: '깻잎보다 100배는 더 손이 많이 가고 정성이 들어가는 새우 껍질 까주기! 손에 양념 묻혀가며 까준 저 속살은 과연?',
    optionA: {
      id: 'A',
      text: '절대 용납 불가! 손에 묻혀가며 왜 까줘?',
      subText: '내 것도 아니고 친구한테 왜 까줘?! 정성이 들어간 건 오직 나한테만 해줘야지!',
      jealousyPoints: 10,
      nationalPercent: 79,
      tag: '선넘지마형'
    },
    optionB: {
      id: 'B',
      text: '이해 가능! 손 묻힌 김에 하나 준 거지',
      subText: '내 거 먼저 까주고 남는 거 친절로 준 거라면 괜찮음. 너무 예민하게 굴 필요 없음!',
      jealousyPoints: 2,
      nationalPercent: 21,
      tag: '대인배형'
    },
    hotTopicPoint: '핵심: 손을 직접 쓰는 ‘정성’의 영역을 어디까지 타인에게 허용할 수 있는가'
  },
  {
    id: 3,
    title: '롱패딩 지퍼 논쟁',
    category: '롱패딩 지퍼 논쟁',
    icon: '🧥',
    scenario: '한겨울 길거리, 내 친구가 양손 가득 무거운 짐을 들고 덜덜 떨고 있다. 애인이 친구의 롱패딩 지퍼를 밑에서부터 목 끝까지 슥 올려준다.',
    description: '지퍼를 올려줄 때 생기는 둘 사이의 묘한 근접 거리와 손길! 과연 당신의 멘탈은 괜찮을까?',
    optionA: {
      id: 'A',
      text: '기절 초풍! 짐을 들어줘야지 지퍼를 왜 올려?',
      subText: '턱 밑까지 얼굴 들이밀고 지퍼 올리는 거 스킨십 아님?! 짐을 대신 들어주는 게 정상이지!',
      jealousyPoints: 10,
      nationalPercent: 83,
      tag: '거리유지형'
    },
    optionB: {
      id: 'B',
      text: '그럴 수 있음! 손에 짐 들고 떨고 있잖아',
      subText: '친구가 짐 들어서 손이 없는데 추워하면 지퍼 정도는 후딱 올려줄 수 있지.',
      jealousyPoints: 2,
      nationalPercent: 17,
      tag: '상황판단형'
    },
    hotTopicPoint: '핵심: 문제 해결 방식이 왜 하필 ‘직접적인 옷 지퍼 올리기’였는가'
  },
  {
    id: 4,
    title: '차량 블루투스 연결 논쟁',
    category: '차량 블루투스 연결 논쟁',
    icon: '🚗',
    scenario: '애인 차에 탔는데 시동을 걸자마자 내 이성 친구의 스마트폰 블루투스가 0.1초 만에 자동 연결되어 최신곡이 흘러나왔다.',
    description: '블루투스가 잡혔다는 건 둘이 단둘이 차를 탄 적이 있다는 명백한 증거?!',
    optionA: {
      id: 'A',
      text: '동공 지진! 둘이 언제 단둘이 탄 건데?',
      subText: '블루투스 자동 연결은 찐 데이트의 상징! 나 몰래 언제 둘이 드라이브한 거야? 해명해!',
      jealousyPoints: 10,
      nationalPercent: 73,
      tag: '추리탐정형'
    },
    optionB: {
      id: 'B',
      text: '쿨하게 패스! 지난번에 여럿이 탈 때 연결했겠지',
      subText: '단체로 어디 갈 때 노래 틀어준 적 있겠지 뭐. 굳이 바람으로 몰아갈 이유 없음!',
      jealousyPoints: 2,
      nationalPercent: 27,
      tag: '신뢰만땅형'
    },
    hotTopicPoint: '핵심: 내 사적인 공간(차량)에 상대방의 디지털 기기가 각인되어 있는 찜찜함'
  },
  {
    id: 5,
    title: '인생네컷 단둘이 촬영 논쟁',
    category: '인생네컷 단둘이 촬영 논쟁',
    icon: '📸',
    scenario: '애인이 오랜 이성 친구와 단둘이 카페에서 만난 후, 헤어지기 전 기념이라며 귀여운 동물 머리띠를 쓰고 ‘인생네컷’ 사진을 찍었다.',
    description: '작고 좁은 부스에서 밀착해서 찍는 인생네컷 스티커 사진! 연인들의 필수 코스를 친구와 단둘이?',
    optionA: {
      id: 'A',
      text: '절대 불가! 인생네컷은 연인 전용 데이트 코스야',
      subText: '좁은 부스에서 머리띠 맞추고 포즈 취하는 걸 이성 친구랑 왜 해? 지갑에 넣고 다닐 거임?',
      jealousyPoints: 10,
      nationalPercent: 86,
      tag: '영역보호형'
    },
    optionB: {
      id: 'B',
      text: '친구끼리 OK! 그냥 요즘 일상적인 놀이문화임',
      subText: '오랜 친구끼리 추억으로 찍을 수도 있지. 과한 볼 뽀뽀나 밀착 포즈만 아니면 상관없음!',
      jealousyPoints: 2,
      nationalPercent: 14,
      tag: 'MZ오픈형'
    },
    hotTopicPoint: '핵심: ‘네컷사진’을 연인만의 전유물로 볼 것인가 vs 흔한 친구 놀이로 볼 것인가'
  },
  {
    id: 6,
    title: '노래방 듀엣곡 논쟁',
    category: '노래방 듀엣곡 논쟁',
    icon: '🎤',
    scenario: '친구들과 다 같이 모인 노래방. 내 애인과 내 이성 친구가 눈을 지그시 맞추며 애절한 사랑 듀엣곡을 열창한다.',
    description: '음악에 과몰입해서 가사에 감정 싣고 서로를 그윽하게 쳐다보는 순간! 내 속은 타들어 간다?!',
    optionA: {
      id: 'A',
      text: '속 뒤집어짐! 당장 예약 취소 누르고 마이크 뺏는다',
      subText: '노래 부르면서 왜 서로 눈을 마주쳐? 가사 내용도 사랑 고백인데 아주 둘이 사귀어라?!',
      jealousyPoints: 9,
      nationalPercent: 64,
      tag: '감정감시형'
    },
    optionB: {
      id: 'B',
      text: '노래는 노래일 뿐! 가창력 감상하며 탬버린 흔든다',
      subText: '노래방 와서 노래 잘 부르는 사람끼리 맞춘 건데 과몰입 금지! 박수 쳐주고 같이 놀면 됨!',
      jealousyPoints: 2,
      nationalPercent: 36,
      tag: '흥부자형'
    },
    hotTopicPoint: '핵심: 예술적 감정 이입과 현실 연애 감정의 경계선'
  },
  {
    id: 7,
    title: '택시 귀가 논쟁',
    category: '택시 귀가 논쟁',
    icon: '🚕',
    scenario: '자정이 넘은 시각, 내 이성 친구가 술에 완전히 취해 몸을 못 가눈다. 내 애인이 "위험하니까 내가 택시 같이 타고 집 앞까지 바래다주고 올게"라고 한다.',
    description: '취한 사람을 챙겨야 하는 긴급 상황! 단둘이 밤에 택시를 타고 친구 집 앞까지 왕복한다면?',
    optionA: {
      id: 'A',
      text: '절대 반대! 취한 이성과 단둘이 밤 택시는 절대 금지',
      subText: '내가 같이 타든가, 친구 가족을 부르든가 해야지! 왜 내 애인이 단둘이 택시를 타?',
      jealousyPoints: 10,
      nationalPercent: 88,
      tag: '철통경비형'
    },
    optionB: {
      id: 'B',
      text: '믿고 허락! 위급 상황이니 안전하게 데려다주는 게 맞음',
      subText: '인사불성인 친구 길거리에 버려둘 순 없잖아. 내 애인의 인성과 배려를 믿으니까 OK!',
      jealousyPoints: 2,
      nationalPercent: 12,
      tag: '신뢰무한형'
    },
    hotTopicPoint: '핵심: 위험 방지를 위한 의리·배려 vs 단둘이 야간 이동의 불안감'
  },
  {
    id: 8,
    title: '전애인 추억 논쟁',
    category: '전애인 추억 논쟁',
    icon: '💌',
    scenario: '애인 자취방 서랍 구석에서 전 애인과 찍었던 다정한 사진 앨범과 손편지 묶음, 그리고 선물 받은 명품 지갑을 발견했다.',
    description: '지금은 나만 사랑한다지만, 지나간 과거의 연애 흔적이 버젓이 보관되어 있을 때 당신은?',
    optionA: {
      id: 'A',
      text: '당장 쓰레기통 직행! 미련 남았거나 예의가 없는 거임',
      subText: '새로운 연인이 생겼으면 과거 물건 정리는 기본 매너! 편지랑 사진을 왜 아직도 간직해?',
      jealousyPoints: 9,
      nationalPercent: 68,
      tag: '완전삭제형'
    },
    optionB: {
      id: 'B',
      text: '물건은 죄 없다! 과거의 한 페이지일 뿐 지금 나만 보면 됨',
      subText: '잊어버리고 구석에 둔 걸 수도 있고, 내 과거도 소중하듯 애인의 과거도 인정해줌.',
      jealousyPoints: 2,
      nationalPercent: 32,
      tag: '과거인정형'
    },
    hotTopicPoint: '핵심: 연애 시작 시 과거 추억 물품 폐기 의무화 여부'
  },
  {
    id: 9,
    title: '술자리 연락 스타일 논쟁',
    category: '술자리 연락 스타일 논쟁',
    icon: '🍻',
    scenario: '애인이 이성 친구들이 섞인 술자리에 갔다! 둘 중 차라리 마음 편하고 견딜 만한 상황은?',
    description: '불안하지만 연락은 칼답 vs 일찍 귀가하지만 마시는 동안 연락 두절! 당신의 선택은?',
    optionA: {
      id: 'A',
      text: '새벽 2시까지 마셔도 30분마다 셀카·생존신고',
      subText: '늦게까지 마셔도 지금 누구랑 뭐 하는지 실시간으로 투명하게 공유해주면 안심됨!',
      jealousyPoints: 6,
      nationalPercent: 74,
      tag: '투명공유파'
    },
    optionB: {
      id: 'B',
      text: '술 마시는 3시간동안 연락 두절이지만 밤 10시 칼귀가',
      subText: '연락 안 돼도 어차피 10시에 집 도착해서 전화 오면 됨! 노는 덴 집중하고 일찍 자자!',
      jealousyPoints: 4,
      nationalPercent: 26,
      tag: '칼귀가중시파'
    },
    hotTopicPoint: '핵심: 실시간 연락 소통의 안정감 vs 조기 귀가의 확실성'
  },
  {
    id: 10,
    title: '단둘이 놀이공원 가기 논쟁',
    category: '단둘이 놀이공원 가기 논쟁',
    icon: '🎡',
    scenario: '애인이 10년 지기 이성 친구와 단둘이 롯데월드에 가서 머리띠 쓰고 츄러스 먹으며 롤러코스터 타고 오겠다고 한다.',
    description: '남녀 사이에 친구가 과연 존재하는가?! 사랑과 우정의 최대 격전지, 놀이공원 단둘이 가기!',
    optionA: {
      id: 'A',
      text: '미쳤어?! 놀이공원은 연인 데이트의 성지다!',
      subText: '10년 친구든 20년 친구든 이성과 단둘이 놀이공원은 선 넘었지! 동성 친구랑 가든가 나랑 가!',
      jealousyPoints: 10,
      nationalPercent: 92,
      tag: '절대엄금형'
    },
    optionB: {
      id: 'B',
      text: '쿨하게 OK! 10년 친구면 사실상 가족·형제지간임',
      subText: '성별만 다를 뿐 그냥 찐친인데 놀이기구 타러 갈 수도 있지. 재미있게 놀다 오라고 용돈 줌!',
      jealousyPoints: 1,
      nationalPercent: 8,
      tag: '대천사형'
    },
    hotTopicPoint: '핵심: 놀이공원이라는 공간의 데이트 상징성과 이성 친구의 한계선'
  }
];

export const INITIAL_COMMENTS = [
  {
    id: 'c1',
    questionId: 1,
    author: '깻잎수호자',
    choice: 'A' as const,
    content: '깻잎 떼줄 때 그 3초간의 눈빛 교환... 그게 바로 환승연애의 시작입니다 여러분 ㅋㅋㅋ',
    likes: 342,
    timestamp: '10분 전'
  },
  {
    id: 'c2',
    questionId: 1,
    author: '배고픈러버',
    choice: 'B' as const,
    content: '깻잎 두 장 딸려오면 짠데 당연히 떼줘야죠! 밥 먹는 데 너무 의미 부여하지 맙시다 ㅠ',
    likes: 189,
    timestamp: '25분 전'
  },
  {
    id: 'c3',
    questionId: 2,
    author: '새우깡',
    choice: 'A' as const,
    content: '새우는 진짜 손가락 쪽쪽 빨아가며 까는 건데 남한테 까준다? 당장 파혼각임.',
    likes: 512,
    timestamp: '1시간 전'
  },
  {
    id: 'c4',
    questionId: 3,
    author: '겨울왕국',
    choice: 'A' as const,
    content: '롱패딩 지퍼 올릴 때 그 가까워지는 숨결... 그걸 허락한다고요?! 짐을 들어줘야죠!',
    likes: 420,
    timestamp: '3시간 전'
  },
  {
    id: 'c5',
    questionId: 5,
    author: '네컷요정',
    choice: 'A' as const,
    content: '인생네컷 부스 들어가면 둘이 볼 맞대고 하트 그리는데 친구끼리 그게 됩니까? 절대 안 됨',
    likes: 388,
    timestamp: '4시간 전'
  },
  {
    id: 'c6',
    questionId: 10,
    author: '놀이동산마스터',
    choice: 'A' as const,
    content: '놀이공원 단둘이는 92%가 반대인 거 보면 국민적 합의가 끝난 겁니다 ㅋㅋㅋ',
    likes: 671,
    timestamp: '어제'
  }
];
