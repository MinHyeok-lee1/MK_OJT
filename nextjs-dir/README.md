# next-js 개발환경

## 리눅스 옵션
-i : 복사될 파일이 이름이 이미 존재할 경우, 사용자에게 덮어 쓰기 여부를 묻습니다.

-b : 복사될 파일이 이름이 이미 존재할 경우, 백업파일을 생성합니다.

-f : 복사 될 파일이 이름이 이미 존재 할 경우, 강제로 덮어쓰기 합니다.

-r : 하위 디렉토리 까지 모두 복사합니다.

-a : 원본 파일의 속성, 링크 정보까지 모두 복사합니다.

-p : 원본 파일의 소유자, 그룹, 권한 등의 정보까지 모두 복사합니다.

-v : 복사 진행 상태를 출력합니다.

## 실행하고자 하는 project
// 프로젝트 환경에 복사하기(components, lib, pages, posts, public, styles, package.jsons)

../nextjs-dir/basics/'project_name'안에 위 파일 및 디렉토리들을 nextjs-blog 디렉토리 안에 넣고 실행

// 필요한 모듈 설치

npm install date-fns

// 실행

npm run dev