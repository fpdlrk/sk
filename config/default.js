const currentPage = 0;
let isLeftMenuSelected = null; // LNB 고정항목 한버만 클릭하기위한 변수 설정창을 닫을 경우 다시 활설화
const pollType = ["poll", "Survey", "Link banner", "AD"];

const surveyData = {
  style: 2,
  logic: [],
  history: [
    "2023. 12. 16   11: 10: 10",
    "2023. 12. 16   12: 12: 30",
    "2023. 12. 16   12: 22: 40",
    "2023. 12. 16   12: 30: 25 ",
  ],
  SURVEY_ID: { text: "홍길동입니다.", type: pollType, selected: 2 },
  SURVEY_SUBJECT: { text: "돈버는설문!!!", isFirstPage: true },
  PROGRESS_BAR: { isUse: true },
  pages: [
    {
      components: [
        {
          type: "info",
          subject: "1_페이지 첫번째 돈버는설문 안내제목!!!",
          content: "1_페이지 첫번째 돈버는설문 콘텐츠!!!",
        },
        {
          type: "text",
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
