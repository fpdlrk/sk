const initValue = { text: "sad", type: pollType, selected: 0 };
const SURVEY_ID = surveyData.SURVEY_ID;
// console.log(SURVEY_ID);
const surveyId = {
  datas: surveyData.SURVEY_ID,
  init: function (objId) {
    const Html = `<div class="mdu_pannel mdu_pannel_form scroll_area">
  <div class="pannel_header">
    <h2 class="tit">설문 ID</h2>
    <div class="util">
        <button class="btn _bdno _ico_ly" onclick='surveyProgress.pannelReset(event)'>
          <i class="ico _pannelRefresh"></i>
          <span class="txt">리셋</span>
        </button>
        <button class="btn _bdno _ico_ly" onclick='surveyProgress.pannelClose(event)'>
          <i class="ico _pannelClose"></i>
          <span class="txt">닫기</span>
        </button>
      </div>
  </div>
  <div class="pannel_body scrollbar-outer">
    <div class="item_group">
      <div class="item">
        <div class="_comp comp_inputAndButton _wide">
          <span class="_tit">설문 ID 입력</span>
          <div class="_body _inputAndButtonWrap">
            <input
              type="text"
              class="comm_input"
              placeholder="ID를 입력하세요."
              value='${surveyId.datas.text}'
              onchange='surveyId.onChange(event)'
              onkeyup='surveyId.onChange(event)'
            />
            <button class="btn _header" onclick="surveyId.modalAlert()">
              <span class="_txt">중복확인</span>
            </button>
          </div>
          <p class="_sbt01 ar">
            영문, 숫자 조합으로 12글자 입력 가능합니다
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`;

    const target = document.querySelector("#" + objId);
    target.innerHTML = "";
    const outObj = (target.innerHTML = Html);
    // $("#" + objId + " .scrollbar-outer").scrollbar();
  },
  pannelClose: (e) => {
    let cotegoryView = document.querySelector("#cotegoryView");
    cotegoryView.removeChild(cotegoryView.querySelector(".mdu_pannel"));
    isLeftMenuSelected = null;
  },
  pannelReset: () => {},
  modalAlert: () => {
    return ModalOpen("firstPopup", "안내", "<span class='f_main'>KJCI3718UID09</span> 는 사용가능 ID입니다.", "alert", "", surveySubject.okClickFnc, {
      //style: "font-size:60px;",
      class: "ac",
    });
  },
  okClickFnc: (e) => {
    ModalClose(e.target);
  },
  onChange: (e) => {
    surveyId.datas.text = e.target.value;
    surveyData.SURVEY_ID = {
      ...surveyData.SURVEY_ID,
      text: e.target.value,
    };
    let headerTitle = document.querySelector(".view_round_header");
    let titleH2 = headerTitle.querySelector(".tit");
    titleH2.innerHTML = e.target.value;
  },
};
