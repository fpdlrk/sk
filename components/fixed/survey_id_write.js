const initValue = { text: "sad", type: pollType, selected: 0 };
// const SURVEY_ID = surveyData.SURVEY_ID;
// console.log(SURVEY_ID);
const surveyId = {
  datas: surveyData.SURVEY_ID,
  init: function (objId) {
    const Html = `<div class="mdu_pannel mdu_pannel_form scroll_area">
    <div class="pannel_header">
      <h2 class="tit">설문 ID</h2>
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
          <div class="_comp comp_inputAndButton _wide">
            <span class="_tit">설문 ID 입력</span>
            <div class="_body _inputAndButtonWrap">
              <input type="text" class="comm_input" placeholder="ID를 입력하세요." value="${surveyId.datas.id}" />
              <button class="btn _header">
                <span class="_txt">중복확인</span>
              </button>
            </div>
            <p class="_sbt01 ar">영문, 숫자 조합으로 12글자 입력 가능합니다</p>
          </div>
        </div>

        <div class="item">
          <div class="_comp _wide">
            <span class="_tit">설문 유형</span>
            <div class="_body">
              <div class="_cr_listWrap">
                <div class="_cr_item">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>Poll</span>
                  </span>
                </div>
                <div class="_cr_item">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>Survey</span>
                  </span>
                </div>
                <div class="_cr_item">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>Link banner</span>
                  </span>
                </div>
                <div class="_cr_item">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>AD</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="badgeGroup mgt15">
            <ul>
              <li><span class="_badge _P">P</span> Poll</li>
              <li><span class="_badge _S">S</span> Survey</li>
              <li><span class="_badge _L">L</span> Link banner</li>
              <li><span class="_badge _A">A</span> AD</li>
            </ul>
          </div>
        </div>

        <div class="item">
          <div class="_comp comp_textarea _wide">
            <span class="_tit">설문 태그</span>
            <div class="_body _comp_textareaWrap">
              <textarea class="comm_input" placeholder="설문태그를 입력하세요.">${surveyId.datas.tags}</textarea>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="_comp comp_textarea _wide">
            <span class="_tit">설문제목</span>
            <div class="_body _comp_textareaWrap">
              <textarea class="comm_input" placeholder="설문을 입력하세요.">${surveyId.datas.subject}</textarea>
            </div>
          </div>
        </div>

        <div class="item">
                <div class="_comp _wide">
                  <span class="_tit">이미지</span>
                  <div class="_body">
                    <div class="comp_answerAddWrap">
                      <div class="_answerAddItemOuter">
                        <div class="_answerAddItem _tpMedia">
                          <div class="_inp_wrap _f1">
                            <div class="_image">
                              <img src="${surveyId.datas.imgUrl}" />
                            </div>
                            <div class="_filed">
                              <div class="_filedInp">
                                <input type="text" class="comm_input _tp_txt" placeholder="내용을 입력하세요." value="${surveyId.datas.imgText}">
                              </div>
                              <button class="btn _bdno btn_primary wide">
                                <span class="txt">이미지 삽입</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
