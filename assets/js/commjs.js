const commjs = {
  // workspace의 라벨로 쓰기위해 앞 첫글자를 가져온다.
  nameFirstAt: function (firstAt) {
    let findFirstStr = firstAt.charAt(0);
    return findFirstStr;
  },
};

$("[data-tooltip]").on("mouseenter", function (e) {
  //let msg = $(this).attr("data-tooltip");
  tooltip(e);
});

$("[data-tooltip]").on("mouseleave", function (e) {
  $(".comm_tooltip").remove();
});

function tooltip(e) {
  let body = document.querySelector("body");
  let tooltipWrap = document.createElement("p");
  let tooltipBody = document.createElement("span");
  let msg = e.target.dataset.tooltip;
  if (msg == undefined || msg == "") return;
  if (msg == undefined) {
    msg = e.target.parentNode.dataset.tooltip;
  }
  // let msgBody = document.createTextNode(msg);
  let msgBody = document.createTextNode(msg);
  let type = e.type;
  tooltipWrap.classList.add("comm_tooltip");
  tooltipWrap.appendChild(tooltipBody);
  tooltipBody.innerHTML = msg;
  tooltipWrap.style.left = e.pageX + "px";
  tooltipWrap.style.top = e.pageY - 25 + "px";
  if (type == "mouseenter") {
    body.appendChild(tooltipWrap);
  }
  // else if ("mouseleave") {
  //   if (body.parentNode) {
  //     body.removeChild(document.querySelector(".comm_tooltip"));
  //     isMove = false;
  //   }
  // }
}

// let clickObj = document.querySelector("body");
// clickObj.addEventListener("click", objChk);
// function objChk(e) {
//   let obj = e.target;
//   let parent = obj.closest("#contentArea");
//   let header = obj.closest("header");
//   let view = obj.closest(".view_round");
//   if ((parent != null || header != null) && view == null) {
//     let cotegoryView = document.querySelector("#cotegoryView");
//     cotegoryView.removeChild(cotegoryView.querySelector(".mdu_pannel"));
//     isLeftMenuSelected = null;
//   }
// }

// function pannelClose() {
//   let pannelCloseItem = document.querySelectorAll("._pannelClose");
//   console.log(pannelCloseItem);
// }

