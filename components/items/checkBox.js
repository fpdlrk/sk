// const SURVEY_SUBJECT = surveyData.SURVEY_SUBJECT;

const checkBox = {
  datas: surveyData.SURVEY_SUBJECT,
  props: {},
  init: function (title, props, comp) {
    checkBox.props.parent = comp;
    console.log(props);
    const Html = `<div class="_comp _wide">
    <span class="_tit">옵션</span>
    <div class="_body">
    <div class="_cr_listWrap">
      ${props
        .map(
          (item) =>
            `<div class="_cr_item">
            <span class="check_b_wrap">
            <input type="checkbox" class="chk" name="1" ${
              item.isChecked ? "checked" : ""
            } 
            onchange='checkBox.onChange(event)'/>
              <span class="ico"></span>
              <span>보기 무작위 배열</span>
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
    const parent = checkBox.props.parent;
    parent.parentDispatch(e, "test");
    console.log(checkBox.props.parent);
  },
};

// onchange='${(event) =>
//   surveySubject.parentDispatch(event, "test")}'/>
