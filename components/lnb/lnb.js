const LEFT_MENU_FUNC_ID = {
  SURVEY_ID: "survey_id", // 설문ID
  SURVEY_SUBJECT: "survey_subject", // 설문제목
  PROGRESS_BAR: "progress_bar", // 진행률바
  BUTTON_SET: "button_set", // 버튼설정
  CHOICE_ONE: "choice_one", // 객관식한개
  CHOICE_MULTI: "choice_multi", // 객관식 복수
  DROPDOWN_TYPE: "dropdown", // 드롭다운
  RANKING_TYPE: "ranking", // 순위형
  MEDIA_ONE: "media_one", // 미디어 한개
  MEDIA_MULTI: "media_multi", // 미디어 복수
  MEDIA_RANK: "media_rank", //미디어 순위형
  SCALE_TYPE: "scale", // 척도형
  STAR_TYPE: "star", // 별점형
  GRID_ONE: "grid_one", // 격자형 한개
  GRID_MULTI: "grid_multi", // 격자형 복수
  GRID_RANK: "grid_rank", // 격자형 순위형
  ADDRESS_TYPE: "address", // 주소
  DISCRIPTION_LONG: "discription_long", // 주관식 긴답변
  DISCRIPTION_SHORT: "discription_short", //  주관식 짧은 답변
  DETE_TYPE: "dete_type", // 날짜형
  ADVER_TYPE_BANNER: "adver_type_banner", // 광고형 배너
  NOTICE_TYPE_BANNER: "notice_type_banner", // 공지형 배너
  DIVID_TYPE: "divid", // 구분선
};

const CreateLeftMenu = (objId) => {
  const Html = `<div class="lnb_header">
  <span class="txt">메뉴</span>
  <button class="btn _bdno _ico_ly _auto_h">
    <i class="ico _menuol"></i>
    <span class="txt">메뉴설정</span>
  </button>
</div>
<div class="lnb_body scrollbar-outer">
  <div class="lnb_item_group">
    <button class="item_group_header" data-role='toggle'>
      <span class="txt">고정항목</span>
    </button>
    <ul>
      <li>
        <button class="item _pollId" id="survey_id">
          <span class="txt">설문 ID</span>
        </button>
      </li>
      <li>
        <button class="item _pollSubject" id="survey_subject">
          <span class="txt">설문제목</span>
        </button>
      </li>
      <li>
        <button class="item _progress" id="progress_bar">
          <span class="txt">진행률 바</span>
        </button>
      </li>
      <li>
        <button class="item _btnSet" id="button_set">
          <span class="txt">버튼설정</span>
        </button>
      </li>
    </ul>
  </div>

  <div class="lnb_item_group">
    <button class="item_group_header" data-role='toggle'>
      <span class="txt">삽입항목</span>
    </button>
    <ul>
      <li>
        <button class="item _justOne" id="choice_one">
          <span class="txt">객관식 한 개</span>
        </button>
      </li>
      <li>
        <button class="item _multipleChoice" id="choice_multi">
          <span class="txt">객관식 복수</span>
        </button>
      </li>
      <li>
        <button class="item _dorpDown" id="dropdown_type">
          <span class="txt">드롭다운</span>
        </button>
      </li>
      <li>
        <button class="item _rankForm" id="ranking_type">
          <span class="txt">순위형</span>
        </button>
      </li>
      <li>
        <button class="item _mediaOne" id="media_one">
          <span class="txt">미디어 한 개</span>
        </button>
      </li>
      <li>
        <button class="item _mediaMulti" id="media_multi">
          <span class="txt">미디어 복수 개</span>
        </button>
      </li>
      <li>
        <button class="item _mediaRank" id="media_rank">
          <span class="txt">미디어 순위형</span>
        </button>
      </li>
      <li>
        <button class="item _rangeForm" id="scale_type">
          <span class="txt">척도형</span>
        </button>
      </li>
      <li>
        <button class="item _starForm" id="star_type">
          <span class="txt">별점형</span>
        </button>
      </li>
      <li>
        <button class="item _gridOne" id="grid_one">
          <span class="txt">격자형 한 개</span>
        </button>
      </li>
      <li>
        <button class="item _gridMulti" id="grid_multi">
          <span class="txt">격자형 복수</span>
        </button>
      </li>
      <li>
        <button class="item _gridRank" id="grid_rank">
          <span class="txt">격자형 순위형</span>
        </button>
      </li>
      <li>
        <button class="item _address" id="address_type">
          <span class="txt">주소</span>
        </button>
      </li>
      <li>
        <button class="item _answerLong" id="discription_long">
          <span class="txt">주관식 긴답변</span>
        </button>
      </li>
      <li>
        <button class="item _answerShort" id="discription_short">
          <span class="txt">주관식 짧은 답변</span>
        </button>
      </li>
      <li>
        <button class="item _dateForm" id="dete_type">
          <span class="txt">날짜형</span>
        </button>
      </li>
      <li>
        <button class="item _adverForm" id="adver_type_banner">
          <span class="txt">광고형 배너</span>
        </button>
      </li>
      <li>
        <button class="item _notiForm" id="notice_type_banner">
          <span class="txt">공지형 배너</span>
        </button>
      </li>
      <li>
        <button class="item _lineForm" id="divid_type">
          <span class="txt">구분선</span>
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
  $("#" + objId + " .scrollbar-outer").scrollbar();
  toggleBtn.forEach((item) =>
    item.addEventListener("click", handleToggleEvent)
  );
  pollAction.forEach((item) =>
    item.addEventListener("click", handleActionEvent)
  );
};

// 고정 - 삽입 항목의 메뉴 이벤트 등록
function handleActionEvent(e) {
  e.preventDefault();
  let id = "";
  // console.log(e, e.target.parentNode.nodeName == "BUTTON");
  if (e.target.parentNode.nodeName == "BUTTON") {
    id = e.target.parentNode.id;
  } else {
    id = e.target.id;
  }

  // 고정 - 삽입 항목의 메뉴를 클릭했을 시 분기
  // 버튼의 아이디 값으로 분기를 나눕니다.
  // 해당 case에 로직구현

  switch (id) {
    case LEFT_MENU_FUNC_ID.SURVEY_ID:
      console.log(id);
      break;

    case LEFT_MENU_FUNC_ID.SURVEY_SUBJECT:
      console.log(id);
      break;

    default:
      console.log("sldjfskldf");
      break;
  }
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
