(this.webpackJsonptugas=this.webpackJsonptugas||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n.n(r),s=n(7),i=n.n(s),o=(n(13),n.p,n(14),n(2)),j=n(3),u=n(5),l=n(4),p=(n(15),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={inp_z:""},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"layer3",children:[Object(c.jsx)("h3",{children:"Component C"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Get Value from comp Z : "}),Object(c.jsx)("span",{children:Object(c.jsx)("input",{type:"text",readOnly:!0,id:"gcompz",value:this.props.get_c})}),Object(c.jsx)("hr",{}),Object(c.jsx)("span",{children:"Set Value to comp Z : "}),Object(c.jsx)("span",{children:Object(c.jsx)("input",{type:"text",onChange:function(e){return t.setState({inp_z:e.target.value})}})}),Object(c.jsx)("span",{children:Object(c.jsx)("button",{onClick:function(e){t.props.eventClick(t.state.inp_z)},children:"Sent to Component Z"})})]})}}]),n}(r.Component)),b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).get_c=function(e){t.props.event_a(e)},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"layer1",children:[Object(c.jsx)("h3",{children:"Component B"}),Object(c.jsx)(p,{get_c:this.props.get_c,eventClick:function(e){return t.get_c(e)}})]})}}]),n}(r.Component),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).get_b=function(e){t.props.event_p(e)},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"layer1",children:[Object(c.jsx)("h3",{children:"Component A"}),Object(c.jsx)(b,{get_c:this.props.get_c,event_a:function(e){return t.get_b(e)}})]})}}]),n}(r.Component),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={inp_c:""},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"layer3",children:[Object(c.jsx)("h3",{children:"Component Z"}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"Get Value from comp C : "}),Object(c.jsx)("span",{children:Object(c.jsx)("input",{type:"text",readOnly:!0,id:"gcompc",value:this.props.get_z})}),Object(c.jsx)("hr",{}),Object(c.jsx)("span",{children:"Set Value to comp C : "}),Object(c.jsx)("span",{children:Object(c.jsx)("input",{type:"text",onChange:function(e){return t.setState({inp_c:e.target.value})}})}),Object(c.jsx)("span",{children:Object(c.jsx)("button",{onClick:function(e){t.props.eventClick(t.state.inp_c)},children:"Sent to Component C"})})]})}}]),n}(r.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).get_z=function(e){t.props.event_x(e)},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"layer1",children:[Object(c.jsx)("h3",{children:"Component Y"}),Object(c.jsx)(O,{get_z:this.props.get_z,eventClick:function(e){return t.get_z(e)}})]})}}]),n}(r.Component),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).get_y=function(e){t.props.event_p(e)},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{className:"layer1",children:[Object(c.jsx)("h3",{children:"Component X"}),Object(c.jsx)(v,{get_z:this.props.get_z,event_x:function(e){return t.get_y(e)}})]})}}]),n}(r.Component),f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={com_z:"",com_c:""},t}return Object(j.a)(n,[{key:"set_z",value:function(t){if(""==t)return alert("Value set Component Z tidak boleh kosong"),!1;this.setState({com_z:t})}},{key:"set_c",value:function(t){if(""==t)return alert("Value set Component C tidak boleh kosong"),!1;this.setState({com_c:t})}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{id:"layer",children:[Object(c.jsx)("div",{children:Object(c.jsx)(h,{get_c:this.state.com_c,event_p:function(e){return t.set_z(e)}})}),Object(c.jsx)("div",{children:Object(c.jsx)(d,{get_z:this.state.com_z,event_p:function(e){return t.set_c(e)}})})]})}}]),n}(r.Component);var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(f,{})})})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),_()}},[[16,1,2]]]);
//# sourceMappingURL=main.41b5ad91.chunk.js.map