$(".pannel_body .item_group .item_group_header").on("click", function () {
  let $this = $(this);
  let isActive = $this.hasClass("_active");
  if (isActive) {
    $this.removeClass("_active");
  } else {
    $this.addClass("_active");
  }
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

$("body").on("click", function (e) {
  let $this = e.target;
  let closeTaget = $("._clickerable");
  if ($this.closest("._clickerable") == null) {
    closeTaget.find("._selectWrap").find("._header").removeClass("_active");
    closeTaget.find("._selectWrap").removeClass("_active");
    $("._actionArea .actions").removeClass("active");
  }
});

// 셀렉트박스 스크립트
/**
 *
 * @param {String 아이디} objId
 * @param {Object} datas
 * @param {String 숫자형태} selId
 * @returns
 */

function selectBox(settings) {
  let selectbox = new SelectBox();
  selectbox.make(settings);
  return selectbox;
}

function SelectBox() {
  this.id = null;
  this.datas = null;
  this.selectId = null;
  this.selItem = null;
  this.selData = null;
  this.make = function (settings) {
    let selectItems = document.querySelector("#" + settings.targetId);
    let lists = selectItems.querySelector("._list");
    let header = selectItems.querySelector("._header");
    let itemHtml = "";
    this.id = settings.targetId;
    this.datas = settings.datas || [];
    this.selectId = settings.slectItem;
    if (this.datas != null && this.datas != "") {
      lists.innerHTML = "";
      this.datas.forEach((item, idx) => {
        itemHtml += '<li><a class="_item" id="' + idx + '">' + item.text + "</a></li>";
      });
      lists.insertAdjacentHTML("afterbegin", itemHtml);
    }

    let item = lists.querySelectorAll("._item");
    this.setItem(this.selectId);
    let handleItem = (e) => {
      item.forEach((item) => {
        item.classList.remove("_selected");
      });
      e.target.classList.add("_selected");
      header.innerText = e.target.innerText;
      header.classList.remove("_active");
      this.selItem = e.target.id;
      this.selData = this.datas[this.selItem];
    };

    let handleHeader = (e) => {
      $("._clickerable").find("._selectWrap").find("._header").removeClass("_active");

      let target = e.target;
      if (e.target.nodeName == "SPAN") {
        target = e.target.parentElement;
      }
      let classLists = target.classList;
      let parent = target.parentElement.classList;
      let hasClass = classLists.contains("_active");
      if (hasClass) {
        classLists.remove("_active");
        parent.remove("_active");
      } else {
        classLists.add("_active");
        parent.add("_active");
      }
    };

    item.forEach((item) => {
      item.addEventListener("click", handleItem);
    });
    header.addEventListener("click", handleHeader);
  };
  this.setItem = function (idx) {
    let selectItems = document.querySelector("#" + this.id);
    let lists = selectItems.querySelectorAll("._list li");
    let li = lists[idx];
    let header = selectItems.querySelector("._header");
    lists.forEach((item) => {
      item.firstElementChild.classList.remove("_selected");
    });
    li.firstElementChild.classList.add("_selected");
    header.innerHTML = li.firstChild.innerText;
    this.selData = this.datas[idx];
    this.selItem = idx;
  };
  this.getIndex = function () {
    return this.selItem;
  };
  this.getId = function () {
    return this.id;
  };
  this.getItem = function () {
    return this.selData;
  };
  this.getData = function () {
    return this.datas;
  };
}

//시도선택;
function setCityList(settings) {
  let setCitysList = new setCityListCreate();
  setCitysList.make(settings);
  return setCitysList;
}

function setCityListCreate() {
  this.id = null;
  this.datas = null;
  this.selectId = null;
  this.selItem = null;
  this.selData = null;
  this.dataCity = null;
  this.dataGu = null;
  this.dataDong = null;

  this.make = function (settings) {
    this.id = settings.targetId;
    this.selectId = settings.slectCity;
    this.selItem = null;
    this.selData = null;
    this.datas = settings.datas;
    this.dataCity = settings.datas.city;
    this.dataGu = settings.datas.gu;
    this.dataDong = settings.datas.dong;
    //let target = document.querySelector("#" + this.id);
    let target = $("#" + this.id);
    let cityArea = target.find("#cityArea");
    let guArea = target.find("#guArea");
    let dongArea = target.find("#dongArea");
    let htmls = "";

    console.log(this.dataCity);

    cityArea.empty();
    guArea.empty();
    dongArea.empty();

    this.dataCity.forEach((item) => {
      htmls += "<li>";
      htmls += '<span class="check_b_wrap _cusChk">';
      htmls += '<input type="checkbox" class="chk" name="1" data-type="city" />';
      htmls += '<span class="ico"></span>';
      htmls += '<span class="txt">' + item.text + "</span>";
      htmls += "</span>";
      htmls += "</li>";
    });
    cityArea.append(htmls);
    htmls = "";

    this.dataGu.forEach((item) => {
      htmls += "<li>";
      htmls += '<span class="check_b_wrap _cusChk">';
      htmls += '<input type="checkbox" class="chk" name="1" data-type="gu" />';
      htmls += '<span class="ico"></span>';
      htmls += '<span class="txt">' + item.text + "</span>";
      htmls += "</span>";
      htmls += "</li>";
    });
    guArea.append(htmls);
    htmls = "";

    this.dataDong.forEach((item) => {
      htmls += "<li>";
      htmls += '<span class="check_b_wrap _cusChk">';
      htmls += '<input type="checkbox" class="chk" name="1" data-type="dong" />';
      htmls += '<span class="ico"></span>';
      htmls += '<span class="txt">' + item.text + "</span>";
      htmls += "</span>";
      htmls += "</li>";
    });
    dongArea.append(htmls);
    htmls = "";

    console.log(target);
  };
}
