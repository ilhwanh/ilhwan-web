export type Project = {
  title: string,
  link?: string,
  git?: string,
  stack: string[],
  description: string[],
}

export const personalProjects: Project[] = [
  {
    title: "스파이 게임",
    link: "http://rwan-spy-game.ml/",
    git: "https://github.com/IlhwanHwang/spy-game",
    stack: ["Typescript", "Nodejs", "Express", "React", "Bootstrap", "GCP"],
    description: [
      "스파이 게임을 즐길 수 있도록 만든 모바일 중심 웹 사이트.",
      "Nodejs와 Express를 이용해 REST API 서버를 만들고 React 웹앱에서 호출하도록 설계."
    ],
  },
  {
    title: "개발자 우정테스트",
    link: "http://rwan.ml/",
    git: "https://github.com/IlhwanHwang/dev-friendship",
    stack: ["Typescript", "Nodejs", "Express", "React", "Bootstrap", "GCP"],
    description: [
      "우정 테스트 제작기에 영감을 얻어 만든 모바일 중심 웹 사이트.",
      "Nodejs와 Express를 이용해 REST API 서버를 만들고 React 웹앱에서 호출하도록 설계."
    ],
  },
  {
    title: "지곡 홍수 시뮬레이터",
    git: "https://github.com/IlhwanHwang/jigok-flood-simulator",
    stack: ["C++", "OpenGL", "GLSL"],
    description: [
      "SPH 방법의 유체시뮬레이터를 쉐이더로 개발한 프로젝트.",
      "매우 많은 상호작용 연산이 필요한 방법을 순수 쉐이더로 구현하여 1M particle을 60fps로 시뮬레이션 함."
    ],
  },
  {
    title: "포카워치",
    git: "https://github.com/IlhwanHwang/pokawatch-server",
    stack: ["C++", "OpenGL"],
    description: [
      "2016년 카이스트-포스텍 학생대제전 AI 종목 공식게임으로 개발한 게임.",
      "소켓 통신을 이용해 한 서버에 두 클라이언트가 붙어서 게임 환경과 결정을 stateless하게 주고 받는 형식으로 제작함."
    ],
  },
]