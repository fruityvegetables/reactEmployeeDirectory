(this.webpackJsonpreactemployeedirectory=this.webpackJsonpreactemployeedirectory||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Squidward","image":"https://i.imgur.com/5wKyAZu.jpeg","occupation":"Cashier","location":"An Easter Island Head Under the Sea"}]')},,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(13),n(4)),l=n(5),s=n(7),m=n(6),u=(n(14),n(1));n(15);var p=function(e){return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{alt:e.name,src:e.image})),o.a.createElement("div",{className:"content"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("strong",null,"Name:")," ",e.name),o.a.createElement("li",null,o.a.createElement("strong",null,"Occupation:")," ",e.occupation),o.a.createElement("li",null,o.a.createElement("strong",null,"Location:")," ",e.location))),o.a.createElement("span",{onClick:function(){return e.removeFriend(e.id)},className:"remove"},"\ud835\ude05"))},d=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={employees:u},e.removeFriend=function(t){var n=e.state.employees.filter((function(e){return e.id!==t}));e.setState({employees:n})},e.searchTerm=function(t){if(console.log(t.target.value),""===t.target.value||" "===t.target.value)e.setState({employees:u});else{var n=e.state.employees.filter((function(e){return e.occupation.includes(t.target.value)}));e.setState({employees:n})}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("p",null,"Below, you can search for an employee according to their occupation!"),o.a.createElement("input",{type:"text",onChange:this.searchTerm}),o.a.createElement("p",null,this.state.employees.map((function(t){return o.a.createElement(p,{removeFriend:e.removeFriend,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a4c46ca8.chunk.js.map