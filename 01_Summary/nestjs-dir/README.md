# [1월 4주차 OJT KEYWORD: Nest.js(dir)](https://github.com/MinHyeok-lee1/MK_OJT/tree/master/nestjs-dir)
* 학습목표
1) nestjs.com 튜토리얼 클론 코딩 - 로컬 서버의 개인 작업공간 이용<br>
2) Git을 통해 소스코드 관리<br>
3) 학습 내용을 소스코드의 주석 및 README.md 파일로 정리<br><br>

## Nest.js 클론 코딩 웹사이트 => [nestjs.com](https://docs.nestjs.com/)

## Nest.js 정리
Nest JS 란?
Nest(NestJs)는 효율적이고 확장 가능한 Node.js 서버 측 애플리케이션을 구축하기위한 프레임 워크입니다. 프로그레시브 JavaScript를 사용하고 TypeScript로 빌드되고 완벽하게 지원하며 (개발자가 순수 JavaScript로 코딩할 수 있음), OOP(Object Oriented Programming), FP(Functional Programming), FRP(Functional Reactive Programming) 요소를 사용할 수 있게 해줍니다.

Nest JS는 내부적으로 Express (기본값)와 같은 강력한 HTTP 서버 프레임 워크를 사용하며 선택적으로 Fastify를 사용하도록 구성할 수도 있습니다.

Nest는 이러한 공통 Node.js 프레임 워크 (Express / Fastify) 위에 추상화 수준을 제공하지만 API를 개발자에게 직접 노출합니다. 이를 통해 개발자는 기본 플랫폼에서 사용할 수 있는 수많은 타사 모듈을 자유롭게 사용할 수 있습니다.

Nest JS의 철학은 Node(및 서버측 JavaScript)를 위한 훌륭한 라이브러리, 도우미 및 도구가 많이 존재하지만 이들 중 어느것도 아키텍처의 주요 문제를 효과적으로 해결하지 못합니다.

Nest는 개발자와 팀이 고도로 테스트 가능하고 확장가능하며 느슨하게 결합되고 유지관리가 쉬운 애플리케이션을 만들 수 있는 즉시 사용 가능한 애플리케이션 아키텍처를 제공합니다. 이 아키텍처는 Angular에서 크게 영감받았습니다.

