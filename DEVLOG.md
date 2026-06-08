# 개발일지 — 블로그마케터 마케팅 사이트

## 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 프로젝트명 | 블로그마케터 |
| 레포지토리 | https://github.com/2-somin/rest02 |
| 배포 URL | https://2-somin.github.io/rest02/ |
| 개발 시작일 | 2026-06-08 |
| 기술 스택 | React 19, Vite 8, React Router v7, TanStack Query v5 |

---

## 개발 목적

일반인도 블로그 포스팅과 마케팅으로 수익을 낼 수 있도록 돕는 마케팅 플랫폼.
키워드 자동 수집 및 분석, AI 기반 블로그 글 초안 생성, 수익 현황 관리 기능을 제공한다.

---

## 브랜드 가이드

| 역할 | 색상 코드 | 용도 |
|---|---|---|
| 메인 컬러 | `#aad7cd` | 강조 배경, 버튼, 배지 |
| 포인트 컬러 | `#f02300` | CTA 버튼, 주요 강조 텍스트 |
| 배경 컬러 | `#fafaeb` | 페이지 전체 기본 배경 |

---

## 2026-06-08 — 1차 개발 (초기 세팅 & 홈 페이지 구현)

### 작업 내용

#### 환경 세팅
- `github.com/2-somin/rest02` 레포지토리 클론
- Vite + React 프로젝트 초기화 (빈 레포에 스캐폴딩)
- 의존성 설치: `react-router-dom`, `axios`, `@tanstack/react-query`, `gh-pages`
- GitHub Pages 배포를 위한 `vite.config.js` base 경로 설정 (`/rest02/`)
- `package.json` deploy 스크립트 추가 (`predeploy` → `deploy`)

#### 디자인 시스템 구축
- `src/styles/variables.css` — 브랜드 색상, 타이포그래피, 간격, 그림자 등 CSS 커스텀 프로퍼티 정의
- `src/index.css` — 전역 리셋 및 공통 유틸 클래스 (`.container`, `.section`, `.btn-*`)
- Pretendard 웹폰트 적용

#### 컴포넌트 구조
```
src/
├── styles/
│   └── variables.css        # CSS 변수 (디자인 토큰)
├── components/
│   ├── layout/
│   │   ├── Header.jsx       # 고정 헤더, 반응형 햄버거 메뉴
│   │   ├── Footer.jsx       # 4컬럼 푸터
│   │   └── Layout.jsx       # Outlet 래퍼
│   └── sections/
│       ├── HeroSection.jsx       # 메인 히어로 + 키워드 분석 미리보기 카드
│       ├── StatsSection.jsx      # 누적 지표 4종 (사용자/키워드/만족도/수익)
│       ├── FeaturesSection.jsx   # 핵심 기능 6종 카드 그리드
│       ├── HowItWorksSection.jsx # 4단계 수익화 프로세스
│       └── CtaSection.jsx        # 무료 시작하기 유도 배너
└── pages/
    └── Home.jsx             # 홈 페이지 (섹션 조합)
```

#### 라우팅 구조
| 경로 | 컴포넌트 | 상태 |
|---|---|---|
| `/` | Home | 완료 |
| `/service` | 서비스 소개 | 준비 중 |
| `/keyword` | 키워드 분석 | 준비 중 |
| `/blog` | 블로그 작성 | 준비 중 |
| `/pricing` | 요금제 | 준비 중 |
| `/cases` | 고객 사례 | 준비 중 |

### 완료 기능
- [x] 프로젝트 초기 환경 구성
- [x] CSS 디자인 토큰 시스템
- [x] Header (고정, 반응형)
- [x] Footer
- [x] 홈 페이지 전체 레이아웃
- [x] Hero 섹션 (키워드 프리뷰 카드 포함)
- [x] Stats 섹션
- [x] Features 섹션
- [x] How It Works 섹션
- [x] CTA 섹션
- [x] GitHub Pages 배포 설정

### 다음 개발 예정
- [ ] 키워드 분석 페이지 (크롤링 UI, 검색량/경쟁도 테이블)
- [ ] 블로그 작성 페이지 (AI 초안 생성 에디터)
- [ ] 요금제 페이지
- [ ] 고객 사례 페이지
- [ ] 로그인 / 회원가입 페이지
- [ ] 대시보드 (수익 현황)
