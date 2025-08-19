# DivKit Server Driven UI 프로젝트 구조

```
divkit-sdui/
├── server/                      # 백엔드 서버
│   ├── src/
│   │   ├── api/                # API 엔드포인트
│   │   │   ├── layouts/        # DivKit 레이아웃 API
│   │   │   │   ├── home.ts
│   │   │   │   ├── product.ts
│   │   │   │   └── profile.ts
│   │   │   ├── templates/      # 템플릿 API
│   │   │   └── data/           # 데이터 API
│   │   ├── services/           # 비즈니스 로직
│   │   │   ├── layout.service.ts
│   │   │   ├── template.service.ts
│   │   │   └── data.service.ts
│   │   ├── templates/          # DivKit JSON 템플릿
│   │   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   │   │   ├── button.json
│   │   │   │   ├── card.json
│   │   │   │   └── list-item.json
│   │   │   ├── layouts/        # 전체 레이아웃
│   │   │   │   ├── home.json
│   │   │   │   ├── product-detail.json
│   │   │   │   └── profile.json
│   │   │   └── sections/       # 섹션별 템플릿
│   │   │       ├── header.json
│   │   │       ├── footer.json
│   │   │       └── navigation.json
│   │   ├── middleware/         # 미들웨어
│   │   │   ├── auth.ts
│   │   │   ├── cors.ts
│   │   │   └── validation.ts
│   │   ├── config/             # 서버 설정
│   │   │   ├── database.ts
│   │   │   └── server.ts
│   │   └── app.ts             # 메인 앱 파일
│   ├── tests/                  # 테스트
│   ├── package.json
│   └── tsconfig.json
│
├── clients/                     # 클라이언트 앱들
│   ├── ios/                    # iOS 앱
│   │   ├── DivKitSDUI/
│   │   │   ├── Sources/
│   │   │   │   ├── App/
│   │   │   │   │   ├── AppDelegate.swift
│   │   │   │   │   └── SceneDelegate.swift
│   │   │   │   ├── Services/
│   │   │   │   │   ├── NetworkService.swift
│   │   │   │   │   ├── DivKitService.swift
│   │   │   │   │   └── CacheService.swift
│   │   │   │   ├── ViewControllers/
│   │   │   │   │   ├── BaseViewController.swift
│   │   │   │   │   ├── HomeViewController.swift
│   │   │   │   │   └── DynamicViewController.swift
│   │   │   │   ├── Extensions/
│   │   │   │   │   └── DivKit+Extensions.swift
│   │   │   │   └── Resources/
│   │   │   │       ├── Assets.xcassets
│   │   │   │       └── Info.plist
│   │   │   └── Tests/
│   │   ├── Podfile             # CocoaPods 의존성
│   │   └── DivKitSDUI.xcodeproj
│   │
│   ├── android/                # Android 앱
│   │   ├── app/
│   │   │   ├── src/
│   │   │   │   ├── main/
│   │   │   │   │   ├── java/com/example/divkitsdui/
│   │   │   │   │   │   ├── MainActivity.kt
│   │   │   │   │   │   ├── services/
│   │   │   │   │   │   │   ├── NetworkService.kt
│   │   │   │   │   │   │   ├── DivKitService.kt
│   │   │   │   │   │   │   └── CacheService.kt
│   │   │   │   │   │   ├── ui/
│   │   │   │   │   │   │   ├── BaseActivity.kt
│   │   │   │   │   │   │   ├── HomeFragment.kt
│   │   │   │   │   │   │   └── DynamicFragment.kt
│   │   │   │   │   │   └── extensions/
│   │   │   │   │   │       └── DivKitExtensions.kt
│   │   │   │   │   └── res/
│   │   │   │   │       ├── layout/
│   │   │   │   │       ├── values/
│   │   │   │   │       └── drawable/
│   │   │   │   └── test/
│   │   │   └── build.gradle.kts
│   │   ├── build.gradle.kts
│   │   └── settings.gradle.kts
│   │
│   └── web/                    # Web 앱
│       ├── src/
│       │   ├── components/
│       │   │   ├── DivKitRenderer.tsx
│       │   │   ├── DynamicView.tsx
│       │   │   └── ErrorBoundary.tsx
│       │   ├── services/
│       │   │   ├── api.service.ts
│       │   │   ├── divkit.service.ts
│       │   │   └── cache.service.ts
│       │   ├── pages/
│       │   │   ├── Home.tsx
│       │   │   ├── Product.tsx
│       │   │   └── Profile.tsx
│       │   ├── hooks/
│       │   │   ├── useDivKit.ts
│       │   │   └── useLayout.ts
│       │   ├── utils/
│       │   │   └── divkit-helpers.ts
│       │   ├── App.tsx
│       │   └── index.tsx
│       ├── public/
│       │   └── index.html
│       ├── package.json
│       ├── tsconfig.json
│       └── webpack.config.js
│
├── shared/                      # 공통 리소스
│   ├── types/                  # TypeScript 타입 정의
│   │   ├── divkit.d.ts
│   │   ├── api.d.ts
│   │   └── models.d.ts
│   ├── constants/              # 공통 상수
│   │   ├── api-endpoints.ts
│   │   └── error-codes.ts
│   ├── schemas/                # JSON Schema 정의
│   │   └── divkit-schema.json
│   └── assets/                 # 공통 에셋
│       ├── images/
│       ├── fonts/
│       └── icons/
│
├── tools/                       # 개발 도구
│   ├── scripts/                # 빌드/배포 스크립트
│   │   ├── build-all.sh
│   │   ├── deploy.sh
│   │   └── setup.sh
│   ├── generators/             # 코드 생성기
│   │   └── template-generator.js
│   └── validators/             # DivKit JSON 검증기
│       └── validate-template.js
│
├── docs/                        # 문서
│   ├── api/                    # API 문서
│   │   └── openapi.yaml
│   ├── guides/                 # 개발 가이드
│   │   ├── getting-started.md
│   │   ├── template-guide.md
│   │   └── deployment.md
│   └── architecture/           # 아키텍처 문서
│       └── system-design.md
│
├── docker/                      # Docker 설정
│   ├── server.Dockerfile
│   ├── web.Dockerfile
│   └── docker-compose.yml
│
├── .github/                     # GitHub Actions CI/CD
│   └── workflows/
│       ├── server.yml
│       ├── ios.yml
│       ├── android.yml
│       └── web.yml
│
├── package.json                 # 루트 package.json (monorepo)
├── lerna.json                  # Lerna 설정 (monorepo 관리)
├── .gitignore
├── .editorconfig
├── .eslintrc.json
└── README.md
```

## 주요 특징

### 1. Server (백엔드)
- **Node.js/TypeScript** 기반
- DivKit JSON 템플릿 관리 및 제공
- 컴포넌트 기반 템플릿 구조
- RESTful API 제공

### 2. Clients (클라이언트)
- **iOS**: Swift, DivKit iOS SDK 사용
- **Android**: Kotlin, DivKit Android SDK 사용  
- **Web**: React/TypeScript, DivKit Web SDK 사용

### 3. Shared (공통)
- TypeScript 타입 정의 공유
- API 엔드포인트 상수 공유
- 공통 에셋 관리

### 4. Tools (도구)
- 빌드/배포 자동화 스크립트
- DivKit 템플릿 생성기
- JSON 템플릿 검증 도구

### 5. Monorepo 관리
- Lerna 또는 Yarn Workspaces 사용
- 공통 의존성 관리
- 통합 빌드 시스템

## 개발 워크플로우

1. **서버**: DivKit JSON 템플릿 생성 및 API 제공
2. **클라이언트**: API로부터 템플릿 받아 렌더링
3. **공통**: 타입 정의 및 상수 공유로 일관성 유지
4. **CI/CD**: GitHub Actions로 자동 빌드/배포