(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){e.exports=a(241)},148:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o);a(148),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(16),l=a(282),s=a(57),u=a(285),m=a(286),d=a(80);a(220),a(221);d.initializeApp({apiKey:"AIzaSyCA5PqmXUx5rJioN_nsx2hG-6aVW_5XteM",authDomain:"todo-3534f.firebaseapp.com",databaseURL:"https://todo-3534f.firebaseio.com",projectId:"todo-3534f",storageBucket:"todo-3534f.appspot.com",messagingSenderId:"165705892393",appId:"1:165705892393:web:fbe4aef49b071229bc1238",measurementId:"G-QXY1F1N5K0"});var p=d.auth(),f=d.firestore();function v(e){return r.a.createElement(l.a,{position:"static",color:"primary"},r.a.createElement(u.a,{style:{display:"flex"}},r.a.createElement(s.a,{variant:"h6",color:"inherit",style:{flexGrow:1,marginleft:30}},"67th Ward FHE"),r.a.createElement(m.a,{color:"inherit",onClick:function(){p.signOut().then(function(){}).catch(function(e){alert(e.message)})}},"Sign Out")))}var h=a(287),E=a(304),g=a(289),y=a(290),b=a(291),j=a(292),S=a(288),O=a(303),w=a(128),C=a.n(w),x=a(81),k=["username@gmail.com","user02@gmail.com"],I=Object(h.a)({avatar:{backgroundColor:x.a[100],color:x.a[600]}});function U(e){var t=I(),a=e.onClose,n=e.selectedValue,o=e.open,c=e.attendees;void 0===c&&(c=[]);return r.a.createElement(O.a,{onClose:function(){a(n)},"aria-labelledby":"simple-dialog-title",open:o},r.a.createElement(S.a,{id:"simple-dialog-title"},"Attendees"),r.a.createElement(g.a,null,c.map(function(e,a){return r.a.createElement(y.a,{key:a},r.a.createElement(b.a,null,r.a.createElement(E.a,{className:t.avatar},r.a.createElement(C.a,null))),r.a.createElement(j.a,{primary:e.name}))})))}function W(e){var t=r.a.useState(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],c=r.a.useState(k[1]),l=Object(i.a)(c,2),s=l[0],u=l[1];return r.a.createElement("div",null,r.a.createElement(m.a,{size:"small",color:"primary",onClick:function(){o(!0)}},"Attendees"),r.a.createElement(U,{selectedValue:s,open:n,onClose:function(e){o(!1),u(e)},attendees:e.attendees}))}var A=a(97),N=a(293),P=a(294),R=a(297),V=a(296),D=a(295),T=Object(h.a)(function(e){return{root:{maxWidth:345,marginBottom:25},media:{height:140},list:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},hidden:{display:"none"}}});function z(e){var t=T(),a=Object(n.useState)(!1),o=Object(i.a)(a,2);o[0],o[1];function c(){return void 0!==e.event.attendees&&e.event.attendees.length>=10}return console.log(e.user.displayName),r.a.createElement(N.a,{className:t.root},r.a.createElement(P.a,null,r.a.createElement(D.a,{className:t.media,image:e.event.pictureURL,title:"Awesome Image"}),r.a.createElement(V.a,null,r.a.createElement(s.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.event.name),r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},e.event.time),r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},e.event.address),r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},e.event.description),r.a.createElement(s.a,{variant:"body2",color:"textSecondary",component:"p"},"There is a ",e.event.capacity," person maximum"))),r.a.createElement(R.a,null,r.a.createElement(m.a,{size:"small",color:"primary",className:!0===e.isRSVP||!0===c()?"classes.hidden":"",onClick:function(){console.log(e.event),f.collection("events").doc(e.event.id).update({attendees:A.firestore.FieldValue.arrayUnion({UID:e.user.uid,name:e.user.displayName})})},disabled:!0===e.isRSVP||!0===c()},"RSVP"),r.a.createElement(m.a,{size:"small",color:"primary",onClick:function(){console.log(e.event),f.collection("events").doc(e.event.id).update({attendees:A.firestore.FieldValue.arrayRemove({UID:e.user.uid,name:e.user.displayName})})},disabled:!1===function(){if(void 0===e.event.attendees)return!1;for(var t in e.event.attendees)if(e.event.attendees[t].UID===e.user.uid)return!0;return!1}()},"Delete RSVP"),r.a.createElement(W,{user:e.user,attendees:e.event.attendees})))}var B=a(131),F=a(299),L=a(298);var G=a(301),J=a(302);c.a.render(r.a.createElement(G.a,null,r.a.createElement("div",null,r.a.createElement(J.a,{exact:!0,path:"/",component:function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1],d=Object(n.useState)(""),f=Object(i.a)(d,2),v=f[0],h=f[1];return Object(n.useEffect)(function(){return p.onAuthStateChanged(function(t){t&&e.history.push("/app")})},[e.history]),r.a.createElement("div",null,r.a.createElement(l.a,{position:"static",color:"primary"},r.a.createElement(u.a,null,r.a.createElement(s.a,{variant:"h6",color:"inherit"},"Sign In"))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(B.a,{style:{width:480,marginTop:50,padding:30}},r.a.createElement(F.a,{placeholder:"Email",fullWidth:"true",value:o,onChange:function(e){c(e.target.value)}}),r.a.createElement(F.a,{type:"password",placeholder:"Password",fullWidth:"true",style:{marginTop:30},value:v,onChange:function(e){h(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:30}},r.a.createElement(s.a,null,"Don't have an account? ",r.a.createElement(L.a,{to:"/signup"},"Sign Up"),"!"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){p.signInWithEmailAndPassword(o,v).then(function(){}).catch(function(e){alert(e.message)})}},"Sign In")))))}}),r.a.createElement(J.a,{path:"/signup",component:function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),o=(a[0],a[1],Object(n.useState)("")),c=Object(i.a)(o,2),d=c[0],f=c[1],v=Object(n.useState)(""),h=Object(i.a)(v,2),E=h[0],g=h[1],y=Object(n.useState)(""),b=Object(i.a)(y,2),j=b[0],S=b[1];return Object(n.useEffect)(function(){return p.onAuthStateChanged(function(t){t&&e.history.push("/app")})},[e.history]),r.a.createElement("div",null,r.a.createElement(l.a,{position:"static",color:"primary"},r.a.createElement(u.a,null,r.a.createElement(s.a,{variant:"h6",color:"inherit"},"Sign Up"))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(B.a,{style:{width:480,marginTop:50,padding:30}},r.a.createElement(F.a,{placeholder:"Full Name",fullWidth:"true",value:j,onChange:function(e){S(e.target.value)}}),r.a.createElement(F.a,{placeholder:"Email",fullWidth:"true",value:d,onChange:function(e){f(e.target.value)}}),r.a.createElement(F.a,{type:"password",placeholder:"Password",fullWidth:"true",style:{marginTop:30},value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:30}},r.a.createElement(s.a,null,"You have an account? ",r.a.createElement(L.a,{to:"/"},"Sign In!")),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){p.createUserWithEmailAndPassword(d,E).then(function(e){return p.currentUser.updateProfile({displayName:j})}).catch(function(e){alert(e.message)})}},"Sign Up")))))}}),r.a.createElement(J.a,{path:"/app",component:function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)([]),s=Object(i.a)(l,2),u=(s[0],s[1]),m=Object(n.useState)([]),d=Object(i.a)(m,2),h=d[0],E=d[1],g=Object(n.useState)(!0),y=Object(i.a)(g,2),b=y[0],j=y[1];return Object(n.useEffect)(function(){return p.onAuthStateChanged(function(t){t?c(t):e.history.push("/")})},[e.history]),Object(n.useEffect)(function(){var e;return o&&(e=f.collection("users").doc(o.uid).collection("tasks").onSnapshot(function(e){var t=[];e.forEach(function(e){var a=e.data();t.push({text:a.text,checked:a.checked,id:e.id,priority:a.priority})}),u(t)})),e},[o]),Object(n.useEffect)(function(){var e;return o&&(e=f.collection("events").onSnapshot(function(e){var t=[];e.forEach(function(e){var a=e.data();t.push({id:e.id,name:a.name,attendees:a.attendees,description:a.description,pictureURL:a.pictureURL,capacity:a.capacity,address:a.address,time:a.time})}),E(t),j(function(e){for(var t in e)if(void 0!==e[t].attendees)for(var a in e[t].attendees)if(e[t].attendees[a].UID===o.uid)return!0;return!1}(t))})),e},[o]),o?(console.log(b),r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{style:{display:"flex",marginTop:30,flexDirection:"column",alignItems:"center"}},h.map(function(e){return r.a.createElement(z,{user:o,event:e,isRSVP:b})})))):r.a.createElement("div",null)}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,1,2]]]);
//# sourceMappingURL=main.0e9af4f4.chunk.js.map