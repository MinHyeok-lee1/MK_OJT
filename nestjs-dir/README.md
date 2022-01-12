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


# 데코레이터
1. 데코레이터를 잘 사용하면 적절하게 관심사를 분리하여 관점 지향 프로그래밍을 적용한 코드를 작성할 수 있음
2. 타입스크립트의 데코레이터는 파이썬의 데코레이터나 자바의 어노테이션과 유사한 기능을 함
3. 클래스, 메서드, 접근자, 프로퍼티, 매개변수에 적용 가능
4. 각 요소의 선언부 앞에 @로 시작하는 데코레이터를 선언하면 데코레이터로 구현된 코드를 함께 실행
5. 예를 들어 다음 코드는 유저 생성 요청의 본문을 DTO로 표현한 클래스이다.

```
class CreateUserDto{
  @IsEmail()
  @MaxLength(60)
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
  readonly password: string;
}
```

tsconfig.json 파일에서 experimentalDecorators 옵션을 켜야 데코레이터를 사용할 수 있음
```
{
  "compilerOptions": {
        ...
    "experimentalDecorators": true,
        ...
  }
}
```

데코레이터는 위에서 봤던 것처럼 @expression과 같은 형식으로 사용합니다.
여기서 expression은 데코레이팅 된 선언(데코레이터가 선언되는 클래스, 메서드 등)에 대한 정보와 함께 런타임에 호출되는 <b>함수</b>여야 합니다.
다음과 같은 데코레이터가 있고 이 데코레이터를 test라는 메서드에 선언했습니다. 여기서 deco함수에 인자들이 있는데 메서드 데코레이터로 사용하기 위해서는 이렇게 정의해야 합니다. 이후 자세히 설명하겠습니다.

```
function deco(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('데코레이터가 평가됨');
}

class TestClass {
  @deco
  test() {
    console.log('함수 호출됨')
  }
}

const t = new TestClass();
t.test();
```

TestClass를 생성하고 test메서드를 호출하면 다음과 같은 결과가 콘솔에 출력

```
데코레이터가 평가됨
함수 호출됨
```

만약 데코레이터에 인자를 넘겨서 데코레이터의 동작을 변경하고 싶다면 데코레이터 팩토리, 즉 데코레이터를 리턴하는 함수를 만들면 됩니다. 위의 예시를 다음과 같이 value라는 인자를 받도록 바꿔보겠습니다.

```
function deco(value: string) {
  console.log('데코레이터가 평가됨');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(value);
  }
}

class TestClass {
  @deco('HELLO')
  test() {
    console.log('함수 호출됨')
  }
}
```

결과는 다음과 같습니다.

```
데코레이터가 평가됨
HELLO
함수 호출됨
```

## 데코레이터 합성
만약 여러개의 데코레이터를 사용한다면 수학에서의 함수 합성과 같이 적용됩니다. 다음 데코레이션의 합성결과는 f(g(x))와 같음

```
@f
@g
test
```

여러 데코레이터를 사용할 때 다음 단계가 수행됩니다.
1. 각 데코레이터의 표현은 위에서 아래로 평가(evaluate)됩니다.
2. 그런 다음 결과는 아래에서 위로 함수로 호출(call)됩니다.

다음 예의 출력 결과를 보면 합성순서에 대해 이해를 높일 수 있을 것입니다.

```
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {
        console.log('method is called');
    }
}
```

```
first(): factory evaluated
second(): factory evaluated
second(): called
first(): called
method is called
```

이제 타입스크립트가 지원하는 5가지 데코레이터를 알아봅시다. - (클래스, 메서드, 접근자, 속성, 매개변수 데코레이터)

## 클래스 데코레이터 (Class Decorator)
이름 그대로 클래스 데코레이터는 클래스 바로 앞에 선언됩니다 클래스 데코레이터는 클래스의 생성자에 적용되어 클래스 정의(definition)를 읽거나 수정할 수 있습니다. 선언 파일과 선언 클래스(declare class)내에서는 사용할 수 없습니다.

다음코드는 클래스에 reportingURL 속성을 추가하는 클래스 데코레이터의 예입니다.

```
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www.example.com";
  };
}

@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const bug = new BugReport("Needs dark mode");
console.log(bug);
```

## License
Nest is [MIT licensed](LICENSE).
