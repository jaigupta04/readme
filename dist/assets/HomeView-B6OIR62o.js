import{_ as f,o as v,c as I,w as n,a as e,b as P,d as _,e as d,t as R,r as l,f as F}from"./index-DkSkt8uZ.js";const q={props:{doGet:Function,doPost:Function,api:String},data(){return{githubId:null,repoName:null,branchName:null,fileName:null,dialog:!1,response:"",loading:!1,timeout:null}},methods:{async submit(){if(this.githubId===null||this.repoName===null||this.branchName===null||this.fileName===null){alert("Please Fill Amount Properly.");return}console.log("jai"),this.loading=!0,this.timeout=setTimeout(()=>{alert("Request timed out.")},1e4);try{const r=await this.doGet("/api"+this.api,{githubId:this.githubId,repoName:this.repoName,branchName:this.branchName,fileName:this.fileName});console.log("gupta"),clearTimeout(this.timeout),this.response=r,this.dialog=!0}catch{clearTimeout(this.timeout),alert("An error occurred while fetching the data.")}finally{this.loading=!1}}}},B={class:"button-wrapper white-text-field"};function U(r,o,s,h,t,u){const i=l("v-text-field"),b=l("v-divider"),m=l("v-btn"),g=l("v-form"),c=l("v-card-text"),N=l("v-card-title"),x=l("v-spacer"),V=l("v-card-actions"),p=l("v-card"),w=l("v-dialog"),y=l("v-progress-circular"),G=l("v-overlay");return v(),I(p,{class:"github-form","max-width":"400px",style:{margin:"0 auto"}},{default:n(()=>[e(c,null,{default:n(()=>[e(g,{onSubmit:P(u.submit,["prevent"])},{default:n(()=>[e(i,{modelValue:t.githubId,"onUpdate:modelValue":o[0]||(o[0]=a=>t.githubId=a),label:"GitHub ID",variant:"outlined",required:"",class:"white-text-field"},null,8,["modelValue"]),e(i,{modelValue:t.repoName,"onUpdate:modelValue":o[1]||(o[1]=a=>t.repoName=a),label:"Repository Name",variant:"outlined",required:"",class:"white-text-field"},null,8,["modelValue"]),e(i,{modelValue:t.branchName,"onUpdate:modelValue":o[2]||(o[2]=a=>t.branchName=a),label:"Branch Name",variant:"outlined",required:"",class:"white-text-field"},null,8,["modelValue"]),e(i,{modelValue:t.fileName,"onUpdate:modelValue":o[3]||(o[3]=a=>t.fileName=a),label:"File Name",variant:"outlined",required:"",class:"white-text-field"},null,8,["modelValue"]),e(b,{color:"white"}),_("div",B,[e(m,{type:"submit",color:"#4969ED",rounded:""},{default:n(()=>[d(" Generate README ")]),_:1})])]),_:1},8,["onSubmit"])]),_:1}),e(w,{modelValue:t.dialog,"onUpdate:modelValue":o[5]||(o[5]=a=>t.dialog=a),"max-width":"500px"},{default:n(()=>[e(p,null,{default:n(()=>[e(N,{class:"headline"},{default:n(()=>[d("Response")]),_:1}),e(c,null,{default:n(()=>[_("pre",null,R(t.response),1)]),_:1}),e(V,null,{default:n(()=>[e(x),e(m,{color:"primary",text:"",onClick:o[4]||(o[4]=a=>t.dialog=!1)},{default:n(()=>[d("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(G,{"model-value":t.loading,class:"align-center justify-center"},{default:n(()=>[e(y,{color:"primary",size:"64",indeterminate:""})]),_:1},8,["model-value"])]),_:1})}const k=f(q,[["render",U],["__scopeId","data-v-921c1eb4"]]),C={components:{Readme:k},props:{doGet:Function,doPost:Function},data(){return{}}};function D(r,o,s,h,t,u){const i=l("Readme");return v(),F("main",null,[e(i,{doGet:s.doGet,doPost:s.doPost,api:"/"},null,8,["doGet","doPost"])])}const S=f(C,[["render",D]]);export{S as default};
