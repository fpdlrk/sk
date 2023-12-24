const UTIL_AREA_FUNC_ID = {};

const utilAreaMakeTop = (objId) => {
  const Html = `<div class="col_L">
<div class="group">
  <button class="btn _bdno _auto _pgCreate" id="pageCreate" data-tooltip="설문만들기">
    <i class="ico _pageCreate"></i>
    <span class="txt">만들기</span>
  </button>
</div>

<div class="group">
  <button class="btn _bdno _ico_ly" data-tooltip="스타일">
    <i class="ico _style"></i>
    <span class="txt">스타일</span>
  </button>

  <button class="btn _bdno _ico_ly" data-tooltip="변수">
    <i class="ico _valid"></i>
    <span class="txt">변수</span>
  </button>

  <button class="btn _bdno _ico_ly" data-tooltip="로직">
    <i class="ico _logic"></i>
    <span class="txt">로직</span>
  </button>

  <button class="btn _bdno _ico_ly" data-tooltip="이력">
    <i class="ico _his"></i>
    <span class="txt">이력</span>
  </button>

  <button class="btn _bdno _ico_ly" data-tooltip="설정">
    <i class="ico _setting"></i>
    <span class="txt">설정</span>
  </button>
</div>

<div class="group">
  <button class="btn _bdno _ico_ly" data-tooltip="페이지 추가">
    <i class="ico _pageAdd"></i>
    <span class="txt">페이지 추가</span>
  </button>

  <button class="btn _bdno _ico_ly" data-tooltip="페이지 복사">
    <i class="ico _pageCopy"></i>
    <span class="txt">페이지 복사</span>
  </button>

  <button class="btn _bdno _ico_ly" data-tooltip="페이지 삭제">
    <i class="ico _pageDel"></i>
    <span class="txt">페이지 삭제</span>
  </button>
</div>

<div class="group pages_wrap">
  <button class="btn _bdno tp_txt _auto" data-tooltip="소개글">
    <span class="txt">소개글</span>
  </button>

  <button class="btn _bdno _ico_ly _pgFirst" data-tooltip="첫페이지">
    <i class="ico _pageFirst"></i>
    <span class="txt">처음으로</span>
  </button>

  <button class="btn _bdno _ico_ly _pgPrev" data-tooltip="이전페이지">
    <i class="ico _pagePrev"></i>
    <span class="txt">이전페이지</span>
  </button>

  <div class="pages">
    <button class="btn _bdno">
      <span class="txt">P1</span>
    </button>
  </div>

  <button class="btn _bdno _ico_ly _pgNext" data-tooltip="다음페이지">
    <i class="ico _pageNext"></i>
    <span class="txt">다음페이지</span>
  </button>

  <button class="btn _bdno _ico_ly _pgLast" data-tooltip="마지막 페이지">
    <i class="ico _pageLast"></i>
    <span class="txt">마지막 페이지</span>
  </button>

  <button class="btn _bdno tp_txt _auto" data-tooltip="맺음말">
    <span class="txt">맺음말</span>
  </button>
</div>
</div>
<div class="col_R">
<button class="btn _bdno tp_txt _auto" data-tooltip="미리보기" onclick="ABSFNCU()">
  <i class="ico _prevView"></i>
  <span class="txt">미리보기</span>
</button>
</div>`;
  const target = document.querySelector("#" + objId);
  target.innerHTML = "";
  const outObj = (target.innerHTML = Html);
  const btns = target.querySelectorAll("button.btn");
  btns.forEach((item) => {
    // console.log("item", [item], [item][0].attributes.onclick);
    if (![item][0].attributes.onclick) {
      item.addEventListener("click", (e) => {
        makeUtilHandleActionEvent(e);
      });
    }
    item.addEventListener("mouseenter", (e) => tooltip(e));
    item.addEventListener("mouseleave", (e) => tooltip(e));
  });
};

// 고정 - 삽입 항목의 메뉴 이벤트 등록
function makeUtilHandleActionEvent(e) {
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
      console.log("기본로직@@@@", e);
      break;
  }
}

function ABSFNCU() {
  console.log("asdasd");
}
