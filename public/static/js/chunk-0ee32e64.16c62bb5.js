(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ee32e64"],{1815:function(t,e,i){},"1f70":function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"print"},[i("h3",{staticStyle:{"text-align":"center",display:"inline-block",height:"20px","font-weight":"800",width:"100%","margin-top":"20px"}},[t._v("2019年火化登记表")]),t._v(" "),i("div",{staticStyle:{"text-align":"right","padding-right":"50px"}},[t._v("编号: "+t._s(t.list.serial))]),t._v(" "),i("table",{staticClass:"tb",staticStyle:{border:"0"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("tr",[i("td",{staticStyle:{border:"none"}},[t._v("逝者姓名: "+t._s(t.list.o_name))]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("性别: "+t._s(t.list.o_sex))]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("年龄: "+t._s(t.list.o_age))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("身份证号: "+t._s(t.list.o_card))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("家庭住址: "+t._s(t.list.o_registered))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"}},[t._v("死亡日期: "),i("u",[t._v(t._s(t.list.o_dietime))])]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("火化日期: "),i("u",[t._v(t._s(t.list.farewelltime))])]),t._v(" "),i("td",{staticStyle:{border:"none"}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"}}),t._v(" "),i("td",{staticStyle:{border:"none"}}),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v(t._s(t.currentdate))])])]),t._v(" "),i("hr"),t._v(" "),i("h3",{staticStyle:{"text-align":"center",display:"inline-block",height:"20px","font-weight":"800",width:"100%","margin-top":"20px"}},[t._v("火化通知单")]),t._v(" "),i("div",{staticStyle:{"text-align":"right","padding-right":"50px"}},[t._v("编号: "+t._s(t.list.serial))]),t._v(" "),i("div",{staticStyle:{"text-align":"right","padding-right":"50px",height:"50px","line-height":"50px"}},[t._v("所选炉型: "+t._s(t.list.l_title))]),t._v(" "),i("table",{staticClass:"tb",staticStyle:{border:"0"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("tr",[i("td",{staticStyle:{border:"none"}},[t._v("逝者姓名: "+t._s(t.list.o_name))]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("性别: "+t._s(t.list.o_sex))]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("年龄: "+t._s(t.list.o_age))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("身份证号: "+t._s(t.list.o_card))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("家庭住址: "+t._s(t.list.o_registered))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"}},[t._v("死亡日期:  "),i("u",[t._v(t._s(t.list.o_dietime))])]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("火化日期: "),i("u",[t._v(t._s(t.list.farewelltime))])]),t._v(" "),i("td",{staticStyle:{border:"none"}})]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"}}),t._v(" "),i("td",{staticStyle:{border:"none"}}),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v(t._s(t.currentdate))])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{border:"none"}},[t._v("承办人(家属)签字:")]),t._v(" "),i("td",{staticStyle:{border:"none"}}),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("与逝者关系:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("经办人身份证号: ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("经办人联系方式: ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{border:"none",height:"40px"},attrs:{colspan:"3"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{border:"none"}},[t._v("承办人(家属)签字:")]),t._v(" "),i("td",{staticStyle:{border:"none"}}),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("与逝者关系:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("经办人联系方式: ")])])}],n={data:function(){return{currentdate:"",list:{}}},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},init:function(t,e){var i=this;this.list=Object.assign({},t),this.$nextTick(function(){i.print()})},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();i>=1&&i<=9&&(i="0"+i),r>=0&&r<=9&&(r="0"+r),this.currentdate=e+"年"+i+"月"+r+"日"}}},s=n,o=(i("ad6d"),i("2877")),l=Object(o["a"])(s,r,a,!1,null,null,null);e["a"]=l.exports},"39b1":function(t,e,i){},"504c":function(t,e,i){var r=i("9e1e"),a=i("0d58"),n=i("6821"),s=i("52a7").f;t.exports=function(t){return function(e){var i,o=n(e),l=a(o),c=l.length,d=0,p=[];while(c>d)i=l[d++],r&&!s.call(o,i)||p.push(t?[i,o[i]]:o[i]);return p}}},"76ff":function(t,e,i){},8615:function(t,e,i){var r=i("5ca1"),a=i("504c")(!1);r(r.S,"Object",{values:function(t){return a(t)}})},"9b4b":function(t,e,i){"use strict";var r=i("c6ac"),a=i.n(r);a.a},ad6d:function(t,e,i){"use strict";var r=i("76ff"),a=i.n(r);a.a},b183:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.listQuery.search_data,callback:function(e){t.$set(t.listQuery,"search_data",e)},expression:"listQuery.search_data"}}),t._v(" "),i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"火化编号",prop:"c_serial"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"逝者姓名",prop:"name"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"联系人",prop:"linkman"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"linkphone"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"悼念厅",prop:"mourn_title"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"火化时间",prop:"farewelltime",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"应付总价",prop:"totalprice"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"食堂支付",prop:"canteen_pay"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:1==e.row.canteen_pay?"success":"danger"}},[t._v(t._s(1==e.row.canteen_pay?"已支付":"未支付"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"状态",prop:"finance_status"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",{attrs:{type:1==e.row.finance_status?"success":"danger"}},[t._v(t._s(1==e.row.finance_status?"已支付":"未支付"))])]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:function(i){return t.handleInfo(e.row)}}},[t._v("详情")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handlepeople(e.row)}}},[t._v("惠民")]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.handleEnd(e.row)}}},[t._v("完结")])]}}])})],1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,title:"惠民减免",visible:t.dialogFormVisiblepeople},on:{"update:visible":function(e){t.dialogFormVisiblepeople=e}}},[i("el-form",{ref:"people",attrs:{inline:!0,model:t.people,"status-icon":"","label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"车费",prop:"car_price"}},[i("el-input",{model:{value:t.people.car_price,callback:function(e){t.$set(t.people,"car_price",e)},expression:"people.car_price"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"骨灰盒费",prop:"check_price"}},[i("el-input",{model:{value:t.people.check_price,callback:function(e){t.$set(t.people,"check_price",e)},expression:"people.check_price"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"寿衣",prop:"shroud_price"}},[i("el-input",{model:{value:t.people.shroud_price,callback:function(e){t.$set(t.people,"shroud_price",e)},expression:"people.shroud_price"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"环保花圈",prop:"flower_price"}},[i("el-input",{model:{value:t.people.flower_price,callback:function(e){t.$set(t.people,"flower_price",e)},expression:"people.flower_price"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"冰棺",prop:"cold_price"}},[i("el-input",{model:{value:t.people.cold_price,callback:function(e){t.$set(t.people,"cold_price",e)},expression:"people.cold_price"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"主持",prop:"direct_price"}},[i("el-input",{model:{value:t.people.direct_price,callback:function(e){t.$set(t.people,"direct_price",e)},expression:"people.direct_price"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"总价",prop:"totalprice"}},[i("el-input",{on:{focus:function(e){return t.totals()}},model:{value:t.people.totalprice,callback:function(e){t.$set(t.people,"totalprice",e)},expression:"people.totalprice"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea",rows:2},model:{value:t.people.remark,callback:function(e){t.$set(t.people,"remark",e)},expression:"people.remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisiblepeople=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.updatePeople}},[t._v("确定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{id:"pay","close-on-click-modal":!1,title:"付款操作",visible:t.dialogFormpay},on:{"update:visible":function(e){t.dialogFormpay=e}}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoadingPay,expression:"listLoadingPay"}],attrs:{"element-loading-text":"正在支付中。。。"}},[i("el-input",{ref:"myNameId",model:{value:t.payval,callback:function(e){t.payval=e},expression:"payval"}}),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormpay=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.payval=""}}},[t._v("清空")])],1)],1)]),t._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,title:"查看",visible:t.dialogFormInfo},on:{"update:visible":function(e){t.dialogFormInfo=e}}},[i("div",{ref:"print",staticClass:"print_tick"},[i("h3",{staticStyle:{"text-align":"center","font-size":"22px","font-weight":"800",margin:"0 0 15px 0"}},[t._v("业 务 结 算 单")]),t._v(" "),i("div",{staticClass:"bury_car"},[i("h1",{staticClass:"bury_car_h1"},[t._v("逝者信息")]),t._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 逝者姓名 : ")]),t._v(t._s(t.info_temp.name))]),t._v(" "),i("p",[i("span",[t._v(" 身份证 : ")]),t._v(t._s(t.info_temp.card))]),t._v(" "),i("p",[i("span",[t._v(" 死亡原因 : ")]),t._v(t._s(t.info_temp.reason))]),t._v(" "),i("p",[i("span",[t._v(" 联系人 : ")]),t._v(t._s(t.info_temp.linkman))]),t._v(" "),i("p",[i("span",[t._v(" 火化时间 : ")]),t._v(t._s(t.info_temp.farewelltime))])])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 逝者性别 : ")]),t._v(t._s(t.info_temp.sex))]),t._v(" "),i("p",[i("span",[t._v(" 户口所在地 : ")]),t._v(t._s(t.info_temp.registered))]),t._v(" "),i("p",[i("span",[t._v(" 联系人性别 : ")]),t._v(t._s(t.info_temp.linksex))]),t._v(" "),i("p",[i("span",[t._v(" 联系电话 : ")]),t._v(t._s(t.info_temp.linkphone))])])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 逝者年龄 : ")]),t._v(t._s(t.info_temp.age))]),t._v(" "),i("p",[i("span",[t._v(" 民族 : ")]),t._v(t._s(t.info_temp.nation))]),t._v(" "),i("p",[i("span",[t._v(" 承办人 : ")]),t._v(t._s(t.info_temp.operator))]),t._v(" "),i("p",[i("span",[t._v(" 逝者关系 : ")]),t._v(t._s(t.info_temp.relation))])])])],1)],1),t._v(" "),i("div",{staticClass:"bury_car",staticStyle:{border:"1px solid #63afde","margin-top":"10px"}},[i("h1",{staticClass:"bury_car_h1",staticStyle:{background:"#63afde",color:"#fff"}},[t._v("服务")]),t._v(" "),t.mourn?[i("el-divider",{attrs:{"content-position":"left"}},[t._v("灵堂服务")]),t._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 灵堂名称 : ")]),t._v(t._s(t.mourn.title))]),t._v(" "),i("p",[i("span",[t._v(" 小时 : ")]),t._v(t._s(t.mourn.hours)+" 小时")]),t._v(" "),i("p",[i("span",[t._v(" 备注 : ")]),t._v(t._s(t.mourn.remark))])])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 开始时间 : ")]),t._v(t._s(t.mourn.startime))]),t._v(" "),i("p",[i("span",[t._v(" 总价 : ")]),t._v(t._s(t.mourn.totalprice))])])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 结束时间 : ")]),t._v(t._s(t.mourn.endtime))]),t._v(" "),i("p",[i("span",[t._v(" 操作人 : ")]),t._v(t._s(t.mourn.operator))])])])],1)]:t._e(),t._v(" "),t.cold?[i("el-divider",{attrs:{"content-position":"left"}},[t._v("冷藏柜")]),t._v(" "),i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 冷藏柜名称 : ")]),t._v(t._s(t.cold.title))]),t._v(" "),i("p",[i("span",[t._v(" 价格 : ")]),t._v(t._s(t.cold.totalprice))])])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 开始时间 : ")]),t._v(t._s(t.cold.startime))]),t._v(" "),i("p",[i("span",[t._v(" 备注 : ")]),t._v(t._s(t.cold.remark))])])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 结束时间 : ")]),t._v(t._s(t.cold.endtime))]),t._v(" "),i("p",[i("span",[t._v(" 操作人 : ")]),t._v(t._s(t.cold.operator))])])])],1)]:t._e(),t._v(" "),t.serlist.voca&&t.serlist.voca.length>0?[i("el-divider",{attrs:{"content-position":"left"}},[t._v("大厅服务")]),t._v(" "),i("el-row",{attrs:{gutter:20}},t._l(t.serlist.voca,function(e,r){return i("div",{key:r},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 服务名称 : ")]),t._v(t._s(e.title))])])]),t._v(" "),i("el-col",{attrs:{span:4}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 数量 : ")]),t._v(t._s(e.number)+" ")])])]),t._v(" "),i("el-col",{attrs:{span:8}},[i("div",{staticClass:"grid-content"},[i("p",[i("span",[t._v(" 合计 : ")]),t._v(t._s(e.totalprice))])])])],1)}),0)]:t._e()],2)]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("span",{staticStyle:{color:"red","font-size":"14px","margin-right":"10px"}},[t._v("应付总价："),i("b",[t._v(t._s(t.totalprice))]),t._v(" 元")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handlePrintFire}},[t._v("火化通知单")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handlePrintPeople}},[t._v("惠民减免")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handlePrintPay}},[t._v("收据打印")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handlePrint}},[t._v("结算打印")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handletick}},[t._v("发票打印")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handlePrintFireCard}},[t._v("火化证")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.finance_status,expression:"finance_status != 1"}],attrs:{type:"danger"},on:{click:t.handlePay}},[t._v("付款")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=t.finance_status,expression:"finance_status != 1"}],attrs:{type:"danger"},on:{click:t.handlePaySm}},[t._v("扫码支付")]),t._v(" "),i("el-button",{staticStyle:{"margin-top":"5px"},on:{click:function(e){t.dialogFormInfo=!1}}},[t._v("取消")])],1)]),t._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,title:"选择服务",visible:t.dialogFormServer},on:{"update:visible":function(e){t.dialogFormServer=e}}},[i("service",{ref:"server",on:{service_data:t.service_data}}),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleSend}},[t._v("确定")]),t._v(" "),i("el-button",{on:{click:function(e){t.dialogFormServer=!1}}},[t._v("取消")])],1)],1),t._v(" "),i("fire",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fire_"}),t._v(" "),i("people",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"people_"}),t._v(" "),i("prints",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"prints_"}),t._v(" "),i("hall",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"hall_"}),t._v(" "),i("server",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"server_"}),t._v(" "),i("tick",{ref:"tick_"})],1)},a=[],n=(i("456d"),i("8615"),i("96cf"),i("3b8d")),s=(i("ac4d"),i("8a81"),i("7f7f"),i("ac6a"),i("0fea")),o=i("333d"),l=i("d359"),c=i("b44b"),d=i("d850"),p=i("1f70"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"print",staticStyle:{padding:"20px"}},[i("h3",{staticClass:"print_title"},[t._v("嘉鱼县殡葬管理所殡仪服务结算单")]),t._v(" "),i("div",{staticClass:"prinr_foot"},[t._v("\n      "+t._s(t.currentdate)+"\n    ")]),t._v(" "),i("table",{staticClass:"table_print",attrs:{id:"hall_print"}},[i("tr",[i("td",[t._v("逝者姓名")]),t._v(" "),i("td",{staticStyle:{width:"100px"}},[t._v(t._s(t.list.name))]),t._v(" "),i("td",{staticStyle:{width:"50px"}},[t._v("性别")]),t._v(" "),i("td",{staticStyle:{width:"50px"}},[t._v(t._s(t.list.sex))]),t._v(" "),i("td",[t._v("年龄")]),t._v(" "),i("td",[t._v(t._s(t.list.age))]),t._v(" "),i("td",[t._v("死亡原因")]),t._v(" "),i("td",{staticStyle:{width:"100px"}},[t._v(t._s(t.list.reason))])]),t._v(" "),i("tr",[i("td",[t._v("身份证号码")]),t._v(" "),i("td",{attrs:{colspan:"3"}},[t._v(t._s(t.list.card))]),t._v(" "),i("td",[t._v("地址")]),t._v(" "),i("td",{attrs:{colspan:"3"}},[t._v(t._s(t.list.registered))])]),t._v(" "),i("tr",[i("td",[t._v("联系人")]),t._v(" "),i("td",[t._v(t._s(t.list.linkman))]),t._v(" "),i("td",[t._v("性别")]),t._v(" "),i("td",[t._v(t._s(t.list.linksex))]),t._v(" "),i("td",[t._v("联系电话")]),t._v(" "),i("td",[t._v(t._s(t.list.linkphone))]),t._v(" "),i("td",[t._v("与逝者关系")]),t._v(" "),i("td",[t._v(t._s(t.list.relation))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.server,function(e,r,a){return i("tr",{key:a,staticClass:"servers"},[i("td",{attrs:{colspan:"2"}},[t._v(t._s(e.title)+" ")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(e.number))]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(e.price))]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(e.totalprice))])])}),t._v(" "),null!=t.mourn?i("tr",[i("td",{attrs:{colspan:"2"}},[t._v("悼念厅")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v("1")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.mourn.price))]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.mourn.totalprice))])]):t._e(),t._v(" "),null!=t.cold?i("tr",[i("td",{attrs:{colspan:"2"}},[t._v("冷柜")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v("1")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.cold.price))]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.cold.totalprice))])]):t._e(),t._v(" "),i("tr",[i("td",{attrs:{colspan:"2"}},[t._v("总计")]),t._v(" "),i("td",{attrs:{colspan:"4"}}),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.totalprice)+" 元")])])],2),t._v(" "),i("div",[i("p",[t._v("经办人: "+t._s(t.list.operator))])])])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",{attrs:{colspan:"8"}},[t._v("已 选 服 务 项 目")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{staticClass:"servers"},[i("td",{attrs:{colspan:"2"}},[t._v("服务名称")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v("数量")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v("单价")]),t._v(" "),i("td",{attrs:{colspan:"2"}},[t._v("合计")])])}],u=i("ac0d"),h={mixins:[u["a"]],data:function(){return{list:{},server:null,mourn:null,cold:null,send:null,currentdate:"",totalprice:""}},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},init:function(t){var e=this;this.server=t.voca,this.list=t.list,this.cold=t.cold,this.mourn=t.mourn,this.totalprice=t.totalprice,this.send=t.carsend,this.$nextTick(function(){e.print()})},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();i>=1&&i<=9&&(i="0"+i),r>=0&&r<=9&&(r="0"+r),this.currentdate=e+"年"+i+"月"+r+"日"}}},f=h,m=(i("fb51"),i("2877")),g=Object(m["a"])(f,_,v,!1,null,"3d4b6a80",null),b=g.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"print",staticStyle:{padding:"0 30px"}},[i("h3",{staticStyle:{"text-align":"center",display:"inline-block",height:"20px","font-weight":"800",width:"100%","margin-top":"50px","font-size":"30px"}},[t._v("惠民殡葬减免凭证")]),t._v(" "),i("table",{staticClass:"tb",staticStyle:{border:"0"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("tr",[i("td",{staticStyle:{border:"none"}},[t._v("厅名: "+t._s(t.list.mourn_title))]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("逝者姓名: "+t._s(t.list.name))]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("性别: "+t._s(t.list.sex))]),t._v(" "),i("td",{staticStyle:{border:"none"}},[t._v("年龄: "+t._s(t.list.age))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"4"}},[t._v("身份证号: "+t._s(t.list.card))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"4"}},[t._v("家庭住址: "+t._s(t.list.registered))])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"4"}},[t._v("进厅日期: "),i("u",[t._v(t._s(t.list.startime))])])]),t._v(" "),i("tr",[i("td",{staticStyle:{border:"none"},attrs:{colspan:"4"}},[t._v("火化日期: "),i("u",[t._v(t._s(t.list.farewelltime))])])])]),t._v(" "),i("hr"),t._v(" "),i("div",[i("table",{staticClass:"tb",staticStyle:{border:"0"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("tr",[i("td",[t._v("惠民殡葬服务内容:  ")]),t._v(" "),i("td",[t._v("车费 "),i("span",[t._v(t._s(t.list.car_price)+" 元")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("骨灰盒费 "),i("span",[t._v(t._s(t.list.check_price)+" 元")])]),t._v(" "),i("td",[t._v("寿衣 "),i("span",[t._v(t._s(t.list.shroud_price)+" 元")])])]),t._v(" "),i("tr",[i("td"),t._v(" "),i("td",[t._v("冷棺 "),i("span",[t._v(t._s(t.list.cold_price)+" 元")])]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("环保花圈 "),i("span",[t._v(t._s(t.list.flower_price)+" 元")])]),t._v(" "),i("td",[t._v("主持 "),i("span",[t._v(t._s(t.list.direct_price)+" 元")])])]),t._v(" "),i("tr",[i("td",{attrs:{colspan:"2"}}),t._v(" "),i("td",{staticStyle:{"text-align":"right","padding-right":"85px"},attrs:{colspan:"2"}},[t._v("惠民金额: "+t._s(t.list.totalprice)+" 元 ")])]),t._v(" "),t._m(0)])]),t._v(" "),i("hr"),t._v(" "),i("table",{staticClass:"tb",staticStyle:{border:"0"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"3"}},[t._v(t._s(t.currentdate))])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"3"}},[t._v("经办人: "+t._s(t.list.operator))])])])])])},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{attrs:{colspan:"2"}}),t._v(" "),i("td",{staticStyle:{"text-align":"right","padding-right":"50px"},attrs:{colspan:"2"}},[t._v("承办人(家属)签字: "),i("div",{staticStyle:{display:"inline-block","border-bottom":"1px solid #000",width:"100px"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{attrs:{colspan:"3"}},[t._v("与逝者关系: "),i("div",{staticStyle:{display:"inline-block","border-bottom":"1px solid #000",width:"150px"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{attrs:{colspan:"3"}},[t._v("经办人身份证号: "),i("div",{staticStyle:{display:"inline-block","border-bottom":"1px solid #000",width:"150px"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{attrs:{colspan:"3"}},[t._v("经办人联系方式: "),i("div",{staticStyle:{display:"inline-block","border-bottom":"1px solid #000",width:"150px"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",{attrs:{colspan:"3"}},[t._v("家属银行账号信息: "),i("div",{staticStyle:{display:"inline-block","border-bottom":"1px solid #000",width:"300px"}})])])}],w={data:function(){return{currentdate:"",list:{car_price:0,check_price:0,shroud_price:0,cold_price:0,direct_price:0,flower_price:0,totalprice:0}}},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},init:function(t,e){var i=this;t&&(this.list=Object.assign({},t)),this.$nextTick(function(){i.print()})},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();i>=1&&i<=9&&(i="0"+i),r>=0&&r<=9&&(r="0"+r),this.currentdate=e+"年"+i+"月"+r+"日"}}},x=w,S=(i("be8b"),Object(m["a"])(x,y,k,!1,null,null,null)),$=S.exports,F=i("b7ab"),C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",{ref:"print"},[[t._l(t.vert,function(t,e){return[i("drag",{key:e,attrs:{child:t}})]})]],2)])},O=[],j=(i("28a5"),i("29e9")),P={components:{Drag:j["a"]},data:function(){return{dialogFormVisible:!1,vert:[{t:"",left:"276",top:"24",width:"200",id:0},{t:"",left:"274",top:"67",width:"200",id:1},{t:"",left:"274",top:"107",width:"200",id:2},{t:"",left:"273",top:"150",width:"200",id:3},{t:"",left:"131",top:"293",width:"250",id:4},{t:"",left:"230",top:"295",width:"200",id:5},{t:"",left:"318",top:"298",width:"200",id:6},{t:"",left:"130",width:"200",top:"333",id:7},{t:"",left:"230",width:"200",top:"335",id:8},{t:"",left:"318",width:"200",top:"335",id:9},{t:"",left:"137",width:"250",top:"378",id:10},{t:"",left:"248",width:"200",top:"484",id:11},{t:"",left:"382",width:"200",top:"484",id:12},{t:"",left:"325",width:"200",top:"484",id:13}],list:null,year:"",month:"",strDate:"",date:new Date}},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();i>=1&&i<=9&&(i="0"+i),r>=0&&r<=9&&(r="0"+r),this.year=e,this.month=i,this.strDate=r,this.currentdate=e+"年"+i+"月"+r+"日"},init:function(t){var e=this,i=[];i.push(t),this.dialogFormVisible=!0,i.forEach(function(t,i){var r=t.o_dietime.split("-"),a=t.farewelltime.substr(0,10),n=a.split("-");e.vert.forEach(function(i,a){switch(10==i.id&&(i.t=t.o_registered),11==i.id&&(i.t=e.year),12==i.id&&(i.t=e.strDate),13==i.id&&(i.t=e.month),a){case 0:i.t=t.o_name;break;case 1:i.t=t.o_sex;break;case 2:i.t=t.birthday;break;case 3:i.t=t.serial;break;case 4:i.t=r[0];break;case 5:i.t=r[1];break;case 6:i.t=r[2];break;case 7:i.t=n[0];break;case 8:i.t=n[1];break;case 9:i.t=n[2];default:}})}),this.$nextTick(function(){e.print()})}}},L=P,D=Object(m["a"])(L,C,O,!1,null,null,null),E=D.exports,I=i("6fa7"),N={name:"VueGarden",components:{Pagination:o["a"],sign:l["a"],service:I["a"],e560:d["a"],people:$,fire:p["a"],prints:E,hall:b,server:F["a"],tick:c["a"]},mixins:[u["a"]],data:function(){return{list:null,car:null,finance_status:1,dialogFormpay:!1,listLoadingPay:!1,recetype:null,print_id:"",index:1,sign_img:{send:"",voca:"",fire:"",hall:""},people:{id:"",oid:"",car_price:0,flower_price:0,check_price:0,shroud_price:0,cold_price:0,direct_price:0,totalprice:0,operator:"",remark:""},dialogFormVisiblepeople:!1,address:"",index_sign:"",sign_img_save:"",sign_img_derate:"",record_sign:"",record_sign_info:"",signatureid:"",sex:["男","女"],record_ifsign:"",info_list:null,payval:"",timeout:null,activeName:"first",branchList:null,dataForm:{name:"",sex:"",age:"",card:"",registered:"",reason:"",linkman:"",number:"",relation:"",dietime:null,linksex:"",nation:"",haulier:"",linkphone:"",operator:"",server:null,c_remark:"",oid:"",id:""},info_temp:{name:"",sex:"",age:"",card:"",farewelltime:null,registered:"",reason:"",linkman:"",relation:"",linksex:"",nation:"",linkphone:"",operator:""},send:{name:"",sex:"",age:"",address:"",cid:"",recetype:"",outtime:null,linkman:"",totalprice:"",linkphone:"",driver:"",operator:"",remark:"",id:"",oid:""},service:{id:"",name:"",operator:"",server:null},row:null,derate:{name:"",age:"",sex:"",registered:"",card:"",object:"",papers:"",serial:"",signtime:null,oneprice:"",twoprice:"",threeprice:"",totalprice:"",operator:"",signature:"",id:"",oid:""},save:{name:"",serial:"",startime:null,endtime:null,signature:"",card:"",linkman:"",linkphone:"",linkaddress:"",operator:"",totalprice:"",id:"",oid:""},serlist:{send:null,voca:null,fire:null,hall:null},carsend:null,mourn:null,cold:null,totalprice:0,name:"",oid:"",total:0,listLoading:!0,listQuery:{page:1,limit:20,search_data:"",sort:"add_time",order:"desc"},dialogFormInfo:!1,dialogFormVisible:!1,dialogFormVisibleSign:!1,dialogFormSign:!1,dialogFormServer:!1,print_data:{send:null,mourn:null,cold:null,voca:null,name:"",operator:"",address:"",totalprice:""},dialogStatus:"",textMap:{update:"编辑",create:"创建"},rules:{type_name:[{required:!0,message:"墓园名称不能为空",trigger:"blur"}]}}},computed:{},watch:{payval:{handler:function(t,e){var i=this;clearTimeout(this.timeout),this.timeout=setTimeout(function(){i.getListPOI(t)},300)}}},created:function(){var t=this;this.getList(),Object(s["w"])().then(function(e){t.recetype=e.data.recetype,t.car=e.data.car})},methods:{getList:function(){var t=this;this.listLoading=!0,Object(s["O"])(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total||0,t.listLoading=!1}).catch(function(){t.list=[],t.total=0,t.listLoading=!1})},updatePeople:function(){var t=this;this.people.operator=this.info.realname,Object(s["H"])(this.people).then(function(e){t.$notify.success({title:"成功",message:"操作成功"}),t.dialogFormVisiblepeople=!1})},solos:function(t){var e=[];return t.forEach(function(t,i){e.push(t.services)}),[].concat.apply([],e)},getListPOI:function(t){var e=this;if(""===t)return!1;if(this.payval===t){this.listLoadingPay=!0;var i={id:this.signatureid,name:this.name,totalprice:this.totalprice,paycode:t,operator:this.info.realname};Object(s["Y"])(i).then(function(t){e.listLoadingPay=!1,e.dialogFormpay=!1,e.dialogFormInfo=!1,e.getList(),e.$notify.success({title:"成功",message:"支付成功"})}).catch(function(t){e.listLoadingPay=!1,e.$notify.error({title:"失败",message:t.msg})})}},handlePrint:function(t){var e=this,i={voca:this.serlist.voca,mourn:this.mourn,cold:this.cold,list:this.info_temp,totalprice:this.totalprice};this.$nextTick(function(){e.$refs.hall_.init(i)})},getCommon:function(t){var e=this,i={id:this.service.id};Object(s["cb"])(i).then(function(i){e.server=i.data.services;var r={type:t,server:e.server};e.$refs.server.showService(r),e.$refs.server.editService(i.data.servicesOrder)})},handlePrintPay:function(){var t=this;this.$nextTick(function(){t.$refs.server_.getlist(t.print_data)})},handleServer:function(t){this.service.id=t.id,this.service.name=t.name,this.service.operator=t.operator,this.getCommon(1),this.dialogFormServer=!0},service_data:function(t){this.service.server=t},handlepeople:function(t){var e=this,i={oid:t.id};Object(s["I"])(i).then(function(i){i.data?e.people={oid:t.id,id:i.data.id,car_price:i.data.car_price,flower_price:i.data.flower_price,check_price:i.data.check_price,shroud_price:i.data.shroud_price,cold_price:i.data.cold_price,direct_price:i.data.direct_price,totalprice:i.data.totalprice,remark:i.data.remark}:e.people={id:"",oid:t.id,car_price:0,flower_price:0,check_price:0,shroud_price:0,cold_price:0,direct_price:0,totalprice:0,operator:"",remark:""},e.dialogFormVisiblepeople=!0})},totals:function(){this.people.totalprice=parseInt(this.people.flower_price)+parseInt(this.people.car_price)+parseInt(this.people.check_price)+parseInt(this.people.shroud_price)+parseInt(this.people.cold_price)+parseInt(this.people.direct_price)},handleSend:function(){var t=this;Object(s["bb"])(this.service).then(function(e){t.getList(),t.dialogFormServer=!1,t.$notify.success({title:"成功",message:"付款成功"})})},CarBind:function(t){var e=!0,i=!1,r=void 0;try{for(var a,n=this.car[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var s=a.value;if(s.id===t){this.send.driver=s.chauffeur,this.send.totalprice=s.price;break}}}catch(o){i=!0,r=o}finally{try{e||null==n.return||n.return()}finally{if(i)throw r}}},handleClick:function(t,e){this.index=parseInt(t.index)+1,this.checkCommonFn()},handleFilter:function(){this.listQuery.page=1,this.getList()},sign_open:function(t){var e=this;this.index_sign=t,this.record_sign="",this.record_sign_info="",this.dialogFormVisibleSign=!0,this.$nextTick(function(){e.$refs.child.initDevice()})},sign_close:function(){this.$refs.child.uninitDevice()},cancel:function(){this.dialogFormVisibleSign=!1},imgData:function(t){0==this.index_sign?this.record_sign=t:this.record_sign_info=t},handlePrintPeople:function(){var t=this,e={oid:this.print_id};Object(s["I"])(e).then(function(e){t.$refs.people_.init(e.data)})},handletick:function(){var t={id:this.print_id,totalprice:this.print_data.totalprice,name:this.print_data.name,operator:this.info.realname,address:this.address,type:1};this.$refs.tick_.init(t)},open:function(t){this.record_sign=t,this.dialogFormSign=!0},handleEnd:function(t){var e=this;this.$confirm("您确认此操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i={id:t.id,state:15};Object(s["X"])(i).then(function(t){e.getList(),e.$message({type:"success",message:"操作成功!"})})}).catch(function(){e.$message({type:"info",message:"已取消操作"})})},changePrice:function(t){var e=this,i={id:t.id,oid:t.oid,name:this.info_temp.name,totalprice:t.totalprice};Object(s["j"])(i).then(function(t){0==t.code&&(e.$notify.success({title:"成功",message:"价格修改成功"}),e.totalprice=t.data)})},handlePrintFire:function(){var t=this,e={oid:this.dataForm.id};Object(s["Z"])(e).then(function(e){t.$refs.fire_.init(e.data)})},handlePrintFireCard:function(){var t=this,e={oid:this.dataForm.id};Object(s["Z"])(e).then(function(e){t.$refs.prints_.init(e.data)})},changeBand:function(t){var e=this,i={sid:t.sid,oid:t.oid,name:this.info_temp.name,totalprice:t.totalprice};Object(s["k"])(i).then(function(t){0==t.code&&(e.$notify.success({title:"成功",message:"价格修改成功"}),e.totalprice=t.data)})},derateSend:function(){var t=this;this.derate.signature=this.record_sign,Object(s["A"])(this.derate).then(function(e){0==e.code&&(t.dialogFormVisible=!1,t.getList(),t.$notify.success({title:"成功",message:"操作成功"}))})},sumPrice:function(){var t=0;t=parseInt(this.derate.oneprice?this.derate.oneprice:0)+parseInt(this.derate.twoprice?this.derate.twoprice:0)+parseInt(this.derate.threeprice?this.derate.threeprice:0),this.derate.totalprice=t},handleDerate:function(t){var e=this,i={id:t.id};Object(s["B"])(i).then(function(t){e.derate=Object.assign({},t.data),e.derate.operator=void 0==e.derate.operator?e.info.realname:e.derate.operator,e.record_sign=t.data.signature,e.dialogFormVisible=!0})},handleCheckinfo:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.row=e,t.next=3,this.checkCommonFn();case 3:return t.next=5,this.showcheck();case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),checkCommonFn:function(){var t=this,e={id:this.row.id,type:this.index};Object(s["m"])(e).then(function(e){t.rest(),e.data?1==t.index?(t.save=Object.assign({},e.data),t.save.operator=""==t.save.operator?t.info.realname:t.save.operator):(t.send=Object.assign({},e.data),t.send.operator=""==t.send.operator?t.info.realname:t.send.operator):1==t.index?(t.save.name=t.row.name,t.save.linkman=t.row.linkman,t.save.sex=t.row.sex,t.save.linkphone=t.row.linkphone):(t.send.sex=t.row.sex,t.send.name=t.row.name,t.send.linkman=t.row.linkman,t.send.linkphone=t.row.linkphone)})},rest:function(){this.save={name:"",serial:"",startime:null,endtime:null,signature:"",card:"",linkman:"",linkphone:"",linkaddress:"",operator:"",totalprice:"",id:"",oid:""},this.send={name:"",sex:"",age:"",address:"",cid:"",recetype:"",outtime:null,linkman:"",totalprice:"",linkphone:"",driver:"",operator:"",remark:"",id:"",oid:""},this.check={name:"",serial:"",startime:null,endtime:null,signature:"",card:"",linkman:"",linkphone:"",linkaddress:"",operator:"",totalprice:""},this.serlist={send:null,voca:null,fire:null,hall:null},this.carsend=null,this.cold=null,this.mourn=null},handleInfo:function(t){this.dataForm=Object.assign({},t),this.signatureid=t.id,this.finance_status=t.finance_status,this.print_id=t.id,this.record_sign_info="",this.totalprice=t.totalprice,this.print_data.totalprice=t.totalprice,this.address=t.registered,this.name=t.name,this.print_data.name=t.name,this.print_data.operator=t.operator,this.oid=t.id,this.info_(t)},info_:function(t,e){var i=this,r={id:t.id};this.rest(),Object(s["N"])(r).then(function(t){var e=t.data.branchList;i.branchList=t.data.branchList;var r=Object.values(e);r[1].record&&(i.mourn=r[1].record.mourn,i.cold=r[1].record.cold),Object.keys(i.serlist).forEach(function(t,e){i.serlist[t]=i.solo(r[e]),i.sign_img[t]=r[e].signature}),i.sign_img_derate=t.data.derate.signature,t.data.check&&(i.sign_img_save=t.data.check.signature),i.serlist.voca=i.serlist.voca.concat(i.serlist.send),i.print_data.mourn=i.mourn,i.print_data.cold=i.cold,i.print_data.voca=i.serlist.voca,i.info_temp=t.data.obituary,i.print_data.serial=t.data.obituary.serial,i.record_ifsign=t.data.obituary.record_ifsign,i.record_sign=t.data.obituary.record_sign,t.data.check&&(i.check=t.data.check),i.derate=t.data.derate,i.dialogFormInfo=!0})},solo:function(t){var e=[];return t.services.forEach(function(t,i){e.push(t.services)}),[].concat.apply([],e)},handlePaySm:function(){var t=this;this.$confirm("是否付款?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.payval="",t.dialogFormpay=!0,t.$nextTick(function(){t.$refs.myNameId.focus()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},handlePay:function(t){var e=this;this.$confirm("是否付款?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={name:e.name,oid:e.oid,totalprice:e.totalprice,operator:e.info.realname,record_sign:e.record_sign_info};Object(s["P"])(t).then(function(t){0==t.code&&(e.getList(),e.dialogFormInfo=!1,e.$notify.success({title:"成功",message:"付款成功"}))})}).catch(function(){e.$message({type:"info",message:"已取消"})})}}},T=N,V=(i("9b4b"),Object(m["a"])(T,r,a,!1,null,null,null));e["default"]=V.exports},be8b:function(t,e,i){"use strict";var r=i("1815"),a=i.n(r);a.a},c6ac:function(t,e,i){},fb51:function(t,e,i){"use strict";var r=i("39b1"),a=i.n(r);a.a}}]);