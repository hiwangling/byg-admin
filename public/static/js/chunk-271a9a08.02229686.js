(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-271a9a08"],{"09f4":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,n){var o=r(),s=t-o,l=20,c=0;e="undefined"===typeof e?500:e;var d=function t(){c+=l;var r=Math.easeInOutQuad(c,o,s,e);i(r),c<e?a(t):n&&"function"===typeof n&&n()};d()}},"0dbc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.listQuery.search_data,callback:function(e){t.$set(t.listQuery,"search_data",e)},expression:"listQuery.search_data"}}),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查找")]),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")]),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v("\n      导出\n    ")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"寄存编号",prop:"number"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"逝者姓名",prop:"name"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"开始时间",prop:"startime"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"结束时间",prop:"endtime"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系人",prop:"linkman"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"linkphone"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"联系地址",prop:"linkaddress"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"状态",prop:"status",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",{attrs:{type:t._f("or_status")(e.row.status)}},[t._v(t._s(0==e.row.status?"未寄存":1==e.row.status?"寄存中":"已完结"))])]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(n){return t.handleRenew(e.row)}}},[t._v("续存")]),t._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.handleTake(e.row)}}},[t._v("取走")]),t._v(" "),n("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:function(n){return t.handleInfo(e.row)}}},[t._v("详情")]),t._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.handleDel(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"续存信息",visible:t.dialogFormVisibleRenew},on:{"update:visible":function(e){t.dialogFormVisibleRenew=e}}},[n("el-form",{ref:"dataForm",attrs:{inline:!0,model:t.renew,"status-icon":"","label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"结束时间",prop:"endtime"}},[n("el-date-picker",{staticStyle:{width:"185px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.renew.endtime,callback:function(e){t.$set(t.renew,"endtime",e)},expression:"renew.endtime"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"价格",prop:"totalprice"}},[n("el-input",{model:{value:t.renew.totalprice,callback:function(e){t.$set(t.renew,"totalprice",e)},expression:"renew.totalprice"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisibleRenew=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.RenewData}},[t._v("确定")])],1)],1),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"信息",visible:t.dialogFormVisibleTake},on:{"update:visible":function(e){t.dialogFormVisibleTake=e}}},[n("el-form",{ref:"dataForm",attrs:{inline:!0,model:t.take,"status-icon":"","label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"取出时间",prop:"taketime"}},[n("el-date-picker",{staticStyle:{width:"185px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.take.taketime,callback:function(e){t.$set(t.take,"taketime",e)},expression:"take.taketime"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"取出人",prop:"takename"}},[n("el-input",{model:{value:t.take.takename,callback:function(e){t.$set(t.take,"takename",e)},expression:"take.takename"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.TakeData}},[t._v("确定")]),t._v(" "),n("el-button",{on:{click:function(e){t.dialogFormVisibleTake=!1}}},[t._v("取消")])],1)],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}}),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{ref:"dataForm",attrs:{rules:t.rules,inline:!0,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[n("el-form-item",{attrs:{label:"寄存位置",prop:"number"}},[n("el-input",{model:{value:t.dataForm.number,callback:function(e){t.$set(t.dataForm,"number",e)},expression:"dataForm.number"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"逝者姓名",prop:"name"}},[n("el-input",{model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"逝者身份证",prop:"card"}},[n("el-input",{model:{value:t.dataForm.card,callback:function(e){t.$set(t.dataForm,"card",e)},expression:"dataForm.card"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"逝者地址",prop:"registered"}},[n("el-input",{model:{value:t.dataForm.registered,callback:function(e){t.$set(t.dataForm,"registered",e)},expression:"dataForm.registered"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"开始时间",prop:"startime"}},[n("el-date-picker",{staticStyle:{width:"185px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.dataForm.startime,callback:function(e){t.$set(t.dataForm,"startime",e)},expression:"dataForm.startime"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"结束时间",prop:"endtime"}},[n("el-date-picker",{staticStyle:{width:"185px"},attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.dataForm.endtime,callback:function(e){t.$set(t.dataForm,"endtime",e)},expression:"dataForm.endtime"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人",prop:"linkman"}},[n("el-input",{model:{value:t.dataForm.linkman,callback:function(e){t.$set(t.dataForm,"linkman",e)},expression:"dataForm.linkman"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系人身份证",prop:"linkcard"}},[n("el-input",{model:{value:t.dataForm.linkcard,callback:function(e){t.$set(t.dataForm,"linkcard",e)},expression:"dataForm.linkcard"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系电话",prop:"linkphone"}},[n("el-input",{model:{value:t.dataForm.linkphone,callback:function(e){t.$set(t.dataForm,"linkphone",e)},expression:"dataForm.linkphone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"与逝者关系",prop:"relation"}},[n("el-input",{model:{value:t.dataForm.relation,callback:function(e){t.$set(t.dataForm,"relation",e)},expression:"dataForm.relation"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系地址",prop:"linkaddress"}},[n("el-input",{model:{value:t.dataForm.linkaddress,callback:function(e){t.$set(t.dataForm,"linkaddress",e)},expression:"dataForm.linkaddress"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"寄存价格",prop:"totalprice"}},[n("el-input",{model:{value:t.dataForm.totalprice,callback:function(e){t.$set(t.dataForm,"totalprice",e)},expression:"dataForm.totalprice"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"create"==t.dialogStatus?n("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v("确定")]):n("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确定")])],1)],1),t._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"查看",visible:t.dialogFormVisibleInfo},on:{"update:visible":function(e){t.dialogFormVisibleInfo=e}}},[n("div",{staticClass:"bury_car"},[n("h1",{staticClass:"bury_car_h1"},[t._v("逝者信息")]),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 逝者姓名 : ")]),t._v(t._s(t.information.name))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 联系人 : ")]),t._v(t._s(t.information.linkman))])])]),t._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 联系电话 : ")]),t._v(t._s(t.information.linkphone))])])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 关系 : ")]),t._v(t._s(t.information.relation))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 开始时间 : ")]),t._v(t._s(t.information.startime))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 结束时间 : ")]),t._v(t._s(t.information.endtime))])])]),t._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 寄存价格 : ")]),t._v(t._s(t.information.totalprice))])])]),t._v(" "),n("el-col",{attrs:{span:5}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 承办人 : ")]),t._v(t._s(t.information.operator))])])])],1)],1),t._v(" "),n("div",{staticClass:"bury_car",staticStyle:{border:"1px solid #23C6C8","margin-top":"10px"}},[n("h1",{staticClass:"bury_car_h1",staticStyle:{background:"#23C6C8",color:"#fff"}},[t._v("续存记录")]),t._v(" "),n("el-row",{attrs:{gutter:20}},t._l(t.informationServer,function(e,a){return n("div",{key:a},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 缴费 : ")]),t._v(t._s(e.title))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 开始 : ")]),t._v(t._s(e.statr))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 结束 : ")]),t._v(t._s(e.end))])])]),t._v(" "),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[n("p",[n("span",[t._v(" 金额 : ")]),t._v(t._s(e.totalprice))])])])],1)}),0)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:2==t.savetype,expression:"savetype ==2"}],attrs:{type:"primary"},on:{click:function(e){return t.handlesave(2)}}},[t._v("寄存发票")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handlesave(1)}}},[t._v("续存发票")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handlePrintFireCard}},[t._v("寄存证")]),t._v(" "),n("el-button",{on:{click:function(e){t.dialogFormVisibleInfo=!1}}},[t._v("取消")])],1)]),t._v(" "),n("save",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"save_"}),t._v(" "),n("saves",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"saves_"})],1)},i=[],r=(n("ac4d"),n("8a81"),n("ac6a"),n("7f7f"),n("0fea")),o=n("333d"),s=n("ac0d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deit"},[n("div",{staticClass:"cantainer"},[n("el-dialog",{attrs:{title:"列表","append-to-body":"",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.userList.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize)}},[n("el-table-column",{attrs:{label:"服务名称",prop:"title"}}),t._v(" "),n("el-table-column",{attrs:{label:"次",prop:"amount"}}),t._v(" "),n("el-table-column",{attrs:{label:"总价",prop:"totalprice"}})],1),t._v(" "),n("el-pagination",{attrs:{"current-page":t.currentPage,background:"","page-sizes":[1],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.userList.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.print(1)}}},[t._v("打印")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.print(2)}}},[t._v("收据")])],1)],1)],1),t._v(" "),n("print",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"print_"}),t._v(" "),n("save",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"save_"})],1)},c=[],d=n("3917"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.print}},[t._v("打印")]),t._v(" "),n("section",{ref:"print"},[[t._l(t.vert,function(t,e){return[n("drag",{key:e,attrs:{child:t}})]})]],2)],1)},f=[],m=(n("a481"),n("29e9")),p=[{t:"",left:"115",top:"128",width:"200",id:0},{t:"",left:"115",top:"162",width:"200",id:1},{t:"",left:"115",top:"198",width:"200",id:2},{t:"",left:"115",top:"232",width:"200",id:3},{t:"",left:"325",top:"128",width:"200",tid:0},{t:"",left:"325",top:"162",width:"200",tid:1},{t:"",left:"325",top:"198",width:"200",tid:2},{t:"",left:"325",top:"232",width:"200",tid:3},{t:"",left:"447",top:"127",width:"200",sid:0},{t:"",left:"447",top:"165",width:"200",sid:1},{t:"",left:"447",top:"200",width:"200",sid:2},{t:"",left:"447",top:"233",width:"200",sid:3},{t:"",left:"555",top:"127",width:"200",yid:0},{t:"",left:"555",top:"165",width:"200",yid:1},{t:"",left:"555",top:"200",width:"200",yid:2},{t:"",left:"555",top:"232",width:"200",yid:3},{t:"",left:"136",top:"64",width:"200",id:20},{t:"",left:"205",top:"260",id:21},{t:"",left:"545",top:"265",width:"200",id:22},{t:"",left:"120",width:"270",top:"292",id:23},{t:"",left:"420",width:"200",top:"320",id:98},{t:(new Date).getFullYear(),left:"567",width:"200",top:"70",id:25},{t:(new Date).getMonth()+1,left:"627",width:"200",top:"70",id:26},{t:(new Date).getDate(),left:"664",width:"200",top:"70",id:27}],h={components:{Drag:m["a"]},data:function(){return{vert:[],list:null,address:"",totalprice:0,sum:"",date:new Date,name:null,operate_name:""}},created:function(){},methods:{print:function(){this.$print(this.$refs.print)},server:function(t){var e=this;this.vert=Object.assign([],p);var n=t.tick;this.name=t.name,this.address=t.address,this.operate_name=t.operator,this.vert.forEach(function(t,e){t.t=""}),n.forEach(function(t,n){e.vert.forEach(function(a,i){a.id==n&&(a.t=t.title),n==a.tid&&(a.t="次"),n==a.sid&&(a.t=t.price),n==a.yid&&(a.t=t.totalprice),20==a.id&&(a.t=e.name),98==a.id&&(a.t=e.operate_name),21==a.id&&(a.t=e.digitUppercase(t.totalprice)),22==a.id&&(a.t=t.totalprice),23==a.id&&(a.t=e.address),25==a.id&&(a.t=(new Date).getFullYear()),26==a.id&&(a.t=(new Date).getMonth()+1),27==a.id&&(a.t=(new Date).getDate())})}),this.$nextTick(function(){e.print()})},digitUppercase:function(t){var e=["角","分"],n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],a=[["元","万","亿"],["","拾","佰","仟"]],i=t<0?"欠":"";t=Math.abs(t);for(var r="",o=0;o<e.length;o++)r+=(n[Math.floor(10*t*Math.pow(10,o))%10]+e[o]).replace(/零./,"");r=r||"整",t=Math.floor(t);for(o=0;o<a[0].length&&t>0;o++){for(var s="",l=0;l<a[1].length&&t>0;l++)s=n[t%10]+a[1][l]+s,t=Math.floor(t/10);r=s.replace(/(零.)*零$/,"").replace(/^$/,"零")+a[0][o]+r}return i+r.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")}}},v=h,b=n("2877"),g=Object(b["a"])(v,u,f,!1,null,null,null),_=g.exports,k=n("8050"),y={components:{print:_,save:k["a"]},data:function(){return{currentPage:1,pagesize:1,userList:[],dialogFormVisible:!1,dialogFormVisibles:!1,tick:[],list:null}},created:function(){},methods:{handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t},handleUserList:function(t){var e=this,n={id:t.id};1==t.type?Object(d["j"])(n).then(function(t){e.userList=t.data.data}):Object(d["h"])(n).then(function(t){e.userList=t.data.data})},print:function(t){var e=this;this.tick=this.userList.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize),this.list.tick=this.tick,this.dialogFormVisibles=!0,this.$nextTick(function(){1==t?e.$refs.print_.server(e.list):e.$refs.save_.getlist(e.list)})},init:function(t){this.dialogFormVisible=!0,console.log(t),this.list=t,this.handleUserList(t)}}},w=y,F=Object(b["a"])(w,l,c,!1,null,null,null),j=F.exports,O=n("d850"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{"close-on-click-modal":!1,visible:t.dialogFormVisible,"append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("div",{staticStyle:{height:"550px"}},[n("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:t.print}},[t._v("打印")]),t._v(" "),n("section",{ref:"print"},[[t._l(t.vert,function(t,e){return[n("drag",{key:e,attrs:{child:t}})]})]],2)],1)])],1)},$=[],C={components:{Drag:m["a"]},data:function(){return{dialogFormVisible:!1,vert:[{t:"张三山",left:"79",top:"36",width:"200",id:0},{t:"寄存位置",left:"78",top:"66",width:"200",id:1},{t:"地点",left:"77",top:"98",width:"200",id:2},{t:"姓名",left:"78",top:"125",width:"200",id:3},{t:"0716-7766866",left:"78",top:"155",width:"200",id:4},{t:"日期",left:"77",top:"212",width:"200",id:5},{t:"业务电话",left:"300",top:"211",width:"200",id:6},{t:"2019-2-2",left:"11",width:"200",top:"303",id:7},{t:"2019-3-4",left:"128",width:"200",top:"304",id:8},{t:"201944334",left:"300",width:"200",top:"33",id:9},{t:"关系",left:"298",width:"200",top:"125",id:10}],list:null,currentdate:""}},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();n>=1&&n<=9&&(n="0"+n),a>=0&&a<=9&&(a="0"+a),this.currentdate=e+"-"+n+"-"+a},init:function(t){var e=this,n=[];n.push(t),this.dialogFormVisible=!0,n.forEach(function(t,n){e.vert.forEach(function(n,a){switch(10==n.id&&(n.t=t.relation),a){case 0:n.t=t.name;break;case 1:n.t=t.number;break;case 2:n.t="";break;case 3:n.t=t.linkman;break;case 4:n.t=t.registered;break;case 5:n.t=e.currentdate;break;case 6:n.t="0715-6276669";break;case 7:n.t=t.startime;break;case 8:n.t=t.endtime;break;case 9:n.t=1==t.type?"N"+t.serial:"W"+t.serial;default:}})}),this.dialogFormVisible=!0}}},V=C,D=Object(b["a"])(V,x,$,!1,null,null,null),S=D.exports,L={name:"VueGarden",components:{Pagination:o["a"],e560:O["a"],save:S,saves:j},mixins:[s["a"]],data:function(){return{list:null,total:0,operator:"",cname:"",savetype:"",record_sign:"",record_ifsign:"",signatureid:"",downloadLoading:!1,informationServer:null,information:{name:"",linkman:"",linkphone:"",linkaddress:"",operator:"",sex:"",age:""},listLoading:!0,listQuery:{page:1,limit:20,search_data:"",sort:"add_time",order:"desc"},dataForm:{name:"",number:"",startime:null,endtime:null,signature:"",registered:"",linkman:"",linkcard:"",card:"",relation:"",linkphone:"",linkaddress:"",operator:"",totalprice:""},renew:{endtime:null,totalprice:"",oid:"",name:"",id:"",operator:""},take:{id:"",taketime:null,takename:"",operator:""},export_list:null,dialogFormVisibleInfo:!1,dialogFormVisibleRenew:!1,dialogFormVisibleTake:!1,dialogFormVisible:!1,dialogFormVisibleSign:!1,dialogFormSign:!1,registered:"",dialogStatus:"",save_print:null,textMap:{update:"编辑",create:"创建"},rules:{type_name:[{required:!0,message:"墓园名称不能为空",trigger:"blur"}]}}},computed:{},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(r["s"])(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total||0,t.listLoading=!1}).catch(function(){t.list=[],t.total=0,t.listLoading=!1})},sign_open:function(){var t=this;this.record_sign="",this.dialogFormVisibleSign=!0,this.$nextTick(function(){t.$refs.child.initDevice()})},handlePrintFireCard:function(){this.$refs.save_.init(this.save_print)},sign_close:function(){this.$refs.child.uninitDevice()},cancel:function(){this.dialogFormVisibleSign=!1},imgData:function(t){this.record_sign=t},handlesave:function(t){var e={id:this.signatureid,name:this.cname,buryname:this.buryname,address:this.registered,serial:this.save_print.serial,operator:this.info.realname,type:t};this.$refs.saves_.init(e)},SignSend:function(){var t=this,e={signature:this.record_sign,id:this.signatureid};Object(r["n"])(e).then(function(e){0==e.code?(t.$notify.success({title:"成功",message:"操作成功"}),t.getList(),t.dialogFormVisibleInfo=!1):t.$notify.error({title:"失败",message:e.msg})})},handleFilter:function(){this.listQuery.page=1,this.getList()},resetForm:function(){this.dataForm={number:"",name:"",startime:null,endtime:null,signature:"",linkman:"",relation:"",card:"",registered:"",linkcard:"",linkphone:"",linkaddress:"",operator:"",totalprice:""}},handleInfo:function(t){var e=this;this.registered=t.registered,this.save_print=t,this.buryname=t.name;var n={id:t.id};this.savetype=t.type,this.signatureid=t.id,this.record_sign=t.signature,this.operator=t.operator,this.cname=t.linkman,this.record_ifsign=t.ifsignature,Object(r["r"])(n).then(function(t){e.save_print.serial=t.data.serial,e.save_print.type=t.data.type,e.dialogFormVisibleInfo=!0,e.$nextTick(function(){e.information=t.data,e.informationServer=e.information.finance_list})}).catch(function(t){e.$notify.error({title:"获取失败",message:t.msg})})},handleRenew:function(t){this.renew=Object.assign({},t),this.renew.endtime=null,this.renew.totalprice="",this.dialogFormVisibleRenew=!0},handleTake:function(t){this.take=Object.assign({},t),this.record_sign="",this.dialogFormVisibleTake=!0},TakeData:function(){var t=this,e={taketime:this.take.taketime,takename:this.take.takename,id:this.take.id,take_signature:this.record_sign,operator:this.info.realname};Object(r["u"])(e).then(function(e){t.getList(),t.dialogFormVisibleTake=!1,t.$notify.success({title:"成功",message:"操作成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.msg})})},RenewData:function(){var t=this,e={endtime:this.renew.endtime,totalprice:this.renew.totalprice,name:this.renew.name,oid:this.renew.oid,id:this.renew.id,operator:this.info.realname};Object(r["t"])(e).then(function(e){t.getList(),t.dialogFormVisibleRenew=!1,t.$notify.success({title:"成功",message:"续费成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.msg})})},handleCreate:function(){var t=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},createData:function(){var t=this;this.dataForm.operator=this.info.realname,this.$refs["dataForm"].validate(function(e){e&&Object(r["o"])(t.dataForm).then(function(e){t.getList(),t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"添加成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.msg})})})},handleUpdate:function(t){var e=this;this.dataForm=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},handleDownload:function(){var t=this;this.downloadLoading=!0,this.listQuery.limit=this.total,Object(r["s"])(this.listQuery).then(function(e){t.export_list=e.data.data,Promise.all([n.e("chunk-e69e90f4"),n.e("chunk-58293907")]).then(n.bind(null,"4bf8d")).then(function(e){var n=["number","name","startime","endtime","linkman","linkphone","linkaddress"],a=["寄存编号","逝者姓名","开始时间","结束时间","联系人","联系电话","联系地址"],i=t.formatJson(n,t.export_list);e.export_json_to_excel({header:a,data:i,filename:"寄存单"}),t.downloadLoading=!1})})},formatJson:function(t,e){return console.log(e),e.map(function(e){return t.map(function(t){return e[t]})})},handleDel:function(t){var e=this;this.$confirm("您确认删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={id:t.id};Object(r["p"])(n).then(function(t){e.getList(),e.$message({type:"success",message:"删除成功!"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},updateData:function(){var t=this;this.dataForm.status=0==this.dataForm.status?1:this.dataForm.status,this.$refs["dataForm"].validate(function(e){e&&Object(r["q"])(t.dataForm).then(function(){var e=!0,n=!1,a=void 0;try{for(var i,r=t.list[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var o=i.value;if(o.id===t.dataForm.id){var s=t.list.indexOf(o);t.list.splice(s,1,t.dataForm);break}}}catch(l){n=!0,a=l}finally{try{e||null==r.return||r.return()}finally{if(n)throw a}}t.dialogFormVisible=!1,t.$notify.success({title:"成功",message:"更新成功"})}).catch(function(e){t.$notify.error({title:"失败",message:e.msg})})})}}},M=L,T=Object(b["a"])(M,a,i,!1,null,null,null);e["default"]=T.exports},"0fea":function(t,e,n){"use strict";n.d(e,"U",function(){return i}),n.d(e,"x",function(){return r}),n.d(e,"F",function(){return o}),n.d(e,"G",function(){return s}),n.d(e,"w",function(){return l}),n.d(e,"D",function(){return c}),n.d(e,"y",function(){return d}),n.d(e,"R",function(){return u}),n.d(e,"W",function(){return f}),n.d(e,"b",function(){return m}),n.d(e,"T",function(){return p}),n.d(e,"h",function(){return h}),n.d(e,"E",function(){return v}),n.d(e,"z",function(){return b}),n.d(e,"eb",function(){return g}),n.d(e,"V",function(){return _}),n.d(e,"a",function(){return k}),n.d(e,"C",function(){return y}),n.d(e,"v",function(){return w}),n.d(e,"S",function(){return F}),n.d(e,"db",function(){return j}),n.d(e,"fb",function(){return O}),n.d(e,"Z",function(){return x}),n.d(e,"s",function(){return $}),n.d(e,"o",function(){return C}),n.d(e,"q",function(){return V}),n.d(e,"t",function(){return D}),n.d(e,"u",function(){return S}),n.d(e,"r",function(){return L}),n.d(e,"n",function(){return M}),n.d(e,"O",function(){return T}),n.d(e,"N",function(){return z}),n.d(e,"P",function(){return E}),n.d(e,"Q",function(){return N}),n.d(e,"m",function(){return Q}),n.d(e,"bb",function(){return R}),n.d(e,"ab",function(){return I}),n.d(e,"A",function(){return P}),n.d(e,"B",function(){return U}),n.d(e,"j",function(){return q}),n.d(e,"k",function(){return A}),n.d(e,"l",function(){return B}),n.d(e,"M",function(){return J}),n.d(e,"L",function(){return Y}),n.d(e,"K",function(){return G}),n.d(e,"X",function(){return W}),n.d(e,"Y",function(){return H}),n.d(e,"cb",function(){return K}),n.d(e,"c",function(){return X}),n.d(e,"i",function(){return Z}),n.d(e,"d",function(){return tt}),n.d(e,"e",function(){return et}),n.d(e,"g",function(){return nt}),n.d(e,"f",function(){return at}),n.d(e,"p",function(){return it}),n.d(e,"I",function(){return rt}),n.d(e,"J",function(){return ot}),n.d(e,"H",function(){return st});var a=n("b775");function i(t){return Object(a["a"])({url:"/carsend/list",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/carsend/add",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/carsend/edit",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/carsend/driveredit",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/carsend/common",method:"get",params:t})}function c(t){return Object(a["a"])({url:"/carsend/editinfo",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/carsend/del",method:"get",params:t})}function u(t){return Object(a["a"])({url:"/obituary/common",method:"get",params:t})}function f(t){return Object(a["a"])({url:"/obituary/list",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/obituary/add",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/obituary/info",method:"get",params:t})}function h(t){return Object(a["a"])({url:"/cabinet/info",method:"get",params:t})}function v(t){return Object(a["a"])({url:"/obituary/edit",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/obituary/del",method:"get",params:t})}function g(t){return Object(a["a"])({url:"/obituary/sign",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/cremation/list",method:"post",data:t})}function k(t){return Object(a["a"])({url:"/cremation/add",method:"post",data:t})}function y(t){return Object(a["a"])({url:"/cremation/edit",method:"post",data:t})}function w(t){return Object(a["a"])({url:"/cremation/common",method:"get",params:t})}function F(t){return Object(a["a"])({url:"/cremation/info",method:"get",params:t})}function j(t){return Object(a["a"])({url:"/cremation/sign",method:"post",data:t})}function O(t){return Object(a["a"])({url:"/cremation/state",method:"post",data:t})}function x(t){return Object(a["a"])({url:"/cremation/send",method:"post",data:t})}function $(t){return Object(a["a"])({url:"/check/list",method:"post",data:t})}function C(t){return Object(a["a"])({url:"/check/add",method:"post",data:t})}function V(t){return Object(a["a"])({url:"/check/edit",method:"post",data:t})}function D(t){return Object(a["a"])({url:"/check/renew",method:"post",data:t})}function S(t){return Object(a["a"])({url:"/check/take",method:"post",data:t})}function L(t){return Object(a["a"])({url:"/check/details",method:"get",params:t})}function M(t){return Object(a["a"])({url:"/check/sign",method:"post",data:t})}function T(t){return Object(a["a"])({url:"/finance/list",method:"post",data:t})}function z(t){return Object(a["a"])({url:"/finance/info",method:"get",params:t})}function E(t){return Object(a["a"])({url:"/finance/pay",method:"post",data:t})}function N(t){return Object(a["a"])({url:"/finance/check",method:"post",data:t})}function Q(t){return Object(a["a"])({url:"/finance/checkCommon",method:"post",data:t})}function R(t){return Object(a["a"])({url:"/finance/services",method:"post",data:t})}function I(t){return Object(a["a"])({url:"/finance/servicesAdd",method:"post",data:t})}function P(t){return Object(a["a"])({url:"/finance/derateAdd",method:"post",data:t})}function U(t){return Object(a["a"])({url:"/finance/derateCommon",method:"post",data:t})}function q(t){return Object(a["a"])({url:"/finance/carsendEdit",method:"post",data:t})}function A(t){return Object(a["a"])({url:"/finance/carsendSerEdit",method:"post",data:t})}function B(t){return Object(a["a"])({url:"/carsend/again",method:"post",data:t})}function J(t){return Object(a["a"])({url:"/financeDerate/list",method:"post",data:t})}function Y(t){return Object(a["a"])({url:"/financeDerate/edit",method:"post",data:t})}function G(t){return Object(a["a"])({url:"/financeDerate/del",method:"get",params:t})}function W(t){return Object(a["a"])({url:"/obituary/state",method:"post",data:t})}function H(t){return Object(a["a"])({url:"/cremation/printinfo",method:"get",params:t})}function K(t){return Object(a["a"])({url:"/services/sign",method:"post",data:t})}function X(t){return Object(a["a"])({url:"/mourn/business",method:"get",params:t})}function Z(t){return Object(a["a"])({url:"/canteen/pay",method:"post",data:t})}function tt(t){return Object(a["a"])({url:"/cabinet/list",method:"post",data:t})}function et(t){return Object(a["a"])({url:"/cabinet/add",method:"post",data:t})}function nt(t){return Object(a["a"])({url:"/cabinet/edit",method:"post",data:t})}function at(t){return Object(a["a"])({url:"/cabinet/del",method:"get",params:t})}function it(t){return Object(a["a"])({url:"/check/del",method:"get",params:t})}function rt(t){return Object(a["a"])({url:"/financeBrt/info",method:"get",params:t})}function ot(t){return Object(a["a"])({url:"/financeBrt/list",method:"post",data:t})}function st(t){return Object(a["a"])({url:"/financeBrt/add",method:"post",data:t})}},3917:function(t,e,n){"use strict";n.d(e,"q",function(){return i}),n.d(e,"p",function(){return r}),n.d(e,"s",function(){return o}),n.d(e,"l",function(){return s}),n.d(e,"u",function(){return l}),n.d(e,"r",function(){return c}),n.d(e,"t",function(){return d}),n.d(e,"e",function(){return u}),n.d(e,"d",function(){return f}),n.d(e,"c",function(){return m}),n.d(e,"a",function(){return p}),n.d(e,"b",function(){return h}),n.d(e,"m",function(){return v}),n.d(e,"o",function(){return b}),n.d(e,"n",function(){return g}),n.d(e,"g",function(){return _}),n.d(e,"k",function(){return k}),n.d(e,"j",function(){return y}),n.d(e,"h",function(){return w}),n.d(e,"i",function(){return F}),n.d(e,"f",function(){return j});var a=n("b775");function i(t){return Object(a["a"])({url:"/statistics/check",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/statistics/carsend",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/statistics/obituary",method:"post",data:t})}function s(t){return Object(a["a"])({url:"/statistics/derate",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/statistics/unknown",method:"post",data:t})}function c(t){return Object(a["a"])({url:"/statistics/services",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/statistics/servicesInfo",method:"post",data:t})}function u(t){return Object(a["a"])({url:"/statistics/excelobituary",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/statistics/excelderateAll",method:"post",data:t})}function m(t){return Object(a["a"])({url:"/statistics/excelderate",method:"post",data:t})}function p(t){return Object(a["a"])({url:"/carsend/per",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/cold/obituary",method:"post",data:t})}function v(t){return Object(a["a"])({url:"/statistics/gather",method:"post",data:t})}function b(t){return Object(a["a"])({url:"/statistics/uid",method:"post",data:t})}function g(t){return Object(a["a"])({url:"/statistics/puid",method:"post",data:t})}function _(t){return Object(a["a"])({url:"/obituary/count",method:"get",params:t})}function k(t){return Object(a["a"])({url:"/obituary/printorderlist",method:"get",params:t})}function y(t){return Object(a["a"])({url:"/check/printRenew",method:"get",params:t})}function w(t){return Object(a["a"])({url:"/check/printCheck",method:"get",params:t})}function F(t){return Object(a["a"])({url:"/cabinet/printList",method:"get",params:t})}function j(t){return Object(a["a"])({url:"/statistics/financeList",method:"post",data:t})}},8050:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"print",staticStyle:{padding:"5px 30px 30px 60px"}},[n("h3",{staticClass:"print_title"},[t._v("嘉鱼殡葬管理所专用收据")]),t._v(" "),n("div",{staticClass:"prinr_foot"},[n("span",{staticStyle:{"font-size":"14px"}},[t._v("逝者姓名: "+t._s(t.name))]),t._v(" "),n("div",[n("span",{staticStyle:{"font-size":"14px"}},[t._v("编号: "+t._s(t.serial))])])]),t._v(" "),n("table",{staticClass:"table_print",attrs:{id:"hall_print"}},[t._m(0),t._v(" "),t._l(t.list,function(e,a,i){return n("tr",{key:i},[n("td",[t._v("骨灰寄存")]),t._v(" "),n("td",[t._v("火化服务")]),t._v(" "),n("td",[t._v("1")]),t._v(" "),n("td",[t._v(t._s(e.totalprice))]),t._v(" "),n("td",[t._v(t._s(e.totalprice))])])}),t._v(" "),n("tr",[n("td",[t._v("合计")]),t._v(" "),n("td",{attrs:{colspan:"3"}},[t._v(t._s(t.count))]),t._v(" "),n("td",[t._v(t._s(t.totalprice))])])],2),t._v(" "),n("div",{staticClass:"prinr_foot"},[n("span",[t._v("经办人:"+t._s(t.operator))]),t._v(" "),n("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.currentdate))])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("商品名称")]),t._v(" "),n("td",[t._v("商品规格")]),t._v(" "),n("td",[t._v("数量")]),t._v(" "),n("td",[t._v("单价")]),t._v(" "),n("td",[t._v("金额")])])}],r=(n("a481"),n("7f7f"),n("ac0d")),o={mixins:[r["a"]],data:function(){return{list:{},name:"",serial:"",currentdate:"",operator:"",totalprice:""}},computed:{count:function(){return this.digitUppercase(this.totalprice)}},created:function(){this.getNowFormatDate()},methods:{print:function(){this.$print(this.$refs.print)},getlist:function(t){var e=this;this.totalprice=t.tick[0].totalprice,this.list=t.tick,this.name=t.buryname||t.name,this.serial=t.serial,this.operator=this.info.realname,this.$nextTick(function(){e.print()})},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();n>=1&&n<=9&&(n="0"+n),a>=0&&a<=9&&(a="0"+a),this.currentdate=e+"年"+n+"月"+a+"日"},digitUppercase:function(t){var e=["角","分"],n=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],a=[["元","万","亿"],["","拾","佰","仟"]],i=t<0?"欠":"";t=Math.abs(t);for(var r="",o=0;o<e.length;o++)r+=(n[Math.floor(10*t*Math.pow(10,o))%10]+e[o]).replace(/零./,"");r=r||"整",t=Math.floor(t);for(o=0;o<a[0].length&&t>0;o++){for(var s="",l=0;l<a[1].length&&t>0;l++)s=n[t%10]+a[1][l]+s,t=Math.floor(t/10);r=s.replace(/(零.)*零$/,"").replace(/^$/,"零")+a[0][o]+r}return i+r.replace(/(零.)*零元/,"元").replace(/(零.)+/g,"零").replace(/^整$/,"零元整")}}},s=o,l=(n("e647"),n("2877")),c=Object(l["a"])(s,a,i,!1,null,"d45fb6c6",null);e["a"]=c.exports},9308:function(t,e,n){},e647:function(t,e,n){"use strict";var a=n("9308"),i=n.n(a);i.a}}]);