NestJS 기본구조 설명:
 * eslintrc.js: 개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤수있게 도와주는 라이브러리 타입스크립트를 쓰는 가이드라인 제시, 문법에 오류가 나면 알려주는 역할 등등
 
 * prettierrc: 주로 코드 형식을 맞추는데 사용합니다. 작은 따옴표(')를 사용할지 큰 따옴표(")를 사용할지, Indent 값을 2로 줄지 4로 줄지 등등, 에러를 찾는 것이 아닌 코드 포맷터 역할.
 
 * nest-cli.json: nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일
 
 * tsconfig.json: 어떻게 타입스크립트를 컴파일 할지 설정
 
 * tsconfig.build.json: tsconfig.json의 연장선상 파일이며, build를 할 때 필요한 설정들 "excludes"에서는 빌드할 때 필요 없는 파일들 명시
 
 * package.json: build: 운영환경을 위한 빌드, format: 린트에러가 났을지 수정, start: 앱시작
 
 * src 폴더(대부분 비즈니스 로직이 들어가는 곳): 
    + main.ts: 앱을 생성하고 실행
    + app.module.ts: 앱 모듈을 정의

  ### Command
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

  ### Nest JS CLI로 NEST JS 시작
  
  ```
  $ npm i -g @nestjs/cli
  $ nest new project-name
  ```
  
  잘 설치되었는지 확인
  
  <pre>nest --version</pre>
  
  ### 모듈(Module)

  NestJS 모듈: App Module안에 AuthModule과 같은 필요한 모듈들이 있으며 각 모듈안에 Controller Entity Service 등이 있습니다.
  
  모듈은 @Module() 데코레이터로 주석이 달린 클래스입니다. @Module() 데코레이터는 Nest가 애플리케이션 구조를 구성하는데 사용하는 메타데이터를 제공합니다.

  각 응용프로그램에는 하나이상의 모듈(루트 모듈)이 있습니다. 루트 모듈은 Nest가 사용하는 시작점입니다.

  모듈은 밀접하게 관련된 기능 집합으로 구성 요소를 구성하는 효과적은 방법입니다.(기능별로 만듭니다.) ex) 유저 모듈, 주문 모듈, 챗 모듈

  같은 기능에 해당하는 것들은 하나의 모듈 폴더안에 넣어서 사용합니다.(UserController, UserService, UserEntity 다 같은 기능이기에 UserModule안에 넣습니다.)

  모듈은 기본적으로 싱글톤이므로 여러 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있습니다.

  ### 컨트롤러(Controller)
  Controller 생성하기
  
  <pre>nest g controller 'Name' --no-spec</pre>

  <pre>nest g co 'Name'</pre>

  nest: using nestcli, g: generate, --no-spec: 테스트를 위한 소스 코드 생성 x


  컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환합니다.

  콘트롤러는 @Controller 데코레이터로 클래스를 데코레이션하여 정의됩니다.

  데코레이터는 인자를 Controller에 의해서 처리되는 "경로"로 받습니다.

  <b>Handler란?</b>

  핸들러는 @Get, @Post, @Delete 등과 같은 데코레이터로 장식된 컨트롤러 클래스 내의 단순한 메서드입니다.

  ### 프로바이더(Provider)
  
  프로바이더는 Nest의 기본 개념입니다. 대부분의 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼등 프로바이더로 취급될 수 있습니다. 프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것입니다. 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 "연결"하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있습니다.
  
  Provider 등록하기: Provider를 사용하기 위해서는 이것을 Nest에 등록해줘야지 사용할 수가 있습니다. 등록하기 위해서는 module 파일에서 할 수 있습니다. module 파일에 providers항목안에 해당 모듈에서 사용하고자 하는 Provider 를 넣어주시면 됩니다.

  Provider의 종류: Service, Helper, Factory, Repository 등

  ### 서비스(Service)
  Service 생성하기
  
  <pre>nest g service 'Name' --no-spec</pre>

  <pre>nest g s 'Name'</pre>

  nest: using nestcli, g: generate, --no-spec: 테스트를 위한 소스 코드 생성 x

  <b>원리: </b>
  CLI를 이용해서 Service를 생성하면 이렇게 'Name'.service.ts파일이 생성됩니다.
  이 생성된 파일 안에는 Injectable 데코레이터가 있으며 이 NestJs는 이것을 이용해서 다른 컴포넌트에서 이 서비스를 사용할 수 있게(Injectable) 만들어줍니다. 그리고 CLI로 Service 생성시에는 module에도 자동으로 Service가 추가됩니다.
  
  <b>개념: </b>
  서비스는 소프트웨어 개발내의 공통 개념이며, NestJS, Javascript에서만 쓰이는 개념

  @Injectable 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용

  서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리





  ### 스웨거(Swagger): 
  Swagger는 API 문서 자동화 도구이다 이전의 프로젝트에서 사용한 경험으로는 API 문서를 따로 작성할 필요 없이 코드를 수정하면서 API 문서를 같이 수정할 수 있는 것이 큰 장점, 만약에 코드와 API 문서를 따로 관리하게 되면 코드를 수정하였는데 API 문서 최신화를 잊어버려서 다른 팀원들에게 공유된 API 문서가 실제 API와 다른 문제가 발생할 수 있다. 다른 장점으로는 Swagger는 API를 테스트할 수 있는 GUI를 제공한다.

  NestJS에서 Swagger 설치하는 방법
  <pre>npm install --save @nestjs/swagger swagger-ui-express</pre>  

  NestJS(fastify)를 사용하는 경우 Swagger 설치하는 방법
  <pre>npm install --save @nestjs/swagger fastify-swagger</pre>  

  

  ### etc..
  유효성 체크: class-validator(isBoolean, isNum, isEnum, isEmail)
  NestJS 미들웨어들 - PIPES, Filters, Guards, Interceptors

  DTO(Data Transfer Object): 역할 - 데이터 유효성 체크, 데이터를 전달하기 위한 객체이다. 계층간 데이터를 주고 받을 때, 데이터를 담아서 전달하는 바구니로 여러 레이어 사이에서 DTO를 사용할 수 있지만, 주로 View와 Controller 사이에서 데이터를 주고 받을 때 활용한다.
  
  DTO는 getter / setter 메소드를 포함한다. 이 외의 비즈니스 로직은 포함하지 않는다. 아래 코드처럼 <b>setter를 가지는 경우 가변 객체</b>로 활용할 수 있다.
  
  한편, <b>setter가 아닌 생성자를 이용해서 초기화하는 경우 불변객체</b>로 활용할 수 있다. 불변 객체로 만들면 데이터를 전달하는 과정에서 데이터가 변조되지 않음을 보장할 수 있다.

  VO(Value Object): VO는 값 자체를 표현하는 객체이다. VO는 객체들의 주소가 달라도 값이 같으면 동일한 것으로 여긴다. 예를 들어 고유번호가 서로 다른 만원 2장이 있다고 생각하자. 이 둘은 고유번호(주소)는 다르지만 10000원(값)은 동일하다.

  VO는 getter 메소드와 함께 비즈니스 로직도 포함할 수 있다. 단, setter 메소드는 가지지 않는다. 또, 값 비교를 위해 equals()와 hashCode() 메소드를 오버라이딩 해주고 서로 다르지만 값이 같은 두 객체를 두 메소드를 통해 비교해준다면 테스트를 통과한다. 왜냐하면 VO는 주소가 아닌 값을 비교하기 때문이다.

  Entity(ORM)는 실제 DB 테이블과 매핑되는 핵심 클래스이다.이를 기준으로 테이블이 생성되고 스키마가 변경된다. 따라서, 절대로 Entity를 요청이나 응답값을 전달하는 클래스로 사용해서는 안된다. Entity는 id로 구분된다. 그리고 비즈니스 로직을 포함할 수 있다.

  Entity는 DTO처럼 setter를 가지는 경우 가변 객체로 활용할 수 있다.


  | 분류| DTO| VO| Entity|
  |:---|:---:|:---:|:---:| 
  | 정의| 레이어간 데이터 전송용 객체| 값 표현용 객체| DB 테이블 매핑용 객체|
  | 상태 변경 여부| 가변 또는 불변 객체| 불변 객체| 가변 또는 불변 객체|
  | 로직 포함 여부| 로직을 포함할 수 없다.| 로직을 포함할 수 있다.| 로직을 포함할 수 있다.|

  403: forbidden vs 404: not found이지만 403을 띄우는것 자체가 정보를 주는 것이기 때문에 404를 띄운다.

  로그의 종류: Log, Warning, Error, Debug, Verbose

  설정(config 모듈): Codebase(XML, JSON, YAML) vs Envirorment Variables(환경변수)
  
