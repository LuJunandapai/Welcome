"use strict";(self["webpackChunkaftersaleweb"]=self["webpackChunkaftersaleweb"]||[]).push([[419],{7242:function(e,t,a){a.d(t,{J3:function(){return s},Wf:function(){return u},_0:function(){return i},cL:function(){return m},e_:function(){return d},oz:function(){return r},pm:function(){return n},xe:function(){return l}});var o=a(3745);function l(){return(0,o.Z)({url:"/api/role/getRolePullDown",method:"get"})}function i(e){return(0,o.Z)({url:"/api/resourceInfo/getResourceInfoPullDown",method:"get",params:e})}function r(){return(0,o.Z)({url:"/api/userAdmin/getUserAdminPullDown",method:"get"})}function n(e){return(0,o.Z)({url:"/api/userAdmin/listUserAdminSelected",method:"post",data:e})}function s(){return(0,o.Z)({url:"/api/series/getSeriesPullDown",method:"get"})}function u(){return(0,o.Z)({url:"/api/function/getFunctionPullDown",method:"get"})}function m(){return(0,o.Z)({url:"/api/spuInfo/getSpuInfoPullDown",method:"get"})}function d(e){return(0,o.Z)({url:"/api/dict/getDictPullDown",method:"get",params:e})}},3745:function(e,t,a){a(560);var o=a(1076),l=a(7178),i=a(6666),r=a(1120),n=a(2388);const s=o.Z.create({baseURL:{NODE_ENV:"production",BASE_URL:"/",VUE_APP_BACKEND_API_URL:"http://121.43.50.177:9010",VUE_APP_BACKEND_WEB_URL:"http://121.43.50.177:9004/#"}.VUE_APP_BASE_API,timeout:5e3}),u=(0,n.mS)(),m="zh-CN"===u?"提示":"Prompt";s.interceptors.request.use((e=>{const t=e.url.toLowerCase();return t.includes("clientele")||(e.headers.token=window.localStorage.getItem("token")),e.headers.language=u,e}),(e=>(console.log("Request Error:",e),Promise.reject(e)))),s.interceptors.response.use((e=>200===e.status&&200===e.data.status?e:2002===e.data.status||502===e.data.status?((0,l.z8)({message:e.data.msg,type:"warning"}),r.Z.push("/login"),Promise.reject(new Error(e.data.msg))):void(0,i.bM)({title:m,message:e.data.msg,type:"error"})),(e=>{let t=e.response.data;t.path,t.status,t.message;return(0,i.bM)({title:m,message:t.message,type:"info"}),Promise.reject(e)})),t.Z=s},3885:function(e,t,a){function o(e){let t=JSON.parse(window.localStorage.getItem("account"));return!!t.symbolList.includes(e)}function l(){let e="afterSpu.select",t="afterSpu.selectAndRegion",a="afterSpu.selectAndUser",o=JSON.parse(window.localStorage.getItem("account"));return o.symbolList.includes(a)?3:o.symbolList.includes(t)?2:o.symbolList.includes(e)?1:void 0}a.d(t,{a:function(){return o},j:function(){return l}})},2388:function(e,t,a){function o(e){if(e){let e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}else document.exitFullscreen&&document.exitFullscreen()}function l(){let e=navigator.language,t=window.localStorage.getItem("navigatorLanguage");return t&&(e=t),"zh-CN"==e?"zh-CN":"en-US"}function i(){let e=window.localStorage.getItem("themeSwitch");return"true"==e}a.d(t,{mS:function(){return l},mq:function(){return o},sq:function(){return i}})},1419:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var o=a(9003);const l={class:"moduleBoxView"},i={class:"moduleFrom"},r={class:"moduletTable",ref:"tableDiv"},n={class:"modulePagination"};function s(e,t,a,s,u,m){const d=(0,o.up)("el-input"),c=(0,o.up)("el-form-item"),p=(0,o.up)("el-button"),h=(0,o.up)("el-form"),f=(0,o.up)("el-table-column"),g=(0,o.up)("el-table"),b=(0,o.up)("el-pagination"),w=(0,o.up)("series-operate");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",i,[(0,o.Wm)(h,{inline:!0,model:e.fromData,class:"demo-form-inline","label-width":100,"label-position":"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{label:e.$t("SeriesView.nameQuery")},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:e.fromData.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.fromData.name=t),placeholder:e.$t("SeriesView.nameQueryPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])])),_:1},8,["label"]),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{type:"primary",onClick:t[1]||(t[1]=e=>m.listData()),icon:"Search"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.search")),1)])),_:1}),(0,o.Wm)(p,{type:"info",onClick:t[2]||(t[2]=e=>m.reset()),icon:"Loading"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.reset")),1)])),_:1}),(0,o.wy)((0,o.Wm)(p,{type:"success",onClick:t[3]||(t[3]=e=>m.add())},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.add")),1)])),_:1},512),[[o.F8,m.isButton("series.add")]])])),_:1})])),_:1},8,["model"])]),(0,o._)("div",r,[(0,o.Wm)(g,{data:e.tableData,height:e.tabHeight,stripe:"",border:"",fit:"","highlight-current-row":"","empty-text":e.$t("common.table.noData"),style:{width:"100%","margin-bottom":"5px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{fixed:"",type:"index",label:e.$t("common.table.number"),width:"90"},null,8,["label"]),(0,o.Wm)(f,{prop:"barCode",label:e.$t("SeriesView.barCode"),width:"250","show-overflow-tooltip":""},null,8,["label"]),(0,o.Wm)(f,{prop:"name",label:e.$t("SeriesView.name"),"show-overflow-tooltip":""},null,8,["label"]),(0,o.Wm)(f,{prop:"nameEn",label:e.$t("SeriesView.nameEn"),"show-overflow-tooltip":""},null,8,["label"]),(0,o.Wm)(f,{fixed:"right",label:e.$t("common.table.operation"),width:"300"},{default:(0,o.w5)((t=>[(0,o.Wm)(p,{type:"primary",size:"small",onClick:e=>m.goOperate(t.$index,t.row,"detail")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.detail")),1)])),_:2},1032,["onClick"]),(0,o.wy)((0,o.Wm)(p,{type:"warning",size:"small",onClick:e=>m.goOperate(t.$index,t.row,"edit")},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.edit")),1)])),_:2},1032,["onClick"]),[[o.F8,m.isButton("series.update")]]),(0,o.wy)((0,o.Wm)(p,{type:"danger",size:"small",onClick:e=>m.deleteRow(t.$index,t.row)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.delete")),1)])),_:2},1032,["onClick"]),[[o.F8,m.isButton("series.delete")]])])),_:1},8,["label"])])),_:1},8,["data","height","empty-text"])],512),(0,o._)("div",n,[(0,o.Wm)(b,{background:"","current-page":e.pageNum,"onUpdate:currentPage":t[4]||(t[4]=t=>e.pageNum=t),"page-size":e.pageSize,"onUpdate:pageSize":t[5]||(t[5]=t=>e.pageSize=t),"page-sizes":[10,30,50,75,100],small:!1,layout:"prev, pager, next, sizes, jumper, total",total:e.total,onSizeChange:m.handleSizeChange,onCurrentChange:m.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])]),(0,o.Wm)(w,{ref:"operate",onOperateClick:m.listData},null,8,["onOperateClick"])])}var u=a(3885),m=a(7242),d=a(4775),c=a(6666),p=a(3745);function h(e){return(0,p.Z)({url:"/api/series/listSeries",method:"post",data:e})}function f(e){return(0,p.Z)({url:"/api/series/saveSeries",method:"post",data:e})}function g(e){return(0,p.Z)({url:"/api/series/updateSeries",method:"post",data:e})}function b(e){return(0,p.Z)({url:"/api/series/deleteSeriesById",method:"get",params:e})}const w={id:"style-operate"},S={class:"dialog-footer"};function y(e,t,a,l,i,r){const n=(0,o.up)("el-input"),s=(0,o.up)("el-form-item"),u=(0,o.up)("el-form"),m=(0,o.up)("el-button"),d=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(d,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[5]||(t[5]=t=>e.dialogFormVisible=t),"before-close":r.beforeClose,title:e.titleName,width:"600",draggable:""},{footer:(0,o.w5)((()=>[(0,o._)("span",S,[(0,o.Wm)(m,{onClick:t[3]||(t[3]=e=>r.closeButton())},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.cancel")),1)])),_:1}),(0,o.wy)((0,o.Wm)(m,{type:"primary",onClick:t[4]||(t[4]=e=>r.submitButton())},{default:(0,o.w5)((()=>[(0,o.Uk)((0,o.zw)(e.$t("common.button.confirm")),1)])),_:1},512),[[o.F8,"detail"!=e.type]])])])),default:(0,o.w5)((()=>[(0,o.Wm)(u,{model:e.form,rules:e.rules,ref:"ruleForm"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{label:e.$t("SeriesView.barCode"),prop:"barCode","label-width":e.formLabelWidth},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{readonly:e.isReadonly,modelValue:e.form.barCode,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.barCode=t),placeholder:e.$t("SeriesView.barCodePlaceholder"),autocomplete:"off"},null,8,["readonly","modelValue","placeholder"])])),_:1},8,["label","label-width"]),(0,o.Wm)(s,{label:e.$t("SeriesView.name"),prop:"name","label-width":e.formLabelWidth},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{readonly:e.isReadonly,modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.name=t),placeholder:e.$t("SeriesView.namePlaceholder"),autocomplete:"off"},null,8,["readonly","modelValue","placeholder"])])),_:1},8,["label","label-width"]),(0,o.Wm)(s,{label:e.$t("SeriesView.nameEn"),prop:"nameEn","label-width":e.formLabelWidth},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{readonly:e.isReadonly,modelValue:e.form.nameEn,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.nameEn=t),placeholder:e.$t("SeriesView.nameEnPlaceholder"),autocomplete:"off"},null,8,["readonly","modelValue","placeholder"])])),_:1},8,["label","label-width"])])),_:1},8,["model","rules"])])),_:1},8,["modelValue","before-close","title"])])}var $={name:"style-operate",data:function(){return{dialogFormVisible:!1,rowData:{},form:{},rules:{barCode:[{required:!0,message:this.$t("SeriesView.barCodePlaceholder"),trigger:"blur"}],name:[{required:!0,message:this.$t("SeriesView.namePlaceholder"),trigger:"blur"}],nameEn:[{required:!0,message:this.$t("SeriesView.nameEnPlaceholder"),trigger:"blur"}]},type:"",titleName:this.$t("common.dialog.defaultTitle"),isReadonly:!1,formLabelWidth:"150px"}},watch:{type(e,t){""!=e&&("add"==e&&(this.titleName=this.$t("common.dialog.addTitle")),"edit"==e&&(this.titleName=this.$t("common.dialog.editTitle")),"detail"==e&&(this.titleName=this.$t("common.dialog.detailTitle")))}},mounted(){},methods:{beforeClose(e){this.closeButton(),e()},closeButton(){this.dialogFormVisible=!1,this.isReadonly=!1,this.form={},this.rowData={},this.$refs.ruleForm.resetFields()},submitButton(){this.$refs.ruleForm.validate((e=>{if(!e)return!1;"add"==this.type?f(this.form).then((e=>{200==e.data.status&&(this.dialogFormVisible=!1,(0,c.bM)({title:this.$t("common.message.successTitle"),message:e.data.msg,type:"success"}),this.$emit("operateClick"))})).catch((e=>{})):"edit"==this.type&&g(this.form).then((e=>{200==e.data.status&&(this.dialogFormVisible=!1,(0,c.bM)({title:this.$t("common.message.successTitle"),message:e.data.msg,type:"success"}),this.$emit("operateClick"))})).catch((e=>{})),this.closeButton()}))}}},C=a(89);const D=(0,C.Z)($,[["render",y],["__scopeId","data-v-1ea28059"]]);var V=D,_={name:"styleVeiw",components:{seriesOperate:V},data:function(){return{tabHeight:0,selectData:{},fromData:{},tableData:[],total:0,pages:0,pageNum:1,pageSize:30}},mounted(){this.getSelectData(),this.listData(),this.refreshTableHeight()},methods:{refreshTableHeight(){const e=new ResizeObserver((e=>{for(const t of e)t.target===this.$refs.tableDiv&&(this.tabHeight=this.$refs.tableDiv.offsetHeight-20)}));e.observe(this.$refs.tableDiv)},isButton(e){return(0,u.a)(e)},getSelectData(){(0,m.xe)().then((e=>{200==e.data.status&&(this.selectData.roleList=e.data.data)})).catch((e=>{}))},listData(){const e=d.kN.service({lock:!0,text:this.$t("common.loadingText"),background:"rgba(0, 0, 0, 0.7)"});this.fromData.pageSize=this.pageSize,this.fromData.pageNum=this.pageNum,h(this.fromData).then((e=>{this.tableData=e.data.data.list,this.total=e.data.data.total,this.pages=e.data.data.pages,this.pageNum=e.data.data.pageNum,this.pageSize=e.data.data.pageSize})).catch((e=>{console.log(e,"erro")})).finally((()=>{e.close()}))},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageNum=1,this.pageSize=e,this.listData()},handleCurrentChange(e){console.log(`当前页: ${e}`),this.pageNum=e,this.listData()},reset(){this.fromData={},this.listData()},add(){this.$refs.operate.dialogFormVisible=!0,this.$refs.operate.type="add"},goOperate(e,t,a){this.$refs.operate.dialogFormVisible=!0,this.$refs.operate.type=a,"detail"==a?(this.$refs.operate.isReadonly=!0,this.$refs.operate.form=JSON.parse(JSON.stringify(t))):"edit"==a&&(this.$refs.operate.rowData=t,this.$refs.operate.form=JSON.parse(JSON.stringify(t)))},deleteRow(e,t){this.$confirm(this.$t("common.dialog.deleteTips"),this.$t("common.dialog.deleteTitle"),{confirmButtonText:this.$t("common.button.confirm"),cancelButtonText:this.$t("common.button.cancel"),type:"warning"}).then((()=>{b({id:t.id}).then((t=>{200==t.data.status&&(this.tableData.splice(e,1),(0,c.bM)({title:this.$t("common.message.successTitle"),message:t.data.msg,type:"success"}))})).catch((e=>{}))}))}}};const z=(0,C.Z)(_,[["render",s],["__scopeId","data-v-580addfc"]]);var k=z}}]);
//# sourceMappingURL=419.e4974a98.js.map