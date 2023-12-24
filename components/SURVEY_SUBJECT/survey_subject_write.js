// const SURVEY_SUBJECT = surveyData.SURVEY_SUBJECT;

const surveySubject = {
  datas: surveyData.SURVEY_SUBJECT,
  init: function (objId) {
    const Html = `<div class="mdu_pannel mdu_pannel_form scroll_area">
      <div class="pannel_header">
        <h2 class="tit">설문제목</h2>
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
      <div class="pannel_body">
        <div class="item_group">
          <div class="item">
            <div class="_comp comp_textarea _wide">
              <span class="_tit">설문제목</span>
              <div class="_body _comp_textareaWrap">
                <textarea
                  class="comm_input"
                  placeholder="내용을 입력하세요."
                  onkeyup='surveySubject.onChange(event)'
                >${surveySubject.datas.text}</textarea>
              </div>
              <p class="_sbt01 ar">80글자 입력 가능합니다</p>
            </div>
          </div>
          <div class="item">
            <div class="_comp _wide">
              <span class="_tit">옵션</span>
              <div class="_body">
                <span class="check_b_wrap">
                  <input type="checkbox" class="chk" name="1" ${
                    surveySubject.datas.isFirstPage ? "checked" : ""
                  } 
                  onchange='surveySubject.isFirstPage(event)'/>
                  <span class="ico"></span>
                  <span>첫페이지만 보이기</span>
                </span>
              </div>
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
    return ModalOpen(
      "firstPopup",
      "안내",
      "<span class='f_main'>KJCI3718UID09</span> 는 사용가능 ID입니다.",
      "alert",
      "",
      surveySubject.okClickFnc,
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
    surveySubject.datas.text = e.target.value;
    surveyData.SURVEY_SUBJECT = {
      ...surveyData.SURVEY_SUBJECT,
      text: e.target.value,
      isFirstPage: false,
    };
    let headerTitle = document.querySelector("._privateTit");
    headerTitle.innerHTML = e.target.value;
  },
  onChange: (e) => {
    surveySubject.datas.text = e.target.value;
    surveyData.SURVEY_SUBJECT = {
      ...surveyData.SURVEY_SUBJECT,
      text: e.target.value,
      isFirstPage: false,
    };
    let headerTitle = document.querySelector("._privateTit");
    headerTitle.innerHTML = e.target.value;
  },
  isFirstPage: (e) => {
    let checked = e.target.checked;
    let targetObj = document.getElementsByClassName("_privateTit");
    if (checked) {
      targetObj[0].classList.add("hidden");
    } else {
      targetObj[0].classList.remove("hidden");
    }
    surveySubject.datas.isFirstPage = checked;
    console.log(e, targetObj, targetObj.value);
  },
};
