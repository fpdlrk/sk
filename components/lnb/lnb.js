// const data = [
//   {name : '', level : 1, }
// ];

const CreateLeftMenu = (objId) => {
  const Html = `<div class="lnb_header">
  <span class="txt">메뉴</span>
  <button class="btn _bdno _ico_ly _auto_h" data-tooltip="메뉴설정">
    <i class="ico _menuol"></i>
    <span class="txt">메뉴설정</span>
  </button>
</div>
<div class="lnb_body scrollbar-outer">
  <div class="lnb_item_group">
    <button class="item_group_header" data-role="toggle">
      <span class="txt">고정항목</span>
    </button>
    <ul>
      <li>
        <button class="item _setting" id="survey_default" data-tooltip="기본설정">
          <span class="txt">기본설정</span>
        </button>
      </li>
      
      <li>
        <button class="item _pollId" id="survey_id" data-tooltip="설문 ID/제목">
          <span class="txt">설문 ID/제목</span>
        </button>
      </li>
      <li>
        <button class="item _pollSubject" id="survey_banner" data-tooltip="목록배너">
          <span class="txt">목록배너</span>
        </button>
      </li>
      <li>
        <button class="item _progress" id="progress_bar" data-tooltip="진행률 바">
          <span class="txt">진행률 바</span>
        </button>
      </li>
      <!-- <li>
        <button
          class="item _btnSet"
          id="button_set"
          data-tooltip="버튼설정"
        >
          <span class="txt">버튼설정</span>
        </button>
      </li> -->
    </ul>
  </div>

  <div class="lnb_item_group">
    <button class="item_group_header" data-role="toggle">
      <span class="txt">삽입항목</span>
    </button>
    <ul>
      <li>
        <button class="item _serveyIntro" id="servey_intro2" data-tooltip="소개글">
          <span class="txt">소개글</span>
        </button>
      </li>
      <li>
        <button class="item _justOne" id="choice_one" data-tooltip="객관식 한 개">
          <span class="txt">객관식 한 개</span>
        </button>
      </li>
      <li>
        <button class="item _multipleChoice" id="choice_multi" data-tooltip="객관식 복수">
          <span class="txt">객관식 복수</span>
        </button>
      </li>
      <li>
        <button class="item _dorpDown" id="dropdown_type" data-tooltip="드롭다운">
          <span class="txt">드롭다운</span>
        </button>
      </li>
      <li>
        <button class="item _rankForm" id="ranking_type" data-tooltip="순위형">
          <span class="txt">순위형</span>
        </button>
      </li>
      <li>
        <button class="item _mediaOne" id="media_one" data-tooltip="미디어 한 개">
          <span class="txt">미디어 한 개</span>
        </button>
      </li>
      <li>
        <button class="item _mediaMulti" id="media_multi" data-tooltip="미디어 복수 개">
          <span class="txt">미디어 복수 개</span>
        </button>
      </li>
      <li>
        <button class="item _mediaRank" id="media_rank" data-tooltip="미디어 순위형">
          <span class="txt">미디어 순위형</span>
        </button>
      </li>
      <li>
        <button class="item _rangeForm" id="scale_type" data-tooltip="척도형">
          <span class="txt">척도형</span>
        </button>
      </li>
      <li>
        <button class="item _starForm" id="star_type" data-tooltip="별점형">
          <span class="txt">별점형</span>
        </button>
      </li>
      <li>
        <button class="item _gridOne" id="grid_one" data-tooltip="격자형 한 개">
          <span class="txt">격자형 한 개</span>
        </button>
      </li>
      <li>
        <button class="item _gridMulti" id="grid_multi" data-tooltip="격자형 복수">
          <span class="txt">격자형 복수</span>
        </button>
      </li>
      <li>
        <button class="item _gridRank" id="grid_rank" data-tooltip="격자형 순위형">
          <span class="txt">격자형 순위형</span>
        </button>
      </li>
      <li>
        <button class="item _address" id="address_type" data-tooltip="주소">
          <span class="txt">주소</span>
        </button>
      </li>
      <li>
        <button class="item _answerLong" id="discription_long" data-tooltip="주관식 긴답변">
          <span class="txt">주관식 긴답변</span>
        </button>
      </li>
      <li>
        <button class="item _answerShort" id="discription_short" data-tooltip="주관식 짧은 답변">
          <span class="txt">주관식 짧은 답변</span>
        </button>
      </li>
      <li>
        <button class="item _dateForm" id="dete_type" data-tooltip="날짜형">
          <span class="txt">날짜형</span>
        </button>
      </li>
      <li>
        <button class="item _adverForm" id="adver_type_banner" data-tooltip="광고형 배너">
          <span class="txt">광고형 배너</span>
        </button>
      </li>
      <li>
        <button class="item _notiForm" id="panel_set" data-tooltip="패널설정">
          <span class="txt">패널설정</span>
        </button>
      </li>
      <li>
        <button class="item _lineForm" id="divid_type" data-tooltip="구분선">
          <span class="txt">구분선</span>
        </button>
      </li>
      <li>
        <button class="item _serveyEnd" id="divid_type" data-tooltip="맺음말">
          <span class="txt">맺음말</span>
        </button>
      </li>
    </ul>
  </div>
</div>`;
  const target = document.querySelector("#" + objId);
  target.innerHTML = "";
  const outObj = (target.innerHTML = Html);
  const toggleBtn = target.querySelectorAll("button.item_group_header");
  const pollAction = target.querySelectorAll("button.item");

  toggleBtn.forEach((item) => {
    item.addEventListener("click", (e) => handleToggleEvent(e));
    // item.addEventListener("mouseenter", (e) => tooltip(e));
    // item.addEventListener("mouseleave", (e) => tooltip(e));
  });
  pollAction.forEach((item) => {
    item.addEventListener("click", (e) => handleActionEvent(e));
    item.addEventListener("mouseenter", (e) => tooltip(e));
    item.addEventListener("mouseleave", (e) => tooltip(e));
  });
  $("#" + objId + " .scrollbar-outer").scrollbar();
  // $("#contentArea.scrollbar-outer").scrollbar();
};

