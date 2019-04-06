---
path: "/blog/gatsbyjs3.md"
date: "2019-03-14"
title: "Gatsbyjs로 블로그 만들기 3"
---

오늘은 먼저 Gatsbyjs의 디렉토리 구조에 대해 알아보자.
새 개츠비 사이트를 지난 글과 같은 방법으로 만들었다면, 다음과 같은 기본 스타터가 폴더에 들어있다.

    .
    ├── node_modules
    ├── srcZ
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

README.md 폴더에는 마크다운으로 각 파일에 대해 설명이 되어 있다. 편의를 위해 설명을 그대로 번역해서 아래에 둔다.

1. **`/node_modules`**: 이 디렉토리는 자동으로 설치된, 프로젝트가 의존하는 모든 코드 모듈 (npm packages)을 포함한다.

2. **`/src`**: 이 디렉토리는 당신이 사이트의 프론트 엔드에 보여줄 것과 관련된 모든 코드를 포함한다. 예를 들어 사이트 헤더나 페이지 템플릿 등이다. `src`는 "source code"의 약자다.

3. **`.gitignore`**: 이 파일은 git이 버전 히스토리에서 추적하지 않거나 정비하지 않아야 할지 알려준다.

4. **`.prettierrc`**: 이 파일은 [Prettier](https://prettier.io/)의 설정 파일이다. Prettier는 당신이 코드의 일관된 포맷을 지키도록 돕는 도구이다.

5. **`gatsby-browser.js`**: 개츠비가 [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)가 있을 경우 그 사용법을 찾는 곳이다. 브라우저에 영향을 주는 기본 개츠비 설정의 사용자 정의/확장을 가능하게 한다.

6. **`gatsby-config.js`**: 개츠비 사이트의 중심 설정 파일이다. 여기서는 사이트 제목, 설명, 포함하고자 하는 개츠비 플러그인 등 사이트 메타 데이터에 관한 정보를 지정할 수 있다.( [config docs](https://www.gatsbyjs.org/docs/gatsby-config/)에서 추가 설명을 확인할 수 있다.)

7. **`gatsby-node.js`**: 개츠비가 [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)가 있을 경우 사용법을 찾는 곳이다. 사이트 구축 프로세스의 일부에 영향을 주는 기본 개츠비 설정의 사용자 정의/확장이 가능하게 한다.

8. **`gatsby-ssr.js`**: 개츠비가 [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/)가 있을 경우 사용법을 찾는 곳이다. 서버 사이드 렌더링에 영향을 미치는 기본적인 개츠비 설정의 사용자 정의를 가능하게 한다.

9. **`LICENSE`**: 개츠비는 MIT license를 통해 라이센스되었습니다.

10. **`package-lock.json`** (`package.json` 을 먼저 확인하십시오.). 이 파일은 프로젝트에 설치된 npm 의존 관계의 정확한 버전을 기반으로 자동으로 생성되었다. **절대 이 파일을 직접 수정하지 마십시오.**

11. **`package.json`**: Node.js 프로젝트를 위한 manifest 파일입니다. 프로젝트의 이름, 제작자 등과 같은 메타데이터를 포함합니다. 이 manifest는 npm이 어떤 패키지가 프로젝트에 설치되었는지 알려준다.

12. **`README.md`**: 당신의 프로젝트에 유용한 정보를 포함하는 파일이다.

추가적으로 `/public` 폴더에는 만들어진 정적 사이트가 들어있다.

일단 Pretter을 사용하기 위해서는, VS Code에서 다음 플러그인을 설치해야 한다. [Pretter - JavaScript formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 그리고 VSC의 Workspace Settings에 다음 설정을 추가해 저장시 자동 적용을 활성화하자.

```js
{
  "editor.formatOnSave": true,
}
```

index.js에 들어가면 우리의 사이트에 들어가자마자 보이는 페이지의 코드가 들어있다.

//블로그는 완성했지만... 설명할 정도의 실력이 없어서 포기