## Typescript
  ### 변수 선언
  타입스크립트에서 변수를 선언하는 방식은 다음과 같습니다.  
  
  ```
  [선언키워드] [변수명]: [타입]
  ```

  선언키워드: const, let 또는 var로 선언합니다. const는 선언 후 재할당이 불가능하며 let과 var는 재할당이 가능하여 값을 바꿀 수 있습니다. let과 var의 차이는 hoisting 여부인데, var는 변수를 사용한 후에 선언이 가능하지만 let은 그렇지 못합니다.


  ### Typescript에서 지원하는 타입
  타입스크립트는 자바스크립트가 가지고 있는 자료형을 모두 포함합니다. 자바스크립트의 타입은 기본타이뱌(Primitive value)과 객체형(Object), 함수형(Function)이 있습니다. <b>typeof</b> 키워드를 이용하여 인스턴스의 타입을 알 수 있습니다.


  ### 기본 타입

  | typeof| 설명| 할당 가능한 값|
  |:---|:---:|---:| 
  | boolean| 	참, 거짓을 나타내는 논리값| true, false| 
  | null|	"유효하지 않음"을 나타낸다|	null|
  | undefined|	값이 존재하지 않음. 즉, 변수 선언 후 "값이 할당되지 않음"을 나타낸다|	undefined|
  | number|	배정밀도 64비트 형식 IEEE 754의 값|	-(2^53 -1) 와 2^53 -1 사이의 정수와 실수<br>+Infinity, Infinity<br>NaN (Not a Number) |
  | bigint|	Number의 범위를 넘어서는 정수를 안전하게 저장하고 연산할 수 있게 해 준다 |ex) const x = 2n ** 53n;<br>정수 끝에 n을 추가한다|
  | string|	문자열. 변경 불가능(immutable)하다.	| 홑따옴표 또는 쌍따옴표로 둘러싸인 문자열| ex) 'hello', "world"|
  | symbol|	유일하고 변경 불가능한 (immutable) 기본값(primitive value)| 객체 속성의 키로 사용할 수 있다	|


  ### 객체 타입
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


  ### 함수(Fuction) 타입
  자바스크립트는 함수를 변수에 할당하거나 다른 함수의 인자로 전달할 수 있습니다. 함수의 결과로 반환할 수도 있습니다. 언어의 이러한 특징을 <b>일급 함수</b>라고 합니다. 함수 func의 타입을 검사하면 "function"이 됩니다.
  ```
  typeof func === "function"
  ```

  ### any / unknown / never
  타입스크립트의 특수한 타입 any와 unknown, never이 있다.

  any: js 와 같이 어떤 타입의 변수에도 할당이 가능하다. 이 특성때문에 런타임에 오류를 일으킬 가능성이 있습니다.

  unknown: any 타입과 마찬가지로 어떤 타입도 할당 가능하지만 다른 변수에 할당 또는 사용할 때 타입을 강제하도록 하여 any가 일으키는 오류를 줄여줍니다.

  never: never 타입의 변수에는 어떤 값도 할당할 수 없습니다. 함수의 리턴 타입으로 지정하면 함수가 어떤 값도 반환하지 않는다는 것을 뜻합니다.

  다음과 같이 특정 타입의 값을 할당받지 못하도록 하는데 사용할 수도 있습니다. <T>는 제네릭 타입인데 이후에 설명합니다.
  ```
  type NonString<T> = T extends string ? never : T;
  ```

  ### 타입 정의하기
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

  ### 타입 구성하기
  자바스크립트는 변수에 어떠한 타입의 값도 할당할 수 있습니다. 일명 덕 타이핑이라 부릅니다. 타입스크립트도 여러 타입의 값을 할당할 수 있습니다. 여러 타입을 조합한 새로운 타입을 가지는 것입니다.

  #### 유니언 (Union) 타입
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

  #### 제네릭 (Generic) 타입
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


