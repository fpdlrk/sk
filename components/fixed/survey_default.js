const SURVEY_SUBJECT = surveyData.SURVEY_SUBJECT;
let blindValue = false;
const surveyDefault = {
  datas: surveyData.SURVEY_SUBJECT,
  initValue: [{ code: "", text: "첫페이지만 보이기", isFirstPage: true }],
  keyMapping: { code: "code", codeName: "text", ischk: "isFirstPage" },
  init: function (objId) {
    const Html = `<div class="mdu_pannel mdu_pannel_form scroll_area">
    <div class="pannel_header">
      <h2 class="tit">설정</h2>
      <div class="util">
        <button class="btn _bdno _ico_ly" onclick='pannelAction(event)' data-type="refresh">
          <i class="ico _pannelRefresh"></i>
          <span class="txt">리셋</span>
        </button>
        <button class="btn _bdno _ico_ly" onclick='pannelAction(event)' data-type="close">
          <i class="ico _pannelClose"></i>
          <span class="txt">닫기</span>
        </button>
      </div>
    </div>
    <div class="pannel_body scrollbar-outer">
      <div class="item_group">
        <button class="item_group_header _ico _active">타켓설정</button>
        <div class="item">
          <div class="info_txt mgb10">설문조사를 진행하려는 대상을 결정할 수 있습니다.</div>
          <div class="_comp _wide">
            <span class="_tit">대상</span>
            <div class="_body">
              <div class="_comp">
                <span class="_tit">지역</span>
                <div class="_body _inline" style="width: 75%">
                  <button class="btn wide _targetAdd">
                    <span class="_txt">지역 추가</span>
                    <span class="ico"></span>
                  </button>
                </div>
              </div>

              <div class="_comp mgt5">
                <span class="_tit">성별</span>
                <div class="_body _inline" style="width: 75%">
                  <button class="btn wide _targetAdd">
                    <span class="_txt">성별 추가</span>
                    <span class="ico"></span>
                  </button>
                </div>
              </div>

              <div class="_comp mgt5">
                <span class="_tit">연령</span>
                <div class="_body _inline" style="width: 75%">
                  <button class="btn wide _targetAdd">
                    <span class="_txt">연령 추가</span>
                    <span class="ico"></span>
                  </button>
                </div>
              </div>

              <div class="_comp mgt5">
                <span class="_tit">기준추가</span>
                <div class="_body _inline" style="width: 75%">
                  <button class="btn wide _targetAdd">
                    <span class="_txt">기준 추가</span>
                    <span class="ico"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="item_group_header _ico _active" data-tooltip="작성한 설문에 대해 인원설정을 할 수 있습니다.">인원설정</button>
        <div class="item">
          <div class="info_txt mgb10">작성한 설문에 대해 인원설정을 할 수 있습니다.</div>
          <div class="_comp comp_input _wide">
            <span class="_tit">전체 응답자 수</span>
            <div class="_body">
              <div class="flex_box _fac _fjb _fromto">
                <div class="_comp comp_select _fjl">
                  <span class="_tit">최소</span>
                  <div class="_body">
                    <div class="_selectOuter mgl5">
                      <div class="_selectWrap">
                        <button class="_header">
                          <span class="_selectText">1</span>
                        </button>
                        <ul class="_list">
                          <li><a class="_item _selected">1</a></li>
                          <li><a class="_item">Q1,Q2,Q3</a></li>
                          <li><a class="_item">번호없음</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="_space">~</div>

                <div class="_comp comp_select _fjl">
                  <span class="_tit">최대</span>
                  <div class="_body">
                    <div class="_selectOuter mgl5">
                      <div class="_selectWrap">
                        <button class="_header">
                          <span class="_selectText">무제한</span>
                        </button>
                        <ul class="_list">
                          <li><a class="_item _selected">1,2,3</a></li>
                          <li><a class="_item">Q1,Q2,Q3</a></li>
                          <li><a class="_item">번호없음</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_comp comp_inputAndButton mgt10">
                <span class="_tit">하루 응답자 수</span>
                <div class="_body _inputAndButtonWrap f_14">
                  <input type="text" class="comm_input mgr10 f_14 ar" placeholder="" value="100,000" />
                  명
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="item_group_header _ico _active"
          data-tooltip="작성한 설문에 대해 설문 기간 설정을 할 수 있습니다.<br /> 종료일 지정이 없을 경우 무제한으로 기간 설정"
        >
          기간설정
        </button>
        <div class="item">
          <div class="info_txt mgb10">작성한 설문에 대해 설문 기간 설정을 할 수 있습니다. 종료일 지정이 없을 경우 무제한으로 기간 설정</div>
          <div class="_comp comp_input _wide mgt10">
            <span class="_tit">설문 기간</span>
            <div class="_comp comp_input">
              <span class="_tit">시작일</span>
              <div class="_body" style="width: 80%">
                <div class="flex_box _fac _fjr">
                  <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="year">
                    <div class="_body wide">
                      <div class="_selectOuter">
                        <div class="_selectWrap">
                          <button class="_header">2023</button>
                          <ul class="_list">
                            <li><a class="_item _selected" id="0">2023</a></li>
                            <li><a class="_item" id="1">2022</a></li>
                            <li><a class="_item" id="2">2021</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="month">
                    <div class="_body wide">
                      <div class="_selectOuter mgl5">
                        <div class="_selectWrap">
                          <button class="_header">10</button>
                          <ul class="_list">
                            <li><a class="_item" id="0">12</a></li>
                            <li><a class="_item" id="1">11</a></li>
                            <li><a class="_item _selected" id="2">10</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="date">
                    <div class="_body wide">
                      <div class="_selectOuter mgl5">
                        <div class="_selectWrap">
                          <button class="_header">27</button>
                          <ul class="_list">
                            <li><a class="_item _selected" id="0">27</a></li>
                            <li><a class="_item" id="1">28</a></li>
                            <li><a class="_item" id="2">29</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="_comp comp_input mgt10">
              <span class="_tit">시작시간</span>
              <div class="_body" style="width: 80%">
                <div class="flex_box _fac _fjr">
                  <div class="_comp comp_select _fjl" style="width: 34%">
                    <div class="_body wide">
                      <div class="_selectOuter mgl5">
                        <div class="_selectWrap">
                          <button class="_header">
                            <span class="_selectText">12</span>
                          </button>
                          <ul class="_list">
                            <li><a class="_item _selected">1,2,3</a></li>
                            <li><a class="_item">Q1,Q2,Q3</a></li>
                            <li><a class="_item">번호없음</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="_comp comp_select _fjl" style="width: 34%">
                    <div class="_body wide">
                      <div class="_selectOuter mgl5">
                        <div class="_selectWrap">
                          <button class="_header">
                            <span class="_selectText">19</span>
                          </button>
                          <ul class="_list">
                            <li><a class="_item _selected">1,2,3</a></li>
                            <li><a class="_item">Q1,Q2,Q3</a></li>
                            <li><a class="_item">번호없음</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="_comp _wide mgt10">
            <div class="_body">
              <div class="_cr_listWrap">
                <div class="_cr_item">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>종료일 체크</span>
                  </span>
                  <div class="_cr_itemChild pdl0">
                    <div class="_comp comp_input">
                      <span class="_tit">종료일</span>
                      <div class="_body" style="width: 80%">
                        <div class="flex_box _fac _fjr">
                          <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="year">
                            <div class="_body wide">
                              <div class="_selectOuter">
                                <div class="_selectWrap">
                                  <button class="_header">2023</button>
                                  <ul class="_list">
                                    <li><a class="_item _selected" id="0">2023</a></li>
                                    <li><a class="_item" id="1">2022</a></li>
                                    <li><a class="_item" id="2">2021</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="month">
                            <div class="_body wide">
                              <div class="_selectOuter mgl5">
                                <div class="_selectWrap">
                                  <button class="_header">10</button>
                                  <ul class="_list">
                                    <li><a class="_item" id="0">12</a></li>
                                    <li><a class="_item" id="1">11</a></li>
                                    <li><a class="_item _selected" id="2">10</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="date">
                            <div class="_body wide">
                              <div class="_selectOuter mgl5">
                                <div class="_selectWrap">
                                  <button class="_header">27</button>
                                  <ul class="_list">
                                    <li><a class="_item _selected" id="0">27</a></li>
                                    <li><a class="_item" id="1">28</a></li>
                                    <li><a class="_item" id="2">29</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="_comp comp_input mgt10">
                      <span class="_tit">종료시간</span>
                      <div class="_body" style="width: 80%">
                        <div class="flex_box _fac _fjr">
                          <div class="_comp comp_select _fjl" style="width: 34%">
                            <div class="_body wide">
                              <div class="_selectOuter mgl5">
                                <div class="_selectWrap">
                                  <button class="_header">
                                    <span class="_selectText">12</span>
                                  </button>
                                  <ul class="_list">
                                    <li><a class="_item _selected">1,2,3</a></li>
                                    <li><a class="_item">Q1,Q2,Q3</a></li>
                                    <li><a class="_item">번호없음</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="_comp comp_select _fjl" style="width: 34%">
                            <div class="_body wide">
                              <div class="_selectOuter mgl5">
                                <div class="_selectWrap">
                                  <button class="_header">
                                    <span class="_selectText">19</span>
                                  </button>
                                  <ul class="_list">
                                    <li><a class="_item _selected">1,2,3</a></li>
                                    <li><a class="_item">Q1,Q2,Q3</a></li>
                                    <li><a class="_item">번호없음</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="_cr_item flex_box _fac _fjb">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>답변수로 설문 종료</span>
                  </span>
                  <input type="text" class="comm_input ar" placeholder="" value="100" style="width: 100px" />
                </div>
                <div class="_cr_item">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>설문 일시 중지</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="item_group_header _ico _active" data-tooltip="성한 설문에 대해 보상여부를 설정을 할 수 있습니다.">보상설정</button>
        <div class="item">
          <div class="info_txt mgb10">작성한 설문에 대해 보상여부를 설정을 할 수 있습니다.</div>
          <div class="_comp _wide">
            <span class="_tit">보상 설정</span>
            <div class="_body">
              <div class="_comp">
                <span class="_tit">보상 여부</span>
                <div class="_body _inline">
                  <span class="radio_b_wrap">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>보상</span>
                  </span>

                  <span class="radio_b_wrap mgl30">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>미보상</span>
                  </span>
                </div>
              </div>

              <div class="_comp _wide mgt10">
                <span class="_tit">보상 방식</span>
                <div class="_body">
                  <div class="_cr_listWrap">
                    <div class="_cr_item">
                      <span class="check_b_wrap">
                        <input type="checkbox" class="chk" name="1" />
                        <span class="ico"></span>
                        <span>T포인트</span>
                      </span>
                    </div>
                    <div class="_cr_item">
                      <span class="check_b_wrap">
                        <input type="checkbox" class="chk" name="1" />
                        <span class="ico"></span>
                        <span>커스텀 보상</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="_comp _wide mgt10">
                <span class="_tit">T포인트</span>
                <div class="_body">
                  <div class="_comp comp_inputAndButton">
                    <span class="_tit">설문 완료 시 보상</span>
                    <div class="_body _inputAndButtonWrap f_14">
                      <input type="text" class="comm_input mgr10 f_14 ar" placeholder="" value="1000" />
                      P
                    </div>
                  </div>
                  <div class="_comp comp_inputAndButton mgt10">
                    <span class="_tit">설문 참여 시 보상</span>
                    <div class="_body _inputAndButtonWrap f_14">
                      <input type="text" class="comm_input mgr10 f_14 ar" placeholder="" value="1000" />
                      P
                    </div>
                  </div>
                </div>
              </div>

              <div class="_comp _wide mgt10">
                <span class="_tit">설문 중간에 나가기 설정</span>
                <div class="_body">
                  <div class="_cr_listWrap">
                    <div class="_cr_item">
                      <span class="check_b_wrap">
                        <input type="checkbox" class="chk" name="1" />
                        <span class="ico"></span>
                        <span>나가기 설정</span>
                      </span>
                      <div class="_cr_itemChild pdl0">
                        <input type="text" class="comm_input wide" placeholder="ID를 입력하세요." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="item_group_header _ico _active" data-tooltip="작성한 설문에 대해 공개여부를 설정을 할 수 있습니다.">공개설정</button>
        <div class="item">
          <div class="info_txt mgb10">작성한 설문에 대해 공개여부를 설정을 할 수 있습니다.</div>
          <div class="_comp _wide">
            <span class="_tit">공개 설정</span>
            <div class="_body">
              <div class="_comp">
                <span class="_tit">설문 참여 여부</span>
                <div class="_body _inline">
                  <span class="radio_b_wrap">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>공개</span>
                  </span>

                  <span class="radio_b_wrap mgl30">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>미공개</span>
                  </span>
                </div>
              </div>
              <div class="_comp">
                <span class="_tit">결과 확인 여부</span>
                <div class="_body _inline">
                  <span class="radio_b_wrap">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>공개</span>
                  </span>

                  <span class="radio_b_wrap mgl30">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>미공개</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="item_group_header _ico _active" data-tooltip="작성한 설문에 대해 테스트설정을 할 수 있습니다.">테스트설정</button>
        <div class="item">
          <div class="info_txt mgb10">작성한 설문에 대해 테스트설정을 할 수 있습니다.</div>
          <div class="_comp _wide">
            <span class="_tit">테스터 설정</span>
            <div class="_body">
              <div class="_cr_listWrap">
                <div class="_cr_item">
                  <span class="check_b_wrap">
                    <input type="checkbox" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>테스터 전체 </span>
                  </span>
                  <div class="_cr_itemChild">
                    <div class="_cr_listWrap">
                      <div class="_cr_item">
                        <span class="check_b_wrap">
                          <input type="checkbox" class="chk" name="1" />
                          <span class="ico"></span>
                          <span>매니저</span>
                        </span>
                      </div>
                      <div class="_cr_item">
                        <span class="check_b_wrap">
                          <input type="checkbox" class="chk" name="1" />
                          <span class="ico"></span>
                          <span>에디터</span>
                        </span>
                      </div>
                      <div class="_cr_item">
                        <span class="check_b_wrap">
                          <input type="checkbox" class="chk" name="1" />
                          <span class="ico"></span>
                          <span>클라이언트</span>
                        </span>
                      </div>
                      <div class="_cr_item">
                        <span class="check_b_wrap">
                          <input type="checkbox" class="chk" name="1" />
                          <span class="ico"></span>
                          <span>어드민</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="_comp comp_textarea _wide">
                <div class="_body _comp_textareaWrap">
                  <textarea class="comm_input" placeholder="멥버쉽카드를 입력하세요."></textarea>
                </div>
              </div>

              <div class="_comp comp_input _wide mgt20">
                <span class="_tit">테스트 기간</span>
                <div class="_comp comp_input">
                  <span class="_tit">시작일</span>
                  <div class="_body" style="width: 80%">
                    <div class="flex_box _fac _fjr">
                      <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="year">
                        <div class="_body wide">
                          <div class="_selectOuter">
                            <div class="_selectWrap">
                              <button class="_header">
                                <span class="_selectText">2023</span>
                              </button>
                              <ul class="_list">
                                <li><a class="_item _selected">1</a></li>
                                <li><a class="_item">Q1,Q2,Q3</a></li>
                                <li><a class="_item">번호없음</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="month">
                        <div class="_body wide">
                          <div class="_selectOuter mgl5">
                            <div class="_selectWrap">
                              <button class="_header">
                                <span class="_selectText">12</span>
                              </button>
                              <ul class="_list">
                                <li><a class="_item _selected">1,2,3</a></li>
                                <li><a class="_item">Q1,Q2,Q3</a></li>
                                <li><a class="_item">번호없음</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="_comp comp_select _fjl _clickerable" style="width: 34%" id="date">
                        <div class="_body wide">
                          <div class="_selectOuter mgl5">
                            <div class="_selectWrap">
                              <button class="_header">
                                <span class="_selectText">19</span>
                              </button>
                              <ul class="_list">
                                <li><a class="_item _selected">1,2,3</a></li>
                                <li><a class="_item">Q1,Q2,Q3</a></li>
                                <li><a class="_item">번호없음</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="_comp comp_input mgt10">
                  <span class="_tit">종료일</span>
                  <div class="_body" style="width: 80%">
                    <div class="flex_box _fac _fjr">
                      <div class="_comp comp_select _fjl" style="width: 34%">
                        <div class="_body wide">
                          <div class="_selectOuter">
                            <div class="_selectWrap">
                              <button class="_header">
                                <span class="_selectText">2023</span>
                              </button>
                              <ul class="_list">
                                <li><a class="_item _selected">1</a></li>
                                <li><a class="_item">Q1,Q2,Q3</a></li>
                                <li><a class="_item">번호없음</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="_comp comp_select _fjl" style="width: 34%">
                        <div class="_body wide">
                          <div class="_selectOuter mgl5">
                            <div class="_selectWrap">
                              <button class="_header">
                                <span class="_selectText">12</span>
                              </button>
                              <ul class="_list">
                                <li><a class="_item _selected">1,2,3</a></li>
                                <li><a class="_item">Q1,Q2,Q3</a></li>
                                <li><a class="_item">번호없음</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="_comp comp_select _fjl" style="width: 34%">
                        <div class="_body wide">
                          <div class="_selectOuter mgl5">
                            <div class="_selectWrap">
                              <button class="_header">
                                <span class="_selectText">19</span>
                              </button>
                              <ul class="_list">
                                <li><a class="_item _selected">1,2,3</a></li>
                                <li><a class="_item">Q1,Q2,Q3</a></li>
                                <li><a class="_item">번호없음</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="info_txt mgt10">테스트 시작일과 종료일은 00시 기준입니다.</div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="item_group_header _ico _active"
          data-tooltip="작성한 설문 공유설정은 SNS를 선택하여 설정 하실 수 있습니다.<br />
SNS는 페이스북, 트위터, 인스타, 네이버블로그, 카카오톡, URL로
공유합니다."
        >
          공유설정
        </button>
        <div class="item">
          <div class="info_txt mgb10">
            작성한 설문 공유설정은 SNS를 선택하여 설정 하실 수 있습니다.<br />
            SNS는 페이스북, 트위터, 인스타, 네이버블로그, 카카오톡, URL로 공유합니다.
          </div>
          <div class="_comp _wide">
            <span class="_tit">SNS 공유 설정</span>
            <div class="_body">
              <div class="_comp">
                <span class="_tit">SNS 공유 여부</span>
                <div class="_body _inline">
                  <span class="radio_b_wrap">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>공유</span>
                  </span>

                  <span class="radio_b_wrap mgl30">
                    <input type="radio" class="chk" name="1" />
                    <span class="ico"></span>
                    <span>미공유</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    const target = document.querySelector("#" + objId);
    target.innerHTML = "";
    target.innerHTML = Html;
    $(target).find(".scrollbar-outer").scrollbar();
  },
  parentDispatch: (e) => {
    let checked = e.target.checked;
    let targetObj = document.getElementsByClassName("_privateTit");
    if (checked) {
      targetObj[0].classList.add("hidden");
    } else {
      targetObj[0].classList.remove("hidden");
    }
    surveySubject.datas.isFirstPage = checked;
  },
  pannelClose: (e) => {
    let cotegoryView = document.querySelector("#cotegoryView");
    cotegoryView.removeChild(cotegoryView.querySelector(".mdu_pannel"));
    isLeftMenuSelected = null;
  },
  pannelReset: () => {},
  modalAlert: () => {
    return ModalOpen("firstPopup", "안내", "<span class='f_main'>KJCI3718UID09</span> 는 사용가능 ID입니다.", "alert", "", surveySubject.okClickFnc, {
      //style: "font-size:60px;",
      class: "ac",
    });
  },
  okClickFnc: (e) => {
    ModalClose(e.target);
  },
  onChange: (e) => {
    surveySubject.datas.text = e.target.value;
    surveyData.SURVEY_SUBJECT = {
      ...surveyData.SURVEY_SUBJECT,
      text: e.target.value,
      isFirstPage: false,
    };
    let headerTitle = document.querySelector("._privateTit");
    headerTitle.innerHTML = e.target.value;
  },
  isFirstPage: (e) => {
    let checked = e.target.checked;
    let targetObj = document.getElementsByClassName("_privateTit");
    if (checked) {
      targetObj[0].classList.add("hidden");
    } else {
      targetObj[0].classList.remove("hidden");
    }
    surveySubject.datas.isFirstPage = checked;
    console.log(e, targetObj, targetObj.value);
  },
};

function test() {
  let testHtml = "";
  testHtml += '<button class="btn _bdno _ico_ly">';
  testHtml += '<i class="ico _pannelClose"></i>';
  testHtml += '<span class="txt">닫기</span>';
  testHtml += "</button>";
  return testHtml;
}

function test2() {
  let testHtml = `<h2 class="tit">설문제목</h2>`;
  return testHtml;
}
