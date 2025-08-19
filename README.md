# DivKit Server Driven UI Learning Project

> 🎯 DivKit을 활용한 Server Driven UI(SDUI) 학습을 위한 멀티플랫폼 프로젝트

## 📚 프로젝트 소개

이 프로젝트는 **Server Driven UI** 개념을 학습하고 실습하기 위한 목적으로 만들어졌습니다. [DivKit](https://github.com/divkit/divkit)을 사용하여 iOS, Android, Web 세 플랫폼에서 동일한 UI를 서버에서 제어하는 방법을 배울 수 있습니다.

### Server Driven UI란?

Server Driven UI는 앱의 UI 구조와 컨텐츠를 서버에서 동적으로 제어하는 아키텍처 패턴입니다. 이를 통해:
- ✅ 앱 업데이트 없이 UI 변경 가능
- ✅ A/B 테스트 및 개인화 용이
- ✅ 플랫폼 간 일관된 UI 제공
- ✅ 빠른 버그 수정 및 기능 롤백

## 🏗️ 프로젝트 구조

```
divkit-sdui/
├── server/          # 백엔드 서버 (Node.js/TypeScript)
├── clients/         # 클라이언트 앱
│   ├── ios/        # iOS 앱 (Swift)
│   ├── android/    # Android 앱 (Kotlin)
│   └── web/        # Web 앱 (React)
├── shared/          # 공통 리소스
├── tools/           # 개발 도구
└── docs/           # 문서
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18+
- npm 또는 yarn
- iOS 개발: Xcode 14+, CocoaPods
- Android 개발: Android Studio, JDK 11+
- Docker (선택사항)

### 설치 및 실행

#### 1. 프로젝트 클론
```bash
git clone https://github.com/yourusername/divkit-sdui.git
cd divkit-sdui
```

#### 2. 의존성 설치
```bash
# 루트 의존성 설치
npm install

# 모든 패키지 의존성 설치 (Lerna 사용)
npm run bootstrap
```

#### 3. 서버 실행
```bash
cd server
npm run dev
# 서버가 http://localhost:3000 에서 실행됩니다
```

#### 4. 클라이언트 실행

**iOS:**
```bash
cd clients/ios
pod install
open DivKitSDUI.xcworkspace
# Xcode에서 Run
```

**Android:**
```bash
cd clients/android
./gradlew assembleDebug
# Android Studio에서 실행
```

**Web:**
```bash
cd clients/web
npm start
# http://localhost:8080 에서 실행
```

## 📖 학습 가이드

### 1단계: 기본 개념 이해
- [ ] DivKit 문서 읽기
- [ ] SDUI 아키텍처 이해
- [ ] JSON 템플릿 구조 파악

### 2단계: 서버 구현
- [ ] 간단한 레이아웃 JSON 생성
- [ ] API 엔드포인트 구현
- [ ] 동적 데이터 바인딩

### 3단계: 클라이언트 구현
- [ ] DivKit SDK 통합
- [ ] 서버 API 연동
- [ ] 레이아웃 렌더링

### 4단계: 고급 기능
- [ ] 커스텀 액션 구현
- [ ] 애니메이션 추가
- [ ] 캐싱 전략 구현
- [ ] 오프라인 지원

## 🛠️ 주요 기능

### 서버
- ✨ DivKit JSON 템플릿 관리
- ✨ RESTful API 제공
- ✨ 템플릿 버전 관리
- ✨ A/B 테스트 지원

### 클라이언트
- ✨ 실시간 UI 업데이트
- ✨ 템플릿 캐싱
- ✨ 오프라인 폴백
- ✨ 커스텀 컴포넌트 지원

## 📱 예제 화면

### 지원하는 레이아웃
1. **홈 화면** - 다양한 섹션으로 구성된 메인 화면
2. **상품 상세** - 동적 상품 정보 표시
3. **프로필** - 사용자 정보 및 설정
4. **리스트** - 무한 스크롤 지원
5. **폼** - 동적 입력 폼

## 🔧 개발 도구

### 템플릿 생성기
```bash
npm run generate:template -- --name=my-layout
```

### 템플릿 검증
```bash
npm run validate:template -- --file=templates/home.json
```

### 모든 플랫폼 빌드
```bash
npm run build:all
```

## 📚 학습 자료

- [DivKit 공식 문서](https://divkit.tech/docs)
- [DivKit GitHub](https://github.com/divkit/divkit)
- [SDUI 개념 설명](docs/guides/sdui-concepts.md)
- [템플릿 작성 가이드](docs/guides/template-guide.md)

## 🧪 테스트

```bash
# 서버 테스트
cd server && npm test

# Web 테스트
cd clients/web && npm test

# iOS 테스트
cd clients/ios && xcodebuild test

# Android 테스트
cd clients/android && ./gradlew test
```

## 🐳 Docker 실행

```bash
# 전체 스택 실행
docker-compose up

# 서버만 실행
docker-compose up server
```

## 🤝 기여하기

학습 프로젝트이므로 자유롭게 실험하고 개선해보세요!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

MIT License - 자유롭게 사용하고 수정하세요!

## 🙏 감사의 말

- [DivKit Team](https://github.com/divkit) - 훌륭한 오픈소스 프레임워크 제공
- SDUI 커뮤니티 - 지식 공유와 영감

## 📮 문의

질문이나 제안사항이 있으시면 이슈를 생성해주세요!

---

**Happy Learning! 🎉**

> 이 프로젝트를 통해 Server Driven UI의 개념을 확실히 이해하고, 실무에 적용할 수 있는 능력을 기르시길 바랍니다.