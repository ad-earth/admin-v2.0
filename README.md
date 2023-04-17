# 키워드 클릭 광고를 적용한 이커머스 플랫폼

## 배포 링크

> AWS S3, CloudFront, Route53 배포 / Github Actions CICD 구축

- [🌐 구매자 페이지 (id: testuser / password: aaa1111!)](https://adearth.shop)
- [🌐 어드민 페이지](https://adearth-admin.shop)

## 실행 방법

```
git clone https://github.com/ad-earth/admin-v2.0.git

npm install
npm start
```

## 서비스 개요

> 2023/02/28 ~ **v2.0 리팩토링 시작**

#### 프로젝트 주제

- 키워드 클릭 광고를 적용한 이커머스 플랫폼

#### 개발 목적

- 기존 키워드 클릭 광고주 페이지의 문제점들을 개선해 광고 입찰에 꼭 필요한 기능들만 선별하여 제공함으로써 사용자의 경험을 개선
- 편리하고 간편한 서비스를 광고주들에게 제공함으로써 신규 광고주 유입 효과 기대

## v2.0.0 주요 개선 사항

#### 기능적 개선
- 에러 및 알림 메시지 toast UI 공통 처리하여 일관성 유지
- 현재 선택된 필터를 UI에 표시하여 유저 편의성 향상
- 테이블 헤더에 info tooltip, 원화 및 숫자 단위 표시를 제공해 사용성 개선
- 클릭 동작이 경고 및 주의가 필요한 액션일 경우 모달을 사용하여 이중 확인

#### 기술적 개선
- 동일한 QueryKey로 받아오는 데이터를 custom hook으로 모아 이전보다 쉽게 데이터를 관리하고, 변경사항이 발생했을 때 쉽게 유지보수할 수 있도록 개선
- 폴더 구조를 개선해 공통 컴포넌트를 모듈화하여 컴포넌트 재사용성을 높임
- Axios Response Type을 지정해 서버로부터 fetching 해온 데이터의 타입을 사전에 체크
- protectedRoute를 통해 대시보드 페이지 진입시 페이지 보안 강화 및 공통 리다이렉트 처리
- 단일 페이지에서 여러 쿼리를 사용할 때, useQueries를 사용하여 쿼리 처리의 동시성을 극대화
- queryString을 사용하여 동적인 필터링 데이터의 상태 관리 유지

## 페이지 주요 기능
| 회원가입 및 로그인 페이지 | 계정 찾기 페이지 |
|---|---|
|<img src='https://user-images.githubusercontent.com/101298873/232402764-698eb380-0976-41f9-8cd4-b195c8821721.gif' width="450">|<img src='https://user-images.githubusercontent.com/101298873/232403095-642a2ad1-77e7-46fe-b36d-33c66d8fba7c.gif' width="450">|
|▪︎ 슬라이드 광고배너 제공 <br/> ▪︎ 회원가입 시, 아이디 & 사업자번호 & 연락처 중복검사 <br/> ▪︎ 회원가입과 로그인 시, 실시간 유효성 검사|▪︎ 상호명과 사업자번호 입력 시, 기존 아이디 확인 <br/> ▪︎ 아이디와 사업자번호 입력 시, 새로운 비밀번호로 재설정| 

| 메인 페이지 | 배송 관리 페이지 |
|---|---|
|<img src='https://play-lh.googleusercontent.com/HrS1L-dZctdC0nwMbiibL69YTf-i3PkDiPnPhjoQPME6gsbJX7Vk0FaSiLzmGh8Q_Q' width="450">|<img src='https://play-lh.googleusercontent.com/HrS1L-dZctdC0nwMbiibL69YTf-i3PkDiPnPhjoQPME6gsbJX7Vk0FaSiLzmGh8Q_Q' width="450">|
|▪︎ 아코디언 광고배너 제공 <br/> ▪︎ 신규주문 & 전원매출액 & 노출상품 수 & 광고 키워드 순위 실시간 확인 <br/> ▪︎ 3개월 광고 요약 보고서 차트데이터 제공 <br/> ▪︎ 비즈머니 금액 확인 및 충전|▪︎ 페이지당 최대 10개의 배송상품 데이터 제공 <br/> ▪︎ 기간 & 상품 & 배송상태 다중 필터링 <br/> ▪︎ 단일 & 전체 배송상품 주문확정 <br/> ▪︎ 배송 리스트 현황 csv 파일 다운로드|

| 상품 등록 & 수정 페이지 | 상품 관리 페이지 |
|---|---|
|<img src='https://play-lh.googleusercontent.com/HrS1L-dZctdC0nwMbiibL69YTf-i3PkDiPnPhjoQPME6gsbJX7Vk0FaSiLzmGh8Q_Q' width="450">|<img src='https://play-lh.googleusercontent.com/HrS1L-dZctdC0nwMbiibL69YTf-i3PkDiPnPhjoQPME6gsbJX7Vk0FaSiLzmGh8Q_Q' width="450">|
| ▪︎ 상품 등록 & 수정 & 삭제 기능 제공 <br/> ▪︎ 상품 등록 & 수정 시 필수 입력사항에 대한 유효성 검사 |▪︎ 페이지당 최대 10개의 카테고리 별 상품 데이터 제공 <br/> ▪︎ 상품 노출 여부 선택 수정 <br/> ▪︎ 상품 단일 & 전체 삭제| 

| 광고 관리 페이지 | 광고 보고서 페이지 |
|---|---|
|<img src='https://play-lh.googleusercontent.com/HrS1L-dZctdC0nwMbiibL69YTf-i3PkDiPnPhjoQPME6gsbJX7Vk0FaSiLzmGh8Q_Q' width="450">|<img src='https://play-lh.googleusercontent.com/HrS1L-dZctdC0nwMbiibL69YTf-i3PkDiPnPhjoQPME6gsbJX7Vk0FaSiLzmGh8Q_Q' width="450">|
|▪︎ 상품별  최대 20개 키워드 데이터 제공 <br/> ▪︎ 키워드 단일 & 전체 삭제 <br/> ▪︎ 키워드 광고등록, 키워드 광고수정 |▪︎ 기간, 상품 다중 필터링 <br/> ▪︎ 최대 3개월의 키워드별 클릭 수 & 매출 전환 수 area chart 제공 <br/> ▪︎ 단일 상품에 대한 키워드별 매출 데이터 테이블 제공| 

## 아키텍쳐

![광고지구아키텍쳐](https://user-images.githubusercontent.com/105091138/195766564-08299428-e979-49f0-97c8-7a130a7b106c.jpeg)

## 기술 스택

- React, TypeScript
- React-Query, Recoil, Axios
- Sass

## 기타

- [🤝 Convention](https://github.com/ad-earth/client-v2.0/issues/73)
- [🧩 IA](https://www.figma.com/file/PhU5ITHbMHReiIQBqjD4IA/%EA%B4%91%EA%B3%A0%EC%A7%80%EA%B5%AC-%EC%9C%A0%EC%A0%80%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%B0%A8%ED%8A%B8%2F-%EC%A0%95%EB%B3%B4%EA%B5%AC%EC%A1%B0?node-id=0-1)
- [👩🏻‍💻 User Flow](https://www.figma.com/file/PhU5ITHbMHReiIQBqjD4IA/%EA%B4%91%EA%B3%A0%EC%A7%80%EA%B5%AC-%EC%9C%A0%EC%A0%80%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%B0%A8%ED%8A%B8%2F-%EC%A0%95%EB%B3%B4%EA%B5%AC%EC%A1%B0?node-id=2-207)
- [📄 API](https://documenter.getpostman.com/view/18707207/2s7Z7ZnZDy)
