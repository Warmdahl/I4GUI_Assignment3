(function(e){function t(t){for(var a,s,i=t[0],r=t[1],d=t[2],m=0,u=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);c&&c(t);while(u.length)u.shift()();return l.push.apply(l,d||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],a=!0,i=1;i<o.length;i++){var r=o[i];0!==n[r]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},n={app:0},l=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=r;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var a=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-container",attrs:{id:"app"}},[o("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[o("md-app-toolbar",{staticClass:"md-primary"},[o("span",{staticClass:"md-title"},[e._v("Model Manager")])]),o("md-app-drawer",{attrs:{"md-permanent":"full"}},[o("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[e._v("\n                Navigation\n            ")]),o("md-list",[o("md-list-item",{attrs:{id:"tab-login",to:"/",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Login")])]),o("md-list-item",{attrs:{id:"tab-opretmodel","md-label":"Opret Model",to:"/opretmodel",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Opret Model")])]),o("md-list-item",{attrs:{id:"tab-opretmanager","md-label":"Opret Manager",to:"/opretmanager",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Opret Manager")])]),o("md-list-item",{attrs:{id:"tab-opretjob","md-label":"Opret Job",to:"/opretjob",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Opret Job")])]),o("md-list-item",{attrs:{id:"tab-addmodeltojob","md-label":"Add Model To Job",to:"/addmodeltojob",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Add Model to Job")])]),o("md-list-item",{attrs:{id:"tab-deletemodelfromjob","md-label":"Delete Model From Job",to:"/deletemodel_fromjob",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Delete Model From Job")])]),o("md-list-item",{attrs:{id:"tab-sejob","md-label":"Se Job",to:"/sejob",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Se Job")])]),o("md-list-item",{attrs:{id:"tab-addexpensetojob","md-label":"Add expense to job",to:"/addexpensetojob",exact:""}},[o("span",{staticClass:"md-list-item-text"},[e._v("Add Expense To Job")])])],1)],1),o("md-app-content",[o("router-view")],1)],1)],1)},l=[],s={name:"app"},i=s,r=o("2877"),d=Object(r["a"])(i,n,l,!1,null,null,null),c=d.exports,m=o("43f9"),u=o.n(m),p=(o("51de"),o("8c4f")),b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v(e._s(e.msg))]),o("p",[e._v("Welcome to your new single-page application, built with Vue.js.")])])},h=[],f={name:"Home",props:{msg:String}},v=f,_=Object(r["a"])(v,b,h,!1,null,"8e919fe8",null),g=(_.exports,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.login02Function(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Login")])]),o("md-card-content",[o("md-field",{attrs:{"md-clearable":""}},[o("label",[e._v("Username")]),o("md-input",{model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),o("md-field",[o("label",[e._v("Password")]),o("md-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),o("md-card-actions",[o("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("login")])],1)],1)],1)])}),y=[],j={name:"Login",data:function(){return{username:"Enter Email",password:"EnterPassword",url:"./api/account/login"}},methods:{login02Function:function(){var e="https://localhost:44368/api/account/login",t={email:this.username,password:this.password,oldPassword:this.password};fetch(e,{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.jwt),be.push("/opretmodel")}).catch(function(e){return alert("Error!!! "+e)})}}},x=j,w=Object(r["a"])(x,g,y,!1,null,null,null),C=w.exports,k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitFunction(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Opret Model")])]),o("md-card-content",[o("md-field",[o("label",[e._v("First name")]),o("md-input",{model:{value:e.fname,callback:function(t){e.fname=t},expression:"fname"}})],1),o("md-field",[o("label",[e._v("Last name")]),o("md-input",{model:{value:e.lname,callback:function(t){e.lname=t},expression:"lname"}})],1),o("md-field",[o("label",[e._v("Email")]),o("md-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),o("md-field",[o("label",[e._v("Phone nr")]),o("md-input",{model:{value:e.phonenr,callback:function(t){e.phonenr=t},expression:"phonenr"}})],1),o("md-field",[o("label",[e._v("Addres Line 1 ")]),o("md-input",{model:{value:e.addresLine1,callback:function(t){e.addresLine1=t},expression:"addresLine1"}})],1),o("md-field",[o("label",[e._v("Addres Line 2")]),o("md-input",{model:{value:e.addresLine2,callback:function(t){e.addresLine2=t},expression:"addresLine2"}})],1),o("md-field",[o("label",[e._v("Zip code")]),o("md-input",{model:{value:e.zip,callback:function(t){e.zip=t},expression:"zip"}})],1),o("md-field",[o("label",[e._v("City")]),o("md-input",{model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),o("md-field",[o("label",[e._v("Country")]),o("md-input",{model:{value:e.country,callback:function(t){e.country=t},expression:"country"}})],1),o("md-field",[o("md-datepicker",{attrs:{background:"007AFF"},model:{value:e.birthDate,callback:function(t){e.birthDate=t},expression:"birthDate"}},[o("label",[e._v("Birth date")])])],1),o("md-field",[o("label",[e._v("Nationality")]),o("md-input",{model:{value:e.nationality,callback:function(t){e.nationality=t},expression:"nationality"}})],1),o("md-field",[o("label",[e._v("Height")]),o("md-input",{model:{value:e.height,callback:function(t){e.height=t},expression:"height"}})],1),o("md-field",[o("label",[e._v("Shoe size")]),o("md-input",{model:{value:e.shoeSize,callback:function(t){e.shoeSize=t},expression:"shoeSize"}})],1),o("md-field",[o("label",[e._v("Hair color")]),o("md-input",{model:{value:e.hairColor,callback:function(t){e.hairColor=t},expression:"hairColor"}})],1),o("md-field",[o("label",[e._v("Eye color")]),o("md-input",{model:{value:e.eyeColor,callback:function(t){e.eyeColor=t},expression:"eyeColor"}})],1),o("md-field",[o("label",[e._v("Comments")]),o("md-input",{model:{value:e.comments,callback:function(t){e.comments=t},expression:"comments"}})],1),o("md-field",[o("label",[e._v("Password")]),o("md-input",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),o("md-card-actions",[o("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("submit")])],1)],1)],1)])},J=[],M={name:"OpretModel",data:function(){return{fname:"Firstname",lname:"LastName",email:"124@mail.dk",phonenr:"12345678",addresLine1:"asdf",addresLine2:"qwer",zip:"1234",city:"asdftown",country:"qwerland",birthDate:"2020-02-02",nationality:"danglish",height:2.1,shoeSize:38,hairColor:"brown",eyeColor:"dark",comments:"hej med dig",password:"password123",url:"./api/models"}},methods:{submitFunction:function(){var e="https://localhost:44368/api/models",t={firstName:this.fname,lastName:this.lname,email:this.email,phoneNo:this.phonenr,addresLine1:this.addresLine1,addresLine2:this.addresLine2,zip:this.zip,city:this.city,country:this.country,birthDate:this.birthDate,nationality:this.nationality,height:this.height,shoeSize:this.shoeSize,hairColor:this.hairColor,eyeColor:this.eyeColor,comments:this.comments,password:this.password};fetch(e,{method:"POST",body:JSON.stringify(t),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(be.push("/")).catch(function(e){return alert("Error!!! "+e)})}}},S=M,O=Object(r["a"])(S,k,J,!1,null,null,null),z=O.exports,E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitFunction(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Opret Job")])]),o("md-card-content",[o("md-field",[o("label",[e._v("First name")]),o("md-input",{model:{value:e.fname,callback:function(t){e.fname=t},expression:"fname"}})],1),o("md-field",[o("label",[e._v("Last name")]),o("md-input",{model:{value:e.lname,callback:function(t){e.lname=t},expression:"lname"}})],1),o("md-field",[o("label",[e._v("Email")]),o("md-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),o("md-field",[o("label",[e._v("Password")]),o("md-input",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),o("md-card-actions",[o("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("submit")])],1)],1)],1)])},T=[],A={name:"opretmanager",data:function(){return{fname:"Firstname",lname:"LastName",email:"123@mail.dk",password:"sexy"}},methods:{submitFunction:function(){var e="https://localhost:44368/api/Managers",t={firstname:this.fname,lastname:this.lname,email:this.email,password:this.password};fetch(e,{method:"POST",body:JSON.stringify(t),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(be.push("/")).catch(function(e){return alert("Error!!! "+e)})}}},F=A,D=Object(r["a"])(F,E,T,!1,null,null,null),P=D.exports,I=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitFunction(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-59 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Opret Job")])]),o("md-card-content",[o("md-field",[o("label",[e._v("Customer")]),o("md-input",{model:{value:e.customer,callback:function(t){e.customer=t},expression:"customer"}})],1),o("md-field",[o("div",{staticClass:"block md-layout-item",attrs:{"md-size-100":""}},[o("md-datepicker",{attrs:{background:"007AFF"},model:{value:e.sdate,callback:function(t){e.sdate=t},expression:"sdate"}},[o("label",[e._v("Start date")])])],1)]),o("md-field",[o("label",[e._v("Days")]),o("md-input",{attrs:{type:"number"},model:{value:e.days,callback:function(t){e.days=t},expression:"days"}})],1),o("md-field",[o("label",[e._v("Location")]),o("md-input",{model:{value:e.location,callback:function(t){e.location=t},expression:"location"}})],1),o("md-field",[o("label",[e._v("Comments")]),o("md-input",{model:{value:e.comments,callback:function(t){e.comments=t},expression:"comments"}})],1)],1),o("md-card-actions",[o("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("submit")])],1)],1)],1)])},L=[],N=(o("c5f6"),{name:"opretjob",data:function(){return{customer:"Customer",sdate:"2020-05-13",days:1,location:"Location",comments:"Comments"}},methods:{submitFunction:function(){var e="https://localhost:44368/api/Jobs",t={customer:this.customer,startDate:this.sdate,days:Number(this.days),location:this.location,comments:this.comments};fetch(e,{method:"POST",body:JSON.stringify(t),credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(be.push("/sejob")).catch(function(e){return alert("Error!!! "+e)})}}}),H=N,B=Object(r["a"])(H,I,L,!1,null,null,null),$=B.exports,G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitFunction(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Add Model to Job")])]),o("md-card-content",[o("label",[e._v("Model")]),o("md-field",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedModel,expression:"selectedModel"}],staticStyle:{"background-color":"black",color:"white"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedModel=t.target.multiple?o:o[0]}}},[o("option",{attrs:{disabled:"",value:""}},[e._v("Please select option")]),e._l(e.models,function(t){return o("option",{key:t.efModelId,domProps:{value:t.efModelId}},[e._v(e._s(t.firstName))])})],2)]),o("label",[e._v("Job")]),o("md-field",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedJob,expression:"selectedJob"}],staticStyle:{"background-color":"black",color:"white"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedJob=t.target.multiple?o:o[0]}}},[o("option",{attrs:{disabled:"",value:""}},[e._v("Please select option")]),e._l(e.jobs,function(t){return o("option",{key:t.efJobId,domProps:{value:t.efJobId}},[e._v(e._s(t.customer))])})],2)])],1),o("md-card-actions",[o("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("submit")])],1)],1)],1)])},q=[],R={name:"AddModeltoJob",data:function(){return{selectedModel:1,i:0,selectedJob:1,models:null,jobs:null,response:null}},mounted:function(){this.loadData()},methods:{submitFunction:function(){var e="https://localhost:44368/api/jobs/"+this.selectedJob+"/model/"+this.selectedModel;fetch(e,{method:"POST",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).catch(function(e){return alert("Error "+e)})},loadData:function(){var e=this,t="https://localhost:44368/api/models";fetch(t,{method:"GET",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){e.models=t}).catch(function(e){return alert("Error!!! "+e)}),fetch("https://localhost:44368/api/jobs",{method:"GET",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).catch(function(e){return alert("Error!!! "+e)})}}},U=R,V=Object(r["a"])(U,G,q,!1,null,"72a7a755",null),W=V.exports,Z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.callJob(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Delete Model From Job")])]),o("md-card-content",[o("div",{staticClass:"md-subheading"},[e._v("Job")]),o("div",{staticClass:"md-caption"},[e._v("Select a job to view the moddels assigned the job.")]),o("md-field",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedJob,expression:"selectedJob"}],staticStyle:{"background-color":"black",color:"white"},on:{click:e.callJob,change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedJob=t.target.multiple?o:o[0]}}},[o("option",{attrs:{disabled:"",value:""}},[e._v("Please select Job")]),e._l(e.jobs,function(t){return o("option",{key:t.efJobId,domProps:{value:t.efJobId}},[e._v(e._s(t.customer)+" ")])})],2)])],1)],1)],1),o("form",{on:{submit:function(t){return t.preventDefault(),e.deleteModelFromJobFunction(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-card-content",[o("div",{staticClass:"md-subheading"},[e._v("Model")]),0!=e.jobModels.models&&e.jobModels.models.length>0?o("div",[e.jobModels.models.length>1?o("div",[o("div",{staticClass:"md-caption"},[e._v("There are "+e._s(e.jobModels.models.length)+" Models assigned this job.")])]):o("div",[o("div",{staticClass:"md-caption"},[e._v("There is "+e._s(e.jobModels.models.length)+" Model assigned this job.")])]),o("div",{staticClass:"md-caption"},[e._v("To delete a model from the job select one from the drop down below.")]),o("md-field",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedModel,expression:"selectedModel"}],staticStyle:{"background-color":"black",color:"white"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedModel=t.target.multiple?o:o[0]}}},[o("option",{attrs:{disabled:"",value:""}},[e._v("Please select Model")]),e._l(e.jobModels.models,function(t){return o("option",{key:t.email,domProps:{value:t.email}},[e._v(e._s(t.firstName))])})],2)]),o("img",{attrs:{src:"assets/delete.jpg"}}),o("md-card-actions",[o("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("Delete model from job")])],1)],1):o("div",[o("div",{staticClass:"md-caption"},[e._v("There are no Models assigned this job.")])])])],1)],1)])},K=[],Q=(o("96cf"),o("1da1")),X={name:"DeleteModel_FromJob",data:function(){return{selectedModel:1,i:0,selectedJob:1,models:null,jobs:null,response:null,jobModels:{models:[]}}},mounted:function(){this.loadData(),this.callJob()},methods:{callJob:function(){var e=this;fetch("https://localhost:44368/api/jobs/"+this.selectedJob,{method:"GET",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){e.jobModels=t}).catch(function(e){return alert("Error!!! "+e)})},deleteModelFromJobFunction:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){var t,o,a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(t=this.models.length,a=0;a<t;a++)this.models[a].email==this.selectedModel&&(o=this.models[a].efModelId);return n="https://localhost:44368/api/jobs/"+this.selectedJob+"/model/"+o,e.next=5,fetch(n,{method:"DELETE",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).catch(function(e){return alert("Error!!! "+e)});case 5:this.callJob();case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadData:function(){var e=this,t="https://localhost:44368/api/models";fetch(t,{method:"GET",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){e.models=t}).catch(function(e){return alert("Error!!! "+e)}),fetch("https://localhost:44368/api/jobs",{method:"GET",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).catch(function(e){return alert("Error!!! "+e)})}}},Y=X,ee=Object(r["a"])(Y,Z,K,!1,null,"206cc0f2",null),te=ee.exports,oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("md-card",{staticClass:"md-layout-item md-size-59 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Se Job")])]),o("md-card-content",[o("label",[e._v("Job")]),o("md-field",[o("md-table",[o("md-table-row",[o("md-table-head",[e._v("Customer")]),o("md-table-head",[e._v("Start date")]),o("md-table-head",[e._v("Number of days")]),o("md-table-head",[e._v("location")]),o("md-table-head",[e._v("Comment")])],1),e._l(e.jobs,function(t){return o("md-table-row",{key:t.efJobId},[o("md-table-cell",[e._v(e._s(t.customer))]),o("md-table-cell",[e._v(e._s(t.startDate))]),o("md-table-cell",[e._v(e._s(t.days))]),o("md-table-cell",[e._v(e._s(t.location))]),o("md-table-cell",[e._v(e._s(t.comments))])],1)})],2)],1)],1)],1)],1)},ae=[],ne={name:"SeJob",data:function(){return{jobs:null,models:null}},mounted:function(){this.loadJobs()},methods:{loadJobs:function(){var e=this;fetch("https://localhost:44368/api/jobs",{method:"GET",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).catch(function(e){return alert("Error!!! "+e)})}}},le=ne,se=Object(r["a"])(le,oe,ae,!1,null,null,null),ie=se.exports,re=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("form",{on:{submit:function(t){return t.preventDefault(),e.submitFunc(t)}}},[o("md-card",{staticClass:"md-layout-item md-size-50 md-small-size-100"},[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Add Expenses to Job")])]),o("md-card-content",[o("label",[e._v("Job")]),o("md-field",[o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedJob,expression:"selectedJob"}],staticStyle:{"background-color":"black",color:"white"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedJob=t.target.multiple?o:o[0]}}},[o("option",{attrs:{disabled:"",value:""}},[e._v("Please select option")]),e._l(e.jobs,function(t){return o("option",{key:t.efJobId,domProps:{value:t.efJobId}},[e._v(e._s(t.customer))])})],2)]),o("md-field",[o("label",[e._v("Amount")]),o("md-input",{model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),o("md-field",[o("md-datepicker",{attrs:{background:"007AFF"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[o("label",[e._v("Date")])])],1),o("md-field",[o("label",[e._v("Comment")]),o("md-input",{model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1)],1),o("md-card-actions",[o("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("submit")])],1)],1)],1)])},de=[],ce=(o("28a5"),{name:"AddExpenseToJob",data:function(){return{id:null,selectedJob:null,jobs:null,amount:5.6,date:"2020-01-01",comment:"text"}},mounted:function(){var e=localStorage.getItem("token");console.log(e);var t=e.split(".")[1];console.log(t);var o=window.atob(t);console.log(o);var a=JSON.parse(o);this.id=a["ModelId"],console.log(this.id),this.loadJobs()},methods:{loadJobs:function(){var e=this;fetch("https://localhost:44368/api/jobs",{method:"GET",credentials:"include",headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){e.jobs=t}).then(console.log(this.jobs)).catch(function(e){return alert("Error!!! "+e)})},submitFunc:function(){var e={modelId:Number(this.id),jobId:this.selectedJob,date:this.date,text:this.text,amount:Number(this.amount)};fetch("https://localhost:44368/api/expenses",{method:"POST",credentials:"include",body:JSON.stringify(e),headers:new Headers({Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"})}).then(function(e){return e.json()}).catch(function(e){return alert("Error!!! "+e)})}}}),me=ce,ue=Object(r["a"])(me,re,de,!1,null,null,null),pe=ue.exports;a["default"].use(p["a"]);var be=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Login",component:C},{path:"/opretmodel",name:"OpretModel",component:z},{path:"/opretmanager",name:"OpretManager",component:P},{path:"/opretjob",name:"OpretJob",component:$},{path:"/addmodeltojob",name:"AddModeltoJob",component:W},{path:"/deletemodel_fromjob",name:"DeleteModel_FromJob",component:te},{path:"/sejob",name:"SeJob",component:ie},{path:"/addexpensetojob",name:"AddExpenseToJob",component:pe}]});o("0759");a["default"].use(u.a),a["default"].config.productionTip=!0,new a["default"]({router:be,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.2cb99a62.js.map