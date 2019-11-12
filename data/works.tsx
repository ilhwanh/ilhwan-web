export type Job = {
  subject: string,
  stack: string[],
  contents: JSX.Element,
}

export type Work = {
  title: string,
  period: [Date, Date?],
  position?: string,
  jobs: Job[]
}

export const worksExperiences: Work[] = [
  {
    title: "Bagelcode",
    period: [new Date("2018/08/01"), undefined],
    position: "Data Engineer",
    jobs: [
      {
        subject: "코드 기반의 데이터 인프라 유지보수",
        stack: ["Python", "Serverless", "Terraform", "AWS", "Kubernetes"],
        contents: <span>
          Terraform과 Serverless로 이루어진 코드 기반 인프라를 유지보수 하는 업무를
          수행했습니다.
        </span>
      },
      {
        subject: "머신러닝 기반 유저 이탈 예측 모델 개발 및 배포",
        stack: ["Python", "Keras", "XGBoost"],
        contents: <span>
          Keras, Tensorflow, XGBoost를 이용하여 유저가 언제 게임에서 이탈할지 
          예측하는 모델을 만들고 이를 Databricks와 Airflow를 이용해 배포하였습니다.
          매일 feature를 생성하고 이미 학습된 모델을 이용해 inference 하여 admin 
          tool에 예측 값을 저장해서 기획팀이 사용할 수 있도록 자동화했습니다. 가설 
          설정, 데이터 전처리, 모델링 등 전 과정을 주도하고 Confluence에 모든 과정을 
          실험 노트로 남겼습니다.
        </span>
      },
      {
        subject: "대용량 데이터 ETL 작업, 시각화 등 데이터 엔지니어링 업무 수행",
        stack: ["Python", "Scala", "Spark", "Tableau"],
        contents: <span>
          200 billon rows 가량 되는 데이터를 Databricks Spark와 Airflow를 이용해 
          ETL을 하고 hourly로 Tableau Desktop 에서 볼 수 있도록 후가공 하는 업무를
          수행했습니다.
        </span>
      },
      {
        subject: "데이터 검증 시스템 도입",
        stack: ["Python", "Spark"],
        contents: <span>
          PySpark 기반으로 데이터를 자동으로 QA할 수 있는 프레임워크 개발 및
          도입했습니다. 데이터의 uniqueness, count, nullity 등을 자동으로 검사하고
          Slack으로 integrity에 대해 알림을 받을 수 있도록 설계했습니다.
          Databricks를 이용해 ETL 하는 과정에서 dependency를 명확하게 하고
          유지보수를 쉽게할 목적으로 Markdown 포맷의 표준 코멘트를 도입했습니다.
        </span>
      }

    ]
  },
  {
    title: "VoyagerX",
    period: [new Date("2018/02/01"), new Date("2018/08/01")],
    jobs: [
      {
        subject: "딥러닝 모델 모바일 최적화 담당",
        stack: ["Python", "Keras", "Tensorflow"],
        contents: <span>
          Dr. Blur 개발 당시 Keras, Tensorflow를 기반으로 Pruning, distillation
          등을 이용하여 모델을 고속화 및 압축하였습니다. 모델 패러미터 수는 30%
          수준으로 줄이고 품질 degradation은 5% 이내로 유지하는 결과를 얻었습니다.
        </span>
      },
      {
        subject: "모바일 스캐너 vFlat 인공 데이터셋 생성",
        stack: ["Python", "Blender"],
        contents: <span>
          Blender 외부 python 스크립팅 기능을 이용해 자동으로 다각도에서 다양한
          환경의 책 이미지를 자동으로 생성했습니다. 기존에 실사 촬영 후 손으로
          라벨링하여 모으던 데이터를 대체했습니다.
        </span>
      },
    ]
  },
  {
    title: "PUZZLE DATA",
    period: [new Date("2017/09/01"), new Date("2018/01/01")],
    jobs: [
      {
        subject: "PUZZLE DATA 홈페이지 개발",
        stack: ["Python", "Django", "Bootstrap"],
        contents: <span>
          Django를 이용하여 서버 백엔드 부터 웹 페이지 프론트엔드까지 직접
          개발했습니다.
        </span>
      },
      {
        subject: "프로세스마이닝 전문 툴 ProDiscovery 2.0 개발 참여",
        stack: ["Java", "Scala", "Spark"],
        contents: <span>
          On-premise Java Spark 환경에서 프로세스마이닝 알고리즘 논문을
          구현했습니다.
        </span>
      },
    ]
  },
  {
    title: "Geekble",
    period: [new Date("2017/01/01"), new Date("2017/08/01")],
    position: "Director",
    jobs: [
      {
        subject: "웹 서버, 메일 서버 및 소프트웨어 관리",
        stack: ["Linux", "Wordpress", "Bootstrap"],
        contents: <span></span>
      },
      {
        subject: "영상 기획, 촬영, 편집 및 임베디드 시스템 작품 제작 참여",
        stack: ["Embedded", "After Effect"],
        contents: <span>
          Dragonboard, Raspberry Pi와 같은 임베디드 시스템과 시리얼 통신, 서보 모터
          드라이브 등의 부속 시스템을 결합하여 작품을 제작했습니다.
        </span>
      },
    ]
  },
  {
    title: "Nano Studio",
    period: [new Date("2015/07/01"), new Date("2017/02/01")],
    position: "Chief Developer",
    jobs: [
      {
        subject: "팀 내 유일 개발자로 시스템 설계부터 콘텐츠 개발까지 전체 개발 주도",
        stack: ["GM:S", "Steam"],
        contents: <span>
          Gamemaker: Studio를 이용해 게임 전체를 개발했습니다. Nano Script 라는
          자체 언어를 설계하여 비개발자도 개발에 참여할 수 있도록 했습니다. Steam
          전용으로 게임을 빌드하고 출시하는 과정을 담당했습니다.
        </span>
      },
    ]
  }
]