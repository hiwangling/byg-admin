(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfb6f07e"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),Math.easeInOutQuad=function(t,e,n,r){return t/=r/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function a(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function i(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,n){var o=i(),u=t-o,c=20,s=0;e="undefined"===typeof e?500:e;var d=function t(){s+=c;var i=Math.easeInOutQuad(s,o,u,e);a(i),s<e?r(t):n&&"function"===typeof n&&n()};d()}},"0fea":function(t,e,n){"use strict";n.d(e,"U",function(){return a}),n.d(e,"x",function(){return i}),n.d(e,"F",function(){return o}),n.d(e,"G",function(){return u}),n.d(e,"w",function(){return c}),n.d(e,"D",function(){return s}),n.d(e,"y",function(){return d}),n.d(e,"R",function(){return l}),n.d(e,"W",function(){return f}),n.d(e,"b",function(){return p}),n.d(e,"T",function(){return m}),n.d(e,"h",function(){return b}),n.d(e,"E",function(){return h}),n.d(e,"z",function(){return v}),n.d(e,"eb",function(){return g}),n.d(e,"V",function(){return _}),n.d(e,"a",function(){return O}),n.d(e,"C",function(){return j}),n.d(e,"v",function(){return y}),n.d(e,"S",function(){return k}),n.d(e,"db",function(){return w}),n.d(e,"fb",function(){return F}),n.d(e,"Z",function(){return x}),n.d(e,"s",function(){return C}),n.d(e,"o",function(){return Q}),n.d(e,"q",function(){return S}),n.d(e,"t",function(){return L}),n.d(e,"u",function(){return V}),n.d(e,"r",function(){return $}),n.d(e,"n",function(){return A}),n.d(e,"O",function(){return N}),n.d(e,"N",function(){return T}),n.d(e,"P",function(){return D}),n.d(e,"Q",function(){return E}),n.d(e,"m",function(){return I}),n.d(e,"bb",function(){return M}),n.d(e,"ab",function(){return q}),n.d(e,"A",function(){return z}),n.d(e,"B",function(){return B}),n.d(e,"j",function(){return R}),n.d(e,"k",function(){return J}),n.d(e,"l",function(){return G}),n.d(e,"M",function(){return P}),n.d(e,"L",function(){return U}),n.d(e,"K",function(){return H}),n.d(e,"X",function(){return K}),n.d(e,"Y",function(){return W}),n.d(e,"cb",function(){return X}),n.d(e,"c",function(){return Y}),n.d(e,"i",function(){return Z}),n.d(e,"d",function(){return tt}),n.d(e,"e",function(){return et}),n.d(e,"g",function(){return nt}),n.d(e,"f",function(){return rt}),n.d(e,"p",function(){return at}),n.d(e,"I",function(){return it}),n.d(e,"J",function(){return ot}),n.d(e,"H",function(){return ut});var r=n("b775");function a(t){return Object(r["a"])({url:"/carsend/list",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/carsend/add",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/carsend/edit",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/carsend/driveredit",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/carsend/common",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/carsend/editinfo",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/carsend/del",method:"get",params:t})}function l(t){return Object(r["a"])({url:"/obituary/common",method:"get",params:t})}function f(t){return Object(r["a"])({url:"/obituary/list",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/obituary/add",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/obituary/info",method:"get",params:t})}function b(t){return Object(r["a"])({url:"/cabinet/info",method:"get",params:t})}function h(t){return Object(r["a"])({url:"/obituary/edit",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/obituary/del",method:"get",params:t})}function g(t){return Object(r["a"])({url:"/obituary/sign",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/cremation/list",method:"post",data:t})}function O(t){return Object(r["a"])({url:"/cremation/add",method:"post",data:t})}function j(t){return Object(r["a"])({url:"/cremation/edit",method:"post",data:t})}function y(t){return Object(r["a"])({url:"/cremation/common",method:"get",params:t})}function k(t){return Object(r["a"])({url:"/cremation/info",method:"get",params:t})}function w(t){return Object(r["a"])({url:"/cremation/sign",method:"post",data:t})}function F(t){return Object(r["a"])({url:"/cremation/state",method:"post",data:t})}function x(t){return Object(r["a"])({url:"/cremation/send",method:"post",data:t})}function C(t){return Object(r["a"])({url:"/check/list",method:"post",data:t})}function Q(t){return Object(r["a"])({url:"/check/add",method:"post",data:t})}function S(t){return Object(r["a"])({url:"/check/edit",method:"post",data:t})}function L(t){return Object(r["a"])({url:"/check/renew",method:"post",data:t})}function V(t){return Object(r["a"])({url:"/check/take",method:"post",data:t})}function $(t){return Object(r["a"])({url:"/check/details",method:"get",params:t})}function A(t){return Object(r["a"])({url:"/check/sign",method:"post",data:t})}function N(t){return Object(r["a"])({url:"/finance/list",method:"post",data:t})}function T(t){return Object(r["a"])({url:"/finance/info",method:"get",params:t})}function D(t){return Object(r["a"])({url:"/finance/pay",method:"post",data:t})}function E(t){return Object(r["a"])({url:"/finance/check",method:"post",data:t})}function I(t){return Object(r["a"])({url:"/finance/checkCommon",method:"post",data:t})}function M(t){return Object(r["a"])({url:"/finance/services",method:"post",data:t})}function q(t){return Object(r["a"])({url:"/finance/servicesAdd",method:"post",data:t})}function z(t){return Object(r["a"])({url:"/finance/derateAdd",method:"post",data:t})}function B(t){return Object(r["a"])({url:"/finance/derateCommon",method:"post",data:t})}function R(t){return Object(r["a"])({url:"/finance/carsendEdit",method:"post",data:t})}function J(t){return Object(r["a"])({url:"/finance/carsendSerEdit",method:"post",data:t})}function G(t){return Object(r["a"])({url:"/carsend/again",method:"post",data:t})}function P(t){return Object(r["a"])({url:"/financeDerate/list",method:"post",data:t})}function U(t){return Object(r["a"])({url:"/financeDerate/edit",method:"post",data:t})}function H(t){return Object(r["a"])({url:"/financeDerate/del",method:"get",params:t})}function K(t){return Object(r["a"])({url:"/obituary/state",method:"post",data:t})}function W(t){return Object(r["a"])({url:"/cremation/printinfo",method:"get",params:t})}function X(t){return Object(r["a"])({url:"/services/sign",method:"post",data:t})}function Y(t){return Object(r["a"])({url:"/mourn/business",method:"get",params:t})}function Z(t){return Object(r["a"])({url:"/canteen/pay",method:"post",data:t})}function tt(t){return Object(r["a"])({url:"/cabinet/list",method:"post",data:t})}function et(t){return Object(r["a"])({url:"/cabinet/add",method:"post",data:t})}function nt(t){return Object(r["a"])({url:"/cabinet/edit",method:"post",data:t})}function rt(t){return Object(r["a"])({url:"/cabinet/del",method:"get",params:t})}function at(t){return Object(r["a"])({url:"/check/del",method:"get",params:t})}function it(t){return Object(r["a"])({url:"/financeBrt/info",method:"get",params:t})}function ot(t){return Object(r["a"])({url:"/financeBrt/list",method:"post",data:t})}function ut(t){return Object(r["a"])({url:"/financeBrt/add",method:"post",data:t})}},3917:function(t,e,n){"use strict";n.d(e,"q",function(){return a}),n.d(e,"p",function(){return i}),n.d(e,"s",function(){return o}),n.d(e,"l",function(){return u}),n.d(e,"u",function(){return c}),n.d(e,"r",function(){return s}),n.d(e,"t",function(){return d}),n.d(e,"e",function(){return l}),n.d(e,"d",function(){return f}),n.d(e,"c",function(){return p}),n.d(e,"a",function(){return m}),n.d(e,"b",function(){return b}),n.d(e,"m",function(){return h}),n.d(e,"o",function(){return v}),n.d(e,"n",function(){return g}),n.d(e,"g",function(){return _}),n.d(e,"k",function(){return O}),n.d(e,"j",function(){return j}),n.d(e,"h",function(){return y}),n.d(e,"i",function(){return k}),n.d(e,"f",function(){return w});var r=n("b775");function a(t){return Object(r["a"])({url:"/statistics/check",method:"post",data:t})}function i(t){return Object(r["a"])({url:"/statistics/carsend",method:"post",data:t})}function o(t){return Object(r["a"])({url:"/statistics/obituary",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/statistics/derate",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/statistics/unknown",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/statistics/services",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/statistics/servicesInfo",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/statistics/excelobituary",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/statistics/excelderateAll",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/statistics/excelderate",method:"post",data:t})}function m(t){return Object(r["a"])({url:"/carsend/per",method:"post",data:t})}function b(t){return Object(r["a"])({url:"/cold/obituary",method:"post",data:t})}function h(t){return Object(r["a"])({url:"/statistics/gather",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/statistics/uid",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/statistics/puid",method:"post",data:t})}function _(t){return Object(r["a"])({url:"/obituary/count",method:"get",params:t})}function O(t){return Object(r["a"])({url:"/obituary/printorderlist",method:"get",params:t})}function j(t){return Object(r["a"])({url:"/check/printRenew",method:"get",params:t})}function y(t){return Object(r["a"])({url:"/check/printCheck",method:"get",params:t})}function k(t){return Object(r["a"])({url:"/cabinet/printList",method:"get",params:t})}function w(t){return Object(r["a"])({url:"/statistics/financeList",method:"post",data:t})}},"978f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.listQuery.search_data,callback:function(e){t.$set(t.listQuery,"search_data",e)},expression:"listQuery.search_data"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入司机"},model:{value:t.listQuery.driver,callback:function(e){t.$set(t.listQuery,"driver",e)},expression:"listQuery.driver"}}),t._v(" "),n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"开始时间"},model:{value:t.listQuery.startime,callback:function(e){t.$set(t.listQuery,"startime",e)},expression:"listQuery.startime"}}),t._v(" "),n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"结束时间"},model:{value:t.listQuery.endtime,callback:function(e){t.$set(t.listQuery,"endtime",e)},expression:"listQuery.endtime"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"出车时间",prop:"outtime"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"出车类型",prop:"recetype",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("carFilter")(e.row.recetype)}},[t._v(" "+t._s(t._f("recetype_list")(e.row.recetype)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"逝者姓名",prop:"name"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"地址",prop:"address"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["post /api/v1/carsend/per"],expression:"['post /api/v1/carsend/per']"}],attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleper(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleInfo(e.row)}}},[t._v("详情")])]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"查看",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("div",{staticClass:"bury_car"},[n("h1",{staticClass:"bury_car_h1"},[t._v("逝者信息")]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 逝者姓名 : ")]),t._v(t._s(t.dataForm.name))]),t._v(" "),n("p",[n("span",[t._v(" 出车时间 : ")]),t._v(t._s(t.dataForm.outtime))]),t._v(" "),n("p",[n("span",[t._v(" 接运地址 : ")]),t._v(t._s(t.dataForm.address))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 联系人 : ")]),t._v(t._s(t.dataForm.linkman))]),t._v(" "),n("p",[n("span",[t._v(" 接运类型 : ")]),t._v(t._s(t._f("recetype_list")(t.dataForm.recetype)))]),t._v(" "),n("p",[n("span",[t._v(" 司机 : ")]),t._v(t._s(t.dataForm.username))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 联系电话 : ")]),t._v(t._s(t.dataForm.linkphone))]),t._v(" "),n("p",[n("span",[t._v(" 接运价格 : ")]),t._v(t._s(t.dataForm.totalprice))]),t._v(" "),n("p",[n("span",[t._v(" 操作人 : ")]),t._v(t._s(t.dataForm.operator))])])])],1)],1),t._v(" "),n("div",{staticClass:"bury_car",staticStyle:{border:"1px solid #23C6C8","margin-top":"10px"}},[n("h1",{staticClass:"bury_car_h1",staticStyle:{background:"#23C6C8",color:"#fff"}},[t._v("接运服务")]),t._v(" "),n("el-row",{attrs:{gutter:20}},t._l(t.server,function(e,r){return n("div",{key:r},[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 服务名称 : ")]),t._v(t._s(e.title))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 数量 : ")]),t._v(t._s(e.number))])])]),t._v(" "),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 合计 : ")]),t._v(t._s(e.totalprice))])])])],1)}),0)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")])],1)]),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"人员列表",visible:t.dialogFormVisibleper,"append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisibleper=e}}},[n("el-checkbox-group",{model:{value:t.setServer,callback:function(e){t.setServer=e},expression:"setServer"}},t._l(t.getservice,function(e,r){return n("el-checkbox",{key:r,staticStyle:{width:"150px"},attrs:{label:e.id}},[t._v(t._s(e.realname)+"("+t._s(e.branch_name)+")")])}),1),t._v("\n    人均：\n    "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"120px","margin-top":"15px"},attrs:{clearable:"",placeholder:"请输入价格"},model:{value:t.per.sealprice,callback:function(e){t.$set(t.per,"sealprice",e)},expression:"per.sealprice"}}),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisibleper=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.updateData()}}},[t._v("确定")])],1)],1)],1)},a=[],i=(n("ac6a"),n("c5f6"),n("3917")),o=n("fbb8"),u=n("ac0d"),c=n("0fea"),s=n("333d"),d={name:"VueGarden",components:{Pagination:s["a"]},mixins:[u["a"]],data:function(){return{list:null,total:0,listLoading:!0,server:null,setServer:[],getservice:[],dialogFormVisible:!1,dialogFormVisibleper:!1,per:{sealiftperson:[],sealprice:"",id:"",oid:""},dataForm:{name:"",linkman:"",sex:"",linkphone:"",operator:""},listQuery:{page:1,limit:20,search_data:"",driver:"",startime:null,endtime:null,sort:"add_time",order:"desc"}}},computed:{},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i["p"])(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total||0,t.listLoading=!1}).catch(function(){t.list=[],t.total=0,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleper:function(t){var e=this;this.dialogFormVisibleper=!0,this.per.id=t.id,this.per.oid=t.oid,this.per.sealprice=t.sealprice;var n=[];this.setServer=[],Object(o["a"])().then(function(r){e.getservice=r.data,n=""==t.sealiftperson.map(Number)?[]:t.sealiftperson.map(Number),e.setServer=n,e.$forceUpdate()})},updateData:function(){var t=this;this.per.sealiftperson=this.setServer,Object(i["a"])(this.per).then(function(e){0==e.code?(t.$notify.success({title:"成功",message:"操作成功"}),t.getList(),t.dialogFormVisibleper=!1):t.$notify.error({title:"失败",message:e.msg})})},solo:function(t){var e=[];return t.forEach(function(t,n){e.push(t.services)}),[].concat.apply([],e)},handleInfo:function(t){var e=this;this.dataForm=Object.assign({},t);var n={oid:t.oid,id:t.id,type:2};Object(c["D"])(n).then(function(t){var n=[];t.data.services.length>0&&(n=[].concat.apply([],t.data.services)),e.server=e.solo(n),e.dialogStatus="update",e.dialogFormVisible=!0})}}},l=d,f=n("2877"),p=Object(f["a"])(l,r,a,!1,null,null,null);e["default"]=p.exports},fbb8:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return u});var r=n("b775");function a(t){return Object(r["a"])({url:"/manager/getlist",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/protocol/performanceInfo",method:"get",params:t})}function o(t){return Object(r["a"])({url:"/protocol/performanceAdd",method:"post",data:t})}function u(t){return Object(r["a"])({url:"/village/getlist",method:"get",params:t})}}}]);