const UTIL_AREA_FUNC_ID = {};

const utilAreaMakeTop = (objId) => {
  const Html = `<div class="col_L">
<div class="group">
  <button class="btn _bdno _auto _pgCreate" id="pageCreate">
    <i class="ico _pageCreate"></i>
    <span class="txt">만들기</span>
  </button>
</div>

<div class="group">
  <button class="btn _bdno _ico_ly">
    <i class="ico _style"></i>
    <span class="txt">스타일</span>
  </button>

  <button class="btn _bdno _ico_ly">
    <i class="ico _valid"></i>
    <span class="txt">변수</span>
  </button>

  <button class="btn _bdno _ico_ly">
    <i class="ico _logic"></i>
    <span class="txt">로직</span>
  </button>

  <button class="btn _bdno _ico_ly">
    <i class="ico _his"></i>
    <span class="txt">이력</span>
  </button>

  <button class="btn _bdno _ico_ly">
    <i class="ico _setting"></i>
    <span class="txt">설정</span>
  </button>
</div>

<div class="group">
  <button class="btn _bdno _ico_ly">
    <i class="ico _pageAdd"></i>
    <span class="txt">페이지 추가</span>
  </button>

  <button class="btn _bdno _ico_ly">
    <i class="ico _pageCopy"></i>
    <span class="txt">페이지 복사</span>
  </button>

  <button class="btn _bdno _ico_ly">
    <i class="ico _pageDel"></i>
    <span class="txt">페이지 삭제</span>
  </button>
</div>

<div class="group pages_wrap">
  <button class="btn _bdno tp_txt _auto">
    <span class="txt">소개글</span>
  </button>

  <button class="btn _bdno _ico_ly _pgFirst">
    <i class="ico _pageFirst"></i>
    <span class="txt">처음으로</span>
  </button>

  <button class="btn _bdno _ico_ly _pgPrev">
    <i class="ico _pagePrev"></i>
    <span class="txt">이전페이지</span>
  </button>

  <div class="pages">
    <button class="btn _bdno">
      <span class="txt">P1</span>
    </button>
  </div>

  <button class="btn _bdno _ico_ly _pgNext">
    <i class="ico _pageNext"></i>
    <span class="txt">다음페이지</span>
  </button>

  <button class="btn _bdno _ico_ly _pgLast">
    <i class="ico _pageLast"></i>
    <span class="txt">마지막 페이지</span>
  </button>

  <button class="btn _bdno tp_txt _auto">
    <span class="txt">맺음말</span>
  </button>
</div>
</div>
<div class="col_R">
<button class="btn _bdno tp_txt _auto">
  <i class="ico _prevView"></i>
  <span class="txt">미리보기</span>
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
