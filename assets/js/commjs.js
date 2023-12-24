const commjs = {
  // workspace의 라벨로 쓰기위해 앞 첫글자를 가져온다.
  nameFirstAt: function (firstAt) {
    let findFirstStr = firstAt.charAt(0);
    return findFirstStr;
  },
};

function tooltip(e) {
  let body = document.querySelector("body");
  let tooltipWrap = document.createElement("p");
  let tooltipBody = document.createElement("span");
  let msg = e.target.dataset.tooltip;
  if (msg == undefined || msg == "") return;
  if (msg == undefined) {
    msg = e.target.parentNode.dataset.tooltip;
  }
  let msgBody = document.createTextNode(msg);
  let type = e.type;
  tooltipWrap.classList.add("comm_tooltip");
  tooltipWrap.appendChild(tooltipBody);
  tooltipBody.appendChild(msgBody);
  tooltipWrap.style.left = e.pageX + "px";
  tooltipWrap.style.top = e.pageY - 25 + "px";
  if (type == "mouseenter") {
    body.appendChild(tooltipWrap);
  } else if ("mouseleave") {
    if (body.parentNode) {
      body.removeChild(document.querySelector(".comm_tooltip"));
      isMove = false;
    }
  }
}

let clickObj = document.querySelector("body");
clickObj.addEventListener("click", objChk);
function objChk(e) {
  let obj = e.target;
  let parent = obj.closest("#contentArea");
  let header = obj.closest("header");
  let view = obj.closest(".view_round");
  if ((parent != null || header != null) && view == null) {
    let cotegoryView = document.querySelector("#cotegoryView");
    cotegoryView.removeChild(cotegoryView.querySelector(".mdu_pannel"));
    isLeftMenuSelected = null;
  }
  // let parent = obj.parentNode;
  // console.log("@@@@", e, obj, parent);
}

// function pannelClose() {
//   let pannelCloseItem = document.querySelectorAll("._pannelClose");
//   console.log(pannelCloseItem);
// }

$(".labelFirstName").each(function (i, v) {
  let str = $(v).text();
  $(v).prev().text(commjs.nameFirstAt(str));
  // $('.FirstName_label').text(commjs.nameFirstAt(str));
});

// content && lnb scroll
let screenInit = function () {
  let winH = $(window).outerHeight();
  let contentH = winH - $("header").outerHeight();
  let lnbMinusEleSum = $(".lnb_header").outerHeight();
  let lnbH = contentH - lnbMinusEleSum;
  $("#contentArea").css({ height: contentH });
  $(".mdu_pannel_form").css({ height: contentH });
  $(".lnb_body").css({ height: lnbH });
};
window.onresize = function () {
  screenInit();
  // console.log("@@@@@onresize");
};
window.dispatchEvent(new Event("resize"));

// const lnbWrap = document.querySelector(".lnb");
// const lnbItem = lnbWrap.querySelectorAll(".item");
/**
 * LNB 하위 메뉴 감추기
 * items : 감추고자 하는 element
 * idx : 감추고자 하는 item index
 */
const fnLnbItemShowHide = function (items, idx) {
  switch (typeof items) {
    case "object":
      items.forEach((element, index) => {
        if (index != idx) {
          //element.classList.add('hide');
        }
      });
      break;
    case "String":
      console.log("String");
      break;
  }
};

const toggleItem = document.querySelectorAll(".item .toggle");
// 1뎁스 열림/닫힘 클릭이벤트
const fnLnbItemClickToggle = function () {
  let parent = this.parentElement;
  //let item = this.previousElementSibling;
  let hasClass = parent.classList.contains("hide");
  if (hasClass) {
    parent.classList.remove("hide");
  } else {
    parent.classList.add("hide");
  }
};

const toggleEvtLoop = function (items) {
  items.forEach((item, index) => {
    item.onclick = fnLnbItemClickToggle;
  });
};

// toggleEvtLoop(toggleItem);
// fnLnbItemShowHide(lnbItem, 0);
