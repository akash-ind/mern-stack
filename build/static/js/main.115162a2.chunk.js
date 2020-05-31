(this["webpackJsonpmern-tags"]=this["webpackJsonpmern-tags"]||[]).push([[0],{177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),o=a.n(s),l=(a(92),a(93),a(9)),c=a(10),i=a(12),m=a(11),p=a(8),u=a(7),d=a(43),h=a.n(d),v=a(28),b=a.n(v),g=function(e){e?b.a.defaults.headers.common.Authorization=e:delete b.a.defaults.headers.common.Authorization},E=function(e){return{type:"SET_CURRENT_USER",payload:e}},f=function(){return function(e){localStorage.removeItem("jwtToken"),g(!1),e(E({}))}},w=a(21),y=a(25),N=a(82),O=a(41),_=a(117),C={isAuthenticated:!1,user:{},loading:!1},j={},x=Object(y.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(O.a)(Object(O.a)({},e),{},{isAuthenticated:!_(t.payload),user:t.payload});case"USER_LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),S=[N.a],k=Object(y.e)(x,{},Object(y.d)(y.a.apply(void 0,S),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||y.d)),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},"Find a Hackathon Group!")),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar navbar-nav"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(p.b,{to:"/",className:"listing-btns"},"Listings")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(p.b,{to:"/create",className:"listing-btns"},"Create Listing")))),r.a.createElement(p.b,{to:"/register",style:{fontWeight:"bold",width:"130px",borderRadius:"3px",letterSpacing:"1.5px",display:"flex",flexFlow:"column wrap",justifyContent:"center"},className:"btn btn-large waves-effect waves-light hoverable white-text blue accent-2.5"},"Register"),r.a.createElement(p.b,{to:"/login",style:{fontWeight:"bold",width:"130px",borderRadius:"3px",letterSpacing:"1.5px",display:"flex",flexFlow:"column wrap",justifyContent:"center",marginLeft:"0.5rem"},className:"btn btn-large waves-effect hoverable white black-text"},"Log In"))}}]),a}(n.Component),R=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"}))}}]),a}(n.Component),T=a(33),L=a(26),P=a.n(L),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(T.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"8rem"},className:"row"},r.a.createElement("div",{className:"col s8"},r.a.createElement(p.b,{style:{marginBottom:"2rem"},to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(p.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:P()("",{invalid:e.name})}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:P()("",{invalid:e.email})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:P()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:P()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),a}(n.Component),U=Object(w.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){b.a.post("/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(u.g)(A)),F=a(14),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState(Object(T.a)({},e.target.id,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t={email:n.state.email,password:n.state.password};n.props.loginUser(t)},n.state={email:"",password:"",errors:{}},n.componentDidMount=n.componentDidMount.bind(Object(F.a)(n)),n.componentWillReceiveProps=n.componentWillReceiveProps.bind(Object(F.a)(n)),n.onChange=n.onChange.bind(Object(F.a)(n)),n.onSubmit=n.onSubmit.bind(Object(F.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"8rem"},className:"row"},r.a.createElement("div",{className:"col s8"},r.a.createElement(p.b,{style:{marginTop:"8rem"},to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(p.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:P()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:P()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}]),a}(n.Component),M=Object(w.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){b.a.post("/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),g(a);var n=h()(a);t(E(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(I),G=a(86),W=Object(w.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(G.a)(e,["component","auth"]);return r.a.createElement(u.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/login"})}}))})),B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.auth.user;return r.a.createElement("div",{style:{height:"75vh"},className:"dashbrd valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",e.name.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"You are logged into "," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"Hacker Friends")," app \ud83d\udc4f")),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"))))}}]),a}(n.Component),V=Object(w.b)((function(e){return{auth:e.auth}}),{logoutUser:f})(B),X=a(83),H=a.n(X),z=(a(119),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={post_event_name:"",post_event_description:"",post_event_date:"",post_max_members:"",post_open:"",post_duration:""},n.onChangeEventName=n.onChangeEventName.bind(Object(F.a)(n)),n.onChangeEventDescription=n.onChangeEventDescription.bind(Object(F.a)(n)),n.onChangeEventDate=n.onChangeEventDate.bind(Object(F.a)(n)),n.onChangeOpenStatus=n.onChangeOpenStatus.bind(Object(F.a)(n)),n.onSubmit=n.onSubmit.bind(Object(F.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(F.a)(n)),n}return Object(c.a)(a,[{key:"onChangeEventDescription",value:function(e){this.setState({post_event_description:e.target.value})}},{key:"onChangeEventDescription",value:function(e){this.setState({post_event_name:e.target.value})}},{key:"onChangeEventDate",value:function(e){this.setState({post_event_date:e})}},{key:"onChangeDuration",value:function(e){this.setState({post_duration:e.target.value})}},{key:"onChangeOpenStatus",value:function(e){this.setState({post_open:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={name:this.state.post_event_name,description:this.state.post_event_description,date:this.state.post_event_date,duration:this.state.duration};b.a.post("/hacks/add",{hack:t}).then((function(e){console.log(e.data),console.log(e)})).catch((function(e){return console.log(e)})),console.log("Post submitted:"),console.log("Post Description: ".concat(this.state.post_event_description)),console.log("Event Date: ".concat(this.state.post_event_date)),console.log("Group Members: ".concat(this.state.post_team_members)),console.log("Posted: ".concat(this.state.post_date)),console.log("Availability: ".concat(this.state.post_open)),this.setState({post_event_description:"",post_event_date:"",post_max_members:"",post_owner:"",post_open:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:15}},r.a.createElement("h3",null,"Create New Post"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Event Name: "),r.a.createElement("input",{type:"text",classname:"form-control",name:"date",value:this.state.post_event_name,onChange:this.onChangeEventName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Event Date: "),r.a.createElement("div",null,r.a.createElement(H.a,{selected:this.state.post_event_date,onChange:this.onChangeEventDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",name:"description",className:"form-control",value:this.state.post_event_description,onChange:this.onChangeEventDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration: "),r.a.createElement("input",{type:"text",name:"duration",className:"form-control",value:this.state.post_duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"openOptions",id:"openClosed",value:"Closed",checked:"Closed"===this.state.post_open,onChange:this.onChangeOpenStatus}),r.a.createElement("label",{className:"form-check-label"},"Closed")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"openOptions",id:"openOpen",value:"Open",checked:"Open"===this.state.post_open,onChange:this.onChangeOpenStatus}),r.a.createElement("label",{className:"form-check-label"},"Open"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Post",className:"btn btn-primary"})))))}}]),a}(n.Component));a(177);if(localStorage.jwtToken){var J=localStorage.jwtToken;g(J);var Y=h()(J);k.dispatch(E(Y));var q=Date.now()/1e3;Y.exp<q&&(k.dispatch(f()),window.location.href="./login")}var K=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(w.a,{store:k},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(u.b,{exact:!0,path:"/",component:R}),r.a.createElement(u.b,{exact:!0,path:"/create",component:z}),r.a.createElement(u.b,{exact:!0,path:"/register",component:U}),r.a.createElement(u.b,{exact:!0,path:"/login",component:M}),r.a.createElement(u.d,null,r.a.createElement(W,{exact:!0,path:"/dashboard",component:V})))))}}]),a}(n.Component);o.a.render(r.a.createElement(K,null),document.getElementById("root"))},87:function(e,t,a){e.exports=a(178)},93:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.115162a2.chunk.js.map