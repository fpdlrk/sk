// 페이지 생성
const pages = {
  datas: surveyData,
  init: function (objId) {
    const data = pages.datas;
    // $("#" + objId + " .scrollbar-outer").scrollbar();
    this.pagesMake(data, objId, (idx = 0));
  },
  pagesMake: function (data, objId) {
    let div = document.querySelector("#" + objId);
    let pagesArr = data.pages[currentPage].components;
    div.addEventListener("click", (e) => pages.actions(e));
    pagesArr.forEach((item) => {
      console.log(item.type);
      surveyInfo.init(currentPage, item);
      switch (item.type) {
        case LEFT_MENU_FUNC_ID.SURVEY_ID:
          // 같은버튼 여러번 클릭시 한번만 호출
          if (!oneImpleProc(id)) return;
          surveyId.init(contents);
          break;

        default:
          console.log("기본로직@@@@");
          break;
      }
    });

    // pagesLen.forEach((element, index) => {
    //   let compos = element.components;
    //   compos.forEach((item, idx) => {
    //     surveyInfo.init(index, item);
    //   });
    // });
  },
  actions: function (e) {
    const contents = "cotegoryView";
    surveyId.init(contents);
    console.log(e, 11);
  },
  modalAlert: () => {
    return ModalOpen(
      "firstPopup",
      "안내",
      "<span class='f_main'>KJCI3718UID09</span> 는 사용가능 ID입니다.",
      "alert",
      "",
      pages.okClickFnc,
      {
        //style: "font-size:60px;",
        class: "ac",
      }
    );
  },
  okClickFnc: (e) => {
    ModalClose(e.target);
  },
  onChange: (e) => {
    pages.datas.text = e.target.value;
    surveyData.SURVEY_ID = {
      ...surveyData.SURVEY_ID,
      text: e.target.value,
    };
  },
};
