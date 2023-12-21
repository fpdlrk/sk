const TOP_AREA_FUNC_ID = {
  SURVEY_ID: "survey_id", // 설문ID
  SURVEY_SUBJECT: "survey_subject", // 설문제목
  PROGRESS_BAR: "progress_bar", // 진행률바
  BUTTON_SET: "button_set", // 버튼설정
  CHOICE_ONE: "choice_one", // 객관식한개
  CHOICE_MULTI: "choice_multi", // 객관식 복수
  DROPDOWN: "dropdown", // 드롭다운
  RANKING: "ranking", // 순위형
  MEDIA_ONE: "media_one", // 미디어 한개
  MEDIA_MULTI: "media_multi", // 미디어 복수
  MEDIA_RANK: "media_rank", //미디어 순위형
  SCALE: "scale", // 척도형
  STAR: "star", // 별점형
  GRID_ONE: "grid_one", // 격자형 한개
  GRID_MULTI: "grid_multi", // 격자형 복수
  GRID_RANK: "grid_rank", // 격자형 순위형
  ADDRESS: "address", // 주소
  DISCRIPTION_LONG: "discription_long", // 주관식 긴답변
  DISCRIPTION_SHORT: "discription_short", //  주관식 짧은 답변
  DETE_TYPE: "dete_type", // 날짜형
  ADVER_TYPE_BANNER: "adver_type_banner", // 광고형 배너
  NOTICE_TYPE_BANNER: "notice_type_banner", // 공지형 배너
  DIVID: "divid", // 구분선
};

const topAreaMakeTop = (objId) => {
  const Html = `<div class="col_L">
<a href="#" class="logo">Tsurvey</a>
<div class="next_prev">
  <button type="button" class="btn _bdno _ico_ly">
    <i class="ico _hisBack"></i>
    <span class="txt">이전</span>
  </button>
  <button type="button" class="btn _bdno _ico_ly" disabled>
    <i class="ico _hisFw"></i>
    <span class="txt">다음</span>
  </button>
</div>
<div class="btn _bdno">
  <i class="ico _cloud"></i>
  <span class="txt">저장됨</span>
</div>
</div>
<div class="col_C fllow">
<span class="active">설문편집</span>
<span class="active">답변수집</span>
<span>결과확인</span>
<span>답변보상</span>
</div>
<div class="col_R">
<div class="user">
  <span class="ico"></span>
  <span class="txt">사용자명</span>
</div>
<button class="btn _bdno _ico_ly menu">
  <i class="ico _menu"></i>
  <span class="txt">메뉴</span>
</button>
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
