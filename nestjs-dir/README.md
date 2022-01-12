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

# Typescript

## 변수 선언

  타입스크립트에서 변수를 선언하는 방식은 다음과 같습니다.  
  ```
  [선언키워드] [변수명]: [타입]
  ```

  선언키워드: const, let 또는 var로 선언합니다. const는 선언 후 재할당이 불가능하며 let과 var는 재할당이 가능하여 값을 바꿀 수 있습니다. let과 var의 차이는 hoisting 여부인데, var는 변수를 사용한 후에 선언이 가능하지만 let은 그렇지 못합니다.


## Typescript에서 지원하는 타입
  타입스크립트는 자바스크립트가 가지고 있는 자료형을 모두 포함합니다. 자바스크립트의 타입은 기본타이뱌(Primitive value)과 객체형(Object), 함수형(Function)이 있습니다. <b>typeof</b> 키워드를 이용하여 인스턴스의 타입을 알 수 있습니다.


## 기본 타입

| typeof| 설명| 할당 가능한 값|
|:---|:---:|---:| 
| boolean| 	참, 거짓을 나타내는 논리값| true, false| 
| null|	"유효하지 않음"을 나타낸다|	null|
| undefined|	값이 존재하지 않음. 즉, 변수 선언 후 "값이 할당되지 않음"을 나타낸다|	undefined|
| number|	배정밀도 64비트 형식 IEEE 754의 값|	-(2^53 -1) 와 2^53 -1 사이의 정수와 실수<br>+Infinity, Infinity<br>NaN (Not a Number) |
| bigint|	Number의 범위를 넘어서는 정수를 안전하게 저장하고 연산할 수 있게 해 준다 |ex) const x = 2n ** 53n;<br>정수 끝에 n을 추가한다|
| string|	문자열. 변경 불가능(immutable)하다.	| 홑따옴표 또는 쌍따옴표로 둘러싸인 문자열| ex) 'hello', "world"|
| symbol|	유일하고 변경 불가능한 (immutabWle) 기본값(primitive value)| 객체 속성의 키로 사용할 수 있다	|


## 객체 타입
  객체 타입은 속성(Property, 프로퍼티)를 가지고 있는 데이터 컬렉션입니다. C언어의 구조체와 유사합니다 속성은 키와 값으로 표현되는데 값은 다시 자바스크립트의 타입을 가지고 있습니다. 따라서 다음 예와 같이 데이터를 구조적으로 표현할 수 있습니다.
  ```
  const dexter = {
    name: 'Dexter Han',
    age: 21,
    hobby: ['Movie', 'Billiards'],
  }
  ```

  자바스크립트에는 개발할 때 유용한 내장객체들이 있습니다.
    * Date: 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 나타낸 것으로 시간을 다룰 때 사용합니다.
    * 배열(Array): 정수를 키로 가지는 일련의 값을 가진 객체입니다. 코드로 표현할 때는 다른 언어에서와 같이 대괄호([])로 표현합니다.
    * 키를 가진 컬렉션: Map, WeakMap은 키와 값을 가지는 객체 타입이고, Set과 WeakSet은 유일값들로 이루어진 컬렉션 객체 타입입니다.
    * JSON: JSON(JavaScript Object Notation)은 자바스크립트에서 파생된 경량 데이터 교환 형식이지만 많은 프로그래밍 언어에서 사용됩니다. JSON은 범용 데이터 구조를 구축합니다.
    * 이 외 표준 라이브러리에는 더 많은 내장 객체가 있습니다. [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects)를 참고하세요.


## 함수(Fuction) 타입
  자바스크립트는 함수를 변수에 할당하거나 다른 함수의 인자로 전달할 수 있습니다. 함수의 결과로 반환할 수도 있습니다. 언어의 이러한 특징을 <b>일급 함수</b>라고 합니다. 함수 func의 타입을 검사하면 "function"이 됩니다.
  ```
  typeof func === "function"
  ```

## any / unknown / never
  타입스크립트의 특수한 타입 any와 unknown, never이 있다.

  any: js 와 같이 어떤 타입의 변수에도 할당이 가능하다. 이 특성때문에 런타임에 오류를 일으킬 가능성이 있습니다.

  unknown: any 타입과 마찬가지로 어떤 타입도 할당 가능하지만 다른 변수에 할당 또는 사용할 때 타입을 강제하도록 하여 any가 일으키는 오류를 줄여줍니다.

  never: never 타입의 변수에는 어떤 값도 할당할 수 없습니다. 함수의 리턴 타입으로 지정하면 함수가 어떤 값도 반환하지 않는다는 것을 뜻합니다.

  다음과 같이 특정 타입의 값을 할당받지 못하도록 하는데 사용할 수도 있습니다. <T>는 제네릭 타입인데 이후에 설명합니다.
  ```
  type NonString<T> = T extends string ? never : T;
  ```

