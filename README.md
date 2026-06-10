# 2차 과제 - React로 Todo 앱 만들기
## 구현 상세
- Todo 추가, 수정, 삭제, 완료 기능 구현
- 상태별 필터링 (전체 / 진행 중 / 완료)
- 날짜별 Todo 조회 기능
- 주간 캘린더 UI 구현
- LocalStorage를 이용한 데이터 저장
- 새로고침 후 선택 날짜 및 주차 유지
---
### 프로젝트 구조
src  
├─ components  
│ ├─ WeeklyCalendar.jsx  
│ ├─ TodoInput.jsx  
│ ├─ FilterButtons.jsx  
│ ├─ TodoList.jsx  
│ └─ TodoItem.jsx  
│  
└─ App.jsx  
- App.jsx : 상태 관리 및 데이터 처리
- WeeklyCalendar.jsx : 주간 달력 UI
- TodoInput.jsx : Todo 입력
- TodoList.jsx : Todo 목록 렌더링
- TodoItem.jsx : 개별 Todo 렌더링