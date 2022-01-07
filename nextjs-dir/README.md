# [1월 3주차 OJT: Next.js](https://github.com/MinHyeok-lee1/MK_OJT/tree/master/nextjs-dir)
* 학습목표
1) nextjs.org 튜토리얼 클론 코딩 - 로컬 서버의 개인 작업공간 이용<br>
2) Git을 통해 소스코드 관리<br>
3) 학습 내용을 소스코드의 주석 및 README.md 파일로 정리<br><br>

## Next.js 클론 코딩 웹사이트 => [nextjs.org](https://nextjs.org/learn)

* WORD
    - Pre-rendering(SG, SSR)
    - SSR vs CSR
    - CSR(Client-side routing)
    - SEO
    - SCSS vs SASS
    - Headless vs Suverless<br>

* BASICS
    - Create a Next.js App
        + Next.js app BASICS를 수행하기 이전에 terminal에서 해당 app을 구동할 개발환경 디렉토리로 가서 아래 명령어를 입력한다.
        + <pre>npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"</pre>

    - Navigate Between Pages
        + 우선 새로운 페이지를 생성한다.
        + <pre>import Link from 'next/link'</pre>
        + \<a href="/'주소">주소로 라우팅\</a> => 새로고침된다.(속도 down)
        + \<Link href="/주소">\<a>주소로 라우팅\</a>\</Link> => 화면만 바뀐다. (속도 up)

    - Assets, Metadata, and CSS
        + 정적 파일(Assets)을 사용하는 방법은 아래와 같다.
        + 최적화되지 않은 이미지
        + \<img src="/images/profile.jpg" alt="Your Name" />
        + 최적화된 이미지(Resizing & Optimizing images 제공)
        + ```
            import Image from 'next/image'
            
            const YourComponent = () => ( 
                <Image 
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio           
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                />)

        + Metadata => ex) import Head from 'next/head' 이후 \<Head>Head 내용\</Head>
        + 스타일의 적용, Thrid-Party JavaScript, jsx, Layout Component, Global Styles, Sass

    - Pre-rendering and Data Fetching
        + Pre-rendering(ServerSideRendering vs Static Generation)
        + 데이터가 없는 상태에서 SG는 자동으로 정적 생성
        + 데이터가 있는 상태에서(외부 데이터 엑세스) 
        + SG는 getStaticProps를 사용하자. async가능, 사용자의 req보다 앞서(build 타임) 렌더링이 가능한 경우
        + SSR은 getServerSideProps를 사용한다. 사용자의 req보다 앞서 렌더링이 가능하지 않고 자주 req가 있을경우 사용한다.
        + CSR은 정적으로 만들고 추가로 채운다. (SG with out data + CSR). 사용자 개인 대쉬보드, SEO가 필요없을 시
        + SWR이라는 hook을 사용하면 clinet side에서의 data fetching을 처리해준다.

    - Dynamic Routes
        + getStaticPaths를 사용하여 동적 경로가 있는 페이지를 정적으로 생성하는 방법.
        + getStaticProps를 작성하여 각 blog post의 데이터를 가져오는 방법.
        + remark를 사용하여 markdown를 렌더링하는 방법.
        + 날짜 문자열을 예쁘게 인쇄하는 방법.
        + dynamic routes가 있는 페이지에 연결하는 방법.
        + dynamic routes에 대한 유용한 정보

    - API Routes
        + API Route를 만드는 방법 => 
        + 수신 데이터를 데이터베이스에 저장하는 중, 타사 API와 안전하게 통신, CMS에서 미발송 내용 미리보기 상황에 API Route를 사용하는 것이 좋다.
        + ```
            다음 코드를 사용하여 pages/api에 hello.js라는 파일을 만듭니다.

            export default function handler(req, res) {
                res.status(200).json({ text: 'Hello' })
            }

            결과: http://localhost:3000/api/hello에 {"text":"Hello"} 출력.

    - Deploying Your Next.js APP
        + Next.js 앱을 Vercel에 배포하는 방법.
        + DPS 워크플로우: Develop(개발), Preview(미리보기) 및 Ship(배송)
            * Develop: Next.js로 코드를 작성하고 핫 재로딩 기능을 활용하기 위해 실행 중인 Next.js 개발 서버를 사용
            * Preview: 우리는 GitHub의 지점에 변경 사항을 푸시했고, Vercel은 URL을 통해 제공되는 미리보기 배포를 만들고 피드백을 위해 이 미리보기 URL을 다른 사람과 공유할 수 있음, 코드 검토 외에도 배포 미리 보기를 수행
            * Ship: pull 요청을 main에 병합하여 프로덕션으로 전송
            * Next.js 앱을 개발할 때 이 워크플로를 사용하는 것이 앱을 더 빨리 반복할 수 있어서 좋다.
        + Next.js 앱을 자체 호스팅 공급자에 배포하는 방법.
            * package.json면 다음 build과 start스크립트
            * npm run build, npm run start
            * 팁 : 다음 과 같이 업데이트 하여 매개변수 를 허용 하도록 start스크립트를사용자 정의할 수 있습니다 <pre>.package.json에서 PORT정의 => "start": "next start -p $PORT"</pre>
    <br>
    
* SERARCH ENGINE OPTIMIZATION
    - Introduction to SEO

    - Crawling and Indexing

    - Rendering and Ranking

    - Preformance & Core Web Vitals

    - Improving your Core Web Vitals

    - Monitoring your Core Web Vitals
    <br>

* EXCEL
    - TypeScript
        + tsconfig.json 생성: 시작하려면 프로젝트의 루트에 빈 tsconfig.json파일이 있어야 함
        + <pre><b>touch tsconfig.json</b></pre>
        + 이제 개발 서버(npm run dev 또는 yarn dev)를 시작/재시작 이후, 다음과 같은 경고가 표시, TypeScript를 사용하려고 하지만 필수 패키지가 설치되지 않음, 다음 지침에 따라 TypeScript를 설치.
        + <pre>
            # If you’re using npm
            <b>npm install --save-dev typescript @types/react @types/node</b>

            # If you’re using Yarn
            <b>yarn add --dev typescript @types/react @types/node</b>
            </pre>
        + tsconfig.json는 사용자가 지정하는 파일이고 Next.env.d.ts는 TypeScript 컴파일러가 Next.js 유형을 선택하는 것이므로 해당 파일을 touch하면 안된다.
    - Next.js앱에 TypeScript로 변환하는 방법
        + Next.js Specific Types
        + 정적 생성 및 서버 측 렌더링 getStaticProps, getStaticPath 및 getServerSideProps의 경우 각각 GetStaticProps, GetStaticPaths 및 GetServerSideProps 유형을 사용할 수 있습니다.
    <br>
