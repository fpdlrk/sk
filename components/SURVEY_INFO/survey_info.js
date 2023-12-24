// const SURVEY_SUBJECT = surveyData.SURVEY_SUBJECT;

const surveyInfo = {
  datas: surveyData,
  init: function (idx, itemData) {
    const Html = `<div class="comp_textTyppingArea">
    <h2 class="_tit">${itemData.subject}</h2>
    <div class="_typping">
    ${itemData.content}
    </div>
  </div>`;
    const target = document.querySelector("#viewBody");

    var stringToHTML = function (str) {
      const dom = document.createElement("div");
      dom.classList.add("_moveBox");
      dom.innerHTML = str;
      return dom;
    };

    target.append(stringToHTML(Html));

    // target.innerHTML = "";
    // const outObj = (target.innerHTML = Html);
    // node.appendChild(Html);
    // $("#viewBody .scrollbar-outer").scrollbar();
  },
  addItem: function (addValue) {
    let page = surveyInfo.datas.pages[currentPage];
    let component = page.components;
    let dataLen = component.length;
    component.push(addValue);
    // console.log("@@@@@@@@@@", component, dataLen, component.length);
    const Html = `<div class="comp_textTyppingArea">
    <h2 class="_tit">${component[dataLen].subject}</h2>
    <div class="_typping">
    ${component[dataLen].content}
    </div>
  </div>`;
    const target = document.querySelector("#viewBody");
    var stringToHTML = function (str) {
      const dom = document.createElement("div");
      dom.classList.add("_moveBox");
      dom.innerHTML = str;
      return dom;
    };

    target.append(stringToHTML(Html));

    // target.innerHTML = "";
    // const outObj = (target.innerHTML = Html);
    // node.appendChild(Html);
    // $("#viewBody .scrollbar-outer").scrollbar();
  },
  pannelClose: (e) => {
    let cotegoryView = document.querySelector("#cotegoryView");
    cotegoryView.removeChild(cotegoryView.querySelector(".mdu_pannel"));
    isLeftMenuSelected = null;
  },
  pannelReset: () => {},
  modalAlert: () => {
    return ModalOpen(
      "firstPopup",
      "안내",
      "<span class='f_main'>KJCI3718UID09</span> 는 사용가능 ID입니다.",
      "alert",
      "",
      surveyInfo.okClickFnc,
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
    surveyInfo.datas.text = e.target.value;
    surveyData.SURVEY_SUBJECT = {
      ...surveyData.SURVEY_SUBJECT,
      text: e.target.value,
      isFirstPage: false,
    };
  },
};
