import{d as r,s as g,D as h,o as p,c as k,I as a,w as l,a as o,k as y,a9 as e}from"./chunks/framework.Dax1MTlJ.js";import{A as c}from"./chunks/Accessibility.5VcoBc02.js";const F={style:{width:"500px"}},_=r({__name:"Base",setup(E){const s=g("");return(d,i)=>{const t=h("h-input");return p(),k("div",F,[a(t,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=n=>s.value=n),placeholder:"Please input"},null,8,["modelValue"])])}}}),C={style:{width:"500px"}},m=r({__name:"Disabled",setup(E){const s=g("");return(d,i)=>{const t=h("h-input");return p(),k("div",C,[a(t,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=n=>s.value=n),placeholder:"Please input",disabled:!0},null,8,["modelValue"])])}}}),A={style:{width:"500px"}},B=r({__name:"Clearable",setup(E){const s=g("");return(d,i)=>{const t=h("h-input");return p(),k("div",A,[a(t,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=n=>s.value=n),placeholder:"Please input",clearable:""},null,8,["modelValue"])])}}}),b={style:{width:"500px"}},D=r({__name:"Password",setup(E){const s=g("");return(d,i)=>{const t=h("h-input");return p(),k("div",b,[a(t,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=n=>s.value=n),placeholder:"Please input password","show-password":!0},null,8,["modelValue"])])}}}),q={style:{width:"500px"}},v=r({__name:"Complex",setup(E){const s=g("");return(d,i)=>{const t=h("h-icon"),n=h("h-input");return p(),k("div",q,[a(n,{modelValue:s.value,"onUpdate:modelValue":i[0]||(i[0]=u=>s.value=u),placeholder:"Please input"},{prefix:l(()=>[o("头部内容")]),prepend:l(()=>[a(t,null,{default:l(()=>[a(y(c))]),_:1})]),append:l(()=>[a(t,null,{default:l(()=>[a(y(c))]),_:1})]),suffix:l(()=>[o("尾部内容")]),_:1},8,["modelValue"])])}}}),f=e("",5),x=e("",3),P=e("",3),T=e("",3),V=e("",4),I=e("",8),N=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"component/input.md","filePath":"component/input.md"}'),w={name:"component/input.md"},$=Object.assign(w,{setup(E){return(s,d)=>(p(),k("div",null,[f,a(_),x,a(m),P,a(B),T,a(D),V,a(v),I]))}});export{N as __pageData,$ as default};