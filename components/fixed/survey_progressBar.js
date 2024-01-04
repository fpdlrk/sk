// const SURVEY_SUBJECT = surveyData.SURVEY_SUBJECT;

const surveyProgress = {
  datas: surveyData.PROGRESS_BAR,
  init: function (objId) {
    const Html = `<div class="mdu_pannel mdu_pannel_form scroll_area">
    <div class="pannel_header">
      <h2 class="tit">진행율바</h2>
      <div class="util">
        <button class="btn _bdno _ico_ly" onclick='pannelAction(event)' data-type="refresh">
          <i class="ico _pannelRefresh"></i>
          <span class="txt">리셋</span>
        </button>
        <button class="btn _bdno _ico_ly" onclick='pannelAction(event)' data-type="close">
          <i class="ico _pannelClose"></i>
          <span class="txt">닫기</span>
        </button>
      </div>
    </div>
    
    <div class="pannel_body scrollbar-outer">
      <div class="item_group">
        <div class="item">
          <div class="_comp _wide">
            <span class="_tit">진행율바</span>
            <div class="_body">
              <span class="check_b_wrap">
                <input type="checkbox" class="chk" name="1" ${this.datas.isUse ? "checked" : ""} 
                onchange='surveyProgress.isUse(event)'/>
                <span class="ico"></span>
                <span>진행률 바 사용하기</span>
              </span>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="_comp _colorPicker _wide">
            <span class="_tit">배경컬러</span>
            <div class="_body">
              <div class="_inp_color">
                <!-- <input
                  onChange="update(this.jscolor, '#pr3')"
                  onInput="update(this.jscolor, '#pr4')"
                  value="FFFFFF"
                  data-jscolor="{alpha:1}"
                  class="comm_input"
                /> -->
                <input
                  value="FFFFFF"
                  data-jscolor="{alpha:1}"
                  class="comm_input jscolor"
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="off"
                  spellcheck="false"
                  data-current-color="#FFFFFF"
                  style="
                    background-image: linear-gradient(
                        to right,
                        rgb(255, 255, 255) 0%,
                        rgb(255, 255, 255) 30px,
                        rgba(0, 0, 0, 0) 31px,
                        rgba(0, 0, 0, 0) 100%
                      ),
                      url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAQCAYAAAB3AH1ZAAAAAXNSR0IArs4c6QAAAFNJREFUSEtjnDlz5n8GPODs2bP4pBmMjY3xyuPSn5KSwrBt27bljKMOGA2B0RAY8BBIS0vDWw6Qm89hhQMu/U5OTgxLly5dzjjqgNEQGA2BgQ4BAPJuqnG97DVRAAAAAElFTkSuQmCC') !important;
                    background-position: left top, left top !important;
                    background-size: auto, 32px 16px !important;
                    background-repeat: repeat-y, repeat-y !important;
                    background-origin: padding-box, padding-box !important;
                    padding-left: 40px !important;
                  "
                />
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    const target = document.querySelector("#" + objId);
    target.innerHTML = "";
    target.innerHTML = Html;
    // const toggleBtn = target.querySelectorAll("button.item_group_header");
    // const pollAction = target.querySelectorAll("button.item");
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
  // okClickFnc: (e) => {
  //   ModalClose(e.target);
  // },
  // onChange: (e) => {
  //   surveyProgress.datas.text = e.target.value;
  //   surveyData.SURVEY_SUBJECT = {
  //     ...surveyData.SURVEY_SUBJECT,
  //     text: e.target.value,
  //     isFirstPage: false,
  //   };
  //   console.log("surveyData.SURVEY_SUBJECT", surveyData.SURVEY_SUBJECT);
  // },
  isUse: (e) => {
    let checked = e.target.checked;
    let targetObj = document.getElementsByClassName("comp_rangeSliderWrap");
    if (checked) {
      targetObj[0].classList.remove("hidden");
    } else {
      targetObj[0].classList.add("hidden");
    }
    surveyProgress.datas.isUse = { ...surveyProgress.datas.isUse, checked };
  },
};
