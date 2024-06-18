(()=>{"use strict";var e={9357:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var o=r(4705),n=r(6665),i=r(4825),l=r(3701),s=r(3929),a=r(6283),d=r(4701),c=r(1815),u=r(9685),f=r(397);const g=({backgroundColor:e,color:t,text:r,onPress:o,fontSize:n=16,width:i=120,marginBottom:s=10,borderRadius:d=8,borderColor:c,borderWidth:g})=>{const b=l.default.create({button:{alignItems:"center",backgroundColor:e,width:i,padding:10,marginBottom:s,borderRadius:d,borderColor:c,borderWidth:g},buttonText:{fontSize:n,fontWeight:"700",color:t}});return(0,f.jsx)(u.default,{style:b.button,onPress:o,children:(0,f.jsx)(a.default,{style:b.buttonText,children:r})})},b=({item:e,setCurrentPage:t,deleteNote:r,selectNote:o})=>(0,f.jsxs)(s.default,{style:p.card,children:[(0,f.jsx)(a.default,{style:p.cardTitle,children:e.title}),(0,f.jsx)(a.default,{style:p.cardDesc,children:e.desc}),(0,f.jsxs)(s.default,{style:p.buttons,children:[(0,f.jsx)(g,{backgroundColor:"transparant",color:"#247881",text:"Ubah",fontSize:12,width:100,onPress:()=>{o(e),t("edit")},borderWidth:1,borderColor:"#247881"}),(0,f.jsx)(g,{color:"#D82148",backgroundColor:"transparent",text:"Hapus",fontSize:12,width:100,onPress:()=>{console.log("Delete button pressed for item ID:",e.id),window.confirm("Anda yakin ingin menghapus catatan ini?")&&r(e.id)},borderWidth:1,borderColor:"#D82148"})]})]}),p=l.default.create({container:{display:"flex",flexDirection:"column",justifyContent:"center",flex:1},subContainer:{display:"flex",padding:20,flex:1},card:{padding:15,marginVertical:15,borderColor:"#000",borderWidth:1,borderRadius:5},cardTitle:{fontWeight:"600",color:"#203239",fontSize:16,marginBottom:5,borderBottomWidth:1,borderBottomColor:"#dfdfdf"},cardDesc:{marginVertical:5},buttons:{marginTop:10,display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}),h=({noteList:e,setCurrentPage:t,deleteNote:r,selectNote:o})=>(0,f.jsxs)(d.default,{style:p.container,children:[(0,f.jsx)(c.default,{backgroundColor:"#000"}),(0,f.jsxs)(s.default,{style:p.subContainer,children:[(0,f.jsx)(g,{backgroundColor:"#247881",color:"#fff",text:"Tambahkan Note",width:"100%",onPress:()=>{t("add")}}),(0,f.jsx)(i.default,{showsVerticalScrollIndicator:!1,data:e,renderItem:({item:e})=>(0,f.jsx)(b,{item:e,setCurrentPage:t,deleteNote:r,selectNote:o}),keyExtractor:e=>e.id.toString()})]})]});var x=r(6773);const m=({text:e,onChange:t,label:r,multiline:o,numberOfLines:n,textAlignVertical:i,borderRadius:d=5})=>{const c=l.default.create({textInputWrapper:{marginTop:20},input:{borderWidth:2,borederColor:"#DDD",padding:10,textAlignVertical:i,borderRadius:d}});return(0,f.jsxs)(s.default,{style:c.textInputWrapper,children:[(0,f.jsx)(a.default,{children:r}),(0,f.jsx)(x.default,{multiline:o,numberOfLines:n,style:c.input,placeholder:r,onChangeText:t,defaultValue:e})]})},j=l.default.create({container:{flex:1,justifyContent:"center",padding:20},pageTitle:{marginTop:20,fontSize:20,fontWeight:"700",textAlign:"center",color:"#203239"},spacerTop:{marginTop:30}}),y=({setCurrentPage:e,addNote:t})=>{const[r,o]=(0,n.useState)(""),[i,l]=(0,n.useState)("");return(0,f.jsxs)(s.default,{style:j.container,children:[(0,f.jsx)(a.default,{style:j.pageTitle,children:"Tambahkan Note"}),(0,f.jsx)(m,{text:r,onChange:o,label:"Judul",placeholder:"Judul",numberOfLines:1,multiline:!1}),(0,f.jsx)(m,{text:i,onChange:l,label:"Deskripsi",placeholder:"Deskripsi",multiline:!0,numberOfLines:4,textAlignVertical:"top"}),(0,f.jsx)(s.default,{style:j.spacerTop,children:(0,f.jsx)(g,{backgroundColor:"#247881",color:"#fff",text:"Simpan",width:"100%",onPress:()=>{t(r,i),e("home")}})}),(0,f.jsx)(s.default,{children:(0,f.jsx)(g,{borderColor:"#101010",borderWidth:1,backgroundColor:"#ffffff",color:"#101010",text:"Kembali ke Home",width:"100%",onPress:()=>e("home")})})]})},C=l.default.create({container:{flex:1,justifyContent:"center",padding:20},pageTitle:{marginTop:20,fontSize:20,fontWeight:"700",textAlign:"center",color:"#203239"},spacerTop:{marginTop:20}}),O=({setCurrentPage:e,editNote:t,existingTitle:r,existingDesc:o})=>{const[i,l]=(0,n.useState)(r),[d,c]=(0,n.useState)(o);return(0,f.jsxs)(s.default,{style:C.container,children:[(0,f.jsx)(a.default,{style:C.pageTitle,children:"Edit Note"}),(0,f.jsx)(m,{text:i,onChange:l,label:"Judul",numberOfLines:1,multiline:!1}),(0,f.jsx)(m,{text:d,onChange:c,label:"Deskripsi",multiline:!0,numberOfLines:4,textAlignVertical:"top"}),(0,f.jsx)(s.default,{style:C.spacerTop}),(0,f.jsx)(g,{backgroundColor:"#247881",color:"#fff",text:"Perbarui",width:"100%",onPress:()=>{t(i,d),e("home")}}),(0,f.jsx)(g,{borderColor:"#101010",borderWidth:1,backgroundColor:"#ffffff",color:"#101010",text:"Kembali ke Home",width:"100%",onPress:()=>e("home")})]})};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const v=({currentPage:e,noteList:t,setCurrentPage:r,addNote:o,editNote:n,deleteNote:i,selectedNote:l,selectNote:s})=>{switch(e){case"home":default:return(0,f.jsx)(h,{noteList:t,setCurrentPage:r,deleteNote:i,selectNote:s});case"add":return(0,f.jsx)(y,{setCurrentPage:r,addNote:o});case"edit":return(0,f.jsx)(O,{setCurrentPage:r,editNote:n,existingTitle:l.title,existingDesc:l.desc})}},T=()=>{const[e,t]=(0,n.useState)("home"),[r,o]=(0,n.useState)([{id:1,title:"Note Pertama",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}]),[i,l]=(0,n.useState)(null);return(0,f.jsx)(v,{currentPage:e,setCurrentPage:t,noteList:r,addNote:(e,t)=>{console.log("1. id:",n,"| 2. title:",e,"| 3. desc:",t);const n=r.length>0?r[r.length-1].id+1:1;o([...r,{id:n,title:e,desc:t}])},editNote:(e,t)=>{console.log("1. title:",e,"| 2. desc:",t),o(r.map((r=>r.id===i.id?w(w({},r),{},{title:e,desc:t}):r)))},deleteNote:e=>{console.log("Deleting note with ID:",e),o(r.filter((t=>t.id!==e)))},selectedNote:i,selectNote:e=>{l(e)}})}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,i)=>{if(!o){var l=1/0;for(c=0;c<e.length;c++){for(var[o,n,i]=e[c],s=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](o[a])))?o.splice(a--,1):(s=!1,i<l&&(l=i));if(s){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,n,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[l,s,a]=o,d=0;if(l.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(a)var c=a(r)}for(t&&t(o);d<l.length;d++)i=l[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[870],(()=>r(5036)));o=r.O(o)})();
//# sourceMappingURL=main.dfccfe4d.js.map