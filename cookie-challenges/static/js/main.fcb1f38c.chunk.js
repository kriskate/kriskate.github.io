(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},32:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addTodo",function(){return p}),n.d(a,"completeTodo",function(){return f}),n.d(a,"setVisibilityFilter",function(){return h}),n.d(a,"reset",function(){return y});var r,o=n(0),c=n.n(o),l=n(13),i=n(1),s=n(3),d=function(e){e.addTodo;return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,c.a.createElement("a",{href:"https://www.reddit.com/user/D2cookie"},"/r/D2cookie")," last hit challenges"),c.a.createElement("div",null,c.a.createElement("p",null,"All the challanges are done in lobby games, no cheats, no bots, 1v0"),c.a.createElement("p",null,"YES, they are all possible, just hard")))},u="COMPLETE_TODO",m="RESET",p=function(e){return{type:"ADD_TODO",text:e}},f=function(e){return{type:u,id:e}},h=function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}},y=function(){return{type:m}},b=Object(s.b)(null,{addTodo:p})(d),E=n(5),v=n(6),O=n.n(v),g=function(e){var t=e.active,n=e.children,a=e.setFilter;return c.a.createElement("a",{className:O()({selected:t}),style:{cursor:"pointer"},onClick:function(){return a()}},n)},w=Object(s.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{setFilter:function(){e(h(t.filter))}}})(g),j=(r={},Object(E.a)(r,"show_all","All"),Object(E.a)(r,"show_active","Active"),Object(E.a)(r,"show_completed","Completed"),r),x=function(e){var t=e.activeCount,n=e.reset,a=1===t?"item":"items";return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},c.a.createElement("strong",null,t||"No")," ",a," left"),c.a.createElement("ul",{className:"filters"},Object.keys(j).map(function(e){return c.a.createElement("li",{key:e},c.a.createElement(w,{filter:e},j[e]))})),c.a.createElement("button",{className:"clear-completed",onClick:n},"Reset ALL challenges"))},T=n(17),N=n(18),C=n(22),L=n(19),k=n(23),_=n(20),I="Easy",S="Advanced",H="Super Advanced",D=function(e){return F.indexOf(F.find(function(t){return t.type===e.type&&t.text===e.text}))},F=[{type:I,text:"1. 10 min - no creeps missed (80+ lasthits minimum)",completed:!1,id:1},{type:I,text:"2. 10 min - 80 LH / 40 denies safelane.\nCreeps can't enter either team's tower. if they do you reset",completed:!1,id:2},{type:I,text:"3. 10 min - 100 LH",completed:!1,id:3},{type:I,text:"4. 30 min - 600 LH",completed:!1,id:4},{type:I,text:"5. less than 10 min - end the game (destroy enemy ancient)",completed:!1,id:5},{type:I,text:"6. 3000+ score in last hit trainer",completed:!1,id:6},{type:S,text:"1. 10 min - 120 LH",completed:!1,id:7},{type:S,text:"2. 30 min - 900 LH\n  No meepo.",completed:!1,id:8},{type:S,text:"3. 10 min - 100+ CS (LH+DN counts) as morphling\n  -> lvl 1 strength morph and never level anything again, turn it on and don't turn it off.\n  Buy a branch, a faerie and a wraith band.\n  You'll constantly have only ~25 damage.",completed:!1,id:9},{type:S,text:"4. less than 8 min - end the game (destroy enemy ancient)",completed:!1,id:10},{type:S,text:"5. 3500+ score in last hit trainer",completed:!1,id:11},{type:H,text:"1. 10 min - 170 LH",completed:!1,id:12},{type:H,text:"2. 30 min - 1300 LH",completed:!1,id:13},{type:H,text:"3. 10 min - 120+ CS (LH+DN counts) as morphling\n  -> lvl 1 strength morph and never level anything again, turn it on and don't turn it off. \n  Buy a branch, a faerie and a wraith band.\n  You'll constantly have only ~25 damage.",completed:!1,id:14},{type:H,text:"4. less than 6 min - end the game (destroy enemy ancient)",completed:!1,id:15},{type:H,text:"5. 3600 score in last hit trainer, 2 times in a row.\nNo tiny, shaman, tree.",completed:!1,id:16}];var A=function(e){function t(){return Object(T.a)(this,t),Object(C.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.completeTodo,a=c.a.createElement("div",{className:"view"},c.a.createElement("input",{className:"toggle",type:"checkbox",checked:t.completed,onChange:function(){return n(D(t))}}),c.a.createElement("label",null,t.text));return c.a.createElement("li",{className:O()({completed:t.completed})},a)}}]),t}(o.Component),B=function(e){var t=e.type,n=e.filteredTodos,a=e.actions;return c.a.createElement("div",null,c.a.createElement("div",{className:"view-type"},t),c.a.createElement("ul",{className:"todo-list"},n.map(function(e){return e.type!==t?null:c.a.createElement(A,Object.assign({key:D(e),todo:e},a))})))},Y=function(e){var t=e.filteredTodos,n=e.actions;return c.a.createElement("div",null,c.a.createElement(B,{type:I,filteredTodos:t,actions:n}),c.a.createElement(B,{type:S,filteredTodos:t,actions:n}),c.a.createElement(B,{type:H,filteredTodos:t,actions:n}))},R=n(9),V=function(e){return e.todos},J=Object(R.createSelector)([function(e){return e.visibilityFilter},V],function(e,t){switch(e){case"show_all":return t;case"show_completed":return t.filter(function(e){return e.completed});case"show_active":return t.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+e)}}),M=Object(R.createSelector)([V],function(e){return e.reduce(function(e,t){return t.completed?e+1:e},0)}),P=Object(s.b)(function(e){return{filteredTodos:J(e)}},function(e){return{actions:Object(i.a)(a,e)}})(Y),U=function(e){var t=e.todosCount,n=e.completedCount,a=e.actions;return c.a.createElement("section",{className:"main"},c.a.createElement(P,null),!!t&&c.a.createElement(x,{reset:a.reset,completedCount:n,activeCount:t-n}))},q=Object(s.b)(function(e){return{todosCount:e.todos.length,completedCount:M(e)}},function(e){return{actions:Object(i.a)(a,e)}})(U),z=function(){return c.a.createElement("div",null,c.a.createElement(b,null),c.a.createElement(q,null))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show_all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},K=Object(i.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return F;case u:return e.map(function(e){return D(e)===t.id?Object(_.a)({},e,{completed:!e.completed}):e});default:return e}},visibilityFilter:G}),Q=(n(32),n(10)),W=n(21),X=n.n(W),Z=Object(Q.a)({key:"todos",storage:X.a},K),$=Object(i.c)(Z);Object(Q.b)($);Object(l.render)(c.a.createElement(s.a,{store:$},c.a.createElement(z,null)),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.fcb1f38c.chunk.js.map