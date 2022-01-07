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
    - SEO<br>

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
        + ```import Image from 'next/image'
            <br>
            const YourComponent = () => ( 
                \<Image src="/images/profile.jpg"  height={144} width={144} // Desired size with correct aspect ratio alt="Your Name" />)```

    - Pre-rendering and Data Fetching

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
