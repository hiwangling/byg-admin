(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09a36c28"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function i(t,e,n){var i=o(),s=t-i,c=20,l=0;e="undefined"===typeof e?500:e;var d=function t(){l+=c;var o=Math.easeInOutQuad(l,i,s,e);a(o),l<e?r(t):n&&"function"===typeof n&&n()};d()}},"0fea":function(t,e,n){"use strict";n.d(e,"U",function(){return a}),n.d(e,"x",function(){return o}),n.d(e,"F",function(){return i}),n.d(e,"G",function(){return s}),n.d(e,"w",function(){return c}),n.d(e,"D",function(){return l}),n.d(e,"y",function(){return d}),n.d(e,"R",function(){return u}),n.d(e,"W",function(){return m}),n.d(e,"b",function(){return f}),n.d(e,"T",function(){return p}),n.d(e,"h",function(){return v}),n.d(e,"E",function(){return b}),n.d(e,"z",function(){return _}),n.d(e,"fb",function(){return h}),n.d(e,"V",function(){return g}),n.d(e,"a",function(){return y}),n.d(e,"C",function(){return F}),n.d(e,"v",function(){return k}),n.d(e,"S",function(){return j}),n.d(e,"eb",function(){return O}),n.d(e,"gb",function(){return x}),n.d(e,"ab",function(){return S}),n.d(e,"s",function(){return w}),n.d(e,"o",function(){return $}),n.d(e,"q",function(){return C}),n.d(e,"t",function(){return V}),n.d(e,"u",function(){return L}),n.d(e,"r",function(){return D}),n.d(e,"n",function(){return E}),n.d(e,"O",function(){return Q}),n.d(e,"N",function(){return T}),n.d(e,"P",function(){return I}),n.d(e,"Q",function(){return N}),n.d(e,"m",function(){return z}),n.d(e,"cb",function(){return A}),n.d(e,"bb",function(){return B}),n.d(e,"A",function(){return M}),n.d(e,"B",function(){return P}),n.d(e,"j",function(){return q}),n.d(e,"k",function(){return G}),n.d(e,"l",function(){return R}),n.d(e,"M",function(){return U}),n.d(e,"L",function(){return J}),n.d(e,"K",function(){return Y}),n.d(e,"X",function(){return H}),n.d(e,"Z",function(){return K}),n.d(e,"db",function(){return W}),n.d(e,"c",function(){return X}),n.d(e,"i",function(){return Z}),n.d(e,"d",function(){return tt}),n.d(e,"e",function(){return et}),n.d(e,"g",function(){return nt}),n.d(e,"f",function(){return rt}),n.d(e,"p",function(){return at}),n.d(e,"I",function(){return ot}),n.d(e,"J",function(){return it}),n.d(e,"H",function(){return st}),n.d(e,"Y",function(){return ct});var r=n("b775");function a(t){return Object(r["a"])({url:"/carsend/list",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/carsend/add",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/carsend/edit",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/carsend/driveredit",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/carsend/common",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/carsend/editinfo",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/carsend/del",method:"get",params:t})}function u(t){return Object(r["a"])({url:"/obituary/common",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/obituary/list",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/obituary/add",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/obituary/info",method:"get",params:t})}function v(t){return Object(r["a"])({url:"/cabinet/info",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/obituary/edit",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/obituary/del",method:"get",params:t})}function h(t){return Object(r["a"])({url:"/obituary/sign",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/cremation/list",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/cremation/add",method:"post",data:t})}function F(t){return Object(r["a"])({url:"/cremation/edit",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/cremation/common",method:"get",params:t})}function j(t){return Object(r["a"])({url:"/cremation/info",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/cremation/sign",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/cremation/state",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/cremation/send",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/check/list",method:"post",data:t})}function $(t){return Object(r["a"])({url:"/check/add",method:"post",data:t})}function C(t){return Object(r["a"])({url:"/check/edit",method:"post",data:t})}function V(t){return Object(r["a"])({url:"/check/renew",method:"post",data:t})}function L(t){return Object(r["a"])({url:"/check/take",method:"post",data:t})}function D(t){return Object(r["a"])({url:"/check/details",method:"get",params:t})}function E(t){return Object(r["a"])({url:"/check/sign",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/finance/list",method:"post",data:t})}function T(t){return Object(r["a"])({url:"/finance/info",method:"get",params:t})}function I(t){return Object(r["a"])({url:"/finance/pay",method:"post",data:t})}function N(t){return Object(r["a"])({url:"/finance/check",method:"post",data:t})}function z(t){return Object(r["a"])({url:"/finance/checkCommon",method:"post",data:t})}function A(t){return Object(r["a"])({url:"/finance/services",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/finance/servicesAdd",method:"post",data:t})}function M(t){return Object(r["a"])({url:"/finance/derateAdd",method:"post",data:t})}function P(t){return Object(r["a"])({url:"/finance/derateCommon",method:"post",data:t})}function q(t){return Object(r["a"])({url:"/finance/carsendEdit",method:"post",data:t})}function G(t){return Object(r["a"])({url:"/finance/carsendSerEdit",method:"post",data:t})}function R(t){return Object(r["a"])({url:"/carsend/again",method:"post",data:t})}function U(t){return Object(r["a"])({url:"/financeDerate/list",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/financeDerate/edit",method:"post",data:t})}function Y(t){return Object(r["a"])({url:"/financeDerate/del",method:"get",params:t})}function H(t){return Object(r["a"])({url:"/obituary/state",method:"post",data:t})}function K(t){return Object(r["a"])({url:"/cremation/printinfo",method:"get",params:t})}function W(t){return Object(r["a"])({url:"/services/sign",method:"post",data:t})}function X(t){return Object(r["a"])({url:"/mourn/business",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"/canteen/pay",method:"post",data:t})}function tt(t){return Object(r["a"])({url:"/cabinet/list",method:"post",data:t})}function et(t){return Object(r["a"])({url:"/cabinet/add",method:"post",data:t})}function nt(t){return Object(r["a"])({url:"/cabinet/edit",method:"post",data:t})}function rt(t){return Object(r["a"])({url:"/cabinet/del",method:"get",params:t})}function at(t){return Object(r["a"])({url:"/check/del",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/financeBrt/info",method:"get",params:t})}function it(t){return Object(r["a"])({url:"/financeBrt/list",method:"post",data:t})}function st(t){return Object(r["a"])({url:"/financeBrt/add",method:"post",data:t})}function ct(t){return Object(r["a"])({url:"/finance/postPay",method:"post",data:t})}},"1f70":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"print"},[n("h3",{staticStyle:{"text-align":"center",display:"inline-block",height:"20px","font-weight":"800",width:"100%","margin-top":"20px"}},[t._v("2019年火化登记表")]),t._v(" "),n("div",{staticStyle:{"text-align":"right","padding-right":"50px"}},[t._v("编号: "+t._s(t.list.serial))]),t._v(" "),n("table",{staticClass:"tb",staticStyle:{border:"0"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[n("tr",[n("td",{staticStyle:{border:"none"}},[t._v("逝者姓名: "+t._s(t.list.o_name))]),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("性别: "+t._s(t.list.o_sex))]),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("年龄: "+t._s(t.list.o_age))])]),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("身份证号: "+t._s(t.list.o_card))])]),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("家庭住址: "+t._s(t.list.o_registered))])]),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"}},[t._v("死亡日期: "),n("u",[t._v(t._s(t.list.o_dietime))])]),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("火化日期: "),n("u",[t._v(t._s(t.list.farewelltime))])]),t._v(" "),n("td",{staticStyle:{border:"none"}})]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"}}),t._v(" "),n("td",{staticStyle:{border:"none"}}),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v(t._s(t.currentdate))])])]),t._v(" "),n("hr"),t._v(" "),n("h3",{staticStyle:{"text-align":"center",display:"inline-block",height:"20px","font-weight":"800",width:"100%","margin-top":"20px"}},[t._v("火化通知单")]),t._v(" "),n("div",{staticStyle:{"text-align":"right","padding-right":"50px"}},[t._v("编号: "+t._s(t.list.serial))]),t._v(" "),n("div",{staticStyle:{"text-align":"right","padding-right":"50px",height:"50px","line-height":"50px"}},[t._v("所选炉型: "+t._s(t.list.l_title))]),t._v(" "),n("table",{staticClass:"tb",staticStyle:{border:"0"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[n("tr",[n("td",{staticStyle:{border:"none"}},[t._v("逝者姓名: "+t._s(t.list.o_name))]),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("性别: "+t._s(t.list.o_sex))]),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("年龄: "+t._s(t.list.o_age))])]),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("身份证号: "+t._s(t.list.o_card))])]),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("家庭住址: "+t._s(t.list.o_registered))])]),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"}},[t._v("死亡日期:  "),n("u",[t._v(t._s(t.list.o_dietime))])]),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("火化日期: "),n("u",[t._v(t._s(t.list.farewelltime))])]),t._v(" "),n("td",{staticStyle:{border:"none"}})]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("tr",[n("td",{staticStyle:{border:"none"}}),t._v(" "),n("td",{staticStyle:{border:"none"}}),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v(t._s(t.currentdate))])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{border:"none"}},[t._v("承办人(家属)签字:")]),t._v(" "),n("td",{staticStyle:{border:"none"}}),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("与逝者关系:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("经办人身份证号: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("经办人联系方式: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{border:"none",height:"40px"},attrs:{colspan:"3"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{border:"none"}},[t._v("承办人(家属)签字:")]),t._v(" "),n("td",{staticStyle:{border:"none"}}),t._v(" "),n("td",{staticStyle:{border:"none"}},[t._v("与逝者关系:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{border:"none"},attrs:{colspan:"3"}},[t._v("经办人联系方式: ")])])}],o={data:function(){return{currentdate:"",list:{}}},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},init:function(t,e){var n=this;this.list=Object.assign({},t),this.$nextTick(function(){n.print()})},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();n>=1&&n<=9&&(n="0"+n),r>=0&&r<=9&&(r="0"+r),this.currentdate=e+"年"+n+"月"+r+"日"}}},i=o,s=(n("ad6d"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},"309d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.listQuery.search_data,callback:function(e){t.$set(t.listQuery,"search_data",e)},expression:"listQuery.search_data"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"逝者姓名",prop:"o_name",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系人",prop:"o_linkman",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"o_linkphone",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"服务",prop:"services"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"火化时间",prop:"o_farewelltime",width:"160"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.sign?[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleSi(e.row)}}},[t._v("签收")])]:[1==e.row.state?n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.handleFire(e.row)}}},[t._v("开始火化")]):n("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(n){return t.handleQu(e.row)}}},[t._v("取灰")])],t._v(" "),n("el-button",{attrs:{icon:"el-icon-search",type:"primary",size:"mini"},on:{click:function(n){return t.handleSign(e.row)}}},[t._v("详情")])]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-tabs",{attrs:{type:"card"},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"基本信息",name:"info"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.getCard(0)}}},[t._v("逝者信息")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.getCard(1)}}},[t._v("联系人信息")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.resetForm}},[t._v("清空信息")])],1),t._v(" "),n("el-form",{ref:"dataForm",attrs:{rules:t.rules,inline:!0,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"逝者姓名",prop:"name"}},[n("el-input",{model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"逝者性别",prop:"sex"}},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"185px"},attrs:{placeholder:"选择性别",clearable:""},model:{value:t.dataForm.sex,callback:function(e){t.$set(t.dataForm,"sex",e)},expression:"dataForm.sex"}},t._l(t.sex,function(t,e){return n("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"逝者年龄",prop:"age"}},[n("el-input",{model:{value:t.dataForm.age,callback:function(e){t.$set(t.dataForm,"age",e)},expression:"dataForm.age"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"民族",prop:"nation"}},[n("el-input",{model:{value:t.dataForm.nation,callback:function(e){t.$set(t.dataForm,"nation",e)},expression:"dataForm.nation"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"身份证",prop:"card"}},[n("el-input",{model:{value:t.dataForm.card,callback:function(e){t.$set(t.dataForm,"card",e)},expression:"dataForm.card"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"户口所在地",prop:"registered"}},[n("el-input",{model:{value:t.dataForm.registered,callback:function(e){t.$set(t.dataForm,"registered",e)},expression:"dataForm.registered"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"死亡时间",prop:"dietime"}},[n("el-date-picker",{staticStyle:{width:"185px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.dataForm.dietime,callback:function(e){t.$set(t.dataForm,"dietime",e)},expression:"dataForm.dietime"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"死亡原因",prop:"reason"}},[n("el-input",{model:{value:t.dataForm.reason,callback:function(e){t.$set(t.dataForm,"reason",e)},expression:"dataForm.reason"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人",prop:"linkman"}},[n("el-input",{model:{value:t.dataForm.linkman,callback:function(e){t.$set(t.dataForm,"linkman",e)},expression:"dataForm.linkman"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人性别",prop:"linksex"}},[n("el-select",{staticClass:"filter-item",staticStyle:{width:"185px"},attrs:{placeholder:"选择性别",clearable:""},model:{value:t.dataForm.linksex,callback:function(e){t.$set(t.dataForm,"linksex",e)},expression:"dataForm.linksex"}},t._l(t.sex,function(t,e){return n("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人电话",prop:"linkphone"}},[n("el-input",{model:{value:t.dataForm.linkphone,callback:function(e){t.$set(t.dataForm,"linkphone",e)},expression:"dataForm.linkphone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"逝者关系",prop:"relation"}},[n("el-input",{model:{value:t.dataForm.relation,callback:function(e){t.$set(t.dataForm,"relation",e)},expression:"dataForm.relation"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"承运人",prop:"haulier"}},[n("el-input",{model:{value:t.dataForm.haulier,callback:function(e){t.$set(t.dataForm,"haulier",e)},expression:"dataForm.haulier"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"操作员",prop:"operator"}},[n("el-input",{model:{value:t.dataForm.operator,callback:function(e){t.$set(t.dataForm,"operator",e)},expression:"dataForm.operator"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"备注",prop:"c_remark"}},[n("el-input",{model:{value:t.dataForm.c_remark,callback:function(e){t.$set(t.dataForm,"c_remark",e)},expression:"dataForm.c_remark"}})],1)],1)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"选择服务",name:"second"}},[n("service",{ref:"server",on:{service_data:t.service_data}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?n("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):n("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"查看",visible:t.dialogFormVisibleInfo},on:{"update:visible":function(e){t.dialogFormVisibleInfo=e}}},[n("div",{staticClass:"bury_car"},[n("h1",{staticClass:"bury_car_h1"},[t._v("逝者信息")]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 逝者姓名 : ")]),t._v(t._s(t.dataForm.o_name))]),t._v(" "),n("p",[n("span",[t._v(" 逝者民族 : ")]),t._v(t._s(t.dataForm.o_nation))]),t._v(" "),n("p",[n("span",[t._v(" 户口所在地 : ")]),t._v(t._s(t.dataForm.o_registered))]),t._v(" "),n("p",[n("span",[t._v(" 联系人性别 : ")]),t._v(t._s(t.dataForm.o_linksex))]),t._v(" "),n("p",[n("span",[t._v(" 承运人 : ")]),t._v(t._s(t.dataForm.haulier))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 逝者性别 : ")]),t._v(t._s(t.dataForm.o_sex))]),t._v(" "),n("p",[n("span",[t._v(" 死亡原因 : ")]),t._v(t._s(t.dataForm.o_reason))]),t._v(" "),n("p",[n("span",[t._v(" 死亡时间 : ")]),t._v(t._s(t.dataForm.o_dietime))]),t._v(" "),n("p",[n("span",[t._v(" 联系人电话 : ")]),t._v(t._s(t.dataForm.o_linkphone))]),t._v(" "),n("p",[n("span",[t._v(" 备注 : ")]),t._v(t._s(t.dataForm.remark))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 逝者年龄 : ")]),t._v(t._s(t.dataForm.o_age))]),t._v(" "),n("p",[n("span",[t._v(" 身份证 : ")]),t._v(t._s(t.dataForm.o_card))]),t._v(" "),n("p",[n("span",[t._v(" 联系人 : ")]),t._v(t._s(t.dataForm.o_linkman))]),t._v(" "),n("p",[n("span",[t._v(" 与逝者关系 : ")]),t._v(t._s(t.dataForm.o_relation))]),t._v(" "),n("p",[n("span",[t._v(" 操作员 : ")]),t._v(t._s(t.dataForm.operator))])])])],1)],1),t._v(" "),t.server&&t.server.length>0?n("div",{staticClass:"bury_car",staticStyle:{border:"1px solid #23C6C8","margin-top":"10px"}},[n("h1",{staticClass:"bury_car_h1",staticStyle:{background:"#23C6C8",color:"#fff"}},[t._v("所选服务")]),t._v(" "),n("el-row",{attrs:{gutter:20}},t._l(t.server,function(e,r){return n("div",{key:r},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 服务名称 : ")]),t._v(t._s(e.title))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 数量 : ")]),t._v(t._s(e.number))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 合计 : ")]),t._v(t._s(e.totalprice))])])])],1)}),0)],1):t._e(),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisibleInfo=!1}}},[t._v("取消")])],1)]),t._v(" "),n("fire",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fire_"}),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"火化炉列表",visible:t.dialogFormVisibleper,"append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisibleper=e}}},[n("el-form",{ref:"furnaces",attrs:{rules:t.furnaces,inline:!0,model:t.furnace,"status-icon":"","label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"请选择炉型",prop:"setServer"}},[n("el-radio-group",{model:{value:t.furnace.setServer,callback:function(e){t.$set(t.furnace,"setServer",e)},expression:"furnace.setServer"}},t._l(t.getservice,function(e,r){return n("el-radio",{key:r,attrs:{border:"",label:e.id}},[t._v(t._s(e.title))])}),1)],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisibleper=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateDataPer()}}},[t._v("确定")])],1)],1)],1)},a=[],o=(n("ac6a"),n("7f7f"),n("0fea")),i=n("bc3a"),s=n.n(i),c=n("333d"),l=n("6fa7"),d=n("90e7"),u=n("1f70"),m=n("ac0d"),f=n("d850"),p={name:"VueGarden",components:{Pagination:c["a"],service:l["a"],e560:f["a"],fire:u["a"]},mixins:[m["a"]],data:function(){return{list:null,total:0,recetype:null,setServer:[],getservice:[],activeName:"info",dialogFormVisibleGo:!1,dialogFormVisibleInfo:!1,dialogFormVisibleper:!1,dialogFormSign:!1,listLoading:!0,listQuery:{page:1,limit:20,search_data:"",sort:"add_time",order:"desc"},sex:["男","女"],send:{name:"",sex:"",age:"",address:"",recetype:"",outtime:null,linkman:"",totalprice:"",linkphone:"",driver:"",cid:"",c_id:"",operator:"",remark:"",oid:""},furnace:{setServer:"",state:"",id:"",oid:""},dataForm:{name:"",sex:"",age:"",card:"",registered:"",reason:"",linkman:"",number:"",relation:"",dietime:null,linksex:"",nation:"",haulier:"",linkphone:"",operator:"",server:null,c_remark:"",oid:"",id:""},server:null,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"办理火化",create:"创建"},rules:{},furnaces:{setServer:[{required:!0,message:"请至少选择一个火化炉",trigger:"change"}]}}},computed:{},watch:{},created:function(){var t=this;this.getList(),Object(o["w"])().then(function(e){t.recetype=e.data.recetype})},methods:{getList:function(){var t=this;this.listLoading=!0,Object(o["V"])(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total||0,t.listLoading=!1,t.soket()}).catch(function(){t.list=[],t.total=0,t.listLoading=!1})},getCommon:function(t){var e=this;Object(o["v"])().then(function(n){e.server=n.data.services;var r={type:t,server:e.server};e.$refs.server.showService(r)})},handlePrint:function(){console.log(this.dataForm),this.$refs.fire_.init(this.dataForm)},getCard:function(t){var e=this,n="http://127.0.0.1:38088/card=idcard",r="";s.a.post(n,r).then(function(n){if(0==n.data.code){var r=n.data.IDCardInfo;e.$notify.success({title:"成功",message:"身份信息获取成功"}),0==t?(e.dataForm.name=r.name,e.dataForm.sex=r.sex,e.dataForm.card=r.cardID,e.dataForm.registered=r.address):(e.dataForm.linkman=r.name,e.dataForm.linksex=r.sex)}else e.$notify.error({title:"获取身份信息失败",message:n.msg})}).catch(function(t){e.$notify.error({title:"未检测到系统设备",message:"网络错误"})})},handleSign:function(t){var e=this;this.dataForm=Object.assign({},t);var n={id:t.id,oid:t.oid,type:2};Object(o["S"])(n).then(function(t){var n=[];t.data.services.length>0&&t.data.services.forEach(function(t){n.push(t.services)}),e.server=[].concat.apply([],n),e.dialogFormVisibleInfo=!0})},solo:function(t){var e=[];return t.services.forEach(function(t,n){e.push(t.services)}),[].concat.apply([],e)},service_data:function(t){this.dataForm.server=t},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={name:"",sex:"",age:"",card:"",registered:"",reason:"",linkman:"",relation:"",linkphone:"",dietime:null,nation:"",number:"",linksex:"",operator:"",c_remark:"",haulier:"",server:null}},createGoData:function(){var t=this;Object(o["ab"])(this.send).then(function(e){0==e.code&&(t.getList(),t.dialogFormVisibleGo=!1,t.$message({type:"success",message:"操作成功!"}))})},handleSi:function(t){var e=this,n={oid:t.oid,branch:this.info.branch};this.$confirm("是否签收?","提示",{confirmButtonText:"签收",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o["db"])(n).then(function(t){e.getList(),e.$message({type:"success",message:"操作成功!"})})}).catch(function(){e.$message({type:"info",message:"操作取消"})})},updateDataPer:function(){var t=this;this.$refs["furnaces"].validate(function(e){if(e){var n={crepelope:t.info.id,fid:t.furnace.setServer,state:t.furnace.state,id:t.furnace.id,oid:t.furnace.oid};Object(o["gb"])(n).then(function(e){0==e.code&&(t.getList(),t.$message({type:"success",message:"操作成功!"})),t.dialogFormVisibleper=!1})}})},soket:function(){var t=new URLSearchParams;t.append("id",1),t.append("type","publish"),t.append("content",""),s()({method:"post",url:"http://byg.jiayubz.net/tv.php",data:t})},handleQu:function(t){var e=this;this.$confirm("是否取灰?","提示",{confirmButtonText:"取灰",cancelButtonText:"取消",type:"warning"}).then(function(){var n={id:t.id,oid:t.oid,fid:t.fid,state:3};Object(o["gb"])(n).then(function(t){0==t.code&&(e.getList(),e.$message({type:"success",message:"操作成功!"}))})}).catch(function(){e.$message({type:"info",message:"操作取消"})})},handleFire:function(t){var e=this;this.furnace.setServer="",this.furnace.state=t.state,this.furnace.id=t.id,this.furnace.oid=t.oid,this.dialogFormVisibleper=!0,Object(d["m"])().then(function(t){e.getservice=t.data.data,e.$forceUpdate()})},handleCreate:function(){var t=this;this.resetForm(),this.getCommon(0),this.activeName="info",this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){var e={server:t.server};t.$refs.server.showService(e),t.$refs["dataForm"].clearValidate()})},createData:function(){var t=this;this.$refs["dataForm"].validate(function(e){e&&Object(o["a"])(t.dataForm).then(function(e){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"添加成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.msg})})})},handleClick:function(){},SignSend:function(){var t=this,e={signature:this.record_sign,id:this.signatureid};Object(o["eb"])(e).then(function(e){0==e.code?(t.$notify.success({title:"成功",message:"操作成功"}),t.getList(),t.dialogFormVisibleInfo=!1):t.$notify.error({title:"失败",message:e.msg})})},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dataForm={name:t.o_name||"",sex:t.o_sex||"",age:t.o_age||"",card:t.o_card||"",registered:t.o_registered||"",reason:t.o_reason||"",dietime:t.o_dietime||"",linkman:t.o_linkman||"",relation:t.o_relation||"",linkphone:t.o_linkphone||"",nation:t.o_nation||"",number:t.number||"",linksex:t.o_linksex||"",operator:t.operator||"",c_remark:t.remark||"",haulier:t.haulier||"",id:t.id||"",oid:t.oid||"",server:null},this.getCommon(1);var n={id:t.id,oid:t.oid,type:1};Object(o["S"])(n).then(function(t){e.$refs.server.editService(t.data.services)}),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},updateData:function(){var t=this;this.dataForm.operator=this.info.realname,this.$refs["dataForm"].validate(function(e){e&&Object(o["C"])(t.dataForm).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.msg})})})}}},v=p,b=n("2877"),_=Object(b["a"])(v,r,a,!1,null,null,null);e["default"]=_.exports},7514:function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(5),o="find",i=!0;o in[]&&Array(1)[o](function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},"76ff":function(t,e,n){},"90e7":function(t,e,n){"use strict";n.d(e,"k",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"p",function(){return i}),n.d(e,"f",function(){return s}),n.d(e,"n",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"s",function(){return d}),n.d(e,"i",function(){return u}),n.d(e,"l",function(){return m}),n.d(e,"b",function(){return f}),n.d(e,"q",function(){return p}),n.d(e,"g",function(){return v}),n.d(e,"o",function(){return b}),n.d(e,"e",function(){return _}),n.d(e,"t",function(){return h}),n.d(e,"j",function(){return g}),n.d(e,"m",function(){return y}),n.d(e,"c",function(){return F}),n.d(e,"r",function(){return k}),n.d(e,"h",function(){return j}),n.d(e,"w",function(){return O}),n.d(e,"u",function(){return x}),n.d(e,"v",function(){return S});var r=n("b775");function a(t){return Object(r["a"])({url:"/cold/list",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/cold/add",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/cold/edit",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/cold/del",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/mourn/list",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/mourn/add",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/mourn/edit",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/mourn/del",method:"get",params:t})}function m(t){return Object(r["a"])({url:"/config/list",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/config/add",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/config/edit",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/config/del",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/services/list",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/services/add",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/services/edit",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/services/del",method:"get",params:t})}function y(t){return Object(r["a"])({url:"/furnace/list",method:"post",data:t})}function F(t){return Object(r["a"])({url:"/furnace/add",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/furnace/edit",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/furnace/del",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/village/list",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/village/add",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/village/del",method:"get",params:t})}},ad6d:function(t,e,n){"use strict";var r=n("76ff"),a=n.n(r);a.a},fbb8:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return s});var r=n("b775");function a(t){return Object(r["a"])({url:"/manager/getlist",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/protocol/performanceInfo",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/protocol/performanceAdd",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/village/getlist",method:"get",params:t})}}}]);