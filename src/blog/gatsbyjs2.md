---
path: "/blog/gatsbyjs2.md"
date: "2019-03-13"
title: "Gatsbyjs로 블로그 만들기 2"
tags: ["makeblog"]
---

Gatsby를 설치해 보자.

먼저 npm으로 Gatsby CLI를 설치하자.

```bash
npm i -g gatsby-cli
```

Gatsby cli를 사용해서 사이트를 만든다.

```bash
gatsby new gatsby-site
```

개츠비 디렉토리로 이동해, development server을 실행해 보자.
localhost:8000으로 접속할 수 있다

```bash
cd gatsby-site
gatsby develop
```

이제 사이트에 접속하면 다음과 같은 화면을 보게 된다.

![사진](https://raw.githubusercontent.com/dogun1228/coding-study/master/img/gatsbyjs-2-1.PNG)

이 사이트를 우선 깃헙에 업로드한다. 깃헙에 gatsby-site라는 레포지스토리를 만들었다. 업로드 과정은 다음과 같다.

```bash
git remote add origin https://github.com/dogun1228/gatsby-site.git
git push -u origin master
```

그리고 Netlify에 접속해 이 사이트를 컴파일해서 호스팅하도록 하자
사이트에 접속해서 new site from git을 선택, github에 로그인한다. 그 후 아까 만든 gatsby-site를 고르고, build command에 'gatsby build'를 넣고, publish directory에는 '/public'을 넣고 Deploy site를 클릭하자. Domain settings에서는 도메인을 변경할 수 있다. publish가 완료될 때까지 기다렸다 사이트에 접속해서 결과를 확인하자.

<https://tinker-blog.netlify.com/>에서 사이트를 확인할 수 있다.
내일부터는 본격적으로 코딩을 진행하도록 하자
