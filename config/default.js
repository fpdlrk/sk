let currentPage = 0;
let isLeftMenuSelected = null; // LNB 고정항목 한버만 클릭하기위한 변수 설정창을 닫을 경우 다시 활설화
const pollType = ["poll", "Survey", "Link banner", "AD"];
const LEFT_MENU_FUNC_ID = {
  SURVEY_ID: { id: "survey_id", type: "id" }, // 설문ID
  SURVEY_SUBJECT: { id: "survey_subject", type: "subject" }, // 설문제목
  PROGRESS_BAR: { id: "progress_bar", type: "progress" }, // 진행률바
  BUTTON_SET: { id: "button_set", type: "" }, // 버튼설정
  SURVEY_INFO: { id: "servey_info", type: "info" }, // 정보
  CHOICE_ONE: { id: "choice_one", type: "one" }, // 객관식한개
  CHOICE_MULTI: { id: "choice_multi", type: "" }, // 객관식 복수
  DROPDOWN_TYPE: { id: "dropdown", type: "" }, // 드롭다운
  RANKING_TYPE: { id: "ranking", type: "" }, // 순위형
  MEDIA_ONE: { id: "media_one", type: "" }, // 미디어 한개
  MEDIA_MULTI: { id: "media_multi", type: "" }, // 미디어 복수
  MEDIA_RANK: { id: "media_rank", type: "" }, //미디어 순위형
  SCALE_TYPE: { di: "scale", type: "" }, // 척도형
  STAR_TYPE: { id: "star", type: "" }, // 별점형
  GRID_ONE: { id: "grid_one", type: "" }, // 격자형 한개
  GRID_MULTI: { id: "grid_multi", type: "" }, // 격자형 복수
  GRID_RANK: { id: "grid_rank", type: "" }, // 격자형 순위형
  ADDRESS_TYPE: { id: "address", type: "" }, // 주소
  DISCRIPTION_LONG: { id: "discription_long", type: "" }, // 주관식 긴답변
  DISCRIPTION_SHORT: { id: "discription_short", type: "" }, //  주관식 짧은 답변
  DETE_TYPE: { id: "dete_type", type: "" }, // 날짜형
  ADVER_TYPE_BANNER: { id: "adver_type_banner", type: "" }, // 광고형 배너
  NOTICE_TYPE_BANNER: { id: "notice_type_banner", type: "" }, // 공지형 배너
  DIVID_TYPE: { id: "divid", type: "" }, // 구분선
};

const surveyData = {
  style: 2,
  logic: [],
  history: ["2023. 12. 16   11: 10: 10", "2023. 12. 16   12: 12: 30", "2023. 12. 16   12: 22: 40", "2023. 12. 16   12: 30: 25 "],
  SURVEY_ID: { text: "1111홍길동입니다.", type: pollType, selected: 2 },
  SURVEY_SUBJECT: { text: "돈버는설문!!!", isFirstPage: true },
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
