import{_ as m,D as h,o as d,c as y,I as s,w as i,a as p,F as u,d as C,a4 as b,s as f,b as _,a9 as r}from"./chunks/framework.Dax1MTlJ.js";const B={};function q(o,a){const n=h("h-input"),k=h("h-form-item"),t=h("h-form");return d(),y(u,null,[s(t,{"max-width":500},{default:i(()=>[s(k,{label:"oooo"},{default:i(()=>[s(n)]),_:1})]),_:1}),s(t,{"max-width":500},{default:i(()=>[s(k,{label:"oooo"},{label:i(()=>[p("uuuu")]),default:i(()=>[s(n)]),_:1})]),_:1})],64)}const A=m(B,[["render",q]]),D=C({__name:"Validate",setup(o){const a=b({username:"",password:""}),n=f(),k=()=>{const t=n.value;t==null||t.validate((l,e)=>{console.log(l,e)})};return(t,l)=>{const e=h("h-input"),g=h("h-form-item"),c=h("h-button"),F=h("h-form");return d(),_(F,{"max-width":500,style:{"margin-left":"20px"},ref_key:"formRef",ref:n,model:a,rules:{username:{min:6,max:10,message:"6-10位",trigger:["change","blur"]}}},{default:i(()=>[s(g,{prop:"username",required:!0,rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]},{label:i(()=>[p("用户名")]),default:i(()=>[s(e,{placeholder:"请输入用户名",modelValue:a.username,"onUpdate:modelValue":l[0]||(l[0]=E=>a.username=E)},null,8,["modelValue"])]),_:1}),s(g,{prop:"password",required:!0,rules:[{required:!0,message:"请输入密码",trigger:"blur"}]},{label:i(()=>[p("密码")]),default:i(()=>[s(e,{placeholder:"请输入密码",modelValue:a.password,"onUpdate:modelValue":l[1]||(l[1]=E=>a.password=E),type:"password"},null,8,["modelValue"])]),_:1}),s(c,{onClick:k,type:"primary"},{default:i(()=>[p("点击校验")]),_:1})]),_:1},8,["model"])}}}),v=r("",7),x=r("",5),I=r("",16),w=JSON.parse('{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"component/form.md","filePath":"component/form.md"}'),P={name:"component/form.md"},V=Object.assign(P,{setup(o){return(a,n)=>(d(),y("div",null,[v,s(A),x,s(D),I]))}});export{w as __pageData,V as default};