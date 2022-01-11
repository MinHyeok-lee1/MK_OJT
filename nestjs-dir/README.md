# [1월 4주차 OJT KEYWORD: Nest.js(dir)](https://github.com/MinHyeok-lee1/MK_OJT/tree/master/nestjs-dir)
* 학습목표
1) nestjs.com 튜토리얼 클론 코딩 - 로컬 서버의 개인 작업공간 이용<br>
2) Git을 통해 소스코드 관리<br>
3) 학습 내용을 소스코드의 주석 및 README.md 파일로 정리<br><br>

## Nest.js 클론 코딩 웹사이트 => [nestjs.com](https://docs.nestjs.com/)

## Command
- 설치
  ```bash
  $ npm install
  ```

- Nest.js 실행
  ```bash
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
  ```

- 테스트

  ```bash
  # unit tests
  $ npm run test

  # e2e tests
  $ npm run test:e2e

  # test coverage
  $ npm run test:cov
  ```

## Typescript
- 변수 선언
  + 타입스크립트에서 변수를 선언하는 방식은 다음과 같습니다.
  
  + ```
    [선언키워드] [변수명]: [타입]
  + 선언키워드: const, let 또는 var로 선언합니다. const는 선언 후 재할당이 불가능하며 let과 var는 재할당이 가능하여 값을 바꿀 수 있습니다. let과 var의 차이는 hoisting 여부인데, var는 변수를 사용한 후에 선언이 가능하지만 let은 그렇지 못합니다.

- Typescript에서 지원하는 타입
  + 타입스크립트는 자바스크립트가 가지고 있는 자료형을 모두 포함합니다. 자바스크립트의 타입은 기본타이뱌(Primitive value)과 객체형(Object), 함수형(Function)이 있습니다. <b>typeof</b> 키워드를 이용하여 인스턴스의 타입을 알 수 있습니다.

- 기본 타입
|왼쪽 정렬|가운데 정렬|오른쪽 정렬| 
|:---|:---:|---:|
| typeof| 설명| 할당 가능한 값|
| boolean| 	참, 거짓을 나타내는 논리값| true, false| 
|내용1|내용2|내용3| 
|내용1|내용2|내용3| 
## License

Nest is [MIT licensed](LICENSE).