// 고정 - 삽입 항목의 메뉴 이벤트 등록
function handleActionEvent(e) {
  e.preventDefault();
  let id = "";
  let nameId = "id";
  const contents = "cotegoryView";
  if (e.target.parentNode.nodeName == "BUTTON") {
    id = e.target.parentNode.id;
  } else {
    id = e.target.id;
  }

  // $("#contentArea.scrollbar-outer").scrollbar();

  // 고정 - 삽입 항목의 메뉴를 클릭했을 시 분기
  // 버튼의 아이디 값으로 분기를 나눕니다.
  // 해당 case에 로직구현

  switch (id) {
    // 기본설정
    case LEFT_MENU_FUNC_ID.SURVEY_DEFAULT[nameId]:
      //if (!oneImpleProc(id)) return; // 같은버튼 여러번 클릭시 한번만 호출
      surveyDefault.init(contents);
      break;

    // 설문 ID/제목
    case LEFT_MENU_FUNC_ID.SURVEY_ID[nameId]:
      //if (!oneImpleProc(id)) return; // 같은버튼 여러번 클릭시 한번만 호출
      surveyId.init(contents);
      break;

    case LEFT_MENU_FUNC_ID.SURVEY_PROGRESS_BAR[nameId]:
      //if (!oneImpleProc(id)) return; // 같은버튼 여러번 클릭시 한번만 호출
      surveyProgress.init(contents);
      break;

    case LEFT_MENU_FUNC_ID.SURVEY_SURVEY_INTRO[nameId]:
      const itemValue = {
        type: "info222222",
        subject: "1_안내제목!!!",
        content: "1버는설문 콘텐츠!!!",
      };
      // surveyInfo.init(itemValue);
      surveyInfo.addItem(itemValue);
      break;

    default:
      console.log("기본로직@@@@");
      break;
  }
  // pannelClose();
}

function handleToggleEvent(e) {
  e.preventDefault();

  if (e.target.nodeName == "SPAN") {
    target = e.target.parentNode;
  } else {
    target = e.target;
  }
  [target][0].classList.toggle("active");
}

/**
 *
 * @param {String} ids
 * @returns true / false
 * 같은버튼을 여러번 클릭시 한번만 호출
 */
function oneImpleProc(ids) {
  let element = document.querySelector("#cotegoryView");
  if (isLeftMenuSelected != ids) {
    if (element.childNodes.length != 0) {
      element.removeChild(element.childNodes[0]);
    }
    isLeftMenuSelected = ids;
    return true;
  }
  return false;
}
