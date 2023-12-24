const pageBase = {
  datas: surveyData,
  init: function (objId) {
    const Html = `<div class="view_round _tp_style" style="width: 560px">
    <div class="view_round_header">
      <h2 class="tit">${pageBase.datas.SURVEY_ID.text}</h2>
    </div>
    <div class="subject _privateTit ${
      surveySubject.datas.isFirstPage ? "hidden" : ""
    } ">${pageBase.datas.SURVEY_SUBJECT.text}</div>

    <div class="comp_rangeSliderWrap">
        <div class="_rangeSlider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" id="sliderTarget">
          <div class="_rangeSlider_handle" id="rangeSlider_handle" style="width: 33%;"></div>
        <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 33%;pointer-events: none;">0</span></div>
      </div>

    <div class="view_round_body">

      <div id="viewBody"></div>

    </div>
    <div class="_extra_area">
      <button class="btn _bdno _ico_ly wide">
        <i class="ico _add"></i>
        <span class="txt">추가</span>
      </button>
    </div>
    <div class="view_round_btm">
      <div class="_col_l">
        <button
          class="btn btn_praimary btn_rud100 btn_lager btn_fix _bdno _ico_ly"
        >
          <i class="ico _more_w"></i>
          <span class="txt">더보기</span>
        </button>
      </div>
      <div class="_col_r">
        <button class="btn btn_praimary btn_rud30 btn_lager _bdno tp_next">
          <span class="txt">NEXT</span>
          <i class="ico _next01_w"></i>
        </button>
      </div>
    </div>
  </div>`;
    const target = document.querySelector("#" + objId);
    target.innerHTML = "";
    const outObj = (target.innerHTML = Html);
    // $("#contentArea.scrollbar-outer").scrollbar();
  },
};
