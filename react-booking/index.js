
import{jsx as e}from"react/jsx-runtime";import{useState as t}from"react";
function App(){const[n,a]=t(""),[m,l]=t(""),[s,r]=t("");
return e("form",{onSubmit:o=>{o.preventDefault(),alert(`Thanks ${n}, we got your request!`)},children:[
  e("h2",{children:"Book Our Eisa Performance"}),
  e("label",{children:["Name:",e("input",{type:"text",value:n,onChange:o=>a(o.target.value),required:!0})]}),
  e("label",{children:["Email:",e("input",{type:"email",value:m,onChange:o=>l(o.target.value),required:!0})]}),
  e("label",{children:["Event Details:",e("textarea",{value:s,onChange:o=>r(o.target.value),required:!0})]}),
  e("button",{type:"submit",children:"Submit"})
]})}
export default App;
