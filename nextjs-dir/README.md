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
    - SCSS vs SASS <br>

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
        + SG는 getStaticProps를 사용하자. async가능, 사용자의 req보다 앞서 렌더링이 가능한 경우
        + SSR은 getServerSideProps를 사용한다. 사용자의 req보다 앞서 렌더링이 가능하지 않고 자주 req가 있을경우 사용한다.
        + CSR은 정적으로 만들고 추가로 채운다. (SG with out data + CSR)
        + SWR이라는 hook을 사용하면 clinet side에서의 data fetching을 처리해준다.
        
    - Dynamic Routes

    - API Routes

    - Deploying Your Next.js APP
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
    <br>
