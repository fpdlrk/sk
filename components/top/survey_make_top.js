const TOP_AREA_FUNC_ID = {
  AC_PREV: "btn_prev",
  AC_NEXT: "btn_next",
  IS_SAVE: false,
  USER: "btn_user",
  MENU: "btn_menu",
};

const topAreaMakeTop = (objId) => {
  const Html = `<div class="col_L">
<a href="#" class="logo">Tsurvey</a>
<div class="next_prev">
  <button type="button" class="btn _bdno _ico_ly" id='btn_prev' data-tooltip="이전으로">
    <i class="ico _hisBack"></i>
    <span class="txt">이전</span>
  </button>
  <button type="button" class="btn _bdno _ico_ly" id='btn_next' data-tooltip="다음으로" disabled>
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
<button class="btn _bdno _ico_ly menu" id='btn_menu' data-tooltip="메뉴">
  <i class="ico _menu"></i>
  <span class="txt">메뉴</span>
</button>
</div>`;
  const target = document.querySelector("#" + objId);
  target.innerHTML = "";
  const outObj = (target.innerHTML = Html);
  const btns = target.querySelectorAll("button.btn");
  btns.forEach((item) => {
    item.addEventListener("click", (e) => makeTopHandleActionEvent(e));
    item.addEventListener("mouseenter", (e) => tooltip(e));
    item.addEventListener("mouseleave", (e) => tooltip(e));
  });
};

// 고정 - 삽입 항목의 메뉴 이벤트 등록
function makeTopHandleActionEvent(e) {
  e.preventDefault();
  let id = "";
  if (e.target.parentNode.nodeName == "BUTTON") {
    id = e.target.parentNode.id;
  } else {
    id = e.target.id;
  }

  // 고정 - 삽입 항목의 메뉴를 클릭했을 시 분기
  // 버튼의 아이디 값으로 분기를 나눕니다.
  // 해당 case에 로직구현

  switch (id) {
    case TOP_AREA_FUNC_ID.AC_PREV:
      console.log("-->", id);
      break;

    case TOP_AREA_FUNC_ID.AC_NEXT:
      console.log(id);
      break;

    case TOP_AREA_FUNC_ID.MENU:
      console.log(id);
      break;

    default:
      console.log("기본로직@@@@");
      break;
  }
}

function tophandleMenu(e) {
  e.preventDefault();

  if (e.target.nodeName == "SPAN") {
    target = e.target.parentNode;
  } else {
    target = e.target;
  }
  [target][0].classList.toggle("active");
}
