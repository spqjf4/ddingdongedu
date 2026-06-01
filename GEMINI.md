# 띵동 어린이체육교실 (ddingdong) - Project Context

이 파일은 '띵동 어린이체육교실' 홈페이지 프로젝트의 아키텍처, 개발 규칙 및 워크플로우를 정의합니다.

## 0. 중요 사항
- **제미나이 응답 규칙** : 1. 항상 대답과 질문은 "한국어"를 사용할 것 2. Vercel을 이용한 배포를 염두에 둔다. 
- **git 사용 규칙** : 1. 작업을 시작하기 전에 항상 git status로 변경사항 확인 2. git 커밋 및 push는 항상 사용자에게 동의를 구한 후 진행
- **이미지 사용시 규칙**: 제공받거나 사용할 이미지는 webp로 변환하여 사용한다.

## 1. 프로젝트 개요
- **목표**: 아이들의 첫 운동 친구 '띵동'의 브랜드 가치를 전달하는 고품질 랜딩 페이지 구축.
- **주요 사용자**: 어린이 체육 교육에 관심 있는 학부모 및 교육 기관 관계자.
- **핵심 기능**: 프로그램 소개, 강사진 프로필, 시설 갤러리, 문의 신청(Nodemailer 연동).

## 2. 기술 스택
- **Framework**: Next.js 16 (App Router)
- **Library**: React 19, TypeScript
- **Styling**: Tailwind CSS 4, Vanilla CSS (CSS Variables)
- **Deployment**: Vercel

## 3. 프로젝트 구조
- `src/app`: 페이지(`page.tsx`), 레이아웃(`layout.tsx`), 글로벌 스타일(`globals.css`), API 라우트(`api/`).
- `src/components/layout`: 공통 레이아웃 컴포넌트 (`Header`, `Footer`, `LayoutShell` 등).
- `src/components/sections`: 랜딩 페이지의 각 섹션 컴포넌트 (총 11+개 섹션).
- `src/lib`: 상수(`constants.ts`), 유틸리티 함수.
- `docs/`: 프로젝트 계획(`01-plan/`) 및 디자인 명세(`02-design/`).
- `design_reference/`: 초기 HTML/CSS 디자인 참고 자료.
- `public/assets/`: 이미지, 로고 등 정적 자산.

## 4. 주요 명령어
- `npm install`: 의존성 설치.
- `npm run dev`: 개발 서버 실행 (http://localhost:3000).
- `npm run build`: 프로덕션 빌드 생성.
- `npm run start`: 프로덕션 서버 실행.
- `npm run lint`: ESLint 코드 린팅.

## 5. 개발 컨벤션 및 가이드라인

### 5.1. 컴포넌트 전략
- **Server Components**: 데이터 페칭 및 정적 섹션은 기본적으로 서버 컴포넌트로 작성합니다.
- **Client Components**: `"use client"` 지시어는 인터랙션이 필수적인 경우(`Header` 드롭다운, `MenuOverlay`, `Contact` 폼, `QuickMenu` 등)에만 제한적으로 사용합니다.

### 5.2. 스타일링 가이드
- **Design Tokens**: `src/app/globals.css`에 정의된 CSS 변수(`--coral`, `--blue`, `--ink`, `--radius-md` 등)를 우선적으로 사용합니다.
- **Animations**: `globals.css`에 정의된 유틸리티 클래스(`animate-fade-up`, `animate-float` 등)를 활용하여 일관된 애니메이션 효과를 부여합니다.
- **Tailwind 4**: 최신 Tailwind 기능을 활용하되, 복잡한 레이아웃이나 반복되는 스타일은 `globals.css`에서 클래스로 추상화합니다.

### 5.3. 데이터 관리
- 네비게이션 및 반복되는 텍스트 데이터는 `src/lib/constants.ts`에서 관리합니다.
- 현재는 Placeholder 데이터를 사용하며, 최종 단계(Phase 5)에서 실제 데이터로 교체합니다.

### 5.4. 워크플로우 (PDCA)
- `docs/01-plan/홈페이지-구축-계획.md`에 명시된 단계를 준수합니다.
- **Plan**: `docs/`의 명세 확인.
- **Do**: `src/components/sections` 단위로 개발.
- **Check**: 모바일 반응형 및 디자인 일치도 검증.
- **Act**: Vercel을 통한 지속적 배포 및 피드백 반영.

## 6. 참고 사항
- 디자인 원본 로직은 `design_reference/` 폴더의 HTML/CSS 파일을 참고하십시오.
- 문의하기 폼은 `src/app/api/contact/route.ts`를 통해 Nodemailer로 처리됩니다.
