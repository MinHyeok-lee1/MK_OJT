# next-seo-starter
    
* <b>SERARCH ENGINE OPTIMIZATION</b>
    - Introduction to SEO
        + SEO
            + 검색엔진유기적트래픽(Search engine organic traffic: 검색 엔진 에서 결과를 클릭하여 사이트를 방문하는 방문자)은 세 가지 이유로 많은 비즈니스의 핵심
                1. Qualitative(정성적) – 방문자가 고객으로 전환될 가능성이 높아집니다.
                2. Trustable(신뢰성) - 브랜드 또는 임무에 더 높은 신뢰.
                3. Low-Cost(저비용) – 소요된 시간과 노력을 제외하고 검색 엔진 순위를 높이는 좋은 SEO 관행을 갖는 것은 무료입니다. 상위 자연 검색 결과 위치에 표시되는 데 직접적인 비용은 없습니다.

            + Three Pillars of Optimization(최적화의 세 가지 요소)
            + 웹 사이트 최적화 프로세스는 세 가지 주요 요소로 나눌 수 있음
                1. Technical(기술) – 크롤링 및 웹 성능을 위해 웹사이트를 최적화합니다.
                2. Creation(생성) – 특정 키워드를 대상으로 하는 콘텐츠 전략을 만듭니다.
                3. Popularity(인기도) – 검색 엔진이 귀하가 신뢰할 수 있는 출처임을 알 수 있도록 온라인에서 사이트의 인지도를 높입니다. 이는 귀하의 사이트로 다시 연결되는 제3자 사이트 인 백 링크를 사용하여 수행됩니다.

            + 검색 시스템의 네 가지 주요 책임
                1. Crawling(크롤링) – 웹을 탐색 하고 모든 웹사이트의 콘텐츠를 구문 분석하는 프로세스입니다. 3억 5천만 개 이상의 도메인을 사용할 수 있으므로 이는 엄청난 작업 입니다.
                2. Indexing(인덱싱) – 액세스할 수 있도록 크롤링 단계에서 수집된 모든 데이터를 저장할 위치를 찾습니다.
                3. Rendering(렌더링) – 사이트의 기능을 향상하고 콘텐츠를 풍부하게 할 수 있는 JavaScript와 같은 페이지의 모든 리소스를 실행합니다. 이 프로세스는 크롤링되는 모든 페이지에 대해 발생하지 않으며 때로는 콘텐츠가 실제로 인덱싱되기 전에 발생합니다. 해당 시점에 작업을 수행하는 데 사용 가능한 리소스가 없는 경우 인덱싱 후에 렌더링이 발생할 수 있습니다.
                4. Ranking(순위) – 사용자 입력을 기반으로 관련 결과 페이지를 만들기 위해 데이터를 쿼리합니다. 여기에서 다양한 순위 기준이 검색 엔진에 적용되어 사용자에게 의도를 달성하기 위한 최상의 답변을 제공합니다.
        + Search System

        + Webcrawlers

    - Crawling and Indexing
        + Status Codes

        + Robots.txt

        + XML Sitemaps

        + Special Tags

        + Canonical Tags: 페이지 중복 제거를 위한 표준 태그

    - Rendering and Ranking
        + 렌더링 전략: 정적 사이트 생성(SSG), 서버 측 렌더링(SSR), 증분 정적 재생(ISR), 클라이언트 측 렌더링(CSR)

        + SEO에서 가장 중요한 것은 JavaScript 없이 페이지 로드 시 페이지 데이터와 메타데이터를 사용할 수 있다는 것입니다. 이 경우 SSG 또는 SSR이 최선의 선택이 될 것입니다.

        + Next.js의 주요 장점 중 하나는 위의 각 렌더링 방법을 페이지 단위로 수행할 수 있다는 것입니다. 블로그 게시물을 정적으로 생성하고 고객 계정 대시보드 클라이언트 측을 렌더링한 다음 서버 측에서 렌더링하려는 뉴스 피드를 원할 수 있습니다.

        + URL 구조 원칙
            + Semantic: 의미 있는 URL을 사용하는 것이 가장 좋습니다. 즉, ID나 난수 대신 단어를 사용해야합니다.
            
            + Patterns that are logical and consistent: URL은 페이지 간에 일관된 패턴을 따라야 합니다. 예를 들어, 가지고 있는 각 제품에 대해 다른경로를 사용하는 대신 모든 제품 페이지를 그룹화하는 폴더를 원합니다.

            + 키워드 중심: Googole은 여전히 웹사이트에 포함된 키워드에 시스템의 상당 부분을 기반으로 합니다. 페이지의 목적을 쉽게 이해할 수 있도록 URL에 키워드를 사용할 수 있습니다.

            + Not paramenter-based: 매개변수를 사용하여 URL을 작성하는 것은 일반적으로 좋은 생각이 아닙니다. 대부분의 경우 의미가 없으며 검색 엔진에서 혼동을 일으키고 결과에서 순위를 낮출 수 있습니다.

            + 경로지정: Next.js는 페이지 개념을 기반으로 구축된 파일 시스템 라우팅을 사용 합니다. 파일이 디렉토리에 추가되면 자동으로 경로로 사용할 수 있습니다. 디렉토리 내의 파일과 폴더 는 가장 일반적인 패턴을 정의하는 데 사용할 수 있습니다.

            + 몇 가지 간단한 URL과 이를 Next.js 라우터에 추가하는 방법을 살펴보겠습니다.

            + ``` 
                홈페이지 : https://www.example.com → pages/index.js

                목록 : https://www.example.com/products → 또는 pages/products.jspages/products/index.js

                세부 사항 : → https://www.example.com/products/product pages/products/product.js 
            + 블로그 또는 전자 상거래 사이트의 경우 제품 ID 또는 블로그 이름을 URL의 슬러그로 사용하고 싶을 것입니다. 이것을 동적 라우팅 이라고 합니다 .

            + ```
                제품: https://www.example.com/products/nextjs-shirt → pages/products/[product].js

                블로그: https://www.example.com/blog/seo-in-nextjs → pages/blog/[blog-name].js
            + 동적 라우팅을 사용하려면 products또는 blogs하위 폴더 내의 페이지 이름에 대괄호를 추가할 수 있습니다 .

            + SEO에서 제목 태그(title)이 중요하다. 다음은 제목태그의 예시이다.
            
            + ```
                <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>
            + SEO에서 설명 메타 태그는 또다른 중요한 SEO 요소이지만 제목보다 덜 중요하다, Google에 따르면 이 요소는 순위 지정 목적으로 고려되지 않지만 검색 결과의 클릭률에 영향을 줄 수 있습니다.

            + 설명 메타 태그를 사용하여 제목의 정보를 보완하세요. 제목에 맞지 않는 키워드가 있는 경우 여기에 콘텐츠에 대한 더 많은 키워드를 입력하세요. 이러한 키워드는 사용자의 검색에 포함된 경우 굵게 표시됩니다. 다음은 HTML의 설명 메타태그 예:
            
            + ```
                <title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>
            + 그 이외에 원래 페이스북이 개발한 Open Graph Protocol은 주어진 웹 페이지에서 메타데이터가 사용되는 방식을 표준화한다. 원하는 만큼 정보를 적게 또는 많이 제공할 수 있지만 열려 있는 모든 그래프 조각이 서로 들어맞아 연결된 사이트의 표현

            + 구조화된 데이터 및 JSON-LD: 구조화된 데이터는 검색 엔진이 귀하의 페이지를 쉽게 이해할 수 있도록 합니다. 수년에 걸쳐 여러 어휘가 있었지만 현재 주요 어휘는 schema.org 입니다. 다른 검색 엔진은 schema.org 내에서 다른 어휘를 적용할 수 있으며 어떤 검색 엔진도 웹사이트의 어휘에 설명된 모든 사용 사례를 다루지 않습니다. 각 경우에 어떤 어휘가 허용되는지 확인

            + 제목 및 H1: 각 페이지에 H1 제목 태그를 사용하는 것이 좋다. 제목은 1~6으로 이동하며 제목 1이 가장 중요하다고 생각, H1은 페에지의 내용을 나타내야 하며 'title' 태그와 유사해야 함

        
    - Preformance & Core Web Vitals
        + <b>Core Web Vitals</b>는 Web Vitals의 하위 집합이며 현재 로딩, 상호 작용성 및 시각적 안정성을 측정하는 세 가지 측정항목으로 구성되어 있음
        
        + 세 가지 측정항목은 LCP(Large Contentful Paint), FID(First Input Delay), CLS(Cumulative Layout Shift) _ 로딩, 상호 작용 및 시각적 안정성

        + LCP(Large Contentful Paint): LCP(Large Contentful Paint) 메트릭은 페이지의 로드 성능을 확인. LCP는 뷰포트 내에 표시되는 페이지에서 가장 큰 요소를 가져오는 데 걸리는 시간을 측정. 이것은 페이지의 주요 부동산을 차지하는 큰 텍스트 블록, 비디오 또는 이미지일 수 있음.

            + 참고: 이것은 페이지가 로드되기 시작할 때부터 첫 번째 요소가 화면에 렌더링될 때까지의 시간을 측정하는 FCP(First Contentful Paint)가 아닙니다.

            + DOM이 렌더링되면 페이지에서 가장 큰 요소가 변경될 수 있습니다. 가장 큰 만족 그림판은 가장 큰 이미지 또는 요소가 화면에 표시될 때까지 카운트를 멈추지 않습니다.

            + <b>LCP(Large Contentful Paint)는 웹 페이지의 로딩 성능을 측정.</b>
        
        + FID(First Input Delay): FID 메트릭은 웹 페이지와 상호 작용하는 동안 최종 사용자의 경험에 대한 인식. 아무 일도 일어나지 않고 입력 상자 내부를 클릭하는 것은 좋지 않음. 사이트의 상호 작용과 응답성에 대한 이러한 좌절은 입력 지연으로 인해 발생.

            + FID에는 실제 사용자 데이터가 필요하며 연구실(예: Google Lighthouse)에서 측정할 수 없습니다. 그러나 TBT(총 차단 시간) 메트릭은 실험실에서 측정할 수 있으며 상호 작용에 영향을 미치는 문제를 포착합니다.

            + <b>FID(First Input Delay)는 웹 페이지의 상호 작용을 측정.</b>

        + CLS(Cumulative Layout Shift): 누적 레이아웃 이동(CLS) 메트릭은 사이트의 전체 레이아웃 안정성을 측정합니다. 페이지가 로드될 때 예기치 않게 레이아웃을 변경하는 사이트는 사용자 오류 및 주의 산만함을 초래할 수 있습니다.

            + 누적 레이아웃 이동(CLS)은 DOM에 의해 처음 렌더링된 후 요소가 이동될 때 발생합니다. 여기서 버튼은 텍스트 블록 뒤에 있는 화면에 렌더링되어 블록이 아래로 이동하게 됩니다. CLS를 계산할 때 충격과 거리의 조합을 고려합니다.

            + 각 요소의 개별 배치 이동 점수는 예기치 않은 이동이 발생할 경우에만 CLS 쪽으로 계산됩니다. 새 요소가 DOM에 추가되거나 기존 요소의 크기가 변경되는 경우 로드된 요소가 위치를 유지하면 레이아웃 이동으로 계산되지 않습니다.

                + <b>CLS(Cumulative Layout Shift)는 웹 페이지의 시각적 안정성을 측정.</b>

    - Improving your Core Web Vitals
        + Lighthouse 작동 방식의 예를 보려면 다음 홈페이지를 사용합니다. 'https://nextjs.org'
            1. chrome을 엽니다.
            2. 시크릿창에서 https://nextjs.org로 이동합니다.
            3. DevTools를 열고 Lighthouse 탭을 클릭합니다.
            4. 보고서 생성을 클릭합니다.
            
            + 시크릿창에서 하는 이유: 다른 플러그인(확장 프로그램)이 영향을 끼칠 수 있음
        
        + Image Component and Automatic Image Optimization(img => Image)
            + ```
                    import Image from 'next/image'

                    // Before
                    <img src="large-image.jpg" alt="Large Image" />

                    // After
                    <Image src="/large-image.jpg" alt="Large Image" width={3048} height={2024} />
            
        + Dynamic Imports: 동적 가져오기를 사용하면 페이지 로드 시 "사용하지 않는 JavaScript 제거" 문제가 해결됩니다. 이는 또한 TTI(Time to Interactive)를 개선하여 FID(First Input Delay)를 개선하는 데 도움이 됩니다.
            + ```
                    import Fuse from 'fuse.js'
                    import _ from 'lodash'

                    <input
                    type="text"
                    placeholder="Country search..."
                    className={styles.input}
                    onChange={async e => {
                        const { value } = e.currentTarget
                        // Dynamically load libraries
                        const Fuse = (await import('fuse.js')).default
                        const _ = (await import('lodash')).default

                        const fuse = new Fuse(countries, {
                        keys: ['name'],
                        threshold: 0.3
                        })

                        const searchResult = fuse.search(value).map(result => result.item)

                        const updatedResults = searchResult.length ? searchResult : countries
                        setResults(updatedResults)

                        // Fake analytics hit
                        console.info({
                        searchedAt: _.now()
                        })
                    }}
                    />

        + Dynamic Imports for Components
            + ```
                    import dynamic from 'next/dynamic'

                    // remove
                    import CodeSampleModal from '../components/CodeSampleModal'

                    //add 
                    const CodeSampleModal = dynamic(() => import('../components/CodeSampleModal'), {
                        ssr: false
                    })

                    // Wrapping CodeSampleModal
                    {
                        isModalOpen && (
                            <CodeSampleModal
                            isOpen={isModalOpen}
                            closeModal={() => setIsModalOpen(false)}
                            />
                        )
                    
                    }
            + 두 가지 최적화 제안이 남음
            + HTTP2 사용 : 이 문제를 해결하기 위해 HTTP2를 지원하는 곳(예: Vercel )에 배포할 수 있음
            + 이미지 요소에는 명시적 width 및 height : 이것은 실제로 등대 의 버그이며 사이트 성능에 영향을 미치지 않음

        + Optimizing Fonts
            + 데스크탑용 웹 페이지의 82%가  웹 글꼴을 사용합니다. 사용자 정의 글꼴은 사이트의 브랜딩, 디자인 및 브라우저 간/장치 일관성에 중요합니다. 그러나 웹 글꼴을 사용하면 성능이 저하되어서는 안 됩니다.

            + Next.js에는 자동 웹폰트 최적화 가 내장되어 있습니다. 기본적으로 Next.js는 빌드 시 글꼴 CSS를 자동으로 인라인하여 글꼴 선언을 가져오기 위한 추가 왕복을 제거합니다. 이를 통해 FCP(First Contentful Paint) 및 LCP(Large Contentful Paint)가 개선되었습니다.

            + 최적화하기 전에 추가 네트워크 요청이 필요합니다.
            + ```
                // Before optimizing
                <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />

            + 최적화 후 Next.js는 글꼴 CSS를 인라인합니다.
            + ```
                // After optimizing
                <style data-href="https://fonts.googleapis.com/css2?family=Inter">
                     @font-face{font-family:'Inter';font-style:normal.....
                </style>
        
        + Optimizing Third-Party Scripts
            + 많은 애플리케이션은 분석, 광고 및 고객 지원 위젯과 같은 다양한 유형의 기능을 포함하기 위해 타사 JavaScript에 의존합니다. 그러나 타사 제작 코드를 포함하면 페이지 콘텐츠가 너무 일찍 로드될 경우 렌더링이 지연되고 사용자 성능에 영향을 줄 수 있습니다.

            + Next.js는 모든 타사 스크립트에 대한 로드를 최적화 하는 내장 스크립트 구성 요소 를 제공하는 동시에 개발자에게 언제 가져와 실행할지 결정할 수 있는 옵션을 제공합니다.

            + 스크립트 구성 요소 사용: 일반 HTML을 사용하면 외부 스크립트를 다음에 수동으로 추가해야 합니다 . next/head
            + ```
                import Head from 'next/head'

                function IndexPage() {
                    return (
                        <div>
                            <Head>
                                <script src="https://www.googletagmanager.com/gtag/js?id=123" />
                            </Head>
                        </div>
                    )
                }
            + Next.js 스크립트 구성 요소를 사용하면 next/head다음 을 사용할 필요 없이 구성 요소의 아무 곳에나 추가할 수 있습니다
            + ``` 
                import Script from 'next/script'

                function IndexPage() {
                    return (
                        <div>
                            <Script
                                strategy="afterInteractive"
                                src="https://www.googletagmanager.com/gtag/js?id=123"
                            />
                        </div>
                    )
                }
            + 스크립트 구성 요소는 strategy최적의 로드를 위해 스크립트를 가져와 실행할 시기를 결정할 수 있는 속성을 도입했습니다. LCP(Large Contentful Paint)에 부정적인 영향을 미치지 않으려면 대부분의 타사 스크립트는 페이지의 모든 콘텐츠 로드가 완료된 후, 즉 페이지가 대화형이 된 직후( strategy="afterInteractive") 또는 브라우저 유휴 시간( strategy="lazyOnload") 동안 느리게 로드되도록 연기해야 ​​합니다.
    
    - Monitoring your Core Web Vitals
        + Next.js Analytics [Nex.js 분석](https://nextjs.org/analytics)

        + Custom Reporting
            + ```
                npx create-next-app nextjs-lighthouse --use-npm --example "https://github.com/vercel/next-learn/tree/master/seo"
            + pages/_app.js다음 함수를 열고 내보냅니다.
            + ```
                export function reportWebVitals(metric) {
                   console.log(metric)
                }
            + 그런 다음 애플리케이션을 빌드하고 시작합니다.
            + ```
                npm run build && npm run start
            + Chrome을 열면 DevTools 콘솔 내부에 메트릭이 표시됩니다. 또한 FID 는 페이지와 상호 작용할 때만 트리거됩니다.

        + Data Studio (Chrome User Experience Report) [데이터 스튜디오(Chrome 사용자 경험 보고서)](https://developers.google.com/web/tools/chrome-user-experience-report)

        + Other Tools
            + 다음 도구에서 필드 데이터 수집을 찾을 수 있습니다.
            + PageSpeed Insights : Google의 Page Speed 측정 도구입니다.
            + Chrome 사용자 경험 보고서 : 필드 데이터 오픈 소스 데이터 세트.
            + Search Console : Google 검색, 핵심 성능 보고서.

            실험실 데이터를 찾고 있다면 Google은 다음과 같은 여러 측정 도구도 제공합니다.
            + Lighthouse : 웹페이지 품질을 개선하기 위한 Google의 오픈 소스 자동화 도구입니다.
            + Chrome DevTools : Google Chrome 브라우저에 직접 내장된 웹 개발자 도구 모음입니다.

            + FID는 필드 데이터를 통해서만 측정할 수 있기 때문에 두 도구 모두 FID(First Input Delay) 대신 총 차단 시간(TBT) 을 사용해야 합니다.

            + <b>실적을 추적하기에 가장 좋은 시기는 실제 사용자를 모니터링하여 시간 경과에 따른 추적</b>
    <br>
