(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},58:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=(a(39),a(14)),s=a.n(l),i=a(29),u=a(33),h=a(7),p=a(8),m=a(10),f=a(9),d=a(15),v=a.n(d),x=a(31),b=a(1);a(58),a(59);function y(){return r.a.createElement("div",{style:g},r.a.createElement("header",null,"Chat App"))}var g={background:"#5c5c5c",textAlign:"center",textDecoration:"underline",fontSize:"40px",padding:"10px",color:"#fff"},E=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{margin:"10px 10px"}},r.a.createElement("p",null,r.a.createElement("span",{style:{textDecoration:"underline",fontWeight:"bolder"}},this.props.chat.sent_by),": ",this.props.chat.text))}}]),a}(n.Component),C=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return this.props.chats.map((function(e){return r.a.createElement(E,{chat:e,key:e.chat_id})}))}}]),a}(n.Component),j=a(30),w=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:"",from:"",placeholder:"Enter a chat!"},e.onChange=function(t){return e.setState(Object(j.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),""!==e.state.text&&""!==e.state.from?(e.props.newChat(e.state.text,e.state.from),e.setState({text:"",placeholder:"Enter a chat!"})):""===e.state.text?e.setState({placeholder:"Chat cannot be empty!"}):""===e.state.from&&e.setState({placeholder:"You must set a username!"})},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{style:O,onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"from",style:{flex:"2",fontSize:"20px"},placeholder:"Set a username...",size:"1",value:this.state.from,onChange:this.onChange}),r.a.createElement("input",{type:"text",name:"text",style:{flex:"10",fontSize:"20px"},size:"1",placeholder:this.state.placeholder,value:this.state.text,onChange:this.onChange}),r.a.createElement("input",{type:"submit",style:{flex:"0.5"},value:"Send Chat"}))}}]),a}(n.Component),O={margin:"10px 0px",display:"flex",width:"100%",fontSize:"20px"},S=w,k=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={chats:[]},e.newChat=function(t,a){v.a.get("https://gh-api.com:3002/addChat?text="+t+"&sent_by="+a).then((function(t){return e.setState({chats:[].concat(Object(u.a)(e.state.chats),[t.data])})}))},e.updateChats=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v.a.get("https://gh-api.com:3002/getChats").then((function(t){return e.setState({chats:t.data})}));case 1:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.updateChats(),setInterval(this.updateChats,1e3)}},{key:"render",value:function(){var e=this;return r.a.createElement(x.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(b.a,{path:"/projects/chatapp",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"80vh",border:"1px solid black",overflowX:"hidden",overflowY:"auto",display:"flex",flexDirection:"column-reverse"}},r.a.createElement("div",null,r.a.createElement(C,{chats:e.state.chats}))),r.a.createElement(S,{className:"chatBox",newChat:e.newChat}))}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a12c3c06.chunk.js.map