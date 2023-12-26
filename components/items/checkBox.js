// const SURVEY_SUBJECT = surveyData.SURVEY_SUBJECT;

const checkBox = {
  datas: surveyData.SURVEY_SUBJECT,
  props: {},
  init: function (title, comp, initData, keyMapping) {
    checkBox.props = comp;
    // console.log("initData", initData);
    const Html = `<div class="_comp _wide">
    <span class="_tit">${title}</span>
    <div class="_body">
    <div class="_cr_listWrap">
      ${initData
        .map(
          (item) =>
            `<div class="_cr_item">
            <span class="check_b_wrap">
            <input type="checkbox" class="chk" name="compChk" ${
              item[keyMapping.ischk] ? "checked" : ""
            } 
            onchange='checkBox.onChange(event)'/>
              <span class="ico"></span>
              <span>${item[keyMapping.codeName]}</span>
            </span>
          </div>
        </div>`
        )
        .join("")}
    </div>
  </div>`;
    return Html;
  },
  onChange: (e) => {
    const parent = checkBox.props;
    parent.parentDispatch(e);
    // console.log(checkBox.props);
  },
};

// onchange='${(event) =>
//   surveySubject.parentDispatch(event, "test")}'/>
