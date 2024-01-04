let currentPage = 0;
let isLeftMenuSelected = null; // LNB 고정항목 한버만 클릭하기위한 변수 설정창을 닫을 경우 다시 활설화
const pollType = ["poll", "Survey", "Link banner", "AD"];
const LEFT_MENU_FUNC_ID = {
  SURVEY_DEFAULT: { id: "survey_default", type: "" }, // 기본설정
  SURVEY_ID: { id: "survey_id", type: "id" }, // 설문 ID/제목
  SURVEY_BANNER: { id: "survey_banner", type: "" }, // 목록배너
  SURVEY_PROGRESS_BAR: { id: "progress_bar", type: "progress" }, // 진행률바
  SURVEY_SURVEY_INTRO: { id: "servey_info", type: "info" }, // 소개
  SURVEY_CHOICE_ONE: { id: "choice_one", type: "one" }, // 객관식한개
  SURVEY_CHOICE_MULTI: { id: "choice_multi", type: "" }, // 객관식 복수
  SURVEY_DROPDOWN_TYPE: { id: "dropdown", type: "" }, // 드롭다운
  SURVEY_RANKING_TYPE: { id: "ranking", type: "" }, // 순위형
  SURVEY_MEDIA_ONE: { id: "media_one", type: "" }, // 미디어 한개
  SURVEY_MEDIA_MULTI: { id: "media_multi", type: "" }, // 미디어 복수
  SURVEY_MEDIA_RANK: { id: "media_rank", type: "" }, //미디어 순위형
  SURVEY_SCALE_TYPE: { di: "scale", type: "" }, // 척도형
  SURVEY_STAR_TYPE: { id: "star", type: "" }, // 별점형
  SURVEY_GRID_ONE: { id: "grid_one", type: "" }, // 격자형 한개
  SURVEY_GRID_MULTI: { id: "grid_multi", type: "" }, // 격자형 복수
  SURVEY_GRID_RANK: { id: "grid_rank", type: "" }, // 격자형 순위형
  SURVEY_ADDRESS_TYPE: { id: "address", type: "" }, // 주소
  SURVEY_DISCRIPTION_LONG: { id: "discription_long", type: "" }, // 주관식 긴답변
  SURVEY_DISCRIPTION_SHORT: { id: "discription_short", type: "" }, //  주관식 짧은 답변
  SURVEY_EMAIL_PHONE: { id: "discription_short", type: "" }, //  주관식 짧은 답변
  SURVEY_DATE: { id: "dete_type", type: "" }, // 날짜형
  SURVEY_ADVER_BANNER: { id: "adver_type_banner", type: "" }, // 광고형 배너
  SURVEY_PANEL: { id: "panel_set", type: "" }, // 공지형 배너
  SURVEY_DIVID: { id: "divid", type: "" }, // 구분선
};

const surveyData = {
  style: 2,
  logic: [],
  history: ["2023. 12. 16   11: 10: 10", "2023. 12. 16   12: 12: 30", "2023. 12. 16   12: 22: 40", "2023. 12. 16   12: 30: 25 "],
  SURVEY_ID: {
    id: "1111홍길동입니다.",
    type: pollType,
    selected: 2,
    subject: "돈버는설문!!!",
    tags: "돈버는설문!!!",
    imgUrl: "",
    imgText: "이미지설명",
    isFirstPage: true,
  },
  SURVEY_SUBJECT: {},
  PROGRESS_BAR: { isUse: true },
  currentPage: 0,
  pages: [
    {
      components: [
        {
          type: "info",
          subject: "1_페이지 첫번째 돈버는설문 안내제목!!!",
          content: "1_페이지 첫번째 돈버는설문 콘텐츠!!!",
        },
        {
          type: "one",
          subject: "1_페이지 두번째 돈버는설문 안내제목!!!",
          content: "1_페이지 두번째 돈버는설문 콘텐츠!!!",
        },
      ],
    },
    {
      components: [
        {
          type: "image",
          subject: "페이지2변의 돈버는설문 안내제목!!!",
          content: "페이지2변의 콘텐츠!!!",
        },
      ],
    },
  ],
};

// let jsonpTojson = JSON.parse(JSON.stringify(surveyData));

// let copyData = { surveyData };

// jsonpTojson.pages[0].components[0].subject = "656556";

// console.log(surveyData == jsonpTojson);
// console.log(surveyData);
// console.log(jsonpTojson);

// async function settings() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("완료!"), 3000);
//   });
//   let result = await promise;
//   console.log(result);

//   topAreaMakeTop("topArea");
//   utilAreaMakeTop("utilArea");
//   CreateLeftMenu("lnbWrap");
// }
// settings();