## 타입 정의하기
  타입 스크립트는 타입을 정의해서 사용할 수 있습니다. 기본타입과 같은 타입을 정의한다는 뜻은 아니고, 위에서 설명한 타입들을 조합하여 타입에 이름을 붙여 사용합니다. 다음 코드를 vscode에 입력하고 마우스를 user 변수 위로 가져가 보세요.
  ```
  const user = {
    name: 'Dexter',
    age: 21,
  }
  ```

  추론된 타입이 다음과 같이 표시됩니다.
  ```
  const user: {
    name: string;
    age: number;
  }
  ```

  변수에 객체를 바로 할당하지 않고 interface로 정의할 수 있습니다.
  ```
  interface User{
    name: string;
    age: number;
  }

  const user: User = {
    name: 'Dexter',
    age: 21,
  }
  ```

  interface는 class로 선언할 수도 있습니다.
  ```
  class User{
    constructor(name: string, age: number){ }
  }

  const user: User = new User('Dexter', 21);
  ```

  <b>생성자에 선언된 변수는 클래스 멤버변수가 됩니다. 접근제한자(public, private)가 없으면 public 변수가 됩니다. 멤버변수를 사용할 떄는 this.name과 같이 this 키워드와 함께 사용합니다.</b>

  또 타입은 type 키워드로 새로운 타입을 만들 수 있습니다.
  ```
  type MyUser = User;
  ```

  MyUser 타입은 기존 User 타입을 그대로 사용하지만 내가 사용하는 도메인에 맞는 이름으로 바꾼 것입니다.

## 타입 구성하기
자바스크립트는 변수에 어떠한 타입의 값도 할당할 수 있습니다. 일명 덕 타이핑이라 부릅니다. 타입스크립트도 여러 타입의 값을 할당할 수 있습니다. 여러 타입을 조합한 새로운 타입을 가지는 것입니다.

  ### 유니언 (Union) 타입
  유니언 타입이 위에서 설명했던 여러 타입을 조합한 타입입니다. 다음코드에서 getLength 함수의 인자로 받은 obj 객체는 string 또는 string 배열 타입을 가질 수 있습니다.
  ```
  function getLength(obj: string | string[]){
    return obj.length;
  }
  ```

  유니언 타입을 활용하면 변수가 가질 수 있는 값을 제한할 수도 있습니다.
  ```
  type Status = "Ready" | "Waiting";
  ```

  <b>타입스크립트는 열거형을 제공합니다. 위 코드는 열거형으로 사용하는게 더 편합니다.</b>
  
  ```
  enum Status{
    Ready,
    Waiting,
  }
  ```

  ### 제네릭 (Generic) 타입
  Java나 C#에서의 제네릭과 유사한 기능을 합니다. 어떠한 티입이든 정의될 수 있지만 호출되는 시점에 타입이 결정됩니다. 만약 다음과 같이 인자를 그대로 리턴하는 함수가 있다고 합시다.
  ```
  fuction identity(arg: any): any{
    return arg;
  }
  ```
  
  이 함수의 반환 값은 any로 되어 있기 때문에 arg에 'test'를 인자로 전달할 경우 전달한 인자의 string 타입이 반환할 때 any가 되어 버립니다. 반면 다음과 같이 제네릭 타입을 사용하게 되면 리턴되는 값의 타입은 함수를 호출하는 시점의 인자로 넣은 타입으로 결정되도록 할 수 있습니다.
  ```
  function identity<T>(arg: T): T{
    return arg;
  }
  ```
  
  제네릭을 선언할 때는 보통 대문자 한글자를 사용합니다.

  <b>타입스크립트는 타입을 잘 다룰수록 그 진가를 발휘하는 언어입니다. 이 책에서 소개하지 못한 많은 기능들이 존재합니다. 관련 책과 자료를 통해 타입을 자유자재로 다룰 수 있도록 해보세요.</b>

  - 정적분석(Static Analysis). 소스 코드를 실행하지 않고 코드만을 분석하여 문제가 될 부분을 찾아내는 기법
  - 덕 타이핑(duck typing)은 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것


## License
Nest is [MIT licensed](LICENSE).
