import{s as c}from"./client-c86c0468.js";import{_ as l,r as _,o as s,c as o,b as e,e as n,t as r,F as h,f as m,d as u,w as p}from"./index-9787dc40.js";const g=`*[_type == "post"]{
  _id,
  title,
"image": mainImage{
  asset->{
  _id,
  url
}
},
  "name":author->name,
  slug,
}[0...50]`,f={name:"HomeView",data(){return{loading:!0,posts:[]}},created(){this.fetchData()},methods:{fetchData(){this.error=this.post=null,this.loading=!0,c.fetch(g).then(t=>{this.loading=!1,this.posts=t},t=>{this.error=t})}}},v={class:"relative bg-gray-50 min-h-screen p-12"},y={class:"max-w-4xl ml-10"},x=e("h1",{class:"text-5xl font-semibold"},"Latest Blog",-1),k={class:"py-12"},b={key:0},w={key:1,class:"error"},B={class:"divide-y divide-dashed divide-gray-400"},V={class:"text-xl font-semibold hover:text-cyan-800"},C={class:"text-sm text-gray-600"};function D(t,L,N,$,i,F){const d=_("router-link");return s(),o("div",v,[e("div",y,[x,e("div",k,[i.loading?(s(),o("div",b,"Loading...")):n("",!0),t.error?(s(),o("div",w,r(t.error),1)):n("",!0),e("div",null,[e("div",B,[(s(!0),o(h,null,m(i.posts,a=>(s(),o("div",{class:"pt-4 mb-4",key:a._id},[u(d,{to:`/kisah/${a.slug.current}`},{default:p(()=>[e("h2",V,r(a.title),1)]),_:2},1032,["to"]),e("div",C,"Author: "+r(a.name),1)]))),128))])])])])])}const E=l(f,[["render",D]]);export{E as default};
