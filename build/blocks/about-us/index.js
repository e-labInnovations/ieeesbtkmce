(()=>{"use strict";var e,t={6878:()=>{const e=window.wp.blocks,t=JSON.parse('{"apiVersion":2,"name":"ieeesbtkmce/about-us","version":"0.1.0","title":"About Us","category":"ieeesbtkmce","icon":"info","description":"You can change the subheading, content and image.","supports":{"html":false,"anchor":true},"textdomain":"ieeesbtkmce","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","example":{"attributes":{"subTitle":"Lorem Ipsum","content":"Lorem ipsum dolor sit amet consectetur. Sapien suspendisse cursus vestibulum cursus eget ultricies habitasse. Mi enim mauris aliquam potenti amet pharetra consequat adipiscing. Quis a euismod elit congue molestie cum. Tristique sem ut ut orci sed lobortis. Fames vestibulum convallis neque sem non nullam sit. Viverra placerat est eleifend cras non lorem bibendum.","image":{"url":"https://picsum.photos/id/183/300/300"},"linkObject":null}}}'),l=window.React,a=window.wp.blockEditor,s=window.wp.components,n=window.wp.i18n,r=window.wp.element;(0,e.registerBlockType)(t,{attributes:{subTitle:{type:"String",source:"html",selector:"h3"},content:{type:"String",source:"html",selector:"p"},image:{type:"object"},linkObject:{type:"object"}},edit:function({attributes:e,setAttributes:t}){const{subTitle:o,content:i,image:m,linkObject:c}=e,[u,d]=(0,r.useState)(!1),p=(0,a.useBlockProps)({className:"container mx-auto my-8 flex flex-col gap-6 px-4 sm:flex-row xl:px-28"});return(0,l.createElement)("section",null,(0,l.createElement)("div",{...p},(0,l.createElement)("div",{className:"flex w-full flex-col gap-6 sm:w-1/2"},(0,l.createElement)("h2",{className:"my-5 font-sans text-3xl text-primary-800 sm:mb-6 sm:hidden"},"About Us"),(0,l.createElement)("div",{className:"flex w-full justify-center px-16 sm:px-0"},(0,l.createElement)("div",{className:"flex bg-contain bg-center bg-no-repeat p-12 sm:p-8 lg:p-16",style:{backgroundImage:`url('${themeData.theme_url+"/assets/images/about-bg.png"}')`}},m&&m.url?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.MediaUploadCheck,null,(0,l.createElement)(a.MediaUpload,{onSelect:e=>t({image:{id:e.id,alt:e.alt||"About Us Image",url:e.url}}),allowedTypes:["image"],value:m.id,render:({open:e})=>(0,l.createElement)("img",{src:m.url,onClick:e,className:"my-auto hidden aspect-square w-full cursor-edit rounded-full object-cover shadow-inner group-hover:block",alt:m.alt})})),(0,l.createElement)("img",{src:m.url,className:"my-auto block aspect-square w-full rounded-full object-cover shadow-inner group-hover:hidden",alt:m.alt})):(0,l.createElement)(a.MediaPlaceholder,{onSelect:e=>t({image:{id:e.id,alt:e.alt||"About Us Image",url:e.url}}),allowedTypes:["image"],multiple:!1,labels:{title:"About Us Image"}})))),(0,l.createElement)("div",{className:"flex w-full flex-col justify-center sm:w-1/2 sm:p-3"},(0,l.createElement)("h2",{className:"my-5 hidden font-sans text-3xl text-primary-800 sm:mb-6 sm:block"},"About Us"),(0,l.createElement)(a.RichText,{className:"mb-1 text-xl sm:mb-2 md:mb-2",tagName:"h3",value:o,allowedFormats:["core/bold","core/italic"],onChange:e=>t({subTitle:e}),placeholder:(0,n.__)("Heading...")}),(0,l.createElement)(a.RichText,{className:"font-light",tagName:"p",value:i,allowedFormats:["core/bold","core/italic"],onChange:e=>t({content:e}),placeholder:(0,n.__)("Content...")}),(0,l.createElement)("div",{className:"mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12"},(0,l.createElement)("a",{onClick:()=>d((e=>!e)),className:"rounded p-2 px-5 text-center text-primary-800 no-underline outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"},"More Details")),u&&(0,l.createElement)(s.Popover,{position:"middle center",onFocusOutside:()=>d(!1)},(0,l.createElement)(a.__experimentalLinkControl,{settings:[],value:c,onChange:e=>t({linkObject:e}),style:{display:"block",width:"80%"}}),(0,l.createElement)(s.Button,{variant:"primary",onClick:()=>d(!1),style:{display:"block",width:"100%"}},"Confirm Link")))))},save:function({attributes:e}){const{subTitle:t,content:s,image:n,linkObject:r}=e;return(0,l.createElement)("section",null,(0,l.createElement)("div",{className:"container mx-auto my-8 flex flex-col gap-6 px-4 sm:flex-row xl:px-28"},(0,l.createElement)("div",{className:"flex w-full flex-col gap-6 sm:w-1/2"},(0,l.createElement)("h2",{className:"my-5 font-sans text-3xl text-primary-800 sm:mb-6 sm:hidden"},"About Us"),(0,l.createElement)("div",{className:"flex w-full justify-center px-16 sm:px-0"},(0,l.createElement)("div",{className:"flex bg-contain bg-center bg-no-repeat p-12 sm:p-8 lg:p-16",style:{backgroundImage:`url('${themeData.theme_url+"/assets/images/about-bg.png"}')`}},n&&n.url?(0,l.createElement)("img",{src:n.url,className:"my-auto aspect-square w-full rounded-full object-cover shadow-inner",alt:n.alt}):(0,l.createElement)("img",{src:themeData.theme_url+"/assets/images/about-1.jpg",className:"my-auto aspect-square w-full rounded-full object-cover shadow-inner",alt:"About Us Image"})))),(0,l.createElement)("div",{className:"flex w-full flex-col justify-center sm:w-1/2 sm:p-3"},(0,l.createElement)("h2",{className:"my-5 hidden font-sans text-3xl text-primary-800 sm:mb-6 sm:block"},"About Us"),(0,l.createElement)(a.RichText.Content,{tagName:"h3",value:t,className:"mb-1 text-xl sm:mb-2 md:mb-2"}),(0,l.createElement)(a.RichText.Content,{tagName:"p",value:s,className:"font-light"}),(0,l.createElement)("div",{className:"mt-8 flex flex-row sm:mt-8 md:mt-10 xl:mt-12"},(0,l.createElement)("a",{href:r?r.url:"#",className:"rounded p-2 px-5 text-center text-primary-800 no-underline outline outline-1 outline-primary-800 transition-shadow hover:shadow-md hover:shadow-gray-400"},"More Details")))))}})}},l={};function a(e){var s=l[e];if(void 0!==s)return s.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,s,n)=>{if(!l){var r=1/0;for(c=0;c<e.length;c++){for(var[l,s,n]=e[c],o=!0,i=0;i<l.length;i++)(!1&n||r>=n)&&Object.keys(a.O).every((e=>a.O[e](l[i])))?l.splice(i--,1):(o=!1,n<r&&(r=n));if(o){e.splice(c--,1);var m=s();void 0!==m&&(t=m)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[l,s,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1992:0,1938:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var s,n,[r,o,i]=l,m=0;if(r.some((t=>0!==e[t]))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(i)var c=i(a)}for(t&&t(l);m<r.length;m++)n=r[m],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},l=globalThis.webpackChunkieeesbtkmce=globalThis.webpackChunkieeesbtkmce||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var s=a.O(void 0,[1938],(()=>a(6878)));s=a.O(s)})();