## 데코레이터
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

  ### 데코레이터 합성
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

  ### 클래스 데코레이터 (Class Decorator)
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

  L1: 클래스 데코레이터 팩토리입니다. 생성자 타입(,new 키워드와 함께 어떠한 형식의 인자들도 받을 수 있는 타입)을 상속받는 제네릭 타입T를 가지는 생성자(constructor)를 팩토리 메소드의 인자로 전달하고 있습니다.

  L2: 클래스 데코레이터는 생성자를 리턴하는 함수여야 합니다.

  L3: 클래스 데코레이터가 적용되는 클래스에 새로운 reportingURL이라는 새로운 속성을 추가합니다.

  위 코드의 출력결과는 다음과 같습니다.

  <pre>{type: 'report', title: 'Needs dark mode', reportingURL: 'http://example.com'}</pre>

  BugReport클래스에 선언되어 있지 않은 새로운 속성이 추가되었습니다.

  ⚠️ 클래스의 타입이 변경되는 것은 아닙니다. 타입 시스템은 reportingURL을 인식하지 못하기 때문에 bug.reportingURL과 같이 직접 사용할 수 없습니다.

  ### 메소드 데코레이터 (Method Decorator)
  메소드 데코레이터는 메소드 바로 앞에 선언됩니다. 메소드의 속성 디스크립터에 적용되고 메소드의 정의를 읽거나 수정할 수 있습니다. 선언파일, 오버로드 메소드, 선언 클래스에는 사용할 수 없습니다.

  앞서 deco 메소드 데코레이터에서 보았던 것처럼 메소드 데코레이터는 다음 세개의 인수를 가집니다.
  1. 정적 멤버가 속한 클래스의 생성자 함수이거나 인스턴스 멤버에 대한 클래스의 프로토타입
  2. 멤버의 이름
  3. 멤버의 속성 디스크립터. PropertyDescriptor 타입을 가짐

  만약 메소드 데코레이터가 값을 반환한다면 이는 해당 메소드의 속성 디스크립터가 됩니다.

  메소드 데코레이터의 예를 보겠습니다. 함수를 실행하는 과정에서 에러가 발생했을 때 이 에러를 잡아서 처리하는 로직을 구현하고 있습니다.

  ```
  function HandleError() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(target)
      console.log(propertyKey)
      console.log(descriptor)

      const method = descriptor.value;

      descriptor.value = function() {
        try {
          method();
        } catch (e) {
          // 에러 핸들링 로직 구현
          console.log(e);
        }
      }
    };
  }

  class Greeter {
    @HandleError()
    hello() {
      throw new Error('테스트 에러');
    }
  }

  const t = new Greeter();
  t.hello();
  ```

  L2: 메소드 데코레이터가 가져야 하는 3개의 인자입니다. PropertyDescriptor는 객체 속성의 특성을 기술하고 있는 객체로써 enumerable 외에도 여러가지 속성을 가지고 있습니다. enumerable이 true가 되면 이 속성은 열거형이라는 뜻이 됩니다.

  ```
  interface PropertyDescriptor{
    configurable?: boolean; // 속성의 정의를 수정할 수 있는지 여부
    enumerable?: boolean; // 열거형인지 여부
    value?: any; // 속성 값
    writable?: boolean; // 수정 가능 여부
    get?(): any; // getter
    set?(v: any): void; // setter
  }
  ```

  L3: 출력결과는 {constructor: f, greet: f} 입니다. 데코레이터가 선언된 메소드 greet가 속해있는 클래스의 생성자와 프로토타입을 가지는 객체임을 알 수 있습니다.

  L4: 함수이름 hello가 출력됩니다.

  L5: hello 함수가 처음 가지고 있던 디스크립터가 출력됩니다. 출력결과는 {value: f, writable: true, enumerable: false, configurable: true} 입니다.

  L7: 디스크립터의 value 속성으로 원래 정의된 메소드를 저장합니다.

  L10: 원래의 메소드를 호출합니다.

  L12: 만약 원래의 메소드를 수행하는 과정에서 발생한 에러를 핸들링하는 로직을 이 곳에 구현합니다.

  L13: Error: 테스트 에러가 출력됩니다.



  ### 접근자 데코레이터 (Accessor Decorator)
  접근자 데코레이터는 접근자(주석, 객체 프로퍼티를 객체 외에서 읽고 쓸 수 있는 함수, 쉽게 이야기해서 getter와 setter, 타입스크립트에는 getter와 setter를 구현할 수 있는 get, set 키워드가 있다.) 바로 앞에 선언합니다. 접근자의 속성 디스크립터에 적용되고 접근자의 정의를 읽거나 수정할 수 있습니다. 역시 선언 파일과 선언 클래스에 사용할 수 없습니다. 접근자 데코레이터가 반환하는 값은 해당 멤버의 속성 디스크립터가 됩니다.

  특정 멤버를 열거가 가능한 지 결정하는 데코레이터의 예를 보겠습니다.

  ```
  function Enumerable(enumerable: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
      descriptor.enumerable = enumerable;
    }
  }

  class Person{
    constructor(private name: string){}

    @Enumerable(true)
    get getName(){
      return this.name;
    }

    @Enumerable(false)
    set setName(name: string){
      this.name = name;
    }
  }
    const person = new Person('Dexter');
    for(let key in person){
      console.log(`${key}: ${person[key]}`);
    }
  ```

  L3: 디스크립터의 enumerable 속성을 데코레이터의 인자로 결정합니다.

  L8: name은 외부에서 접근하지 못하는 private 멤버입니다.

  L10~11: getter의 getName 함수는 열거가 가능하도록 합니다.

  L15~16: setter의 setName 함수는 열거가 불가능하도록 합니다.

  L21~24: 결과를 출력하면 getName은 출력되지만 setName은 열거하지 못하게 되었기 때문에 for문에서 key로 받을 수가 없습니다.

  ```
  name: Dexter
  getName: Dexter
  ```


  ### 속성 데코레이터 (Property Decorator)
  속성 데코레이터는 클래스의 속성 바로 앞에 선언됩니다. 역시 선언 파일, 선언 클래스에서 사용하지 못합니다. 속성 데코레이터는 다음 두 개의 인수를 가지는 함수입니다.

  1. 정적 멤버가 속한 클래스의 생성자 함수이거나 인스턴스 멤버에 대한 클래스의 프로토타입
  2. 멤버의 이름

  메소드 데코레이터나 접근자 데코레이터와 비교했을 때 세 번째 인자인 속성 디스크립터가 존재하지 않습니다. 공식문서에 따르면 반환값도 무시되고, 이는 현재 프로토타입(prototype)의 멤버를 정의할 때 인스턴스 속성을 설명하는 메커니즘이 없고 송석의 초기화 과정을 관찰하거나 수정할 수 있는 방법이 없기 때문이라고 합니다.

  ```
  function format(formatString: string){
    return function(target: any, propertyKey: string): any {
      let value = target[propertyKey];

      function getter(){
        return `${formatString} ${value}`;
      }

      function setter(newVal: string){
        value = newVal;
      }

      return {
        get: getter.
        set: setter,
        enumerable: true,
        configurable: true,
      }
    }
  }

  class Gretter{
    @format('Hello')
    greeting: string;
  }

  const t = new Gretter();
  t.greeting = 'World';
  console.log(t.greeting);
  ```

  L6: getter에서 데코레이터 인자로 들어온 formatString을 원래의 속성과 조합한 string으로 바꿉니다.

  L23: 데코레이터에 formatString을 전달합니다.

  L29: 속성을 읽을 때 getter가 호출되면서 Hello World가 출력됩니다.

  ### 매개변수 데코레이터 (Parameter Decorator)
  예상하셨듯이 생성자 또는 메소드의 파라미터에 선언되어 적용됩니다. 역시 선언 파일, 선언 클래스에서 사용할 수 없습니다. 매개변수 데코레이터는 호출 될 때 3가지의 인자와 함께 호출됩니다. 반환값은 무시됩니다.

  1. 정적 멤버가 속한 클래스의 생성자 함수이거나 인스턴스 멤버에 대한 클래스의 프로토타입
  2. 멤버의 이름
  3. 매개변수가 함수에서 몇 번쨰 위치에 선언되었는 지를 나타내는 인덱스

  파라미터가 제대로 된 값으로 전달되었는지 검사하는 데코레이터를 만들어보겠습니다. 매개변수 데코레이터는 단독으로 사용하는 것보다 함수 데코레이터와 함꼐 사용할 떄 유용하게 쓰입니다.

  💡 <b>Nest에서 API 요청 파라미터에 대해 유효성 검사를 할 떄 이와 유사한 데코레이터를 많이 사용합니다.</b>

  ```
  import { BadRequestException } from '@nestjs/common';

  function MinLength(min: number) {
    return function (target: any, propertyKey: string, parameterIndex: number) {
      target.validators = {
        minLength: function (args: string[]) {
          return args[parameterIndex].length >= min;
        }
      }
    }
  }

  function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function(...args) {
      Object.keys(target.validators).forEach(key => {
        if (!target.validators[key](args)) {
          throw new BadRequestException();
        }
      })
      method.apply(this, args);
    }
  }

  class User {
    private name: string;

    @Validate
    setName(@MinLength(3) name: string) {
      this.name = name;
    }
  }

  const t = new User();
  t.setName('Dexter');
  console.log('----------')
  t.setName('De');
  ```

  L3: 파라미터의 최소값을 검사하는 파라미터 데코레이터

  L5~9: target 클래스(여기서는 User)의 validators 속성에 유효성을 검사하는 함수를 할당합니다.

  L6: args 인자는 18번 라인에서 넘겨받은 메소드의 인자입니다.

  L7: 유효성 검사를 위한 로직입니다. parameterindex에 위치한 인자의 길이가 최소값보다 같거나 큰지 검사합니다.

  L13: 함께 사용할 메소드 데코레이터

  L14: 메소드 데코레이터가 선언된 메소드를 method 변수에 임시 저장해둡니다.

  L16: 디스크립터의 value에 유효성 검사 로직이 추가된 함수를 할당합니다.

  L17~21: target(User 클래스)에 저장해 둔 validators를 모두 수행합니다. 이때 원래 메소드에 전달된 인자(args)를 각 validator에 전달합니다.

  L22: 원래의 함수를 실행합니다.

  L36: 파라미터 name의 길이가 5이기 때문에 문제가 없습니다.

  L38: 파라미터 name의 길이가 3보다 작기 때문에 BadRequestException이 발생합니다.

  ### 데코레이터 정리
  지금까지 알아본 5가지 데코레이터를 자세히 알아보았습니다. 각 데코레이터의 특징을 간략히 정리하면 다음과 같습니다.

  | 데코레이터| 역할| 호출시 전달되는 인자| 선언 불가능한 위치|
  |:---|:---:|:---:|---:| 
  | 클래스 데코레이터| 클래스의 정의를 읽거나 수정| (constructor)| d.ts 파일, declare 클래스|
  | 메소드 데코레이터| 메소드의 정의를 읽거나 수정| (target, propertyKey, propertyDescriptor)| d.ts 파일, declare 클래스, 오버로드 메소드|
  | 접근자 데코레이터| 접근자의 정의를 읽거나 수정| (target, propertyKey, propertyDescriptor)| d.ts 파일, declare 클래스|
  | 속성 데코레이터| 속성의 정의를 읽음| (target, propertyKey)| d.ts 파일, declare 클래스|
  | 매개변수 데코레이터| 매개변수의 정의를 읽음| (target, propertyKey, propertyIndex)| d.ts 파일, declare 클래스|

  1. 선언파일: 타입스크립트 소스코드를 컴파일 할 때 생성되는 파일로 타입시스템의 타입추론을 돕는 코드가 포함되어 있다. 소스파일의 이름은 d.ts로 끝난다.
  2. Property Descriptor: 속성의 특성을 설명하는 객체이다.

## License
Nest is [MIT licensed](LICENSE).
